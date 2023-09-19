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
            opacity: '1'
          })
        }
      });    

      h1 {
  font-size: 20px;
  min-width:11px;
  white-space: nowrap;
  margin: 0;
  position: fixed;
  color: transparent;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}

h1::before {
  content: "Typing Effect with CSS";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: black;
  overflow: hidden;
  border-right: 1px solid black;
  animation: typing 5s steps(31) infinite;
}

@keyframes typing{
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
});