// 휠이벤트
$(document).ready(function () {

    var ht = $(window).height();
    $('.w_box').height(ht);
   
    $(window).on('resize', function () {
        var ht = $(window).height();
        $('.w_box').height(ht);
    });
    
    $('.w_box').on('mousewheel', function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({ 'scrollTop': prev }, 1000, 'easeOutExpo');
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $('html, body').stop().animate({ 'scrollTop': next }, 1000, 'easeOutExpo');
        }
    });
  
    function clearLi(){
      $(".li_home").css("background-color","rgba(0,0,0,0.0)");
      $(".li_profile").css("background-color","rgba(0,0,0,0.0)");
      $(".li_design").css("background-color","rgba(0,0,0,0.0)");
      $(".li_project").css("background-color","rgba(0,0,0,0.0)");
      $(".li_contact").css("background-color","rgba(0,0,0,0.0)");
    }

    // var home = document.getElementById("#header");
    // var profile = document.getElementById("#profile");
    // var design = document.getElementById("#design");
    // var project = document.getElementById("#project");
    // var contact = document.getElementById("#contact");

    var home = $("#header").offset().top;
    var profile = $("#profile").offset().top;
    var design = $("#design").offset().top;
    var project = $("#project").offset().top;
    var contact = $("#contact").offset().top;

    window.addEventListener("scroll",(e) => {
      if(window.scrollY == home){
        clearLi();
        $(".li_home").css("background-color","#caa5f2");
      }else if(window.scrollY == profile){
        clearLi();
        $(".li_profile").css("background-color","#caa5f2");
      }else if(window.scrollY == design){
        clearLi();
        $(".li_design").css("background-color","#caa5f2");
      }else if(window.scrollY == project){
        clearLi();
        $(".li_project").css("background-color","#caa5f2");
      }else if(window.scrollY == contact){
        clearLi();
        $(".li_contact").css("background-color","#caa5f2");
      }
    });
  
    // $(window).scroll(function () { 
    //   var scrollValue = $(document).scrollTop(); 
    //     console.log(scrollValue); 
    // });
    
    // window.addEventListener("scroll",(e) => {
    //   if(window.scrollY == 0){
    //     clearLi();
    //     $(".li_home").css("background-color","#caa5f2");
    //   }else if(window.scrollY > 400 && window.scrollY <= 882){
    //     clearLi();
    //     $(".li_profile").css("background-color","#caa5f2");
    //   }else if(window.scrollY < 883 && window.scrollY <= 1764){
    //     clearLi();
    //     $(".li_design").css("background-color","#caa5f2");
    //   }else if(window.scrollY > 2760){
    //     clearLi();
    //     $(".li_contact").css("background-color","#caa5f2");
    //   }else if(window.scrollY > 1841 && window.scrollY <= 2760){
    //     clearLi();
    //     $(".li_project").css("background-color","#caa5f2");
    //   }else if(window.scrollY > 2761){
    //     clearLi();
    //     $(".li_contact").css("background-color","#caa5f2");
    //   }
    // });
  });
  
  // 네비 클릭 이벤트
  $(document).ready(function(){
    $(".li_home").click(function(){
      var offset = $("#header").offset();
      $('html').animate({scrollTop:offset.top},400);
    });
    $(".li_profile").click(function(){
      var offset = $("#profile").offset();
      $('html').animate({scrollTop:offset.top},400);
    });
    $(".li_design").click(function(){
      var offset = $("#design").offset();
      $('html').animate({scrollTop:offset.top},400);
    });
    $(".li_project").click(function(){
      var offset = $("#project").offset();
      $('html').animate({scrollTop:offset.top},400);
    });
    $(".li_contact").click(function(){
      var offset = $("#contact").offset();
      $('html').animate({scrollTop:offset.top},400);
    });
  });
  
  // 네비 이벤트
  $(document).ready(function(){
    $(".menu > li").eq(0).addClass("on");
  
    $(".menu > li").click(function(){
      var i = $(this).index();
      $(".menu > li").removeClass("on");
      $(this).addClass("on");
      move(i);
    });
  });
  
  
  // 프로필 프로그래스
  $(function(){
      const chart1 = document.querySelector('.doughnut1');
      const chart2 = document.querySelector('.doughnut2');
      const chart3 = document.querySelector('.doughnut3');
      const chart4 = document.querySelector('.doughnut4');
      const chart5 = document.querySelector('.doughnut5');
          
      const makeChart = (percent, classname, color) => {
          let i = 1;
          let chartFn = setInterval(function() {
          if (i < percent) {
              colorFn(i, classname, color);
              i++;
              } else {
                clearInterval(chartFn);
              }
            }, 10);
          }
          
      const colorFn = (i, classname, color) => {
          classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
      }
          
      makeChart(94, chart1, '#d0bae7');
      makeChart(90, chart2, '#ebb9c8');
      makeChart(50, chart3, '#b2b6fb');
      makeChart(65, chart4, '#66d2ce');
      makeChart(60, chart5, '#f7e7bb');
  
      $('.rebtn').click(function(){
        makeChart(94, chart1, '#d0bae7');
        makeChart(90, chart2, '#ebb9c8');
        makeChart(50, chart3, '#b2b6fb');
        makeChart(65, chart4, '#66d2ce');
        makeChart(60, chart5, '#f7e7bb');
      });
  });
  
  // 메뉴스크롤
  $(function(){
    $('.scroll').click(function(e){
      e.preventDefault();
      $("html, body").animate({scrollTop:$(this.hash).offset().top}, 500)
    });
  });
  
  // 디자인 팝업
  $(function(){
    $(".deOne").click(function(){
      $(".designOp").fadeIn(300);
      $(".deBoxOp").fadeIn(300);
      $(".popone").fadeIn(300);
      $(".close").fadeIn(300);
    });
    $(".deTwo").click(function(){
      $(".designOp").fadeIn(300);
      $(".deBoxOp").fadeIn(300);
      $(".poptwo").fadeIn(300);
      $(".close").fadeIn(300);
    });
    $(".deThree").click(function(){
      $(".designOp").fadeIn(300);
      $(".deBoxOp").fadeIn(300);
      $(".popthree").fadeIn(300);
      $(".close").fadeIn(300);
    });
    $(".deFour").click(function(){
      $(".designOp").fadeIn(300);
      $(".deBoxOp").fadeIn(300);
      $(".popfour").fadeIn(300);
      $(".close").fadeIn(300);
    });
    $(".deFive").click(function(){
      $(".designOp").fadeIn(300);
      $(".deBoxOp").fadeIn(300);
      $(".popfive").fadeIn(300);
      $(".close").fadeIn(300);
    });
    $(".deSix").click(function(){
      $(".designOp").fadeIn(300);
      $(".deBoxOp").fadeIn(300);
      $(".popsix").fadeIn(300);
      $(".close").fadeIn(300);
    });
    
    $(".close").click(function(){
      $(".popone, .poptwo, .popthree, .popfour, .popfive, .popsix, .close, .designOp, .deBoxOp").fadeOut(300);
    });
  });
  
  // 프로젝트 슬라이드 페이지
  $(document).ready(function(){
    var current = 0;
    var setIntervalId;
  
    $(".Pmove > li").eq(0).addClass("on");
  
    $(".Pmove > li").click(function(){
      var i = $(this).index();
      $(".Pmove > li").removeClass("on");
      $(this).addClass("on");
      move(i);
    });
  
    $(".PLbtn").click(function(){
      var n = current + 1;
  
      if(n == 3){
        n = 0;
      }
      $(".Pmove > li").removeClass("on");
      $(".Pmove > li").eq(n).addClass("on");
  
      move(n);
  
      console.log(n);
    });
  
    $(".PRbtn").click(function(){
      var n = current + 1;
  
      if(n == 3){
        n = 0;
      }
      $(".Pmove > li").removeClass("on");
      $(".Pmove > li").eq(n).addClass("on");
  
      move2(n);
      
      console.log(n);
    });
  
  
    function move(n){
      if(current == n) return;
  
      var currentEl = $("#project > li").eq(current);
      var nextEl = $("#project > li").eq(n);
  
      currentEl.css({left:"0%"}).animate({left:"100%"});
      nextEl.css({left:"-100%"}).animate({left:"0%"});
  
      current = n;
    }
  
    function move2(n){
      if(current == n) return;
      
      var currentEl = $("#project > li").eq(current);
      var nextEl = $("#project > li").eq(n);
  
      currentEl.css({left:"0%"}).animate({left:"-100%"});
      nextEl.css({left:"100%"}).animate({left:"0%"});
  
      current = n;
    }
  });
  
  // 프로젝트 site
  $(document).ready(function(){
    $(".Pmainimg").mouseover(function(){
      $(".Popacity").css({display:"block"});
    });
    $(".Pmain").mouseleave(function(){
      $(".Popacity").fadeOut(300);
    });
  });