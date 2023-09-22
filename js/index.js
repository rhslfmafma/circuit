$(function() {  
  //로딩애니메이션이 3초간 있다가 바로 콘텐츠가 나오게 하되, 로딩애니메이션은 
  setTimeout(function(){    
    $('.Loading_anime').hide();
    $('.content').show();},
  3000);

  

  let display01 = $('.display01');
  let display02 = $('.display02');
  let isDisplay01Hidden = false;
  let isDisplay02Hidden = true;
  




  // $.getJSON('파일경로', 할일);  
  let  $allData = [];
  function changeLang(lang){
  $.getJSON(`./data/${lang}.json`, function(data){
            $allData = data;
            console.log($allData);
            let menu = $('.nav li');
            let mn1 = $allData[0].menu.title1;
            let mn2 = $allData[0].menu.title2;
            let mn3 = $allData[0].menu.title3;
            let mn4 = $allData[0].menu.title4;

            let displayprompt = $('.whitedisplay');
            let speach_bubble = $('.speach_bubble');
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
            
            speach_bubble.find('p').eq(0).html(tt1);
            speach_bubble.find('p').eq(1).html(tt2);
            speach_bubble.find('p').eq(2).html(tt3);
            speach_bubble.find('p').eq(3).html(tt4);
            speach_bubble.find('p').eq(4).html(tt5);
            speach_bubble.find('p').eq(5).html(tt6);            



        });
  }
    changeLang('kor');


    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    })

   
    /* index_main.html 디벨롭 */

    let speach_bubble_slide = $('.speach_bubble_slide p');
    let currentIdx = 0;

    function showbubble(num) {
      speach_bubble_slide.hide();
      speach_bubble_slide.eq(num).show();
    }

    $(document).keydown(function(e) {
      console.log(e.keyCode);   
        if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 39) { // 13은 엔터키, 32는 스페이스키, 39는 오른쪽 방향키
          // 페이지 이동 로직을 여기에 추가          
            if (!isDisplay01Hidden) {
              display01.hide();
              display02.show();
              isDisplay01Hidden = true;
              isDisplay02Hidden = false;
              showbubble(currentIdx);
            }
            else if (currentIdx < 5) {
            showbubble(++currentIdx);
            }
            else {
              $(window).attr('location', '../intro.html'); // Corrected this line
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

