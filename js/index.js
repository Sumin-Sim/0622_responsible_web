import $ from 'jquery';
$(function() {
    let windowW = $(window).width();
    if(windowW >= 1155) {
        sectionMove();
    } else if(windowW < 1155 && windowW >= 980) {
        sectionMove();
    } else if(windowW < 980 && windowW >= 580) {
        nav();
    } else if(windowW < 580) {
        nav();
    }
    // function
    function sectionMove() {
        $('nav>ul>li>a').on('click',function() {
            let section = $(this).attr('href');
            let sectionH = $(section).offset().top;
            let headerH = $('header').innerHeight();
            $('html, body').animate({scrollTop: sectionH - headerH}, 1000);

            return false;
        });
    }
        
    function nav() {
        const navW = $('nav').width();
        $('header>p.btn').on('click',function() {
            $(this).hide();
            $('nav').animate({left: '0px'});
        });
        $('nav>p.close').on('click',function() {
            $('header>p.btn').css('display','block');
            $('nav').animate({left: '-' + navW + 'px'});
        });
        $('nav>ul>li>a').on('click',function() {
            let section = $(this).attr('href');
            let sectionH = $(section).offset().top;
            let headerH = $('header').innerHeight();
            $('html, body').animate({scrollTop: sectionH - headerH}, 1000);

            $('header>p.btn').css('display','block');
            $('nav').animate({left: '-' + navW + 'px'});
        
            return false;
        });
    };
})