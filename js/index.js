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


});