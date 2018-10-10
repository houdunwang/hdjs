define([
    'package/swiper.js',
    'css!package/css/swiper.min.css'
], function (Swiper) {
    return function (el, options) {
        new Swiper(el, options);
    }
})