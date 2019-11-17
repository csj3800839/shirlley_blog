$(function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    let boundary = 0.33;

    document.getElementById('head-bg').onmousewheel = function (e) {
        scrollWheel(e)
    };
    document.getElementById('head-title').onmousewheel = function (e) {
        scrollWheel(e)
    };
    document.getElementById('container').onmousewheel = function (e) {
        scrollWheel(e)
    };
    function scrollWheel(e) {

        let bg = $('#head-bg');
        let tip = $('#tip');
        let share = $('#share');
        let bg_width = parseInt(bg.css('width'));//黑色部分宽度
        let body_width = parseInt($('body').css('width'));

        let width_pecent = bg_width/body_width;//黑色部分的宽度占比
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop;

        //右滑scroll提示的显示与隐藏
        if (width_pecent >= 1) {
            tip.fadeIn();
        } else {
            tip.fadeOut();
        }
        //右上角图标显示与隐藏
        let scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        if (scrollTop/scrollHeight === 0.5 ) {
            share.fadeIn();
        } else {
            share.fadeOut();
        }

        if (width_pecent > boundary) {
            //滑到顶时 不再增加宽度
            if (scrollTop > 0) {
                return;
            }
            if (navigator.userAgent.toLowerCase().indexOf('msie') >= 0) {
                event.returnValue = false;
            } else {
                e.preventDefault();
            }

            width_pecent *= 100;
            //往下滑 减少宽度
            if (e.deltaY > 0) {
                width_pecent -= 1;
            }
            //往上滑
            if (e.deltaY < 0) {
                width_pecent += 1;
                if (width_pecent > 100) {
                    width_pecent = 100;
                }
            }

            bg.css('width', width_pecent+'%');
            width_pecent = 100 - width_pecent;
            $('#head-title').css('background-image', 'linear-gradient(to right, #81a3a7 '+width_pecent+'%, #fff 0%)');
        } else {
            if (scrollTop === 0) {
                //往上滑
                if (e.deltaY < 0) {

                    width_pecent *= 100;
                    width_pecent += 1;

                    bg.css('width', width_pecent+'%');
                    width_pecent = 100 - width_pecent;
                    $('#head-title').css('background-image', 'linear-gradient(to right, #81a3a7 '+width_pecent+'%, #fff 0%)');
                    e.preventDefault();
                }
            }
        }
    }

});



