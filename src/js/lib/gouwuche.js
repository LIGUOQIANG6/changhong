let baseUrl = "http://localhost:8080/changhong/src";
define(['jquery'], function ($) {
    return {
        // // 测试
        ceshi: function () {
            console.log(89)
        },
        // 渲染页面开始
        render: function () {
            console.log(45)
            $.ajax({
                url: `${baseUrl}/lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(elm.pic);
                        // temp += `
                        // <div class="home-ele-f ">
                        //     <div class="home-ele-img">
                        //         <a href='http://localhost:8080/changhong/src/html/xiangqing-2.html' target="_blank">
                        //             <img data-echo="http://images.changhong.com/chgw/gwsy/syds/201703/W020190702673367874948_160.png"
                        //                 class="lazy" SRC="${baseUrl}/${pic[0].src}" alt="${pic[0].src}" />
                        //         </a>
                        //     </div>
                        //     <div class="home-ele-text" r3code="CH5012137">
                        //         <h1><a href='http://localhost:8080/changhong/src/html/xiangqing-2.html' target="_blank" title="65英寸 AI音响物联无边全面屏">${elm.title}</a>
                        //         </h1>
                        //         <p>${elm.details}</p>
                        //         <h2>￥${elm.price}</h2>
                        //     </div>
                        //     </div>
                        //     `;

                        temp += `
                                <div class="pro-addin-detail">
                                    <div class="pro-addin-detail-quan">
                                        <input type="checkbox" name="" id="">
                                    </div>
                                <div class="pro-addin-detail-rt">
                                    <div class="pro-addin-detail-rt-top">
                                        <span class="iconfont icon-chazishanchudaibiankuang icon-aixinll"></span>
                                        <span class="iconfont icon-aixin icon-aixinll"></span>
                                    </div>
                                    <div class="pro-addin-detail-rt-top-xia">
                                        <img src="./images/gouwu-01.jpg" width=110 height=110 alt="">
                                        <div class="meiling">
                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;美菱M鲜生BCD-506WQ3S十字对开冰箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                                    style="color: red;">8999.00</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有货
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            `;
                    });

                    $('.pro-addin').html(temp);
                    console.log($('.pro-addin'))
                }
            })
        },
        // 渲染页面结束
    }
})