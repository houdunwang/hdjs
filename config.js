/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
require.config({
    urlArgs: 'version=1.2.105',
    baseUrl: window.hdjs.base,
    paths: {
        hdjs: 'hdjs',
        // css: 'css.min',
        css:'https://cdn.bootcss.com/require-css/0.1.10/css.min',
        domReady: 'domReady',
        vue: 'package/vue',
        scroll: 'package/jquery-scrollTo/jquery.scrollTo.min',
        Aliplayer: 'http://g.alicdn.com/de/prismplayer/2.0.1/aliplayer-min',
        //微信JSSDK
        jweixin: 'http://res.wx.qq.com/open/js/jweixin-1.2.0',
        //百度编辑器
        ueditor: 'package/ueditor/ueditor.all',
        //代码高亮
        prism: 'package/prism/prism',
        //剪贴版
        ZeroClipboard: 'package/ZeroClipboard/ZeroClipboard.min',
        //上传组件
        webuploader: 'package/webuploader/dist/webuploader',
        md5: 'package/md5.min',
        bootstrap: 'https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.bundle.min',
        lodash: 'package/lodash.min',
        //复选框切换
        bootstrapswitch: 'package/bootstrap-switch/bootstrap-switch.min',
        select2: 'package/select2/select2.min',
        bootstrapfilestyle: 'package/bootstrap-filestyle/bootstrap-filestyle.min',
        moment: 'package/moment.min',
        util: "component/util",
        oss: "component/oss",
        'jquery-mousewheel': 'package/jquery-mousewheel/jquery.mousewheel.min',
        'spark-md5': 'package/spark-md5/spark-md5.min',
        //markdown编辑器edit.md设置
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        axios: "https://cdn.bootcss.com/axios/0.18.0/axios.min",
        marked: "package/editor.md/lib/marked.min",
        prettify: "package/editor.md/lib/prettify.min",
        raphael: "package/editor.md/lib/raphael.min",
        underscore: "package/editor.md/lib/underscore.min",
        flowchart: "package/editor.md/lib/flowchart.min",
        jqueryflowchart: "package/editor.md/lib/jquery.flowchart.min",
        sequenceDiagram: "package/editor.md/lib/sequence-diagram.min",
        katex: "package/katex.min",
        editormd: "package/editor.md/editormd.amd",
        codemirror: "package/codemirror.min",
        //代码高亮
        highlight: "package/highlight/highlight.min",
        plupload: "package/plupload/plupload.full.min"
    },
    shim: {
        plupload: {
            exports: 'plupload'
        },
        highlight: {
            deps: ["css!package/highlight/dracula.min.css"]
        },
        editormd: {
            deps: [
                "flowchart",
                "sequenceDiagram",
                "css!package/editor.md/css/editormd.min.css",
                "css!package/editor.md/lib/codemirror/codemirror.min.css"
            ]
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
            exports: '$',
            deps: [
                'jquery',
                'css!https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css',
                'css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
            ]
        },
        select2: {
            exports: '$',
            deps: ['jquery', 'bootstrap']
        },
        bootstrapswitch: {
            exports: '$',
            deps: [
                'bootstrap',
                'css!package/bootstrap-switch/bootstrap-switch.min.css'
            ]
        },
        webuploader: {
            deps: ['css!package/webuploader/css/webuploader.css']
        },
        prism: {
            deps: ['css!package/prism/prism.css']
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
    'bootstrap'
], function ($, axios, _,a) {
    console.log(a);
    window.$ = window.jQuery = $;
    window._ = _;
    console.info('后盾人 人人做后盾  www.houdunren.com');
    //将属性hdjs元素显示出来
    $("[hd-cloak]").show();
    $("[hd-hide]").hide();
    $("[hd-loading]").hide();
    window.axios = axios;
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    var token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        //为异步请求设置CSRF令牌
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    } else {
        // console.error('CSRF token not found');
    }
});