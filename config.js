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
        vue: 'package/vue.min',
        scrollTo: 'package/jquery.scrollTo.min',
        Aliplayer: 'package/aliplayer-min',
        //微信JSSDK
        jweixin: 'http://res.wx.qq.com/open/js/jweixin-1.2.0',
        //百度编辑器
        ueditor: 'package/ueditor/ueditor.all',
        //代码高亮
        prism: 'package/prism/prism',
        //剪贴版
        ZeroClipboard: 'packageZeroClipboard.min',
        //JS验证
        validator: 'package/validator.min',
        //上传组件
        webuploader: 'package/webuploader/dist/webuploader',
        bootstrap: 'package/bootstrap.bundle.min',
        lodash: 'package/lodash.min',
        moment: 'package/moment.min',
        oss: "component/oss",
        "jquery-mousewheel": "package/jquery.mousewheel.min",
        jquery: "package/jquery.min",
        axios: "package/axios.min",
        codemirror: "package/codemirror.min",
        plupload: "package/plupload/plupload.full.min",
        simditor: "package/simditor/scripts/simditor",
        "simditor-fullscreen": "package/simditor/simditor-fullscreen-master/lib/simditor-fullscreen",
        "marked": "package/marked.min",
        "to-markdown": "package/to-markdown.min",
        "simditor-markdown": "package/simditor/simditor-markdown/lib/simditor-markdown",
        "simditor-dropzone": "package/simditor/simditor-dropzone/lib/simditor-dropzone",
        "simple-module": "package/simditor/scripts/module",
        DPlayer: "package/dplayer/DPlayer.min",
        highlight: "package/highlight.min",
        MarkdownIt: "package/markdown-it.min",
        //editor.md
        prettify: 'package/prettify.min',
        raphael: 'package/editor.md/lib/raphael.min',
        underscore: 'package/underscore-min',
        flowchart: "package/editor.md/lib/flowchart.min",
        jqueryflowchart: 'package/editor.md/lib/jquery.flowchart.min',
        sequenceDiagram: 'package/editor.md/lib/sequence-diagram.min',
        katex: 'package/katex.min',
        editormd: 'package/editor.md/editormd.amd',
    },
    shim: {
        hdjs: {
            deps: ["css!package/css/font-awesome.min.css"]
        },
        DPlayer: {
            deps: ["css!https://cdn.bootcss.com/dplayer/1.22.2/DPlayer.min.css"]
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
            deps: ["css!package/css/androidstudio.min.css"]
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
    window.$ = window.jQuery = $
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
