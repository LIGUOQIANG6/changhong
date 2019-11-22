require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/index",
        jquerylun: "./jquery-lun",
        jquerylazyloadmin: "jquery.lazyload",
    },
    shim: {
        jquerylun: ['jquery'],
        jquerylazyloadmin: ['jquery']
    }
});

// require(['jquery','index'],function($,index){
//     index.render();
// });
// 测试
require(['jquery', 'index'], function ($, index) {
    index.abb();
});

// 楼梯
require(['jquery', 'index'], function ($, index) {
    index.louti();
});

// 轮播图
require(['jquery', 'jquerylun'], function ($, lb) {
    $(".i-banner-vis").lun();
});

// 页面渲染
require(['jquery', 'index'], function ($, index) {
    index.render();
});

//右侧悬浮回顶部
require(['jquery', 'index'], function ($, index) {
    index.huidaodingbu();
});


//图片懒加载
require([' jquery', ' jquerylazyloadmin'], function ($, j1) {
        $(" img. lazy"). lazyload({effect: "fadeIn" });
        // $("img").lazyload({ effect: "fadeIn" });
});