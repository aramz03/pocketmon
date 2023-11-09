$(function () {

  //로그인화면 배경색을 위해
  let infoBoxHeight = $(".loginlogo").outerHeight() + $(".logintab").outerHeight() + 65
  $(".info_box").css('min-height', `calc(100% - ${infoBoxHeight}px)`);

  //인풋 del 버튼
  $('.js-inputdel').on('propertychange change keyup paste input', function () {
    if ($(this).val().length > 0) {
      $(this).next('.btn_del').css('display', 'block')
    } else {
      $(this).next('.btn_del').css('display', 'none')
    }
  });

  //인풋 change
  $(".js-inputchg input").focus(function () {
    $(this).parents(".js-inputchg").css("border-color", "#207EDB");
  });
  $(".js-inputchg input").focusout(function () {
    $(this).parents(".js-inputchg").css("border-color", "#E0E0E0");
  });

  //탭
  $(".js-tab li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    let i = $(this).index();
    let tab = $(this).parents(".js-tab").next().find(".tab");
    tab.removeClass("show").eq(i).addClass("show");
  });

  //팝업 배경색을 위해
  $(".pop_list").css('min-height', `calc(100% - ${$('.pop_box').outerHeight()}px - 50px)`);

  //팝업
  $(".js-popOpen").click(function () {
    let popName = $(this).attr("data-pop");
    if ($("." + popName).is('.upper02')) {
      $(".popup_bg.v2").fadeIn();
    } else {
      $(".popup_bg").not(".popup_bg.v2").fadeIn();
    }
    if ($("." + popName).is('.pop-side')) {
      $("." + popName).css({
        left: "0"
      });
    } else if ($("." + popName).is('.pop-btm')) {
      $("." + popName).css({
        top: '0'
      });
    } else if ($("." + popName).is('.pop-ct')) {
      $("." + popName).css({
        top: '50%'
      });
    } else if ($("." + popName).is('.pop-small')) {
      $("." + popName).css({
        bottom: '0'
      });
    }

    //팝업스크롤
    if ($("." + popName).children('.popup_header').length) {
      let popHeader = $("." + popName).find($('.popup_header'))
      $("." + popName).children('.popup_main').css('height', 'calc(100% - ' + popHeader.outerHeight() + 'px)');
    } else {
      $('.popup_main').css('height', '100%');
    }
  });

  $(".js-popClose").click(function () {
    if ($(this).parents(".popup").is('.upper02')) {
      $(".popup_bg.v2").fadeOut();
    } else {
      $(".popup_bg").not(".popup_bg.v2").fadeOut();
    }

    if ($(this).parents(".popup").is('.pop-side')) {
      $(this).parents(".popup").css({
        left: "100%"
      });
    } else if ($(this).parents(".popup").is('.pop-btm')) {
      $(this).parents(".popup").css({
        top: "200%"
      });
    } else if ($(this).parents(".popup").is('.pop-ct')) {
      $(this).parents(".popup").css({
        top: "200%"
      });
    } else if ($(this).parents(".popup").is('.pop-small')) {
      $(this).parents(".popup").css({
        bottom: '-200%'
      });
    }
  });

  //  스크롤담당 패딩값
  let mainHeader = $('.main_top').outerHeight();
  $('.main_contents').css('padding-top', mainHeader + 'px');

  //  인풋 라벨위치변경
  $('.js-label').each(
    function (i) {
      if ($(this).find('input').length) {
        if ($(this).find('input').val().length > 0) {
          $(this).addClass('used');
        }
      } 
    }
  );
  $(".js-label input").on('propertychange change keyup paste input', function () {
    if ($(this).val().length > 0) {
      $(this).parents('.js-label').addClass('used');
    } else {
      $(this).parents('.js-label').removeClass('used');
    }
  });

  //  주소 검색 팝업 배경
  $(".aplist").css('min-height', `calc(100% - ${$('.apbox').outerHeight()}px)`);

  let otherHeight = 0;
  let totalHeight = 0;
  let noteHeight = $('.sub').find('> div > div').not($('.note_box')).each(function(i){  
    otherHeight = $(this).outerHeight();
    totalHeight = totalHeight + otherHeight;
  });

  $(".note_box").css("min-height", `calc(100% - ${totalHeight}px)`);


  $('.alert-pop').alert("인증번호를 입력하시기 바랍니다.");

})