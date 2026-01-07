'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import './search-modal.scss'; // 引入外部样式文件

interface SearchResult {
  id: string;
  title: string;
  path: string;
  content: string;
}

// 模拟文档数据
const documents: SearchResult[] = [
  { 
    id: "installation", 
    title: "安装指南", 
    path: "/guide/installation", 
    content: "在本页面将会展示如果安装在项目中。在 React 上使用，在开始之前，你可能需要安装 npx。首先，确保你的 React 项目已经创建。然后安装 Apron Design。对于 App Router (Next.js 13+)，在 app/layout.tsx 中添加样式导入。对于 Pages Router，则在 pages/_app.tsx 中添加样式导入。在 Vue3 上使用时，推荐使用 Vite 创建项目，然后安装 Apron Design 并在 main.ts 中导入样式。在 Nuxt3 上使用时，可以在 plugins/apron-design.ts 中导入样式或在 nuxt.config.ts 中配置。" 
  },
  { 
    id: "quick-start", 
    title: "快速开始", 
    path: "/guide/quick-start", 
    content: "跟随以下步骤，快速上手组件库的使用。您需要首先确认自己使用什么框架来开发网站或页面。Apron Design 支持 React、Vue3 和微信小程序。组件库同时支持 React 的服务端渲染框架 Next.js 和 Vue 的 Nuxt3。兼容性方面，Apron Design 支持最近两个版本的浏览器。如果您需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill。由于 React16 和 Vue3 不再支持 IE11，因此 Apron Design 也不支持 IE 浏览器。" 
  },
  { 
    id: "principles", 
    title: "设计原则", 
    path: "/design/principles", 
    content: "Apron Design 的名字就是他的设计原则：Agreement - 一致、Peace - 平和、Realizing - 意识、Open - 开放、Necessity - 必要。一致原则要求保持整个系统的视觉语言统一，让用户在不同场景下都能获得连贯的体验。平和原则通过合理的布局和设计，营造舒适、宁静的视觉氛围。意识原则时刻关注用户的真实需求，而不是仅仅完成功能。开放原则设计应该包容不同用户的需求和使用习惯。必要原则只提供用户真正需要的功能，避免界面臃肿。" 
  },
  { 
    id: "changelog", 
    title: "更新日志", 
    path: "/guide/changelog", 
    content: "记录 Apron Design 的更新内容和版本变化。最新版本增加了更多组件支持，修复了已知问题，优化了性能表现。我们定期发布更新以提供更好的用户体验。" 
  },
  { 
    id: "faq", 
    title: "常见问题", 
    path: "/guide/faq", 
    content: "解答用户在使用 Apron Design 过程中遇到的常见问题。包括安装问题、使用问题、兼容性问题等。如果您遇到了文档中未提及的问题，请通过反馈渠道联系我们。" 
  },
  { 
    id: "dark-mode", 
    title: "暗色模式", 
    path: "/guide/dark-mode", 
    content: "介绍如何在项目中使用和配置暗色模式。Apron Design 提供了完整的暗色主题支持，可以通过系统偏好或手动切换来启用。暗色模式不仅节省电量，还能在弱光环境下提供更舒适的浏览体验。" 
  },
  { 
    id: "versions", 
    title: "版本说明", 
    path: "/guide/versions", 
    content: "详细介绍各版本之间的差异和升级注意事项。我们遵循语义化版本控制规范，主版本号的重大变更可能需要您调整代码。建议在升级前仔细阅读版本说明。" 
  },
  { 
    id: "feedback", 
    title: "意见反馈", 
    path: "/guide/feedback", 
    content: "如何提交反馈和建议。我们非常重视用户的反馈，您可以通过 GitHub Issues、邮件或社区论坛来提交您的意见。我们会认真考虑每一条反馈，并在后续版本中不断改进。" 
  },
  { 
    id: "color", 
    title: "色彩系统", 
    path: "/design/color", 
    content: "Apron Design 的色彩设计理念和使用规范。我们采用了一套完整的色彩体系，包括主色、辅助色、中性色等。色彩的使用遵循一致性、可访问性和美观性原则。" 
  },
  { 
    id: "specifications", 
    title: "设计规范", 
    path: "/design/specifications", 
    content: "详细的界面设计规范和组件使用标准。包括间距规范、字体层级、图标风格等方面的要求。遵循这些规范可以帮助您创建一致且高质量的用户界面。" 
  },
  { 
    id: "best-practices", 
    title: "最佳实践", 
    path: "/usage/best-practices", 
    content: "推荐的使用方式和最佳实践案例。包括组件使用建议、性能优化技巧、可访问性改进等方面的指导。遵循最佳实践可以让您的项目更加健壮和易于维护。" 
  },
  { 
    id: "recommends", 
    title: "推荐搭配", 
    path: "/usage/recommends", 
    content: "推荐的第三方项目和工具。我们不创造一个简单、不好用的走马灯组件或者类似功能的组件来让我们的组件库显得很庞大，我们需要轻量化。因此各种其他可以用于搭配使用的组件参考推荐搭配。" 
  },
  { 
    id: "codes", 
    title: "代码示例", 
    path: "/usage/codes", 
    content: "各种使用场景下的代码示例。包括基础用法、高级技巧、常见问题解决方案等。这些示例可以帮助您更好地理解和使用 Apron Design 组件库。" 
  },
  { 
    id: "icons", 
    title: "图标使用", 
    path: "/usage/icons", 
    content: "如何使用和自定义图标。Apron Design 提供了丰富的图标集合，支持 SVG 和字体图标两种方式。您可以根据需要选择合适的图标使用方式。" 
  },
  { 
    id: "media", 
    title: "媒体资源", 
    path: "/usage/media", 
    content: "图片、视频等媒体资源的使用规范。包括响应式图片处理、视频播放优化、媒体资源压缩等方面的建议。合理使用媒体资源可以提升用户体验并优化性能。" 
  }
];

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // 用于跟踪选中的结果索引
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const resultRefs = useRef<HTMLDivElement[]>([]);

  // 跳转到文档页面
  const handleNavigate = (path: string) => {
    setIsOpen(false);
    setSelectedIndex(-1);
    window.location.href = path;
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
    
    // 确保当没有选中项但有结果时，默认选中第一项
    if (results.length > 0 && selectedIndex === -1) {
      setSelectedIndex(0);
    }

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