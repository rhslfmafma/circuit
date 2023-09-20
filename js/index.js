$(function() {  
  //로딩애니메이션이 3초간 있다가 바로 콘텐츠가 나오게 하되, 로딩애니메이션은 
  setTimeout(function(){    
    $('.Loading_anime').hide();
    $('.content').show();},
  3000);

  
  //언어버튼 클릭 시 드롭다운 슬라이드 다운
  let languagebtn = $('.languagebtn');
  let dropdownMenu = $('.dropdown-menu');

  languagebtn.click(function(){
    dropdownMenu.slideToggle();
  })

  // 스페이스키 또는 엔터키 눌렸을 때 이벤트 핸들러
  let display01 = $('.display01');
  let display02 = $('.display02');
  let display03 = $('.display03');
  let display04 = $('.display04');
  let display05 = $('.display05');
  let isDisplay01Hidden = false;
  let isDisplay02Hidden = true;
  let isDisplay03Hidden = true;
  let isDisplay04Hidden = true;
  let isDisplay05Hidden = true;
  
  $(document).keydown(function(e) {
    console.log(e.keyCode);        
    if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 39) { // 13은 엔터키, 32는 스페이스키, 39는 오른쪽 방향키
    // 페이지 이동 로직을 여기에 추가          
      if (!isDisplay01Hidden) {
        display01.hide();
        display02.show();
        isDisplay01Hidden = true;
        isDisplay02Hidden = false;
      }
      else if (!isDisplay02Hidden) {
          display02.hide();
          display03.show();
          isDisplay02Hidden = true;
          isDisplay03Hidden = false;
      }
      else if (!isDisplay03Hidden) {
          display03.hide();
          display04.show();
          isDisplay03Hidden = true;
          isDisplay04Hidden = false;
      }
      else if (!isDisplay04Hidden) {
          display04.hide();
          display05.show();
          isDisplay04Hidden = true;
          isDisplay05Hidden = false;
      }
    } else if (e.keyCode == 37) {
      if (!isDisplay05Hidden) {
        display05.hide();
        display04.show();
        isDisplay05Hidden = true;
        isDisplay04Hidden = false;
      } 
      else if (!isDisplay04Hidden) {
        display04.hide();
        display03.show();
        isDisplay04Hidden = true;
        isDisplay03Hidden = false;
      }
      else if (!isDisplay03Hidden) {
        display03.hide();
        display02.show();
        isDisplay03Hidden = true;
        isDisplay02Hidden = false;
      }
      else if (!isDisplay02Hidden) {
        display02.hide();
        display01.show();
        isDisplay02Hidden = true;
        isDisplay01Hidden = false;
      }
    }
  })
});

//