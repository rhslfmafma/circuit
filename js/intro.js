$(function() {  
  //언어버튼 클릭 시 드롭다운 슬라이드 다운
  
  let storage = localStorage;
  let currentlang =  storage.getItem('language');
  changeLang(currentlang);
  console.log(currentlang);


  let languagebtn = $('.languagebtn');
  let dropdownMenu = $('.dropdown-menu');    
      languagebtn.click(function(){
      dropdownMenu.slideToggle();
      })       


      
  let speach_bubble = $('.intro .speach_bubble ');    
      speach_bubble.click(function(){
      $(this).find(p).eq(0).hide();
      $(this).find(p).eq(1).show();     
    })

  // $.getJSON('파일경로', 할일);  
  let  $allData = [];
  let spanElements = $('.txtgroup li');
  console.log(spanElements);
  spanElements.hide();
  let index = 1;


  function changeLang(lang){
    $.getJSON(`./data/${lang}.json`, function(data){
              $allData = data;
              console.log($allData);
              let menu = $('.nav li');

    for(let i = 0; i<menu.length; i++) {
      menu.eq(i).find('a').text($allData[0].menu['title'+(i+1)]);
    }

    //displaypromptred 제목 업데이트
    let displaypromptred = $('.intro .txtgroup');
    for(let i = 8; i<=14; i++) {
    displaypromptred.find('li').eq(i-7).html($allData[i].title);
    }




});
}





        // 타이핑 애니메이션 실행
        function typeText($element, text) {
          let index = 0;
          let interval = setInterval(function() {
            $element.append(text[index]);
            index++;
            if (index === text.length) {
              clearInterval(interval);
            }
          }, 50);
        }

        function typeNext(index) {
          if (index < spanElements.length) {
            let text = spanElements.eq(index).text();
            console.log(text);
            spanElements.eq(index).empty();
            spanElements.eq(index).show();
            typeText(spanElements.eq(index),text);
            index++;
          }
        }


        setTimeout(function(){

          let typeanimation  = setInterval(() => {
     
            typeNext(index);
                 
            if (index === spanElements.length) {
              clearInterval(typeanimation);
            }
            index++;
          }, 500);
          

   

        },100)
     
        // typeText(spanElements.eq(1),text);     


  
  



    

  let btn = $('.lang');
    
  btn.click(function(){      
  let target = $(this).attr('data-lang');
  changeLang(target);
  });


  /* intro.html */
  let jefferey_dot_red = $('.jefferey_dot');
  let tenel = $('.tenel');

  setTimeout(function(){    
    tenel.show();
    jefferey_dot_red.show();
  }, 700);

  let currentIdx = 0;
  $(document).keydown(function(e) {
    console.log(e.keyCode);   
      if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 39) { // 13은 엔터키, 32는 스페이스키, 39는 오른쪽 방향키
        // 페이지 이동 로직을 여기에 추가                
          if (currentIdx == 0 ) {           
           location.href = "history.html"
          }
        }
      if (e.keyCode == 37) {
        if (currentIdx > 0) {
          showbubble(--currentIdx);
      }
    }
    console.log(currentIdx);
  })

});


