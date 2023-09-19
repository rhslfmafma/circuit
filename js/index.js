$(function() {  


  // setTimeout(function(){
  //     $('.Loading_anime').animate({
  //       opacity: '0'}, 
  //       2000, 'swing',function(){
  //         $('.Loading_anime').css({
  //           display: 'none'
  //         });
  //         $('.content').css({
  //           display: 'block'
  //         });
  //         $('.content').animate({
  //         opacity: '1'}, 
  //         0, 'swing');
  //   },3000);   
  // });

  setTimeout(function(){    
    $('.Loading_anime').hide();
    $('.content').show();},
    3000);
    //로딩애니메이션이 3초간 있다가 바로 콘텐츠가 나오게 하되, 로딩애니메이션은 


    // 스페이스키 또는 엔터키 눌렸을 때 이벤트 핸들러
      $(document).keydown(function(e) {
        if (e.keyCode == 13 || e.keyCode == 32) { // 13은 엔터키, 32는 스페이스키
          // 페이지 이동 로직을 여기에 추가          
          $('.display01').css({
            display:'none'
          });
          $('.display02').css({
            display: 'block'
          })
        }
      });    

});