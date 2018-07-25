//消息通知
define([
    'jquery',
    'https://cdn.bootcss.com/mouse0270-bootstrap-notify/3.1.7/bootstrap-notify.min.js',
], function ($) {
    return function (options, settings) {
        return $.notify(options, settings);
    }
})