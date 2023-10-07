$(function() {
  let storage = localStorage;
  let currentlang =  storage.getItem('language');
  changeLang(currentlang);
  console.log(currentlang);

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
            
            displayprompt.eq(0).find('.speach_bubble p').html(tt1);
            displayprompt.eq(1).find('.speach_bubble p').html(tt2);
            displayprompt.eq(2).find('.speach_bubble p').html(tt3);
            displayprompt.eq(3).find('.speach_bubble p').html(tt4);
            displayprompt.eq(4).find('.speach_bubble p').html(tt5);
            displayprompt.eq(5).find('.speach_bubble p').html(tt6);
            



        });
  }



    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    storage.setItem('language',target); // 선택된 언어를 저장합니다
    console.log(target);

    })


    let able_modal_eq0 = $('.able_modal_eq0');
    let able_modal_eq1 = $('.able_modal_eq1');
    let langskillgroup = $('.langskillgroup');
    let comskillgroup = $('.comskillgroup')

    langskillgroup.click(function(){
      able_modal_eq0.show();
      able_modal_eq0.css({
        transform: 'translateX(-103%)'
      });
    });
    comskillgroup.click(function(){
      able_modal_eq1.show();
      able_modal_eq1.css({
        transform: 'translateX(-103%)'
      });
    })

    let isFirstClick = true;
    let index = 0;
    let accordionbtn = able_modal_eq0.find('.accordion-button');
    
    accordionbtn.each(function(index){
      $(this).click(function(){
        if (isFirstClick) {
          // 해당 버튼의 부모 요소에서 iframe을 찾음
          let videourl = $(this).attr('data-video');   
          console.log(videourl);   
          let iframe = $('.modalimg > iframe');
          iframe.attr('src', videourl);      
          // iframe의 src 속성을 변경하여 재생
          
          isFirstClick = false; // 첫 클릭이후 false로 설정하여 두번째 클릭 때 아코디언만활성화
          ++index;
      } else {
        isFirstClick = true;
      }
    });
  })      
});