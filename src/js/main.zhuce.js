require.config({
    paths:{
        jquery:"./jquery.min",
        index:"./lib/zhuce",
    },
    shim:{}
});
// 测试
// require(['jquery','index'],function($,index){
//     index.ceshi();
// });
// 表单验证开始
// require(['jquery','index'],function($,index){
//     index.yanzheng();
// });
require(['jquery','index'],function($,index){
    index.keyup();
});
require(['jquery','index'],function($,index){
    index.regEv();
});
// 表单验证结束