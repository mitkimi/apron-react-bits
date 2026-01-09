"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { documents } from '@/lib/documents';
import './search-modal.scss'; // 引入外部样式文件

interface SearchResult {
  id: string;
  title: string;
  path: string;
  content: string;
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // 用于跟踪选中的结果索引
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const resultRefs = useRef<HTMLDivElement[]>([]);

  // 跳转到文档页面
  const handleNavigate = (path: string) => {
    setIsOpen(false);
    setSelectedIndex(-1);
    router.push(path);
  };

  // 打开搜索模态框
  const handleOpenSearch = () => {
    setIsOpen(true);
    // 清空搜索框和结果
    setSearchQuery("");
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  // 处理结果项的键盘事件
  const handleResultKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      // 如果当前是最后一个结果，则不再向下移动
      if (index < searchResults.length - 1) {
        setSelectedIndex(index + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // 如果当前是第一个结果，则不再向上移动
      if (index > 0) {
        setSelectedIndex(index - 1);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleNavigate(searchResults[index].path);
    }
  }, [searchResults, handleNavigate]);

  // 处理结果项的点击
  const handleResultClick = (index: number, path: string) => {
    setSelectedIndex(index);
    handleNavigate(path);
  };

  // 处理结果项的鼠标悬停
  const handleResultHover = (index: number) => {
    setSelectedIndex(index);
  };

  // 处理键盘事件
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Windows/Linux: Ctrl+K, Mac: Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      handleOpenSearch();
    }

    // ESC 关闭模态框
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // 处理输入框键盘事件
  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    // 处理搜索结果导航
    if (searchResults.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        // 如果没有选中项，跳转到第一个
        // 如果已选中项，跳转到下一个
        // 到达最后一个时不继续向下
        if (selectedIndex === -1) {
          setSelectedIndex(0);
        } else if (selectedIndex < searchResults.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        // 如果没有选中项，跳转到最后一个
        // 如果已选中项，跳转到上一个
        // 到达第一个时不继续向上
        if (selectedIndex === -1) {
          setSelectedIndex(searchResults.length - 1);
        } else if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        handleNavigate(searchResults[selectedIndex].path);
      }
    }
  }, [searchResults, selectedIndex, handleNavigate]);

  // 处理点击外部关闭
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, []);

  // 搜索功能
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = documents.filter(doc => 
      doc && doc.title && doc.title.toLowerCase().includes(lowerQuery) || 
      doc && doc.content && doc.content.toLowerCase().includes(lowerQuery)
    ).slice(0, 8).filter(Boolean) as SearchResult[]; // 限制结果数量并过滤掉 undefined

    setSearchResults(results);
    setSelectedIndex(results.length > 0 ? 0 : -1); // 有结果时默认选中第一个
  }, []);

  // 监听键盘事件
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // 监听点击外部事件
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);

  // 当模态框打开时聚焦输入框
  useEffect(() => {
    if (isOpen) {
      // 聚焦输入框
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  // 处理搜索输入变化
  // 注意：这里调用 performSearch 会触发 setState，但这在搜索场景中是必要的
  // 每次搜索查询变化时都需要更新搜索结果
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isOpen) {
      performSearch(searchQuery);
    }
  }, [searchQuery, isOpen]);

  // 滚动选中的结果到视野中
  useEffect(() => {
    if (selectedIndex >= 0 && resultRefs.current[selectedIndex]) {
      resultRefs.current[selectedIndex].scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    } else if (selectedIndex === -1 && inputRef.current) {
      // 当选中索引为-1时，聚焦到输入框
      inputRef.current.focus();
    }
  }, [selectedIndex]);

  // 阻止事件冒泡
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* 搜索模态框 - 触发按钮在 PageHeader 的 SearchButton 组件中 */}
      {isOpen && (
        <div className="search-modal-overlay">
          <div 
            className="search-modal" 
            ref={modalRef}
            onClick={handleModalClick}
          >
            <div className="search-input-container">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="搜索文档..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="search-input"
              />
              <button 
                className="search-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="关闭搜索"
              >
                ESC
              </button>
            </div>

            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div 
                    key={result.id}
                    ref={(el) => {
                      if (el) resultRefs.current[index] = el;
                    }}
                    className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleResultClick(index, result.path)}
                    onMouseEnter={() => handleResultHover(index)}
                    onKeyDown={(e) => handleResultKeyDown(e, index)}
                    tabIndex={0}
                  >
                    <h3 className="search-result-title">{result.title}</h3>
                    <p className="search-result-content">
                      {result.content.substring(0, 100)}...
                    </p>
                  </div>
                ))
              ) : searchQuery ? (
                <div className="no-results">
                  <p>{`未找到与 "${searchQuery}" 相关的结果`}</p>
                </div>
              ) : (
                <div className="search-placeholder">
                  <p>输入关键词开始搜索文档</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}