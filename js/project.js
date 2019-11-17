$(function() {
    $('#toggle').click(function () {
        //1号可见 则隐藏1号 显示2号 下反
        if ($('#content1').is(':visible')) {
            $('#content1').hide();
            $('#content2').show();
            $('#sub-scroll-bar').css('transform', 'translateY(233%)');
        } else {
            $('#content1').show();
            $('#content2').hide();
            $('#sub-scroll-bar').css('transform', 'translateY(0)');
        }
    })
});