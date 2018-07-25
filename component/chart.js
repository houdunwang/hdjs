//图表
define(['https://cdn.bootcss.com/Chart.js/2.7.2/Chart.bundle.min.js','lodash'], function (Chart,_) {
    return function (el, opt) {
        let options = _.assign({}, opt);
        return new Chart($(el), options);
    }
});