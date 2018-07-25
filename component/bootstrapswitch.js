define([
    'https://cdn.bootcss.com/bootstrap-switch/4.0.0-alpha.1/js/bootstrap-switch.min.js',
    'css!https://cdn.bootcss.com/bootstrap-switch/4.0.0-alpha.1/css/bootstrap-switch.min.css'
], function () {
    return function (el) {
        return $(el).bootstrapSwitch();
    }
})