define(['hdjs','ZeroClipboard', 'jquery', 'component/fileUploader', 'ueditor'], function (hdjs,ZeroClipboard, $, fileUploader) {
    return function (id, opt, callback, buttons) {
        window['ZeroClipboard'] = ZeroClipboard;
        var options = $.extend({
            UEDITOR_HOME_URL: window.hdjs.base + '/package/ueditor/',
            serverUrl: window.hdjs.ueditor,
            'elementPathEnabled': false,
            // 'initialFrameHeight': 200,
            'focus': false,
            'maximumWords': 9999999999999,
            'autoClearinitialContent': false,
            'toolbars': [[
                'fullscreen', 'source', '|', 'undo', 'redo', '|',
                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript',
                'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor',
                'backcolor', 'hdimage', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                'emotion', 'music', 'attachment', 'map', 'insertframe', 'insertcode','|',
                'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol',
                'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts'
            ]],
            autoHeightEnabled: false,//自动增高
            autoFloatEnabled: false,
        }, opt);
        var editor = UE.getEditor(id, options);
        UE.commands['hdimage'] = {
            execCommand: function (cmdName, align) {
                var This = this;
                fileUploader.show(function (imgs) {
                    if (imgs.length > 0) {
                        var imglist = [];
                        for (i in imgs) {
                            imglist.push({
                                'src': imgs[i],
                                'max-width': '100%',
                            });
                        }
                        This.execCommand('insertimage', imglist);
                    }
                }, {type: 'image', multiple: true, extensions: 'gif,jpg,jpeg,bmp,png',width:'800px',data:{csrf_token:''}});
            }
        };
        if ($.isFunction(callback)) {
            return callback(editor);
        }
        return editor;
    }
})