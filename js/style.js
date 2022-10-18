$(function () {
    // iframe連結
    $('.frame__01').attr('src', 'https://www.youtube.com/embed/pVESKftCaxw',)
    $('.frame__02').attr('src', 'https://www.youtube.com/embed/P-qiXAnDVDY',)
    $('.frame__03').attr('src', 'https://www.youtube.com/embed/_F6R-lq5BxI',)

    // 圖片被點選後更換上方影片
    $('.carousel__clickSize').click(function () {
        $(this).find('img').addClass('carousel__full--opacity')
        $(this).siblings().find('img').removeClass('carousel__full--opacity')
    })
    $('.carousel__clickSize').eq(0).click(function () {
        $('.frame__01').closest('.carousel__showSize').removeClass('all__disNone')
        $('.frame__01').closest('.carousel__showSize').siblings().addClass('all__disNone')
    })
    $('.carousel__clickSize').eq(1).click(function () {
        $('.frame__02').closest('.carousel__showSize').removeClass('all__disNone')
        $('.frame__02').closest('.carousel__showSize').siblings().addClass('all__disNone')
    })
    $('.carousel__clickSize').eq(2).click(function () {
        $('.frame__03').closest('.carousel__showSize').removeClass('all__disNone')
        $('.frame__03').closest('.carousel__showSize').siblings().addClass('all__disNone')
    })
})