require('./bootstrap');
import modal from './modules/modal'
import get from './modules/get'
import clipboard from './modules/clipboard'
import emotion from './modules/emotion'
import chart from './modules/chart'
import colorpicker from './modules/colorpicker'
import qrcode from './modules/qrcode'
import caret from './modules/caret'
import md5 from './modules/md5'
import cookie from './modules/cookie'
import datetimepicker from './modules/datetimepicker'
import notify from './modules/notify'
import daterangepicker from './modules/daterangepicker'
import clockpicker from './modules/clockpicker'
import moment from 'moment'
import message from './modules/message'
import confirm from './modules/confirm'
import loading from './modules/loading'
import 'bootstrap-filestyle'
import post from './modules/post'
import submit from './modules/submit'
import preview from './modules/preview'
import formValidator from 'jquery-form-validator'
import validator from 'validator'
import select2 from './modules/select2'
import bootstrapSwitch from './modules/bootstrapSwitch'
import fileUploader from './modules/fileUploader'
import ueditor from './modules/ueditor'
import font from './modules/font'
//图片上传
import image from './modules/image'
//文件上传
import file from './modules/file'
import map from './modules/map'
import address from './modules/address'
import validCode from './modules/validCode'
import oss from './modules/oss'

define([], function () {
    return {
        modal, get, clipboard, emotion, chart, colorpicker,
        qrcode, caret, md5, cookie,
        datetimepicker, notify, daterangepicker, clockpicker, moment,
        message, confirm, loading, post, submit, preview, formValidator, validator,
        select2, bootstrapSwitch, image, fileUploader, file,
        ueditor, font, map, address, validCode, oss
    }
})