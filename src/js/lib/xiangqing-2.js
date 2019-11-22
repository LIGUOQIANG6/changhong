let baseUrl = "http://localhost:8080/changhong/src";

define(['jquery', 'cookie'], function ($, cookie) {
    return {
        // 详情页渲染页面
        // render: function(callback) {
        //     let id = location.search.split('=')[1];
        //     $.ajax({
        //         type: "get",
        //         url: `${baseUrl}/lib/getall.php`,
        //         data: {
        //             id: id
        //         },
        //         dataType: "json",
        //         success: function(elm) {
                    // $('.big').append(`<img src="../img/T-${elm.id}.jpg" alt="">`);
                    // $('.details-box>div').prepend(`
                    //         <ul>
                    //             <div>
                    //                 <p>${elm.title}</p>
                    //                 <span>一级能效 节能好颜</span>
                    //             </div>
                    //             <a href="">加入对比</a>
                    //         </ul>
                    //         <ul>
                    //             <span>
                    //                 ￥${elm.price}
                    //             </span>
                    //         </ul>
                    // `);
            //         callback && callback(elm.id, elm.price);
            //     }
            // });


        // },

        // 渲染页面开始
        // render: function () {
        //     console.log(45)
        //     $.ajax({
        //         url: `${baseUrl}/lib/getall.php`,
        //         type: 'get',
        //         dataType: 'json',
        //         success: function (res) {
        //             console.log(res);
        //             let temp = '';
        //             res.forEach(elm => {
        //                 let pic = JSON.parse(elm.pic);
        //                 console.log(elm.pic);
        //                 temp += `
        //                 <div class="home-ele-f ">
        //                     <div class="home-ele-img">
        //                         <a href='javascript:;' target="_blank">
        //                             <img data-echo="http://images.changhong.com/chgw/gwsy/syds/201703/W020190702673367874948_160.png"
        //                                 class="lazy" SRC="${baseUrl}/${pic[1].src}" alt="${pic[1].src}" />
        //                         </a>
        //                     </div>
        //                     <div class="home-ele-text" r3code="CH5012137">
        //                         <h1><a href='javascript:;' target="_blank" title="65英寸 AI音响物联无边全面屏">${elm.title}</a>
        //                         </h1>
        //                         <p>${elm.details}</p>
        //                         <h2>￥${elm.price}</h2>
        //                     </div>
        //                     </div>
        //                     `;
        //             });

        //             $('.xuanrang').html(temp);
        //             console.log($('.xuanrang'))
        //         }
        //     })
        // },
        // 渲染页面结束
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
                        temp += `
                        <div>
                    <div class="big big-left">
                        <!-- 89 -->
                        <img src="${baseUrl}/${pic[2].src}" alt="">
                        <span></span>
                    </div>

                    

                    <div class="big big-rigth">

                    </div>
                    <div class="sm">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span><img src="../images/TV-01.jpg" alt=""></span>
                        <span><img src="../images/TV-01.jpg" alt=""></span>
                        <span><img src="../images/TV-01.jpg" alt=""></span>
                        <span><img src="../images/TV-01.jpg" alt=""></span>
                        <span><img src="../images/TV-01.jpg" alt=""></span>
                        <span class="glyphicon glyphicon-chevron-right"></span>

                    </div>
                </div>

                <div class="details-box">
                    <div>
                        <ul>
                            <div>
                                <p>${elm.title}</p>
                                <span>一级能效 节能好颜</span>
                            </div>
                            <a href="">加入对比</a>
                        </ul>
                        <ul>
                            <span>
                                ￥${elm.price}
                            </span>
                        </ul>
                        <ul>
                            <p>
                                <span>配送地址:</span>
                                <span>省 / 市 / 县 &nbsp;&nbsp; </span>
                            </p>
                            <p>服务信息： 由长虹官方发货，并提供售后服务</p>
                        </ul>
                        <ul>
                            <p>
                                <span>商品数量：</span>
                                <span class="shoping">
                                    <span>-</span>
                                    <input type="text" value="1" class="shopNum">
                                    <span>+</span>
                                </span>
                            </p>
                            <p class="addCar">
                                <span><a href="shopCar.html">立即购买</a></span>
                                <span>加入购物车</span>
                            </p>
                        </ul>
                        <p>
                            <span class="iconfont iconerji"><a href="">在线客服</a></span>
                            <span class="iconfont iconshoucang1"><a href="">收藏</a></span>
                            <span class="iconfont iconfenxiang1"><a href="">分享</a></span>
                            <span><a href="">
                                    <s class="iconfont iconweibo " style="color: rgb(223, 69, 22);"></s>
                                    <s class="iconfont iconweixin" style="color: rgb(73, 211, 18);"></s>
                                    <s class="iconfont iconzhifubao" style="color: rgb(22, 133, 223);"></s>
                                    <s class="iconfont iconQQ" style="color: rgb(22, 183, 223);"></s>
                                </a></span>
                        </p>
                    </div>
                </div>
                            `;
                    });

                    $('.details-main-top').html(temp);
                    console.log($('.details-main-top'))
                }
            })
        },
        // 渲染页面结束


        // 下菜单选项卡功能
        tabs: function () {
            $('.glyphicon-th-list').on('click', function () {

                $(this).toggleClass('gtl');
                $('.banner-nav').toggleClass('gtl-nav');

            })

            $('.details-pt>.wrapper>div>ul>span').on('click', function () {

                $(this).addClass('active').siblings().removeClass('active');
            })

            // 商品放大镜

        },

        // 加减商品数量功能

        shops: function () {
            $('.shoping>span').on('click', function () {
                var count = $(this).siblings().val();

                if ($(this).text() == '-') {
                    count--;
                    // console.log(count);
                } else {
                    count++;
                }

                $(this).siblings().val(count);
                if ($(this).siblings().val() < 1) {
                    count = 1;
                    $(this).siblings().val(count);
                } else if ($(this).siblings().val() > 12) {
                    count = 12;
                    $(this).siblings().val(count);
                }
            })
        },

        // 加入购物车（利用cookie记入数据,存入JSON字符串）
        addCar: function (id, price, num) {
            let shop = cookie.get('shop');

            let addPrice = price;
            // 将数据存放成一个对象，为一条完整的数据
            let shopData = {
                id: id,
                price: addPrice,
                num: num
            }

            // 有shop数据就进行修改操作，没有就进行添加操作
            if (shop) {
                shop = JSON.parse(shop);

                // 判断是否有相同数据，如果有就修改num的值
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    })
                } else {
                    shop.push(shopData);
                }

            } else {
                shop = [];
                shop.push(shopData);
            }

            cookie.set('shop', JSON.stringify(shop), 1)

            $('body').append('<script>alert("已加入购物车")</script>');
        }

    }
})