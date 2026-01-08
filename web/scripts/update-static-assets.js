const fs = require('fs');
const path = require('path');

// 获取构建输出目录 - 从项目根目录开始
const outDir = path.resolve(__dirname, '..', 'out');

// 遍历所有 HTML 文件并替换静态资源路径
function updateHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updateHtmlFiles(filePath); // 递归处理子目录
    } else if (file.endsWith('.html')) {
      // 读取 HTML 文件
      let content = fs.readFileSync(filePath, 'utf8');
      
      // 替换静态资源路径，添加 /apron-react-bits 前缀
      content = content.replace(
        /(href|src|poster|data:image)="\/(assets|favicon)/g,
        '$1="/apron-react-bits/$2'
      );
      
      // 写回文件
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated static asset paths in ${filePath}`);
    }
  }
}

// 检查构建输出目录是否存在
if (fs.existsSync(outDir)) {
  updateHtmlFiles(outDir);
  console.log('Static asset paths updated successfully!');
} else {
  console.log('Build output directory does not exist. Skipping asset path updates.');
}