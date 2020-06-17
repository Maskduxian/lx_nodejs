const path=require('path');
const mimeTypes={
   'css': 'text/css',//给不同类型加小图标用对象写法{text/css,icon:'图标路径'}
   'gif': 'image/gif',
   'icon': 'image/x-icon',
   'jpeg': 'image/jpeg',
   'jpg': 'image/jpeg',
   'js': 'text/javascript',
   'json': 'application/json',
   'pdf': 'application/pdf',
   'png': 'image/png',
   'svg': 'image/svg+xml',
   'swf': 'application/x-shockwave-flash',
   'tiff': 'image/tiff',
   'txt': 'text/plain',
   'wav': 'audio/x-wav',
   'wma': 'audio/x-ms-wma',
   'wmv': 'video/x-ms-wmv',
   'xml': 'text/xml',
   'html': 'text/html',
   'txt' : 'text/plain',
   'rtf': 'application/rtf'
};
module.exports=(filePath)=>{
let ext=path.extname(filePath)
.split('.')
.pop()
.toLowerCase();
if(!ext){
  ext=filePath;
};
return mimeTypes[ext]||mimeTypes['txt'];
}
