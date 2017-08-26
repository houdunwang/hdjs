//提交表单
import Message from './message'

export default (opt) => {
    var options = $.extend({
        el: 'form',
        url: window.system ? window.system.url : '',
        data: '',
        successUrl: 'back',
        callback: '',
    }, opt);
    var data = options.data == '' ? $(options.el).serialize() : options.data;
    $('[type="submit"]').attr('disabled', 'disabled');
    $.ajax({
        url: options.url,
        type: 'post',
        cache: false,
        data: data,
        dataType: "json",
        success: function (json) {
            $('[type="submit"]').removeAttr('disabled');
            if (_.isObject(json)) {
                if ($.isFunction(options.callback)) {
                    options.callback(json);
                } else {
                    if (json.valid == 1) {
                        Message(json.message, options.successUrl, 'success');
                    } else {
                        Message(json.message, '', 'info');
                    }
                }
            } else {
                Message(json, '', 'error');
            }
        }
    });
    return false;
}