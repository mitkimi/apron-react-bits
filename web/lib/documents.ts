// 文档数据 - 实际项目中可以从文件系统或API获取
export const documents = [
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
  },
  { 
    id: "alert", 
    title: "警告提示 Alert", 
    path: "/react/alert", 
    content: "警告提示，展现需要关注的信息。 ## 何时使用 - 当某个页面需要向用户显示警告的信息时 - 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭 ## 代码演示 ### 基本用法 最简单的用法，适用于简短的警告提示。 ### 四种样式 共有四种样式 info、success、warning、error。 ### 自定义内容 可以自定义内容，以适应不同的场景。 ## API 通过设置 A..." 
  },
  { 
    id: "avatar", 
    title: "头像 Avatar", 
    path: "/react/avatar", 
    content: "用来代表用户或事物，支持图片、图标或字符展示。 ## 何时使用 - 需要展示用户或事物的头像 - 需要多种尺寸和形状的头像展示 - 需要展示一组用户的头像 ## 代码演示 ### 基本用法 头像有三种类型：图片、图标和字符，其中图标和字符会自动根据内容调整背景色。 ### 尺寸 头像有四种尺寸：迷你（mini）、小（small）、中（middle，默认）、大（large）。 ### 形状 头像支持..."
  },
  { 
    id: "badge", 
    title: "徽标数 Badge", 
    path: "/react/badge", 
    content: "图标右上角的圆形徽标数字。 ## 何时使用 - 当需要在图标或文字右上角展示数字或状态时 - 用于展示消息数量、状态提示等 ## 代码演示 ### 基本用法 最简单的用法，在右上角展示数字。 ### 红点 不显示数字，只显示一个小红点。 ### 数字徽标 展示具体的数字，当数字大于 overflowCount 时会显示为 {overflowCount}+。 ### 自定义内容 可以自定义徽标内容，..."
  },
  { 
    id: "button", 
    title: "按钮 Button", 
    path: "/react/button", 
    content: "按钮用于开始一个即时操作。 ## 何时使用 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。 ## 代码演示 ### 基本用法 基础的按钮用法。 ### 按钮类型 按钮有五种类型：主按钮、次按钮、默认按钮、文字按钮和链接按钮。 ### 按钮尺寸 按钮有两种尺寸：中号（40px）和小号（30px）。 ### 虚线边框 通过 dashed 属性设置按钮边框为虚线样式。 ### ..."
  },
  { 
    id: "card", 
    title: "卡片 Card", 
    path: "/react/card", 
    content: "通用卡片容器，用于展示结构化内容。 ## 何时使用 - 需要展示结构化的信息块 - 需要分组展示相关内容 - 需要在页面中组织内容布局 ## 代码演示 ### 基础用法 最简单的卡片用法，只包含内容区域。 ### 带标题的卡片 使用 CardHeader 组件添加标题。 ### 带额外操作的卡片 在 CardHeader 中使用 extra 属性添加额外操作。 ### 带底部的卡片 使用 Card..."
  },
  { 
    id: "cascader", 
    title: "级联选择 Cascader", 
    path: "/react/cascader", 
    content: "级联选择框，用于多级联动选择。 ## 何时使用 - 需要从一组相关联的数据集合进行选择，例如省市区、公司部门等 - 支持多级联动选择 - 支持异步加载数据 ## 代码演示 ### 基本用法 最简单的用法，展示省市区三级联动选择。 ### 禁用状态 通过 disabled 属性设置是否禁用。 ### 加载状态 通过 loading 属性设置加载状态。 ### 选择即改变 通过 changeOnSel..."
  },
  { 
    id: "checkbox", 
    title: "复选框 Checkbox", 
    path: "/react/checkbox", 
    content: "复选框用于在一组可选项中进行多项选择。 ## 何时使用 - 需要在多个选项中选择一个或多个选项时 - 支持单独使用或组合使用 - 支持全选/反选等复杂交互 ## 代码演示 ### 基本用法 最简单的用法，展示可用、选中、禁用等状态。 ### 半选状态 通过 indeterminate 属性设置半选状态，常用于实现全选效果。 ### 受控组件 通过 checked 和 onChange 实现受控组件..."
  },
  { 
    id: "collapse", 
    title: "折叠面板 Collapse", 
    path: "/react/collapse", 
    content: "可以折叠/展开的内容区域。 ## 何时使用 - 对复杂区域进行分组和隐藏 - 手风琴是一种特殊的折叠面板，只允许单个内容区域展开 ## 代码演示 ### 基本用法 可以同时展开多个面板，可以分别展开或折叠。 ### 默认展开 通过 defaultActiveKeys 属性设置默认展开的面板。 ### 手风琴模式 通过 accordion 属性设置手风琴模式，每次只能展开一个面板。 ### 禁用状态..."
  },
  { 
    id: "date-picker", 
    title: "日期选择器 DatePicker", 
    path: "/react/date-picker", 
    content: "用于选择日期的组件，支持年、月、日三级联动选择。 ## 何时使用 当需要用户输入一个日期时使用，支持多种交互状态和自定义配置。 ## 示例 ### 基础用法 最简单的用法，适用于大多数场景。 ### 不同选择状态 展示日期选择器的不同选择状态。 ### 加载状态 展示加载中的状态，可以有值或无值。 ### 禁用状态 禁用日期选择器，用户无法进行操作。 ### Inflow 模式 使用 inflow..."
  },
  { 
    id: "divider", 
    title: "分割线 Divider", 
    path: "/react/divider", 
    content: "区隔内容的分割线，可用于对不同内容进行分组或分隔。 ## 何时使用 - 对不同内容区域进行分隔 - 对长列表或表单进行分组 - 创建视觉上的层次感 ## 示例 ### 基础用法 最简单的用法，渲染一条水平分割线。 ### 虚线分割线 通过设置 dashed 属性渲染虚线分割线。 ### 带文字的分割线 给分割线添加文字，方便描述或分隔不同内容。 ### 文字对齐方式 通过 align 属性控制文字..."
  },
  { 
    id: "drawer", 
    title: "抽屉 Drawer", 
    path: "/react/drawer", 
    content: "屏幕边缘滑出的浮层面板，用于承载临时内容或操作。 ## 何时使用 - 需要从屏幕边缘滑出一个面板来承载内容 - 用于移动端或空间受限的场景 - 替代 Modal 对话框，提供更自然的过渡效果 ## 示例 ### 基础用法 最简单的用法，从右侧滑出抽屉。 ### 不同方向 支持从上、右、下、左四个方向滑出。 ### 自定义尺寸 可以自定义抽屉的宽度（左右方向）或高度（上下方向）。 ### 移动端模式..."
  },
  { 
    id: "empty", 
    title: "空状态 Empty", 
    path: "/react/empty", 
    content: "用于展示空状态的组件，通常在没有数据时显示。 ## 何时使用 - 数据加载完成但为空时 - 搜索无结果时 - 页面初始化状态时 - 任何需要提示用户当前无数据的场景 ## 示例 ### 基础用法 最简单的用法，显示默认的空状态图标和文字。 ### 自定义文字 可以通过子元素来自定义提示文字。 ### 自定义图标 通过 icon 属性可以自定义空状态图标。 ### 带操作按钮 可以在空状态中添加操作..."
  },
  { 
    id: "form", 
    title: "表单 Form", 
    path: "/react/form", 
    content: "高性能、易扩展的表单解决方案，支持数据录入、校验和提交功能。 ## 何时使用 - 需要进行数据录入和校验的场景 - 构建登录、注册、设置等表单页面 - 需要复杂表单交互和状态管理的应用 ## 示例 ### 基础表单 最简单的表单使用方式，包含基本的字段和提交功能。 ### 表单布局 支持三种不同的表单布局：垂直（默认）、水平和内联。 ### 浮动标签 使用浮动标签模式，节省空间并提升用户体验。 #..."
  },
  { 
    id: "getting-started", 
    title: "开始使用", 
    path: "/react/getting-started", 
    content: "## 安装 Apron Design React 需要同时安装 react >= 16.8 和 react-dom >= 16.8。 在开始之前，你可能需要安装 npx。 首先，确保你的 React 项目已经创建。如果还没有，可以使用以下命令创建： 然后安装 Apron Design 然后在 main.ts 或 main.js 中导入样式 ## 在 Next.js 上使用 首先，确保你的 Next..."
  },
  { 
    id: "grid", 
    title: "栅格 Grid", 
    path: "/react/grid", 
    content: "24 栅格系统，帮助开发者快速创建响应式布局。 ## 设计理念 在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。 划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版布局，以保证整体..."
  },
  { 
    id: "icon", 
    title: "图标 Icon", 
    path: "/react/icon", 
    content: "" 
  },
  { 
    id: "image", 
    title: "图片 Image", 
    path: "/react/image", 
    content: "增强版的 img 标签，提供多种图片填充方式和加载状态处理。 ## 何时使用 - 需要设置图片的 object-fit 属性 - 需要优雅地处理图片加载失败的情况 - 需要在图片加载过程中显示占位内容 ## 示例 ### 基础用法 最简单的用法，直接传入图片地址。 ### 不同状态 展示图片组件的不同状态：无图片、正常加载、加载失败。 ### 图片填充方式 通过 objectFit 属性控制图片在..."
  },
  { 
    id: "input-otp", 
    title: "验证码输入框 InputOtp", 
    path: "/react/input-otp", 
    content: "用于输入验证码的专用输入框，支持多种格式和交互方式。 ## 何时使用 - 需要用户输入短信验证码、邮箱验证码等场景 - 需要格式化显示验证码（如 123-456 格式） - 需要在移动端弹出数字键盘 - 需要验证完成后自动触发回调 ## 示例 ### 基础用法 最简单的用法，默认为6位数字验证码。 ### 不同格式 支持多种验证码格式，可以自定义分隔符。 ### 不同尺寸 支持默认和小尺寸两种规格..."
  },
  { 
    id: "input", 
    title: "输入框 Input", 
    path: "/react/input", 
    content: "通过鼠标或键盘输入内容，是最基础的表单域包装。 ## 何时使用 - 需要用户输入表单域内容时 - 提供组合型输入框，比如带前后置内容的输入框 - 需要带清除功能的输入框时 ## 示例 ### 基础用法 最简单的用法，适用于大部分业务场景。 ### 不同状态 展示输入框的不同状态：空状态、有内容、禁用等。 ### 可清除输入框 带清除图标的输入框，点击图标清除内容。 ### 密码输入框 用于输入密码..."
  },
  { 
    id: "link", 
    title: "链接 Link", 
    path: "/react/link", 
    content: "链接组件，用于页面跳转或外部链接。 ## 何时使用 - 需要在页面中添加可点击的链接时 - 需要统一链接样式时 - 需要区分不同类型链接（主要、次要、危险）时 ## 示例 ### 基础用法 最简单的用法，创建一个基本链接。 ### 链接变种 支持主色和次色两种变种。 ### 下划线样式 支持三种下划线显示方式：始终显示、悬停显示、从不显示。 ### 危险链接 用于表示危险操作的链接，显示为红色。 ..."
  },
  { 
    id: "message", 
    title: "全局提示 Message", 
    path: "/react/message", 
    content: "全局展示操作反馈信息，常用于通知用户操作结果。 ## 何时使用 - 需要向用户显示操作反馈时 - 需要全局性的简短通知时 - 不希望打断用户操作流程的通知场景 ## 示例 ### 基础用法 最简单的用法，通过不同方法显示不同类型的消息。 ### 使用 message.show() 方法 可以通过 message.show() 方法动态指定提示类型。 ### 多个提示排列 多个提示会按顺序向下排列，..."
  },
  { 
    id: "modal", 
    title: "对话框 Modal", 
    path: "/react/modal", 
    content: "模态对话框用于显示重要的信息或请求用户输入。它会中断用户的当前操作，直到用户与对话框进行交互。 ## 何时使用 - 需要用户确认某些操作时 - 显示重要信息时 - 收集用户输入时 - 展示详细内容时 ## 示例 ### 基础用法 最简单的对话框，包含标题、内容和默认的操作按钮。 ### 无标题对话框 可以通过省略 title 属性来创建无标题的对话框。 ### 无底部对话框 通过设置 showFo..."
  },
  { 
    id: "pagination", 
    title: "分页 Pagination", 
    path: "/react/pagination", 
    content: "分页组件用于将大量数据分割成多个页面，提升用户体验和页面性能。 ## 何时使用 - 当数据量较大，需要分批展示时 - 需要提供数据浏览功能时 - 与表格或其他数据展示组件配合使用时 ## 示例 ### 基础用法 最基本的分页组件，只需要指定数据总数和每页条数。 ### 不同尺寸 分页组件支持三种尺寸：大、默认、小。 ### 少量页码 当总页数少于7页时，会直接显示所有页码。 ### 大量页码 当总..."
  },
  { 
    id: "popconfirm", 
    title: "气泡确认框 PopConfirm", 
    path: "/react/popconfirm", 
    content: "专门用于确认操作的气泡卡片。 ## 何时使用 - 需要用户确认某个重要操作时 - 删除、提交等不可逆操作前的确认 - 不想打断用户主要流程但又需要确认操作时 ## 示例 ### 基础用法 最简单的确认框用法。 ### 自定义按钮文字 可以自定义确认框中的按钮文字。 ### 自定义按钮样式 可以自定义确认框中按钮的样式。 ### 搭配链接 确认框也可以与链接搭配使用。 ### 多个 PopConfi..."
  },
  { 
    id: "popover", 
    title: "气泡卡片 Popover", 
    path: "/react/popover", 
    content: "气泡卡片是一种轻量级的弹出框，用于显示额外的信息或确认操作。 ## 何时使用 - 需要显示简短的提示信息时 - 需要用户确认某个操作时 - 不想打断用户主要流程但又需要提供额外信息时 ## 示例 ### 基础用法 最简单的气泡卡片，在点击触发元素时显示内容。 ### 触发方式 Popover 支持两种触发方式：点击和悬停。 #### 点击触发 #### 悬停触发 ### 搭配不同元素 Popove..." 
  },
  { 
    id: "vue-popover", 
    title: "气泡卡片 Popover", 
    path: "/vue-next/popover", 
    content: "# 气泡卡片 Popover\n\n气泡卡片是一种轻量级的弹出框，用于显示额外的信息或确认操作。\n\n## 何时使用\n\n- 需要显示简短的提示信息时\n- 需要用户确认某个操作时\n- 不想打断用户主要流程但又需要提供额外信息时\n\n## 示例\n\n### 基础用法\n\n最简单的气泡卡片，在点击触发元素时显示内容。\n:::demo\n```vue\n<template>\n  <ad-popover title=\"提示标题\" content=\"这是 Popover 的内容区域，可以放置任何文本信息。\">\n    <ad-button>点击显示</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n### 触发方式\n\nPopover 支持两种触发方式：点击和悬停。\n\n#### 点击触发\n:::demo\n```vue\n<template>\n  <ad-popover mode=\"click\" title=\"点击触发\" content=\"点击按钮或外部区域关闭。\">\n    <ad-button>点击显示</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n#### 悬停触发\n:::demo\n```vue\n<template>\n  <ad-popover mode=\"hover\" title=\"悬停触发\" content=\"鼠标移出后自动关闭。\">\n    <ad-button>悬停显示</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n### 搭配不同元素\n\nPopover 可以与多种元素搭配使用。\n\n#### 搭配链接\n:::demo\n```vue\n<template>\n  <ad-popover mode=\"hover\" title=\"链接提示\" content=\"这是链接的详细说明。\">\n    <ad-link>悬停查看详情</ad-link>\n  </ad-popover>\n</template>\n```\n:::\n\n#### 搭配文本\n:::demo\n```vue\n<template>\n  <ad-popover mode=\"hover\" content=\"这是一段说明文字\">\n    <span style=\"cursor: pointer; text-decoration: underline; color: #4C9EEA;\">\n      帮助信息\n    </span>\n  </ad-popover>\n</template>\n```\n:::\n\n### 内容变化\n\nPopover 支持不同的内容组合。\n\n#### 只有标题\n:::demo\n```vue\n<template>\n  <ad-popover title=\"只有标题\">\n    <ad-button variant=\"secondary\">只有标题</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n#### 只有内容\n:::demo\n```vue\n<template>\n  <ad-popover content=\"只有内容，没有标题。\">\n    <ad-button variant=\"secondary\">只有内容</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n#### 长内容\n:::demo\n```vue\n<template>\n  <ad-popover\n    title=\"详细说明\"\n    content=\"这是一段很长的内容，用来测试 Popover 的最大宽度限制。当内容超过 300px 宽度时，会自动换行显示，确保内容可读性良好。\"\n  >\n    <ad-button>长内容</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n#### 富文本内容\n:::demo\n```vue\n<template>\n  <ad-popover\n    title=\"用户信息\"\n    content=\"<div style='display: flex; flex-direction: column; gap: 8px;'><div>用户名：admin</div><div>邮箱：admin@example.com</div><div>角色：管理员</div></div>\"\n  >\n    <ad-button>查看用户信息</ad-button>\n  </ad-popover>\n</template>\n```\n:::\n\n### 多个 Popover（互斥）\n\n同一时间只能显示一个 Popover，点击新的会关闭旧的。\n:::demo\n```vue\n<template>\n  <div style=\"display: flex; gap: 16px;\">\n    <ad-popover title=\"Popover 1\" content=\"这是第一个 Popover\">\n      <ad-button>Popover 1</ad-button>\n    </ad-popover>\n    <ad-popover title=\"Popover 2\" content=\"这是第二个 Popover\">\n      <ad-button>Popover 2</ad-button>\n    </ad-popover>\n  </div>\n</template>\n```\n:::\n\n## API\n\n### ad-popover Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| mode | 触发方式 | `'click'` \\| `'hover'` | `'click'` |\n| title | 标题 | string | - |\n| content | 内容 | string | - |\n| children | 触发元素 | VNode | - |\n| className | 自定义类名 | string | - |\n\n## 注意事项\n\n1. Popover 是通过 Portal 渲染到 body 上的，确保层级高于其他元素\n2. 同一时间只能显示一个 Popover，点击新的会自动关闭旧的\n3. 点击模式下，点击外部区域会关闭 Popover\n4. 悬停模式下，鼠标移出触发元素或 Popover 会延迟关闭\n5. Popover 会自动计算位置，确保完全显示在视口内\n6. 当窗口大小改变或滚动时，Popover 会重新计算位置" 
  },
  { 
    id: "radio", 
    title: "单选框 Radio", 
    path: "/react/radio", 
    content: "单选框允许用户在一组选项中选择一个选项。 ## 何时使用 - 在一组互斥的选项中进行单项选择时 - 需要展示所有可选项供用户比较时 - 表单中需要用户做出明确选择时 ## 示例 ### 基础用法 最简单的单选框使用方式。 ### 不同状态 单选框支持多种状态：可用、禁用、选中、选中且禁用。 ### 选中状态 展示选中状态的单选框。 ### 所有状态概览 展示单选框的所有可能状态。 ### 交互式示..."
  },
  { 
    id: "rate", 
    title: "评分 Rate", 
    path: "/react/rate", 
    content: "评分组件用于对事物进行评级操作，或展示事物的评级。 ## 何时使用 - 需要对事物进行评级时 - 展示事物的平均评分时 - 收集用户反馈时 ## 示例 ### 基础用法 最简单的评分组件使用方式。 ### 展示模式 在展示模式下，评分组件仅用于显示评分，不支持用户交互。 ### 展示模式示例 展示不同评分值的效果。 ### 带小数的展示模式 展示带有小数的评分值。 ### 设置模式 在设置模式下，..."
  },
  { 
    id: "responsive-modal", 
    title: "响应式弹窗 ResponsiveModal", 
    path: "/react/responsive-modal", 
    content: "响应式弹窗根据屏幕尺寸自动切换显示模式，在宽屏下显示为 Modal，在窄屏下显示为 Drawer。 ## 何时使用 - 需要在不同设备上提供一致的用户体验时 - 希望在移动端使用抽屉式弹窗，在桌面端使用模态弹窗时 - 构建响应式应用时需要适配不同屏幕尺寸的弹窗组件时 ## 示例 ### 基础用法 最基本的响应式弹窗使用方式，根据屏幕宽度自动切换显示模式。 ### 自定义断点 通过 breakpoi..."
  },
  { 
    id: "select", 
    title: "选择器 Select", 
    path: "/react/select", 
    content: "选择器用于从一组选项中选择一个或多个选项。 ## 何时使用 - 需要从多个选项中选择一个值时 - 选项数量较多，不适合使用单选框时 - 表单中需要用户提供选择时 ## 代码演示 ### 基础用法 最简单的选择器使用方式。 ### 不同状态 选择器支持多种状态：正常、选中/聚焦、加载中、禁用。 ### 正常状态 ### 选中/聚焦状态 ### 加载状态 ### 禁用状态 ### 下拉框展开 ### ..."
  },
  { 
    id: "skeleton", 
    title: "骨架屏 Skeleton", 
    path: "/react/skeleton", 
    content: "骨架屏是一种用于在内容加载过程中提供视觉反馈的 UI 组件，通过显示占位元素来提升用户体验。 ## 何时使用 - 页面或组件内容需要异步加载时 - 希望在内容加载过程中提供更好的用户体验时 - 需要减少页面闪烁和布局跳动时 ## 示例 ### 基础用法 最简单的骨架屏使用方式。 ### 与内容结合使用 骨架屏常与实际内容结合使用，在加载完成时切换显示。 ### 无动画效果 通过 animated ..."
  },
  { 
    id: "space", 
    title: "间距 Space", 
    path: "/react/space", 
    content: "Space 组件用于在组件之间添加统一的间距，简化布局代码。 ## 何时使用 - 需要在多个组件之间添加统一间距时 - 希望简化布局代码，避免手动设置 margin 或 gap 时 - 需要灵活控制间距方向和大小时 ## 示例 ### 基础用法 最简单的 Space 组件使用方式。 ### 间距方向 Space 组件支持水平和垂直两种方向。 #### 水平方向（默认） #### 垂直方向 ### ..."
  },
  { 
    id: "spin", 
    title: "加载中 Spin", 
    path: "/react/spin", 
    content: "Spin 组件用于页面或组件的加载状态指示，提供多种展示方式和位置选项。 ## 何时使用 - 页面或组件内容需要异步加载时 - 执行耗时操作需要给用户反馈时 - 需要阻止用户在加载过程中进行操作时 ## 示例 ### 基础用法 最简单的 Spin 组件使用方式。 ### 带提示文字 可以添加提示文字来说明加载状态。 ### 无提示文字 可以通过设置空字符串隐藏提示文字。 ### 包裹模式 Spin..."
  },
  { 
    id: "steps", 
    title: "步骤条 Steps", 
    path: "/react/steps", 
    content: "Steps 组件用于引导用户按照流程完成任务，显示当前所在步骤和进度。 ## 何时使用 - 需要引导用户按步骤完成复杂任务时 - 显示多步骤表单的进度时 - 展示操作流程或状态变更过程时 ## 示例 ### 基础用法 最简单的 Steps 组件使用方式。 ### 标签位置 Steps 组件支持多种标签位置。 #### 标签在底部（默认） #### 标签在顶部 #### 标签在上下两侧 #### 所..."
  },
  { 
    id: "switch", 
    title: "开关 Switch", 
    path: "/react/switch", 
    content: "Switch 组件用于在两个状态之间进行切换，常用于设置选项的开启或关闭。 ## 何时使用 - 需要在两个互斥状态之间切换时 - 表单中需要用户进行布尔值选择时 - 快速开关某个功能或设置时 ## 示例 ### 基础用法 最简单的 Switch 组件使用方式。 ### 尺寸 Switch 组件支持三种尺寸。 ### 变种 Switch 组件支持多种变种样式。 ### 状态 Switch 组件支持多..."
  },
  { 
    id: "tabs", 
    title: "标签页 Tabs", 
    path: "/react/tabs", 
    content: "Tabs 组件用于组织和展示不同类别的内容，允许用户在不同的视图之间进行切换。 ## 基础用法 Tabs 组件由四个部分组成： - Tabs: 容器组件 - TabList: 标签列表容器 - Tab: 单个标签项 - TabPanel: 标签对应的内容面板 ## 胶囊模式 通过设置 capsule 属性，可以启用胶囊样式的标签页，这种样式更加紧凑且具有视觉焦点。 ## 带额外操作 可以通过 extra 属性添加额外的操作按钮。 ## 带图标标签 标签可以包含图标以增强视觉效果。 ## 禁用标签 某些标签可以被禁用，用户无法切换到这些标签。 ## 动态标签 支持动态添加或删除标签。 ## 受控组件 通过 activeKey 和 onChange 属性可以实现受控组件。 ## API ### Tabs Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | activeKey | 当前激活的标签页 | string | - | | defaultActiveKey | 默认激活的标签页 | string | - | | onChange | 切换标签页时的回调函数 | function(activeKey) | - | | capsule | 是否启用胶囊模式 | boolean | false | | extra | 额外操作区域 | ReactNode | - | ### Tab Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | key | 标签页的唯一标识 | string | - | | title | 标签页标题 | ReactNode | - | | icon | 标签页图标 | ReactNode | - | | disabled | 是否禁用标签页 | boolean | false | ### TabPanel Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | key | 对应标签页的唯一标识 | string | - |" 
  },
  { 
    id: "tag", 
    title: "标签 Tag", 
    path: "/react/tag", 
    content: "Tag 组件用于标记和分类内容，可以作为关键词或小型状态指示器使用。 ## 基础用法 最简单的用法是直接使用 Tag 组件包裹文本内容。 ## 变体 Tag 组件提供两种变体：primary 和 default。 ## 可关闭标签 通过设置 closable 属性，可以让标签变成可关闭的状态。当用户点击关闭按钮时会触发 onClose 回调。 ## 交互示例 以下是一个更复杂的交互示例，展示了如何动态添加和删除标签。 ## API ### Tag Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | variant | 标签变体 | 'primary' \\| 'default' | 'default' | | closable | 是否可关闭 | boolean | false | | onClose | 关闭时的回调函数 | function(event) | - | | className | 自定义类名 | string | - | | style | 自定义样式 | CSSProperties | - |" 
  },
  { 
    id: "textarea", 
    title: "文本域 Textarea", 
    path: "/react/textarea", 
    content: "用于多行文本输入。 ## 何时使用 - 需要输入多行文本时 - 需要限制字数的文本输入时 - 需要可清除功能的多行文本输入时 ## 示例 ### 基础用法 最简单的文本域用法。 ### 不同行数 可以设置不同的行数。 ### 可清除文本域 带清除图标的文本域，点击图标清除内容。 ### 字数限制 可以设置最大字数限制，并在右下角显示计数。 ### 禁用状态 展示禁用状态的文本域。 ## API ### Textarea Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | value | 文本域的值 | string | - | | defaultValue | 默认值 | string | - | | onChange | 值改变时的回调函数 | function(value: string, event: ChangeEvent) | - | | rows | 行数 | number | 3 | | maxLength | 最大字符数 | number | - | | showCount | 是否显示字符计数 | boolean | false | | allowClear | 是否显示清除按钮 | boolean | false | | disabled | 是否禁用 | boolean | false | | placeholder | 占位文本 | string | - | | className | 自定义类名 | string | - | | style | 自定义样式 | CSSProperties | - |" 
  },
  { 
    id: "timeline", 
    title: "时间轴 Timeline", 
    path: "/react/timeline", 
    content: "Timeline 组件用于垂直展示时间流信息，常用于项目里程碑、订单跟踪、版本历史等场景。 ## 基础用法 Timeline 组件由两个部分组成： - Timeline: 容器组件 - TimelineItem: 时间轴上的每一个节点 ## 内容位置 通过设置 side 属性可以控制内容的显示位置，支持 right（默认）、left 和 both 三种模式。 ### 内容在右边（默认） ### 内容在左边 ### 内容在两边交替显示 ## 自定义图标 可以为时间轴节点设置自定义图标。 ## 自定义颜色 可以设置时间轴线条和节点的颜色。 ## API ### Timeline Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | side | 内容显示位置 | 'right' \\| 'left' \\| 'both' | 'right' | ### TimelineItem Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | icon | 自定义图标 | ReactNode | - | | color | 节点和线条颜色 | string | - | | dot | 自定义节点内容 | ReactNode | - |" 
  },
  { 
    id: "toast", 
    title: "轻提示 Toast", 
    path: "/react/toast", 
    content: "Toast 组件用于向用户提供简短的操作反馈信息，会在一段时间后自动消失。 ## 基础用法 Toast 组件提供了四种类型的提示：success、fail、danger 和 loading。可以通过调用相应的方法来显示不同类型的消息。 ## 成功提示 使用 Toast.success() 方法显示成功的反馈信息。 ## 失败提示 使用 Toast.fail() 方法显示失败的反馈信息。 ## 危险提示 使用 Toast.danger() 方法显示危险操作的反馈信息。 ## 加载提示 使用 Toast.loading() 方法显示加载状态的反馈信息。 ## API ### Toast Methods | 方法 | 说明 | 参数 | | --- | --- | --- | | Toast.success(content, duration) | 显示成功提示 | content: 提示内容, duration: 显示时长(毫秒) | | Toast.fail(content, duration) | 显示失败提示 | content: 提示内容, duration: 显示时长(毫秒) | | Toast.danger(content, duration) | 显示危险提示 | content: 提示内容, duration: 显示时长(毫秒) | | Toast.loading(content, duration) | 显示加载提示 | content: 提示内容, duration: 显示时长(毫秒) |" 
  },
  { 
    id: "tooltip", 
    title: "文字提示 Tooltip", 
    path: "/react/tooltip", 
    content: "Tooltip 组件用于在用户将鼠标悬停在元素上时显示简短的提示信息。 ## 基础用法 Tooltip 组件需要包裹一个触发元素，并通过 content 属性设置提示内容。 ## 不同内容 Tooltip 支持不同长度和类型的提示内容。 ## 在按钮上使用 Tooltip 常用于为按钮提供额外的说明信息。 ## 在图标上使用 Tooltip 也常用于为图标提供说明信息。 ## 富文本内容 Tooltip 支持富文本内容，可以包含HTML标签。 ## API ### Tooltip Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | content | 提示内容 | ReactNode | - | | placement | 提示位置 | 'top' \\| 'bottom' \\| 'left' \\| 'right' | 'top' | | trigger | 触发方式 | 'hover' \\| 'click' | 'hover' | | className | 自定义类名 | string | - | | style | 自定义样式 | CSSProperties | - |" 
  },
  { 
    id: "vue-getting-started", 
    title: "开始使用", 
    path: "/vue-next/getting-started", 
    content: "## 安装 Apron Design Vue Next 需要同时安装 vue >= 3.0。 在开始之前，你可能需要安装 npx。 首先，确保你的 Vue 项目已经创建。如果还没有，可以使用以下命令创建： 然后安装 Apron Design 然后在 main.ts 或 main.js 中导入样式 ## 在 Nuxt.js 上使用 首先，确保你的 Nuxt.js 项目已经创建。如果还没有，可以使用以下命令创建： 然后安装 Apron Design： 对于 **Nuxt 3+**，在 nuxt.config.ts 中添加： ### 使用 Vite 创建 Vue 应用 你也可以使用 Vite 快速创建 Vue 应用 # 安全建议 由于 Vue 的安全更新，我们强烈建议您定期更新您的 Vue 版本到最新版。" 
  },
  { 
    id: "vue-alert", 
    title: "警告提示 Alert", 
    path: "/vue-next/alert", 
    content: "警告提示，展现需要关注的信息。 ## 何时使用 - 当某个页面需要向用户显示警告的信息时 - 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭 ## 代码演示 ### 基本用法 最简单的用法，适用于简短的警告提示。 ### 四种样式 共有四种样式 info、success、warning、error。 ### 自定义内容 可以自定义内容，以适应不同的场景。 ## API 通过设置 ad-alert 的属性来产生不同的警告提示样式。" 
  },
  { 
    id: "vue-avatar", 
    title: "头像 Avatar", 
    path: "/vue-next/avatar", 
    content: "用来代表用户或事物，支持图片、图标或字符展示。 ## 何时使用 - 需要展示用户或事物的头像 - 需要多种尺寸和形状的头像展示 - 需要展示一组用户的头像 ## 代码演示 ### 基本用法 头像有三种类型：图片、图标和字符，其中图标和字符会自动根据内容调整背景色。 ### 尺寸 头像有四种尺寸：迷你（mini）、小（small）、中（middle，默认）、大（large）。 ### 形状 头像支持..."
  },
  { 
    id: "vue-badge", 
    title: "徽标数 Badge", 
    path: "/vue-next/badge", 
    content: "图标右上角的圆形徽标数字。 ## 何时使用 - 当需要在图标或文字右上角展示数字或状态时 - 用于展示消息数量、状态提示等 ## 代码演示 ### 基本用法 最简单的用法，在右上角展示数字。 ### 红点 不显示数字，只显示一个小红点。 ### 数字徽标 展示具体的数字，当数字大于 overflowCount 时会显示为 {overflowCount}+。 ### 自定义内容 可以自定义徽标内容，..."
  },
  { 
    id: "vue-button", 
    title: "按钮 Button", 
    path: "/vue-next/button", 
    content: "按钮用于开始一个即时操作。 ## 何时使用 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。 ## 代码演示 ### 基本用法 基础的按钮用法。 ### 按钮类型 按钮有五种类型：主按钮、次按钮、默认按钮、文字按钮和链接按钮。 ### 按钮尺寸 按钮有两种尺寸：中号（40px）和小号（30px）。 ### 虚线边框 通过 dashed 属性设置按钮边框为虚线样式。 ### ..."
  },
  { 
    id: "vue-card", 
    title: "卡片 Card", 
    path: "/vue-next/card", 
    content: "通用卡片容器，用于展示结构化内容。 ## 何时使用 - 需要展示结构化的信息块 - 需要分组展示相关内容 - 需要在页面中组织内容布局 ## 代码演示 ### 基础用法 最简单的卡片用法，只包含内容区域。 ### 带标题的卡片 使用 CardHeader 组件添加标题。 ### 带额外操作的卡片 在 CardHeader 中使用 extra 属性添加额外操作。 ### 带底部的卡片 使用 Card..."
  },
  { 
    id: "vue-cascader", 
    title: "级联选择 Cascader", 
    path: "/vue-next/cascader", 
    content: "级联选择框，用于多级联动选择。 ## 何时使用 - 需要从一组相关联的数据集合进行选择，例如省市区、公司部门等 - 支持多级联动选择 - 支持异步加载数据 ## 代码演示 ### 基本用法 最简单的用法，展示省市区三级联动选择。 ### 禁用状态 通过 disabled 属性设置是否禁用。 ### 加载状态 通过 loading 属性设置加载状态。 ### 选择即改变 通过 changeOnSel..."
  },
  { 
    id: "vue-checkbox", 
    title: "复选框 Checkbox", 
    path: "/vue-next/checkbox", 
    content: "复选框用于在一组可选项中进行多项选择。 ## 何时使用 - 需要在多个选项中选择一个或多个选项时 - 支持单独使用或组合使用 - 支持全选/反选等复杂交互 ## 代码演示 ### 基本用法 最简单的用法，展示可用、选中、禁用等状态。 ### 半选状态 通过 indeterminate 属性设置半选状态，常用于实现全选效果。 ### 受控组件 通过 checked 和 onChange 实现受控组件..."
  },
  { 
    id: "vue-collapse", 
    title: "折叠面板 Collapse", 
    path: "/vue-next/collapse", 
    content: "可以折叠/展开的内容区域。 ## 何时使用 - 对复杂区域进行分组和隐藏 - 手风琴是一种特殊的折叠面板，只允许单个内容区域展开 ## 代码演示 ### 基本用法 可以同时展开多个面板，可以分别展开或折叠。 ### 默认展开 通过 defaultActiveKeys 属性设置默认展开的面板。 ### 手风琴模式 通过 accordion 属性设置手风琴模式，每次只能展开一个面板。 ### 禁用状态..."
  },
  { 
    id: "vue-date-picker", 
    title: "日期选择器 DatePicker", 
    path: "/vue-next/date-picker", 
    content: "用于选择日期的组件，支持年、月、日三级联动选择。 ## 何时使用 当需要用户输入一个日期时使用，支持多种交互状态和自定义配置。 ## 示例 ### 基础用法 最简单的用法，适用于大多数场景。 ### 不同选择状态 展示日期选择器的不同选择状态。 ### 加载状态 展示加载中的状态，可以有值或无值。 ### 禁用状态 禁用日期选择器，用户无法进行操作。 ### Inflow 模式 使用 inflow..."
  },
  { 
    id: "vue-divider", 
    title: "分割线 Divider", 
    path: "/vue-next/divider", 
    content: "区隔内容的分割线，可用于对不同内容进行分组或分隔。 ## 何时使用 - 对不同内容区域进行分隔 - 对长列表或表单进行分组 - 创建视觉上的层次感 ## 示例 ### 基础用法 最简单的用法，渲染一条水平分割线。 ### 虚线分割线 通过设置 dashed 属性渲染虚线分割线。 ### 带文字的分割线 给分割线添加文字，方便描述或分隔不同内容。 ### 文字对齐方式 通过 align 属性控制文字..."
  },
  { 
    id: "vue-drawer", 
    title: "抽屉 Drawer", 
    path: "/vue-next/drawer", 
    content: "屏幕边缘滑出的浮层面板，用于承载临时内容或操作。 ## 何时使用 - 需要从屏幕边缘滑出一个面板来承载内容 - 用于移动端或空间受限的场景 - 替代 Modal 对话框，提供更自然的过渡效果 ## 示例 ### 基础用法 最简单的用法，从右侧滑出抽屉。 ### 不同方向 支持从上、右、下、左四个方向滑出。 ### 自定义尺寸 可以自定义抽屉的宽度（左右方向）或高度（上下方向）。 ### 移动端模式..."
  },
  { 
    id: "vue-empty", 
    title: "空状态 Empty", 
    path: "/vue-next/empty", 
    content: "用于展示空状态的组件，通常在没有数据时显示。 ## 何时使用 - 数据加载完成但为空时 - 搜索无结果时 - 页面初始化状态时 - 任何需要提示用户当前无数据的场景 ## 示例 ### 基础用法 最简单的用法，显示默认的空状态图标和文字。 ### 自定义文字 可以通过子元素来自定义提示文字。 ### 自定义图标 通过 icon 属性可以自定义空状态图标。 ### 带操作按钮 可以在空状态中添加操作..."
  },
  { 
    id: "vue-form", 
    title: "表单 Form", 
    path: "/vue-next/form", 
    content: "高性能、易扩展的表单解决方案，支持数据录入、校验和提交功能。 ## 何时使用 - 需要进行数据录入和校验的场景 - 构建登录、注册、设置等表单页面 - 需要复杂表单交互和状态管理的应用 ## 示例 ### 基础表单 最简单的表单使用方式，包含基本的字段和提交功能。 ### 表单布局 支持三种不同的表单布局：垂直（默认）、水平和内联。 ### 浮动标签 使用浮动标签模式，节省空间并提升用户体验。 #..."
  },
  { 
    id: "vue-grid", 
    title: "栅格 Grid", 
    path: "/vue-next/grid", 
    content: "24 栅格系统，帮助开发者快速创建响应式布局。 ## 设计理念 在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。 划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版布局，以保证整体..."
  },
  { 
    id: "vue-icon", 
    title: "图标 Icon", 
    path: "/vue-next/icons", 
    content: "" 
  },
  { 
    id: "vue-image", 
    title: "图片 Image", 
    path: "/vue-next/image", 
    content: "增强版的 img 标签，提供多种图片填充方式和加载状态处理。 ## 何时使用 - 需要设置图片的 object-fit 属性 - 需要优雅地处理图片加载失败的情况 - 需要在图片加载过程中显示占位内容 ## 示例 ### 基础用法 最简单的用法，直接传入图片地址。 ### 不同状态 展示图片组件的不同状态：无图片、正常加载、加载失败。 ### 图片填充方式 通过 objectFit 属性控制图片在..."
  },
  { 
    id: "vue-input-otp", 
    title: "验证码输入框 InputOtp", 
    path: "/vue-next/input-otp", 
    content: "用于输入验证码的专用输入框，支持多种格式和交互方式。 ## 何时使用 - 需要用户输入短信验证码、邮箱验证码等场景 - 需要格式化显示验证码（如 123-456 格式） - 需要在移动端弹出数字键盘 - 需要验证完成后自动触发回调 ## 示例 ### 基础用法 最简单的用法，默认为6位数字验证码。 ### 不同格式 支持多种验证码格式，可以自定义分隔符。 ### 不同尺寸 支持默认和小尺寸两种规格..."
  },
  { 
    id: "vue-input", 
    title: "输入框 Input", 
    path: "/vue-next/input", 
    content: "通过鼠标或键盘输入内容，是最基础的表单域包装。 ## 何时使用 - 需要用户输入表单域内容时 - 提供组合型输入框，比如带前后置内容的输入框 - 需要带清除功能的输入框时 ## 示例 ### 基础用法 最简单的用法，适用于大部分业务场景。 ### 不同状态 展示输入框的不同状态：空状态、有内容、禁用等。 ### 可清除输入框 带清除图标的输入框，点击图标清除内容。 ### 密码输入框 用于输入密码..."
  },
  { 
    id: "vue-link", 
    title: "链接 Link", 
    path: "/vue-next/link", 
    content: "链接组件，用于页面跳转或外部链接。 ## 何时使用 - 需要在页面中添加可点击的链接时 - 需要统一链接样式时 - 需要区分不同类型链接（主要、次要、危险）时 ## 示例 ### 基础用法 最简单的用法，创建一个基本链接。 ### 链接变种 支持主色和次色两种变种。 ### 下划线样式 支持三种下划线显示方式：始终显示、悬停显示、从不显示。 ### 危险链接 用于表示危险操作的链接，显示为红色。 ..."
  },
  { 
    id: "vue-message", 
    title: "全局提示 Message", 
    path: "/vue-next/message", 
    content: "全局展示操作反馈信息，常用于通知用户操作结果。 ## 何时使用 - 需要向用户显示操作反馈时 - 需要全局性的简短通知时 - 不希望打断用户操作流程的通知场景 ## 示例 ### 基础用法 最简单的用法，通过不同方法显示不同类型的消息。 ### 使用 message.show() 方法 可以通过 message.show() 方法动态指定提示类型。 ### 多个提示排列 多个提示会按顺序向下排列，..."
  },
  { 
    id: "vue-modal", 
    title: "对话框 Modal", 
    path: "/vue-next/modal", 
    content: "模态对话框用于显示重要的信息或请求用户输入。它会中断用户的当前操作，直到用户与对话框进行交互。 ## 何时使用 - 需要用户确认某些操作时 - 显示重要信息时 - 收集用户输入时 - 展示详细内容时 ## 示例 ### 基础用法 最简单的对话框，包含标题、内容和默认的操作按钮。 ### 无标题对话框 可以通过省略 title 属性来创建无标题的对话框。 ### 无底部对话框 通过设置 showFo..."
  },
  { 
    id: "vue-pagination", 
    title: "分页 Pagination", 
    path: "/vue-next/pagination", 
    content: "分页组件用于将大量数据分割成多个页面，提升用户体验和页面性能。 ## 何时使用 - 当数据量较大，需要分批展示时 - 需要提供数据浏览功能时 - 与表格或其他数据展示组件配合使用时 ## 示例 ### 基础用法 最基本的分页组件，只需要指定数据总数和每页条数。 ### 不同尺寸 分页组件支持三种尺寸：大、默认、小。 ### 少量页码 当总页数少于7页时，会直接显示所有页码。 ### 大量页码 当总..."
  },
  { 
    id: "vue-popconfirm", 
    title: "气泡确认框 PopConfirm", 
    path: "/vue-next/popconfirm", 
    content: "专门用于确认操作的气泡卡片。 ## 何时使用 - 需要用户确认某个重要操作时 - 删除、提交等不可逆操作前的确认 - 不想打断用户主要流程但又需要确认操作时 ## 示例 ### 基础用法 最简单的确认框用法。 ### 自定义按钮文字 可以自定义确认框中的按钮文字。 ### 自定义按钮样式 可以自定义确认框中按钮的样式。 ### 搭配链接 确认框也可以与链接搭配使用。 ### 多个 PopConfi..."
  },
  { 
    id: "vue-popover", 
    title: "气泡卡片 Popover", 
    path: "/vue-next/popover", 
    content: "气泡卡片是一种轻量级的弹出框，用于显示额外的信息或确认操作。 ## 何时使用 - 需要显示简短的提示信息时 - 需要用户确认某个操作时 - 不想打断用户主要流程但又需要提供额外信息时 ## 示例 ### 基础用法 最简单的气泡卡片，在点击触发元素时显示内容。 ### 触发方式 Popover 支持两种触发方式：点击和悬停。 #### 点击触发 #### 悬停触发 ### 搭配不同元素 Popove..." 
  },
  { 
    id: "vue-radio", 
    title: "单选框 Radio", 
    path: "/vue-next/radio", 
    content: "单选框允许用户在一组选项中选择一个选项。 ## 何时使用 - 在一组互斥的选项中进行单项选择时 - 需要展示所有可选项供用户比较时 - 表单中需要用户做出明确选择时 ## 示例 ### 基础用法 最简单的单选框使用方式。 ### 不同状态 单选框支持多种状态：可用、禁用、选中、选中且禁用。 ### 选中状态 展示选中状态的单选框。 ### 所有状态概览 展示单选框的所有可能状态。 ### 交互式示..." 
  },
  { 
    id: "vue-rate", 
    title: "评分 Rate", 
    path: "/vue-next/rate", 
    content: "评分组件用于对事物进行评级操作，或展示事物的评级。 ## 何时使用 - 需要对事物进行评级时 - 展示事物的平均评分时 - 收集用户反馈时 ## 示例 ### 基础用法 最简单的评分组件使用方式。 ### 展示模式 在展示模式下，评分组件仅用于显示评分，不支持用户交互。 ### 展示模式示例 展示不同评分值的效果。 ### 带小数的展示模式 展示带有小数的评分值。 ### 设置模式 在设置模式下，..." 
  },
  { 
    id: "vue-responsive-modal", 
    title: "响应式弹窗 ResponsiveModal", 
    path: "/vue-next/responsive-modal", 
    content: "响应式弹窗根据屏幕尺寸自动切换显示模式，在宽屏下显示为 Modal，在窄屏下显示为 Drawer。 ## 何时使用 - 需要在不同设备上提供一致的用户体验时 - 希望在移动端使用抽屉式弹窗，在桌面端使用模态弹窗时 - 构建响应式应用时需要适配不同屏幕尺寸的弹窗组件时 ## 示例 ### 基础用法 最基本的响应式弹窗使用方式，根据屏幕宽度自动切换显示模式。 ### 自定义断点 通过 breakpoi..." 
  },
  { 
    id: "vue-select", 
    title: "选择器 Select", 
    path: "/vue-next/select", 
    content: "选择器用于从一组选项中选择一个或多个选项。 ## 何时使用 - 需要从多个选项中选择一个值时 - 选项数量较多，不适合使用单选框时 - 表单中需要用户提供选择时 ## 代码演示 ### 基础用法 最简单的选择器使用方式。 ### 不同状态 选择器支持多种状态：正常、选中/聚焦、加载中、禁用。 ### 正常状态 ### 选中/聚焦状态 ### 加载状态 ### 禁用状态 ### 下拉框展开 ### ..." 
  },
  { 
    id: "vue-skeleton", 
    title: "骨架屏 Skeleton", 
    path: "/vue-next/skeleton", 
    content: "骨架屏是一种用于在内容加载过程中提供视觉反馈的 UI 组件，通过显示占位元素来提升用户体验。 ## 何时使用 - 页面或组件内容需要异步加载时 - 希望在内容加载过程中提供更好的用户体验时 - 需要减少页面闪烁和布局跳动时 ## 示例 ### 基础用法 最简单的骨架屏使用方式。 ### 与内容结合使用 骨架屏常与实际内容结合使用，在加载完成时切换显示。 ### 无动画效果 通过 animated ..." 
  },
  { 
    id: "vue-space", 
    title: "间距 Space", 
    path: "/vue-next/space", 
    content: "Space 组件用于在组件之间添加统一的间距，简化布局代码。 ## 何时使用 - 需要在多个组件之间添加统一间距时 - 希望简化布局代码，避免手动设置 margin 或 gap 时 - 需要灵活控制间距方向和大小时 ## 示例 ### 基础用法 最简单的 Space 组件使用方式。 ### 间距方向 Space 组件支持水平和垂直两种方向。 #### 水平方向（默认） #### 垂直方向 ### ..." 
  },
  { 
    id: "vue-spin", 
    title: "加载中 Spin", 
    path: "/vue-next/spin", 
    content: "Spin 组件用于页面或组件的加载状态指示，提供多种展示方式和位置选项。 ## 何时使用 - 页面或组件内容需要异步加载时 - 执行耗时操作需要给用户反馈时 - 需要阻止用户在加载过程中进行操作时 ## 示例 ### 基础用法 最简单的 Spin 组件使用方式。 ### 带提示文字 可以添加提示文字来说明加载状态。 ### 无提示文字 可以通过设置空字符串隐藏提示文字。 ### 包裹模式 Spin..." 
  },
  { 
    id: "vue-steps", 
    title: "步骤条 Steps", 
    path: "/vue-next/steps", 
    content: "Steps 组件用于引导用户按照流程完成任务，显示当前所在步骤和进度。 ## 何时使用 - 需要引导用户按步骤完成复杂任务时 - 显示多步骤表单的进度时 - 展示操作流程或状态变更过程时 ## 示例 ### 基础用法 最简单的 Steps 组件使用方式。 ### 标签位置 Steps 组件支持多种标签位置。 #### 标签在底部（默认） #### 标签在顶部 #### 标签在上下两侧 #### 所..." 
  },
  { 
    id: "vue-switch", 
    title: "开关 Switch", 
    path: "/vue-next/switch", 
    content: "Switch 组件用于在两个状态之间进行切换，常用于设置选项的开启或关闭。 ## 何时使用 - 需要在两个互斥状态之间切换时 - 表单中需要用户进行布尔值选择时 - 快速开关某个功能或设置时 ## 示例 ### 基础用法 最简单的 Switch 组件使用方式。 ### 尺寸 Switch 组件支持三种尺寸。 ### 变种 Switch 组件支持多种变种样式。 ### 状态 Switch 组件支持多..." 
  },
  { 
    id: "vue-tabs", 
    title: "标签页 Tabs", 
    path: "/vue-next/tabs", 
    content: "Tabs 组件用于组织和展示不同类别的内容，允许用户在不同的视图之间进行切换。 ## 基础用法 Tabs 组件由四个部分组成： - Tabs: 容器组件 - TabList: 标签列表容器 - Tab: 单个标签项 - TabPanel: 标签对应的内容面板 ## 胶囊模式 通过设置 capsule 属性，可以启用胶囊样式的标签页，这种样式更加紧凑且具有视觉焦点。 ## 带额外操作 可以通过 extra 属性添加额外的操作按钮。 ## 带图标标签 标签可以包含图标以增强视觉效果。 ## 禁用标签 某些标签可以被禁用，用户无法切换到这些标签。 ## 动态标签 支持动态添加或删除标签。 ## 受控组件 通过 activeKey 和 onChange 属性可以实现受控组件。 ## API ### Tabs Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | activeKey | 当前激活的标签页 | string | - | | defaultActiveKey | 默认激活的标签页 | string | - | | onChange | 切换标签页时的回调函数 | function(activeKey) | - | | capsule | 是否启用胶囊模式 | boolean | false | | extra | 额外操作区域 | ReactNode | - | ### Tab Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | key | 标签页的唯一标识 | string | - | | title | 标签页标题 | ReactNode | - | | icon | 标签页图标 | ReactNode | - | | disabled | 是否禁用标签页 | boolean | false | ### TabPanel Props | 参数 | 说明 | 类型 | 默认값 | | --- | --- | --- | --- | | key | 对应标签页的唯一标识 | string | - |" 
  },
  { 
    id: "vue-tag", 
    title: "标签 Tag", 
    path: "/vue-next/tag", 
    content: "Tag 组件用于标记和分类内容，可以作为关键词或小型状态指示器使用。 ## 基础用法 最简单的用法是直接使用 Tag 组件包裹文本内容。 ## 变体 Tag 组件提供两种变体：primary 和 default。 ## 可关闭标签 通过设置 closable 属性，可以让标签变成可关闭的状态。当用户点击关闭按钮时会触发 onClose 回调。 ## 交互示例 以下是一个更复杂的交互示例，展示了如何动态添加和删除标签。 ## API ### Tag Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | variant | 标签变体 | 'primary' \\| 'default' | 'default' | | closable | 是否可关闭 | boolean | false | | onClose | 关闭时的回调函数 | function(event) | - | | className | 自定义类名 | string | - | | style | 自定义样式 | CSSProperties | - |" 
  },
  { 
    id: "vue-textarea", 
    title: "文本域 Textarea", 
    path: "/vue-next/textarea", 
    content: "用于多行文本输入。 ## 何时使用 - 需要输入多行文本时 - 需要限制字数的文本输入时 - 需要可清除功能的多行文本输入时 ## 示例 ### 基础用法 最简单的文本域用法。 ### 不同行数 可以设置不同的行数。 ### 可清除文本域 带清除图标的文本域，点击图标清除内容。 ### 字数限制 可以设置最大字数限制，并在右下角显示计数。 ### 禁用状态 展示禁用状态的文本域。 ## API ### Textarea Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | value | 文本域的值 | string | - | | defaultValue | 默认值 | string | - | | onChange | 值改变时的回调函数 | function(value: string, event: ChangeEvent) | - | | rows | 行数 | number | 3 | | maxLength | 最大字符数 | number | - | | showCount | 是否显示字符计数 | boolean | false | | allowClear | 是否显示清除按钮 | boolean | false | | disabled | 是否禁用 | boolean | false | | placeholder | 占位文本 | string | - | | className | 自定义类名 | string | - | | style | 自定义样式 | CSSProperties | - |" 
  },
  { 
    id: "vue-timeline", 
    title: "时间轴 Timeline", 
    path: "/vue-next/timeline", 
    content: "Timeline 组件用于垂直展示时间流信息，常用于项目里程碑、订单跟踪、版本历史等场景。 ## 基础用法 Timeline 组件由两个部分组成： - Timeline: 容器组件 - TimelineItem: 时间轴上的每一个节点 ## 内容位置 通过设置 side 属性可以控制内容的显示位置，支持 right（默认）、left 和 both 三种模式。 ### 内容在右边（默认） ### 内容在左边 ### 内容在两边交替显示 ## 自定义图标 可以为时间轴节点设置自定义图标。 ## 自定义颜色 可以设置时间轴线条和节点的颜色。 ## API ### Timeline Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | side | 内容显示位置 | 'right' \\| 'left' \\| 'both' | 'right' | ### TimelineItem Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | icon | 自定义图标 | ReactNode | - | | color | 节点和线条颜色 | string | - | | dot | 自定义节点内容 | ReactNode | - |" 
  },
  { 
    id: "vue-tooltip", 
    title: "文字提示 Tooltip", 
    path: "/vue-next/tooltip", 
    content: "Tooltip 组件用于在用户将鼠标悬停在元素上时显示简短的提示信息。 ## 基础用法 Tooltip 组件需要包裹一个触发元素，并通过 content 属性设置提示内容。 ## 不同内容 Tooltip 支持不同长度和类型的提示内容。 ## 在按钮上使用 Tooltip 常用于为按钮提供额外的说明信息。 ## 在图标上使用 Tooltip 也常用于为图标提供说明信息。 ## 富文本内容 Tooltip 支持富文本内容，可以包含HTML标签。 ## API ### Tooltip Props | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | content | 提示内容 | ReactNode | - | | placement | 提示位置 | 'top' \\| 'bottom' \\| 'left' \\| 'right' | 'top' | | trigger | 触发方式 | 'hover' \\| 'click' | 'hover' | | className | 自定义类名 | string | - | | style | 自定义样式 | CSSProperties | - |" 
  }
];
