/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
if (!window.hdjs) {
    window.hdjs = {node_modules: '', base: '', uploader: '', filesLists: ''};
}
//兼容旧版本，用于处理旧版本只配置的hdjs.base的情况
if (window.hdjs.base && !window.hdjs.node_modules) {
    var pos = window.hdjs.base.lastIndexOf('/');
    window.hdjs.node_modules = window.hdjs.base.substr(0, pos) + '/node_modules';
}
if (!window.hdjs.node_modules) {
    window.hdjs.node_modules = '/node_modules';
}
if (!window.hdjs.base) {
    window.hdjs.base = window.hdjs.node_modules + '/hdjs';
}
require.config({
    baseUrl: window.hdjs.base,
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        util: window.hdjs.base + '/dist/hdjs',
        css: window.hdjs.base + '/dist/static/requirejs/css.min',
        domReady: window.hdjs.base + '/dist/static/requirejs/domReady',
    },
    shim: {
        'util': {
            deps: ['css!dist/hdjs.css']
        },
        'jquery': {
            exports: '$',
        }
    },
    waitSeconds: 30
});











