$(function() {  
  //로딩애니메이션이 3초간 있다가 바로 콘텐츠가 나오게 하되, 로딩애니메이션은 
  setTimeout(function(){    
    $('.Loading_anime').hide();
    $('.content').show();},
  3000);

  

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

            let displaypromptred = $('.intro .reddisplay');            
            let tt7 = $allData[7].title;
            let tt8 = $allData[8].title;
            let tt9 = $allData[9].title;
            let tt10 = $allData[10].title;
            let tt11 = $allData[11].title;
            let tt12 = $allData[12].title;
            let tt13 = $allData[13].title;
            let tt14 = $allData[14].title;
            let tt15 = $allData[15].title;
            let tt16 = $allData[16].title;
            
            menu.eq(0).find('a').text(mn1);
            menu.eq(1).find('a').text(mn2);
            menu.eq(2).find('a').text(mn3);
            menu.eq(3).find('a').text(mn4);
            
            displaypromptred.find('.txtgroup span').eq(0).html(tt7);
            displaypromptred.find('.txtgroup span').eq(1).html(tt8);
            displaypromptred.find('.txtgroup span').eq(2).html(tt9);
            displaypromptred.find('.txtgroup span').eq(3).html(tt10);
            displaypromptred.find('.txtgroup span').eq(4).html(tt11);
            displaypromptred.find('.txtgroup span').eq(5).html(tt12);
            displaypromptred.find('.txtgroup span').eq(6).html(tt13);
            displaypromptred.find('.txtgroup span').eq(7).html(tt14);
            displaypromptred.find('.txtgroup span').eq(8).html(tt15);
            displaypromptred.find('.txtgroup span').eq(9).html(tt16);
            displaypromptred.find('.txtgroup span').eq(10).html(tt17);
            displaypromptred.find('.txtgroup span').eq(11).html(tt18);
            displaypromptred.find('.txtgroup span').eq(12).html(tt19);
            displaypromptred.find('.txtgroup span').eq(12).html(tt20);
            
            



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
  /* intro.html */
  let jefferey_dot_red = $('.jefferey_dot');
  let tenel = $('.tenel');

  setTimeout(function(){    
    tenel.show();
    jefferey_dot_red.show();
  }, 1500);
});