//剪贴板
define(['https://cdn.bootcss.com/clipboard.js/1.7.1/clipboard.min.js'], function (Clipboard) {
    return function (elem, callback) {
        return new Clipboard(elem, callback).on('success', callback);
    }
})