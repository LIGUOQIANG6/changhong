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
            // 滚动条事件
            $(window).on('scroll', function () {
                // 获得当前页面距离滚动条顶部的高度
                var top = $(document).scrollTop();
                var i = 0;
                if (top >= 3400 && top < 3800) {
                    i = 5;
                    $('.xhome-fixl').css('display', 'block')
                } else if (top >= 3800) {
                    $('.xhome-fixl').css('display', 'none')
                } else if (top >= 2900) {
                    i = 4;
                } else if (top >= 2000) {
                    i = 3;
                } else if (top >= 1100) {
                    i = 2;
                } else if (top >= 650) {
                    i = 1;
                } else if (top < 650 && top > 500) {
                    i = 0;
                    $('.xhome-fixl').css('display', 'block')
                } else if (top < 500) {
                    $('.xhome-fixl').css('display', 'none')
                }
                $('.xhome-fixl>ul>li>a').removeClass('active');
                $('.xhome-fixl>ul>li>a:eq(' + i + ')').addClass('active');
            });
            // 就绪事件
            $(function () {
                var top = $(document).scrollTop();
                var i = 0;
                if (top >= 3400 && top < 3800) {
                    i = 5;
                    $('.xhome-fixl').css('display', 'block')
                } else if (top >= 3800) {
                    $('.xhome-fixl').css('display', 'none')
                } else if (top >= 2900) {
                    i = 4;
                } else if (top >= 2000) {
                    i = 3;
                } else if (top >= 1100) {
                    i = 2;
                } else if (top >= 650) {
                    i = 1;
                } else if (top < 650 && top > 500) {
                    $('.xhome-fixl').css('display', 'block')
                    i = 0;
                } else if (top < 500) {
                    $('.xhome-fixl').css('display', 'none')
                }
                $('.xhome-fixl>ul>li>a').removeClass('active');
                console.log($('.xhome-fixl>ul>li>a:eq(5)'))
                $('.xhome-fixl>ul>li>a:eq(' + i + ')').addClass('active');
            })
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
                                <a href='http://localhost:8080/changhong/src/html/xiangqing-2.html' target="_blank">
                                    <img data-echo="http://images.changhong.com/chgw/gwsy/syds/201703/W020190702673367874948_160.png"
                                        class="lazy" SRC="${baseUrl}/${pic[0].src}" alt="${pic[0].src}" />
                                </a>
                            </div>
                            <div class="home-ele-text" r3code="CH5012137">
                                <h1><a href='http://localhost:8080/changhong/src/html/xiangqing-2.html' target="_blank" title="65英寸 AI音响物联无边全面屏">${elm.title}</a>
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

        // 右侧悬浮框开始
        huidaodingbu: function () {
            // $(function () {
                // var link = $('huidaodingbu')
                // var top = document.documentElement.scrollTop;
                // if (top > 1500) {
                //     link.style.display = 'block';
                // } else {
                //     link.style.display = 'none';
                // }

                $('.huidaodingbu').on('click', function () {
                    console.log(89)
                    var timer = setInterval(function () {
                        console.log(58)
                        var top = document.documentElement.scrollTop;//不断的获取 
                        var speed = top / 10;//缓冲
                        if (top <= 0) {
                            clearInterval(timer);
                        }
                        document.documentElement.scrollTop = top - speed;//不断获取的新的top值-100
                    }, 5);
                });
                // link.onclick = function () {
                //     console.log(89)
                //     var timer = setInterval(function () {
                //         var top = document.documentElement.scrollTop;//不断的获取 
                //         var speed = top / 10;//缓冲
                //         if (top <= 0) {
                //             clearInterval(timer);
                //         }
                //         document.documentElement.scrollTop = top - speed;//不断获取的新的top值-100
                //     }, 5);
                // }
            // })
        },
        // 右侧悬浮框结束

    }
});