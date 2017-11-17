/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
window.hdjs = Object.assign({
    node_modules: '', base: '/node_modules/hdjs', uploader: '', filesLists: '', hdjs: ''
}, window.hdjs);

require.config({
    urlArgs: 'version=1.2.82',
    baseUrl: window.hdjs.base,
    paths: {
        hdjs: window.hdjs.base + '/dist/hdjs',
        // hdjs: 'http://houdunwang.oss-cn-hangzhou.aliyuncs.com/hdjs/hdjs',
        css: window.hdjs.base + '/dist/static/requirejs/css.min',
        domReady: window.hdjs.base + '/dist/static/requirejs/domReady',
        vue: 'https://cdn.bootcss.com/vue/2.4.2/vue',
        Aliplayer: 'http://g.alicdn.com/de/prismplayer/2.0.1/aliplayer-min',
        //代码高亮
        prism: window.hdjs.base + '/dist/static/prism/prism',

        //markdown编辑器edit.md设置
        jquery: "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
        marked: "dist/static/editor.md/lib/marked.min",
        prettify: "dist/static/editor.md/lib/prettify.min",
        raphael: "dist/static/editor.md/lib/raphael.min",
        underscore: "dist/static/editor.md/lib/underscore.min",
        flowchart: "dist/static/editor.md/lib/flowchart.min",
        jqueryflowchart: "dist/static/editor.md/lib/jquery.flowchart.min",
        sequenceDiagram: "dist/static/editor.md/lib/sequence-diagram.min",
        katex: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min",
        codemirror: "https://cdn.bootcss.com/codemirror/5.31.0/codemirror",
        editormd: "dist/static/editor.md/lib/../editormd.amd"
    },
    shim: {
        hdjs: {
            deps: ['css!dist/hdjs.css']
        },
        prism: {
            deps: [
                'css!' + window.hdjs.base + '/dist/static/prism/prism.css'
            ]
        },
        editormd: {
            deps: [
                // "editormd",
                "css!dist/static/editor.md/css/editormd.min.css",
                "css!dist/static/editor.md/lib/codemirror/codemirror.min.css"
            ]
        }
    },
    waitSeconds: 30
});
window.hdjs.editormd = [
    "editormd",
    window.hdjs.base + "/dist/static/editor.md/languages/zh-tw",
    window.hdjs.base + "dist/static/editor.md/plugins/link-dialog/link-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/reference-link-dialog/reference-link-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/image-dialog/image-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/code-block-dialog/code-block-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/table-dialog/table-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/emoji-dialog/emoji-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/goto-line-dialog/goto-line-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/help-dialog/help-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/html-entities-dialog/html-entities-dialog",
    window.hdjs.base + "dist/static/editor.md/plugins/preformatted-text-dialog/preformatted-text-dialog"
]










