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
            let tt7 = $allData[15].title;
       
            
  let speach_bubble = $('.speach_bubble');
            menu.eq(0).find('a').text(mn1);
            menu.eq(1).find('a').text(mn2);
            menu.eq(2).find('a').text(mn3);
            menu.eq(3).find('a').text(mn4);
            
            speach_bubble.find('p').eq(0).html(tt7);
            



        });
  }
    changeLang('kor');


    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    })

   
  /* histroy.html */


  let object = $('.object');
  let translateX = 50;
  let objettxt = $('.objecttxt ')
  
  $(document).keydown(function(e) {
    console.log(e.keyCode);        
    if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 39) { // 39은 왼쪽 방향키
    // 페이지 이동 로직을 여기에 추가    

    translateX=translateX-500;

    object.css({'transform' : 'translateX(' + translateX + 'px)'});
    console.log(translateX);
    } 
    if (e.keyCode == 37) {
    // 페이지 이동 로직을 여기에 추가    

    translateX=translateX+500;

    object.css({'transform' : 'translateX(' + translateX + 'px)'});
    console.log(translateX);
    } 
  })

  objettxt.hover(function(){    
  let speach_bubble_txt = $('.speach_bubble').find('p');
  let data_description = $(this).attr('data-description');
  speach_bubble_txt.hide();
  speach_bubble_txt.html(data_description);
  speach_bubble_txt.show();
  });

  



});
