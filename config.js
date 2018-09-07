/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
require.config({
    urlArgs: 'version=1.2.106',
    baseUrl: window.hdjs.base,
    paths: {
        hdjs: 'hdjs',
        css: 'css.min',
        domReady: 'domReady',
        vue: 'https://cdn.bootcss.com/vue/2.5.16/vue.min',
        scrollTo: 'https://cdn.bootcss.com/jquery-scrollTo/2.1.2/jquery.scrollTo.min',
        Aliplayer: 'http://g.alicdn.com/de/prismplayer/2.0.1/aliplayer-min',
        //微信JSSDK
        jweixin: 'http://res.wx.qq.com/open/js/jweixin-1.2.0',
        //百度编辑器
        ueditor: 'package/ueditor/ueditor.all',
        //代码高亮
        prism: 'package/prism/prism',
        //剪贴版
        ZeroClipboard: 'https://cdn.bootcss.com/zeroclipboard/2.3.0/ZeroClipboard.min',
        //JS验证
        validator: 'https://cdn.bootcss.com/validator/10.2.0/validator.min',
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
        plupload: "package/plupload/plupload.full.min",
        simditor: "package/simditor/scripts/simditor",
        "simditor-fullscreen": "package/simditor/simditor-fullscreen-master/lib/simditor-fullscreen",
        "marked": "https://cdn.bootcss.com/marked/0.4.0/marked.min",
        "to-markdown": "https://cdn.bootcss.com/to-markdown/3.1.1/to-markdown.min",
        "simditor-markdown": "package/simditor/simditor-markdown/lib/simditor-markdown",
        "simditor-dropzone": "package/simditor/simditor-dropzone/lib/simditor-dropzone",
        "simple-module": "package/simditor/scripts/module",
        //editor.md
        prettify: 'https://cdn.bootcss.com/prettify/r298/prettify.min',
        raphael: 'package/editor.md/lib/raphael.min',
        underscore: 'https://cdn.bootcss.com/underscore.js/1.9.0/underscore-min',
        flowchart: "package/editor.md/lib/flowchart.min",
        jqueryflowchart: 'package/editor.md/lib/jquery.flowchart.min',
        sequenceDiagram: 'package/editor.md/lib/sequence-diagram.min',
        katex: 'https://cdn.bootcss.com/KaTeX/0.10.0-alpha/katex.min',
        editormd: 'package/editor.md/editormd.amd',

    },
    shim: {
        hdjs: {
            deps: ["css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"]
        },
        simditor: {
            deps: [
                "jquery",
                "package/simditor/scripts/module",
                "package/simditor/scripts/hotkeys",
                "package/simditor/scripts/uploader",
                "css!package/simditor/simditor-fullscreen-master/styles/simditor-fullscreen.css",
                "css!package/simditor/styles/simditor.css",
                "css!package/simditor/styles/hdjs.css",
                "css!package/simditor/simditor-markdown/styles/simditor-markdown.css"
            ]
        },
        plupload: {
            exports: 'plupload'
        },
        highlight: {
            deps: ["css!package/highlight/dracula.min.css"]
        },
        editormd: {
            deps: [
                'underscore',
                "flowchart",
                "sequenceDiagram",
                "css!package/editor.md/css/editormd.css",
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
        webuploader: {
            deps: ['css!package/webuploader/css/webuploader.css']
        },
        prism: {
            deps: [
                'css!package/prism/prism.css'
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
    'axios'
], function ($, axios) {
    //全局错误定义
    $.ajaxSetup({
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            require(['hdjs'], function (hdjs) {
                if (XMLHttpRequest.responseJSON) {
                    if (XMLHttpRequest.responseJSON.message) {
                        hdjs.message(XMLHttpRequest.responseJSON.message);
                    } else {
                        hdjs.message(JSON.stringify(XMLHttpRequest.responseJSON));
                    }
                } else {
                    hdjs.message('网站忙碌，请稍候连接');
                }
            })
        }
    });
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    let token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        //为异步请求设置CSRF令牌
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token.content
            }
        });
    }
});
