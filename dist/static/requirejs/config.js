/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
window.hdjs = Object.assign({
    node_modules: '', base: '/node_modules/hdjs', uploader: '', filesLists: '', hdjs: ''
}, window.hdjs);

require.config({
    urlArgs: 'version=1.2.80',
    baseUrl: window.hdjs.base,
    paths: {
        hdjs: window.hdjs.base + '/dist/hdjs',
        // hdjs: 'http://houdunwang.oss-cn-hangzhou.aliyuncs.com/hdjs/hdjs',
        css: window.hdjs.base + '/dist/static/requirejs/css.min',
        domReady: window.hdjs.base + '/dist/static/requirejs/domReady',
        vue: 'https://cdn.bootcss.com/vue/2.4.2/vue',
        Aliplayer: 'http://g.alicdn.com/de/prismplayer/2.0.1/aliplayer-min',
        //代码高亮
        prism: window.hdjs.base + '/dist/static/prism/prism'
    },
    shim: {
        hdjs: {
            deps: ['css!dist/hdjs.css']
        },
        prism: {
            deps: [
                'css!' + window.hdjs.base + '/dist/static/prism/prism.css'
            ]
        }
    },
    waitSeconds: 30
});










