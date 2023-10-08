$(function() {  
  
  //로딩애니메이션이 3초간 있다가 바로 콘텐츠가 나오게 하되, 로딩애니메이션은 
  setTimeout(function(){    
    $('.Loading_anime').hide();
    $('.content').show();},
  3000);

  $(document).keydown(function(e) {
    console.log(e.keyCode);   
      if (e.keyCode == 13) { // 13은 엔터키, 32는 스페이스키, 39는 오른쪽 방향키
       {
          location.href = "index_main.html"
          console.log(intropage);
        } 
          } 
        }
  )
  
  
});

