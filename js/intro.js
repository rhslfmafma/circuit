$(function() {  
 

      //언어버튼 클릭 시 드롭다운 슬라이드 다운
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
let spanElements = $('.txtgroup span');
let index = 0;
function changeLang(lang){
$.getJSON(`./data/${lang}.json`, function(data){
          $allData = data;
          console.log($allData);
          let menu = $('.nav li');
          let mn1 = $allData[0].menu.title1;
          let mn2 = $allData[0].menu.title2;
          let mn3 = $allData[0].menu.title3;
          let mn4 = $allData[0].menu.title4;

          let displayprompt = $('.whitedisplay .speach_bubble');
          let tt1 = $allData[1].title;
          let tt2 = $allData[2].title;
          let tt3 = $allData[3].title;
          console.log(tt1);

          let tt4 = $allData[4].title;
          let tt5 = $allData[5].title;
          let tt6 = $allData[6].title;
          
          menu.eq(0).find('a').text(mn1);
          menu.eq(1).find('a').text(mn2);
          menu.eq(2).find('a').text(mn3);
          menu.eq(3).find('a').text(mn4);
          
          displayprompt.find('p').eq(0).html(tt1);
          displayprompt.find('p').eq(1).html(tt2);
          displayprompt.find('p').eq(2).html(tt3);
          displayprompt.find('p').eq(3).html(tt4);
          displayprompt.find('p').eq(4).html(tt5);
          displayprompt.find('p').eq(5).html(tt6);
          



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
            }, 300);
          }
     
  function typeNext() {
            if (index < spanElements.length) {
              let text = spanElements.eq(index).text();
              spanElements.eq(index).empty();
              typeText(spanElements.eq(index),text);
              index++;
            }
          }

          setInterval(() => {
            typeNext(index)
            index++;     
            if (index === spanElements.find('li').length) {
              clearInterval(interval);
            }       
          2000}, interval);

  
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
            for(let i = 7; i<=20; i++) {
            displaypromptred.find('span').eq(i-7).html($allData[i].title);
            }

        
          typeNext();


          //다음 span 타이핑 시작하기 위한 이벤트리스너
          spanElements.on('animationEnd webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
            typeNext();
          });
        });
    }


    changeLang('kor');





    
    

    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    })



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
           $(window).attr('location', '../history.html'); // Corrected this line
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


