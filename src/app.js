import hdjs from './hdjs';
window.hdjs={};
//组件目录必须绝对路径(在网站根目录时不用设置)
window.hdjs.base = '/node_modules/hdjs';
//上传文件后台地址
window.hdjs.uploader = 'test/php/uploader.php?';
//获取文件列表的后台地址
window.hdjs.filesLists = 'test/php/filesLists.php?';
hdjs.image();