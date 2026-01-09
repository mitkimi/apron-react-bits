'use client';

import { useState, useEffect, useRef } from 'react';
import './FloatingToc.scss';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface FloatingTocProps {
  content: string;
}

// Helper function to generate ID from text (same as MarkdownRenderer)
const generateId = (text: string): string => {
  // Remove HTML tags before generating ID
  const cleanText = text.replace(/<[^>]*>/g, '');
  
  return cleanText
    .toLowerCase()
    .replace(/[\u{0080}-\u{FFFF}]/gu, '')
    .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || cleanText.toLowerCase().replace(/\s+/g, '-');
};

export function FloatingToc({ content }: FloatingTocProps) {
  // Extract headings from markdown content
  const lines = content.split('\n');
  const tocItems: TocItem[] = [];
  
  // Track if we're inside a code block
  let inCodeBlock = false;

  lines.forEach((line) => {
    // Check for code block start/end
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    
    // Skip if we're inside a code block
    if (inCodeBlock) {
      return;
    }
    
    // Clean the line to remove any invisible characters
    const cleanLine = line.trim();
    
    // Check if line starts with # and has content after
    if (cleanLine.startsWith('#') && cleanLine.length > 1) {
      // Try a more permissive regex
      const permissiveRegex = /^(#{1,6})\s*(.+)$/;
      const match = cleanLine.match(permissiveRegex);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        // Create an ID similar to what markdown would generate
        const id = generateId(text);
        
        tocItems.push({
          id,
          text,
          level
        });
      }
    }
  });

  // Ensure unique IDs by adding a counter suffix if needed
  const uniqueTocItems = tocItems.map((item, index) => {
    // Count how many times this ID has appeared before
    const previousCount = tocItems.slice(0, index).filter(prevItem => prevItem.id === item.id).length;
    
    // If this ID has appeared before, append a counter to make it unique
    if (previousCount > 0) {
      return {
        ...item,
        id: `${item.id}-${previousCount}`
      };
    }
    
    return item;
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullToc, setShowFullToc] = useState(true);
  const [activeId, setActiveId] = useState<string>('');
  const tocRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  // Check available space on the right side
  useEffect(() => {
    const checkSpace = () => {
      // Get the document container
      const container = document.getElementById('document-container');
      if (!container) return;
      
      // Get the container's position and dimensions
      const containerRect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Calculate available space on the right
      const rightSpace = viewportWidth - (containerRect.right + 20); // 20px margin
      
      // If right space is less than 240px (toc width), show compact version
      setShowFullToc(rightSpace >= 240);
    };

    // Initial check
    checkSpace();
    
    // Check on resize
    window.addEventListener('resize', checkSpace);
    
    return () => {
      window.removeEventListener('resize', checkSpace);
    };
  }, []);

  // Handle dropdown animation
  useEffect(() => {
    if (dropdownRef.current) {
      if (isExpanded) {
        // Trigger reflow to ensure the transition works
        dropdownRef.current.offsetHeight;
        dropdownRef.current.classList.add('visible');
      } else {
        dropdownRef.current.classList.remove('visible');
      }
    }
  }, [isExpanded]);

  // Handle scroll to detect active heading
  useEffect(() => {
    const handleScroll = () => {
      // Get all headings
      const headings = uniqueTocItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
      
      if (headings.length === 0) return;
      
      // Find the heading that is closest to the top of the viewport
      let closestHeading: HTMLElement | null = null;
      let closestDistance = Infinity;
      
      headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        const distance = Math.abs(rect.top - 100); // 100px offset from top
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestHeading = heading;
        }
      });
      
      if (closestHeading) {
        // Find the corresponding TOC item
        const tocItem = uniqueTocItems.find(item => item.id === closestHeading!.id);
        if (tocItem) {
          setActiveId(tocItem.id);
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [uniqueTocItems]);

  if (uniqueTocItems.length === 0) {
    return null;
  }

  return (
    <div className="floating-toc" ref={tocRef}>
      {showFullToc ? (
        // Full TOC when there's enough space
        <div className="floating-toc__content">
          <h3 className="toc-title">本页目录</h3>
          <div className="toc-title-divider"></div>
          <ul className="toc-list">
            {uniqueTocItems.map((heading, index) => (
              <li 
                key={heading.id} 
                className={`toc-item level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
                style={{ 
                  paddingLeft: `${(heading.level - 1) * 12}px`,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                <a 
                  href={`#${heading.id}`} 
                  className={`toc-link ${activeId === heading.id ? 'active' : ''}`}
                  onClick={(e) => handleClick(heading.id, e)}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Burger menu when space is limited
        <div 
          className="floating-toc__burger"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <span></span>
          <span></span>
          <span></span>
          {isExpanded && (
            <div 
              ref={dropdownRef}
              className="floating-toc__content floating-toc__dropdown"
            >
              <h3 className="toc-title">本页目录</h3>
              <div className="toc-title-divider"></div>
              <ul className="toc-list">
                {uniqueTocItems.map((heading, index) => (
                  <li 
                    key={heading.id} 
                    className={`toc-item level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
                    style={{ 
                      paddingLeft: `${(heading.level - 1) * 12}px`,
                      transitionDelay: `${index * 0.05}s`
                    }}
                  >
                    <a 
                      href={`#${heading.id}`} 
                      className={`toc-link ${activeId === heading.id ? 'active' : ''}`}
                      onClick={(e) => {
                        handleClick(heading.id, e);
                        setIsExpanded(false);
                      }}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}