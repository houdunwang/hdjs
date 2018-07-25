define([
    'https://cdn.bootcss.com/select2/4.0.6-rc.1/js/select2.min.js',
    'css!https://cdn.bootcss.com/select2/4.0.6-rc.1/css/select2.min.css'
], function () {
    return function (el) {
        return $(el).select2();
    }
})