require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/denglu",
    },
    shim: {}
});
// 测试
require(['jquery', 'index'], function ($, index) {
    index.ceshi();
    index.regEv();
});
// 登录
require(['jquery', 'index'], function ($, index) {
    
});