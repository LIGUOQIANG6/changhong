require.config({
    paths:{
        jquery:"./jquery.min",
        index:"./lib/index",
        jquerylun:"./jquery-lun",
    },
    shim:{
        jquerylun:['jquery']
    }
});

// require(['jquery','index'],function($,index){
//     index.render();
// });
// 测试
require(['jquery','index'],function($,index){
    index.abb();
});

// 楼梯
require(['jquery','index'],function($,index){
    index.louti();
});

// 轮播图
require(['jquery','jquerylun'],function($,lb){
    $(".i-banner-vis").lun();
});

// 页面渲染
require(['jquery','index'],function($,index){
    index.render();
});