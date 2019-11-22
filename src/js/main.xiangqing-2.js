require.config({
    paths: {
        jquery: "./jquery.min",
        details: "./lib/xiangqing-2",
        cookie: "./lib/cookie"
    },
    shim: {}
})

// require(['jquery', 'details', 'cookie'], function($, details) {

//     details.render(function(id, price) {
//         $('.addCar>span').on('click', function() {
//             details.addCar(id, price, $('.shopNum').val());
//         })

//     });
//     details.tabs();
//     details.shops();
// })

// 页面渲染
require(['jquery','details'],function($,index){
    index.render();
});