//图表
define(['https://cdn.bootcss.com/Chart.js/2.7.1/Chart.min.js'], function (Chart) {
    return function (el, opt) {
        var options = Object.assign({}, opt);
        return new Chart($(el), options);
    }
})