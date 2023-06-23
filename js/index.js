import $ from 'jquery';
$(function() {
    let windowW = $(window).width();
    if(windowW >= 1155) {
        sectionMove();
    } else if(windowW < 1155 && windowW >= 980) {
        sectionMove();
    } else if(windowW < 980 && windowW >= 580) {
        nav();
        gallery();
    } else if(windowW < 580) {
        nav();
        gallery();
        form();
    }
})

// reload while screen size changing
$(window).on('resize',function() {
    window.location.reload();
});

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

//gallery
function gallery() {
    let figureW = $('div#all figure').width();
    let figureMW = $('div#all figure').outerWidth(true);

    $('div#all figure:last').prependTo('div#all');
    $('div#all').css('margin-left','-' + figureW + 'px');
    
    $('#gallery p.prev').on('click',function() {
        $('div#all').animate({marginLeft: '+=' + figureW + 'px'}, function() {
            $('div#all figure:last').prependTo('div#all');
            $('div#all').css('margin-left','-' + figureW + 'px');
        });
    });
    $('#gallery p.next').on('click',function() {
        $('div#all').animate({marginLeft: '-=' + figureW + 'px'}, function() {
            $('figure:first').appendTo('div#all');
            $('div#all').css('margin-left','-' + figureW + 'px');
        });
    });
}

// form label
function form() {
    const $formText = $('#box04 input, #box04 textarea');
    $formText.removeAttr('placeholder')
        .on('focus',function() {
            $(this).prev('label').fadeOut(200);
        })
        .on('blur',function() {
            if($(this).val() === '') {
                $(this).prev('label').fadeIn(200);
            }
        });
}

// 객체 만들기
function Modal(title,pic,year,program,url,text) {
    this.title = title,
    this.pic = pic,
    this.year = year,
    this.program = program,
    this.url = url,
    this.text = text;
}

Modal.prototype.action = function() {
    document.querySelector('#modal h4').innerHTML = this.title;
    document.querySelector('#modal figure>img').setAttribute('src',this.pic);
    document.querySelector('#modal figure>figcaption').innerHTML = this.title;
    document.querySelector('#modal dl>dd:nth-of-type(1)').innerHTML = this.year;
    document.querySelector('#modal dl>dd:nth-of-type(2)').innerHTML = this.program;
    document.querySelector('#modal dl>dd>a').setAttribute('href',this.url);
    document.querySelector('#modal dl>dd:nth-of-type(3)').innerHTML = this.url;
    document.querySelector('#modal dl>dd:nth-of-type(4)').innerHTML = this.text;
}

let mymodal = [
    new Modal('title01','./images/pic02.png','2001','프로그램1','http://www.1.com', 'text01'),
    new Modal('title02','./images/pic03.png','2002','프로그램2','http://www.2.com', 'text02'),
    new Modal('title03','./images/pic04.png','2003','프로그램3','http://www.3.com', 'text03'),
    new Modal('title04','./images/pic02.png','2004','프로그램4','http://www.4.com', 'text04'),
    new Modal('title05','./images/pic03.png','2005','프로그램5','http://www.5.com', 'text05'),
    new Modal('title06','./images/pic04.png','2006','프로그램6','http://www.6.com', 'text06')
]

$('#modal').css('display','none');

const btn = document.querySelectorAll('#box03 #all figure');
const modalClose = document.querySelector('#modal p.close');

btn.forEach(function(item,index) {
    item.addEventListener('click',function() {
        document.querySelector('#modal').style.display = 'flex';
        mymodal[index].action();
    })
})

modalClose.addEventListener('click',function() {
    $('#modal').css('display','none');
})