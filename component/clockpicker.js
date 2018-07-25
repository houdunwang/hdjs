//时间选择
define([
    'jquery',
    'https://cdn.bootcss.com/clockpicker/0.0.7/jquery-clockpicker.js',
    'css!https://cdn.bootcss.com/clockpicker/0.0.7/jquery-clockpicker.css'
], function ($) {
    return function (el, options) {
        return $(el).clockpicker(options);
    }
})