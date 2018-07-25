//剪贴板
define(['https://cdn.bootcss.com/clipboard.js/2.0.1/clipboard.min.js'], function (ClipboardJS) {
    return function (elem, options, callback) {
        console.log(elem)
        console.log(options)
        let clipboard = new ClipboardJS(elem,options);
        clipboard.on('success', callback);
    }
});