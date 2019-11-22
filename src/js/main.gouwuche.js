require.config({
    paths:{
        jquery:"./jquery.min",
        index:"./lib/gouwuche",
    },
    shim:{}
});
// 测试
require(['jquery','index'],function($,index){
    index.ceshi();
});
// 页面渲染
require(['jquery','index'],function($,index){
    index.render();
});