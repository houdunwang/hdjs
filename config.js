/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
require.config({
    urlArgs: 'version=1.2.106',
    baseUrl: window.hdjs.base,
    paths: {
        hdjs: 'hdjs',
        css:'https://cdn.bootcss.com/require-css/0.1.10/css.min',
        domReady: 'domReady',
        vue: 'https://cdn.bootcss.com/vue/2.5.16/vue.min',
        scroll: 'https://cdn.bootcss.com/jquery-scrollTo/2.1.2/jquery.scrollTo.min',
        Aliplayer: 'http://g.alicdn.com/de/prismplayer/2.0.1/aliplayer-min',
        //微信JSSDK
        jweixin: 'http://res.wx.qq.com/open/js/jweixin-1.2.0',
        //百度编辑器
        ueditor: 'package/ueditor/ueditor.all',
        //代码高亮
        prism: 'https://cdn.bootcss.com/prism/9000.0.1/prism.min',
        //剪贴版
        ZeroClipboard: 'https://cdn.bootcss.com/zeroclipboard/2.3.0/ZeroClipboard.min',
        //JS验证
        validator:'https://cdn.bootcss.com/validator/10.2.0/validator.min',
        //上传组件
        webuploader: 'package/webuploader/dist/webuploader',
        bootstrap: 'https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.bundle.min',
        lodash: 'https://cdn.bootcss.com/lodash.js/4.17.10/lodash.min',
        moment: 'https://cdn.bootcss.com/moment.js/2.22.1/moment.min',
        oss: "component/oss",
        'jquery-mousewheel': 'https://cdn.bootcss.com/jquery-mousewheel/3.1.13/jquery.mousewheel.min',
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        axios: "https://cdn.bootcss.com/axios/0.18.0/axios.min",
        katex: "https://cdn.bootcss.com/KaTeX/0.9.0/katex.min",
        codemirror: "https://cdn.bootcss.com/codemirror/5.38.0/codemirror.min",
        plupload: "package/plupload/plupload.full.min"
    },
    shim: {
        hdjs:{
            deps:["css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"]
        },
        plupload: {
            exports: 'plupload'
        },
        highlight: {
            deps: ["css!package/highlight/dracula.min.css"]
        },
        sequenceDiagram: {
            deps: [
                "raphael"
            ]
        },
        jqueryflowchart: {
            deps: ['flowchart', 'raphael']
        },
        bootstrap: {
            deps: [
                'css!https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css',
                'css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
            ]
        },
        webuploader: {
            deps: ['css!package/webuploader/css/webuploader.css']
        },
        prism: {
            deps: [
                'css!/package/prism/prism.css'
            ]
        },
        ueditor: {
            deps: ['ZeroClipboard', 'package/ueditor/ueditor.config']
        }
    },
    waitSeconds: 30
});
require([
    'jquery',
    'axios',
    'lodash',
], function ($, axios, _) {
    window.$ = window.jQuery = $;
    window._ = _;
    console.info('后盾人 人人做后盾  www.houdunren.com');
    //将属性hdjs元素显示出来
    $("[hd-cloak]").show();
    $("[hd-hide]").hide();
    $("[hd-loading]").hide();
    window.axios = axios;
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    let token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        //为异步请求设置CSRF令牌
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    }
});