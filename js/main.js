

$(document).ready(function () {

    const $window = $(window)
    const firstMenu = $('.gnb_tit')

    const header = $('.gnb_wrap .gnb_sub_tit_wrap')
    // console.log(header)
    firstMenu.mouseenter(function () {
     header.css({ display: "block" });
    })
    header.mouseleave(function () {
        header.css({ display: "none" });
    })


    new Swiper(".mybanner", {
        autoplay: true,
        loop: true,
        slidesPerView: 3,
        loopAdditionalSlides: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".s-button-next",
            prevEl: ".s-button-prev",
        },

    });

    // tab메뉴 
    const tabAnchor = $('.tabs-nav li a'), // console log해보면 배열들 나옴
    tabPanel = $('.tabCon')
    //링크를 클릭했을때 할 일
     tabAnchor.click(function(e){
        e.preventDefault();

        tabAnchor.removeClass('active'); //전체를 클리어해놓고
        $(e.currentTarget).addClass("active")//내가 선택한거 active된다 this로 적어줘도된다 

        tabPanel.hide(); //display:none;
        let target =$(this).attr('href')
        $(target).show();

     })
     tabAnchor.eq(0).trigger("click")




})


        $(function(){
  
            var embed = $('#player'); //동영상 코드
          
            $('.call_left').on('click', function(){ //레이어 열때
                var path = $(this).attr('href');
                $('.cont').append(embed);
                $(path).show();
                $('.dim').show();
            })
          
            $('.close').on('click', function(){ //레이어 닫을때
                $(this).parents('#layer').hide();
                $('.dim').hide();
                $('.cont').empty();
            })
          
          
        });

        let button =$('.notice_bottom_wrap .notice_box04 .call_left')
        target = $('.video-box')

button.click(function(){
  
 
    target.addClass('visible')
 
    
    })
    target.click(function(){
        target.removeClass('visible')
    })