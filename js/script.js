'use strict';

{
    $('.menu').on('click', function () {
        $('.menu_line').toggleClass('active');
        $('.gnav').toggleClass('open');
        $('.gnav_menu_item').toggleClass('gnav_menu_item_open');
        $('.smart-header').toggleClass('smart-header-opacity');
    });

    $('.gnav_menu_item a').on('click', function () {
        $('.menu_line').toggleClass('active');
        $('.gnav').toggleClass('open');
        $('.gnav_menu_item').toggleClass('gnav_menu_item_open');
        $('.smart-header').toggleClass('smart-header-opacity');
    })

    jQuery(function ($) {
        $('.fixed-bg').bgSwitcher({
            images: ['photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg'], // 切替背景画像を指定
            interval: 5500, // 背景画像を切り替える間隔を指定 3000=3秒
            loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
            shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
            effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            duration: 2800, // エフェクトの時間を指定します。
            easing: "swing" // エフェクトのイージングをlinear,swingから指定
        });
    });

}
