let baseUrl = "http://localhost:8080/changhong/src";

// define([
//     'jquery'
// ], function ($) {
//     return {
        // // 测试
        // ceshi: function () {
        //     console.log(89)
        // },
//         // 表单验证
//         yanzheng: function () {
//             // $.ajax({
//             //     url: `http://localhost:8080/diwuzhou/day26/code/lib/checkname.php`,
//             //     type: 'get',
//             //     dataType: 'json',
//             //     success: function (url, data) {
//             //         if (typeof data === 'object') {
//             //             url += "?time=" + Date.now();
//             //             for (let i in data) {
//             //                 url += "&" + i + "=" + data[i];
//             //             }
//             //         } else {
//             //             url += "?time=" + Date.now();
//             //         }
//             //         return new Promise((resolve, reject) => {
//             //             let xhr = new XMLHttpRequest();
//             //             xhr.open('get', url);
//             //             xhr.send();
//             //             xhr.onreadystatechange = function () {
//             //                 if (xhr.readyState == 4 && xhr.status == 200) {
//             //                     resolve(xhr.responseText);
//             //                 }
//             //                 setTimeout(() => {
//             //                     reject(new Error('连接超时'));
//             //                 }, 2000);
//             //             }
//             //         })
//             //     }
//             // })
//             // ******
//             $(function () {
//                 $("#username").on('blur', function () {
//                     $.ajax({
//                         url: "./php/hasuser.php",
//                         type: 'post',
//                         dataType: 'json',
//                         data: {
//                             username: $(this).val()
//                         }
//                     }).done(function (data) {
//                         console.log(data);
//                         if (data.has) {
//                             $(".username").css("color", "red");
//                             alert('该手机号码已注册，请直接登录')
//                         } else {
//                             $(".username").css("color", "#fff");
//                         }
//                     })
//                 });
//             });
//             $(function () {
//                 var inp = document.querySelectorAll('#myform>input');
//                 var submit = inp[inp.length - 1];
//                 var ospan = document.querySelectorAll('#myform>span');
//                 var pass = document.querySelector('#pass');
//                 var password = document.querySelector('#password');
//                 var p = document.querySelector('.pass');

//                 var reg = {
//                     // "username": /^[A-z]\w{5,15}$/,
//                     "password": /^.{6,16}$/,
//                     // "email": /^\w{6,16}@[A-z0-9-]{2,}\.[A-z]{2,}\.?[A-z]*$/,
//                     "phone": /^1[3-9]\d{9}$/
//                 };

//                 inp = Array.from(inp); //转换成数组
//                 inp.forEach((elm, i) => {
//                     if (elm.id == 'pass' || !elm.id) { // 确认密码 或 提交按钮 跳过
//                         return; //终止执行
//                     }
//                     elm.onkeyup = function () {
//                         if (reg[this.id].test(this.value)) {
//                             ospan[i].innerHTML = "通过验证";
//                             ospan[i].style.color = "green";
//                             this.dataset.pass = true;
//                         } else {
//                             ospan[i].innerHTML = "验证失败,请从新输入";
//                             ospan[i].style.color = "red";
//                             this.dataset.pass = false;
//                         }
//                         check();
//                     }
//                 });

//                 pass.onkeyup = function () {
//                     if (this.value === password.value) {
//                         p.innerHTML = "通过验证";
//                         p.style.color = "green";
//                         this.dataset.pass = true;
//                     } else {
//                         p.innerHTML = "验证失败,请从新输入";
//                         p.style.color = "red";
//                         this.dataset.pass = false;
//                     }
//                     check();
//                 }

//                 function check() {
//                     var allPass = document.querySelectorAll('#myform>input[data-pass="true"]');
//                     // console.log(allPass.length);
//                     if (allPass.length == 5) {
//                         submit.removeAttribute('disabled');
//                     }
//                 }

//             });
//             // **********

//         }
//     }
// });

// ************************
// icon-duihaocheckmark17
define(['jquery', 'jquery.md5'], function ($,md5) {
    return {

        keyup: function () {
            var regx = [/^1[3-9]\d{9}$/, /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, /^3pfy$/i, /^8888$/];

            $("form").on('keyup', "input", function (ev) {
                var target = ev.target.id;
                console.log($('form>.icon-duihaocheckmark17'))
                switch (target) {
                    case "username":

                        if (regx[0].test($(this).val())) {

                            $(`form>.${target}`).html('&nbsp;')
                            $('form>.icon-duihaocheckmark17').eq(0).removeClass("block");
                            console.log($('form>.icon-duihaocheckmark17'))


                        } else {
                            console.log($('form>.icon-duihaocheckmark17'))
                            $('form>.icon-duihaocheckmark17').eq(0).addClass("block");
                            $(`form>.${target}`).html('<span class="iconfont icon-chazishanchudaibiankuang"></span>&nbsp;&nbsp;&nbsp;&nbsp;手机号码格式不正确')
                        }
                        break;
                    case "password":
                        if (regx[1].test($(this).val())) {
                            $(`form>.${target}`).html('&nbsp;')
                            $('form>.icon-duihaocheckmark17').eq(1).removeClass("block");
                            console.log($('form>.icon-duihaocheckmark17').eq(1))
                        } else {

                            $('form>.icon-duihaocheckmark17').eq(1).addClass("block");
                            $(`form>.${target}`).addClass('red').html('<span class="iconfont icon-chazishanchudaibiankuang"></span>&nbsp;&nbsp;&nbsp;&nbsp;密码格式不对')
                        }
                        break;
                    case "pass":
                        if ($(this).val() === $('form>#password').val()) {
                            $(`form>.${target}`).html('&nbsp;')
                            $('form>.icon-duihaocheckmark17').eq(2).removeClass("block");
                        } else {

                            $('form>.icon-duihaocheckmark17').eq(2).addClass("block");
                            $(`form>.${target}`).html('<span class="iconfont icon-chazishanchudaibiankuang"></span>&nbsp;&nbsp;&nbsp;&nbsp;两次输入密码不一致')
                        }
                        
                        break;
                    case "shape":
                        if (regx[2].test($(this).val())) {
                            $(`form>.${target}`).html('&nbsp;')
                            $('form>.icon-duihaocheckmark17').eq(3).removeClass("block");
                        } else {

                            $('form>.icon-duihaocheckmark17').eq(3).addClass("block");
                            $(`form>.${target}`).html('<span class="iconfont icon-chazishanchudaibiankuang"></span>&nbsp;&nbsp;&nbsp;&nbsp;验证码错误')
                        }
                        break;
                    case "msg":
                        if (regx[3].test($(this).val())) {
                            $(`form>.${target}`).html('&nbsp;')
                            $('form>.icon-duihaocheckmark17').eq(4).removeClass("block");
                        } else {

                            $('form>.icon-duihaocheckmark17').eq(4).addClass("block");
                            $(`form>.${target}`).html('<span class="iconfont icon-chazishanchudaibiankuang"></span>&nbsp;&nbsp;&nbsp;&nbsp;验证码错误')
                        }
                        break;

                }

            })
        },
        regEv: function () {
            $("form>button").on('click', function () {
                if (Array.from($("form>.block")).length) {
                    alert('请按格式填写表单');
                } else {
                    $.ajax({
                        url: 'http://localhost:8080/changhong/src/php/checkname.php',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            username: $('#username').val(),
                            password: $.md5($('#password').val())
                        },
                        success: function (res) {
                            alert(res['msg']);
                            if(res['msg']='注册成功'){
                                location.href="./shouye.html"
                            }
                        }
                    });
                }
            })
        }

    }
});
// ************************


// define(['jquery', 'md5'], function ($, md5) {
//     return {
//         keyup: function () {
//             var regx = [/^1\d{10}$/, /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, /^4ffe$/, /^\d{6}/];

//             $("form").on('keyup', "input", function (e) {
//                 var target = e.target.id;

//                 switch (target) {
//                     case "username":

//                         if (regx[0].test($(this).val())) {
//                             $(`form>.${target}`).html('&nbsp;')
//                             $('form>.icon-dui').eq(0).removeClass("block");


//                         } else {

//                             $('form>.icon-dui').eq(0).addClass("block");
//                             $(`form>.${target}`).html('<span class="iconfont icon-cuo"></span>&nbsp;&nbsp;&nbsp;&nbsp;手机号码不正确')
//                         }
//                         break;
//                     case "password":
//                         if (regx[1].test($(this).val())) {
//                             $(`form>.${target}`).html('&nbsp;')
//                             $('form>.icon-dui').eq(1).removeClass("block");
//                         } else {

//                             $('form>.icon-dui').eq(1).addClass("block");
//                             $(`form>.${target}`).addClass('red').html('<span class="iconfont icon-cuo"></span>&nbsp;&nbsp;&nbsp;&nbsp;密码格式不对')
//                         }
//                         break;
//                     case "pass":
//                         if ($(this).val() === $('form>#password').val()) {
//                             $(`form>.${target}`).html('&nbsp;')
//                             $('form>.icon-dui').eq(2).removeClass("block");
//                         } else {

//                             $('form>.icon-dui').eq(2).addClass("block");
//                             $(`form>.${target}`).html('<span class="iconfont icon-cuo"></span>&nbsp;&nbsp;&nbsp;&nbsp;两次输入密码不一致')
//                         }
//                         break;
//                     case "shape":
//                         if (regx[2].test($(this).val())) {
//                             $(`form>.${target}`).html('&nbsp;')
//                             $('form>.icon-dui').eq(3).removeClass("block");
//                         } else {

//                             $('form>.icon-dui').eq(3).addClass("block");
//                             $(`form>.${target}`).html('<span class="iconfont icon-cuo"></span>&nbsp;&nbsp;&nbsp;&nbsp;验证码错误')
//                         }
//                         break;
//                     case "msg":
//                         if (regx[3].test($(this).val())) {
//                             $(`form>.${target}`).html('&nbsp;')
//                             $('form>.icon-dui').eq(4).removeClass("block");
//                         } else {

//                             $('form>.icon-dui').eq(4).addClass("block");
//                             $(`form>.${target}`).html('<span class="iconfont icon-cuo"></span>&nbsp;&nbsp;&nbsp;&nbsp;验证码错误')
//                         }
//                         break;

//                 }

//             })
//         },
//         regEv: function () {
//             $("form>button").on('click', function () {
//                 if (Array.from($("form>.block")).length) {
//                     alert('请按格式填写表单');
//                 } else {
//                     $.ajax({
//                         url: 'http://localhost:8080/kepeng/changhong.com/src/lib/reg.php',
//                         type: 'post',
//                         dataType: 'json',
//                         data: {
//                             username: $('#username').val(),
//                             password: $.md5($('#password').val())
//                         },

//                         success: function (res) {
//                             alert(res['msg']);
//                         }
//                     });
//                 }
//             })
//         }

//     }
// })
