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
  
  let display01 = $('.display01');
  let display02 = $('.display02');
  let isDisplay01Hidden = false;
  let isDisplay02Hidden = true;
  let jefferey = $('.jefferey_dot');
  let question_modal = $('.question_modal');

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

            let displayprompt = $('.whitedisplay .speach_bubble');
            let tt1 = $allData[1].title;
            let tt2 = $allData[2].title;
            let tt3 = $allData[3].title;
            console.log(tt1);

            let tt4 = $allData[4].title;
            let tt5 = $allData[5].title;
            let tt6 = $allData[6].title;
            let tt7 = $allData[7].title;
            
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
            displayprompt.find('p').eq(6).html(tt7);
            



        });
  }
    changeLang('kor');


    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    })

   
    //언어버튼 클릭 시 드롭다운 슬라이드 다운
  let languagebtn = $('.languagebtn');
  let dropdownMenu = $('.dropdown-menu');

  languagebtn.click(function(){
    dropdownMenu.slideToggle();
  })

let speach_bubble = $('.history .speach_bubble ');

speach_bubble.click(function(){
  $(this).find(p).eq(0).hide();
  $(this).find(p).eq(1).show();
  
})

    /* index_main.html 디벨롭 */

    let speach_bubble_slide = $('.speach_bubble_slide p');
    let currentIdx = 0;
    let question_modaltxt = $('.question_modaltxt h3');
    let question_modaltxt_tri = $('.question_modal svg');
    let intropage = false;
    


    function showbubble(num) {
      speach_bubble_slide.hide();
      speach_bubble_slide.eq(num).show();
    }


    question_modaltxt.eq(0).hover(function(){
      question_modaltxt_tri.css({
        transform: 
        'translateY(0px) rotate(-90deg)'});
    });

    question_modaltxt.eq(1).hover(function(){
      question_modaltxt_tri.css({
        transform: 'translateY(60px) rotate(-90deg)'});
    });


    $(document).keydown(function(e) {
      console.log(e.keyCode);   
        if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 39) { // 13은 엔터키, 32는 스페이스키, 39는 오른쪽 방향키
          if (intropage == true) {
            location.href = "intro.html"
            console.log(intropage);
          } 
          // 페이지 이동 로직을 여기에 추가          
            if (!isDisplay01Hidden) {
              display01.hide();
              display02.show();
              isDisplay01Hidden = true;
              isDisplay02Hidden = false;
              showbubble(currentIdx);
            }
        
            if (currentIdx < 5) {                                               
            showbubble(currentIdx++);
            if (currentIdx == 3 ) {              
              jefferey.show();
              }
            if (currentIdx == 5) {              
              console.log('jefferey 이동');
              jefferey.animate({
                marginLeft: '450px'
              },500);
              question_modal.show();
              question_modal.animate({opacity:'1'},800);
              }            
            } 
          }
      
          
          
        if (e.keyCode == 37) {
          if (currentIdx > 5 || currentIdx < 8) {            
            showbubble(--currentIdx);
        }        
      }

    })

    question_modaltxt.click(function(){      
    let target = $(this).attr('data-yes');
    if (target == 'yes') {
      intropage = true;
      console.log(intropage);
      currentIdx = 6;
      console.log(currentIdx,'yes');
      showbubble(currentIdx);  
      setTimeout(function(){
        location.href = "intro.html"
      },2000)            
    } else {
      currentIdx = 5;
      console.log(currentIdx, 'no');
      showbubble(currentIdx);
    }

    });
    console.log(intropage);
});

