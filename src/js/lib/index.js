let baseUrl = "http://localhost:8080/changhong/src";

define(['jquery'], function ($) {
    return {
        // 测试
        abb: function () {
            console.log(456)
        },


        // 楼梯开始
        louti: function () {
            console.log($('.xhome-fixl>ul>li>a'))
            $('.xhome-fixl>ul>li>a').on('click', function () {
                // 元素距离页面顶部的高度
                console.log(this)
                console.log($('.' + $(this).attr('title')))
                var top = $('.' + $(this).attr('title')).offset().top;

                $('html,body').animate({
                    scrollTop: top
                }, 600);
            });
            $(window).on('scroll', function () {
                // 获得当前页面距离滚动条顶部的高度
                var top = $(document).scrollTop();
                var i = 0;
                if (top >= 3600) {
                    i = 5;
                } else if (top >= 2900) {
                    i = 4;
                } else if (top >= 2000) {
                    i = 3;
                } else if (top >= 1100) {
                    i = 2;
                } else if (top >= 810) {
                    i = 1;
                } else if (top < 500) {
                    $('.xhome-fixl').css('display', 'none')
                } else if (top > 500) {
                    $('.xhome-fixl').css('display', 'block')
                }
                $('.xhome-fixl>ul>li>a').removeClass('active');
                console.log($('.xhome-fixl>ul>li>a:eq(5)'))
                $('.xhome-fixl>ul>li>a:eq(' + i + ')').addClass('active');
            });
        },
        // 楼梯结束

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
                        <div class="home-ele-f ">
                            <div class="home-ele-img">
                                <a href='javascript:;' target="_blank">
                                    <img data-echo="http://images.changhong.com/chgw/gwsy/syds/201703/W020190702673367874948_160.png"
                                        class="lazy" SRC="${baseUrl}/${pic[0].src}" alt="${pic[0].src}" />
                                </a>
                            </div>
                            <div class="home-ele-text" r3code="CH5012137">
                                <h1><a href='javascript:;' target="_blank" title="65英寸 AI音响物联无边全面屏">${elm.title}</a>
                                </h1>
                                <p>${elm.details}</p>
                                <h2>￥${elm.price}</h2>
                            </div>
                            </div>
                            `;
                    });

                    $('.xuanrang').html(temp);
                    console.log($('.xuanrang'))
                }
            })
        },
        // 渲染页面结束

    }
});