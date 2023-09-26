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
    changeLang('kor');


    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    })

   
  /* histroy.html */


  let object = $('.object');
  let translateX = 50;
  
  $(document).keydown(function(e) {
    console.log(e.keyCode);        
    if (e.keyCode == 40 ) { // 40은 아래쪽 방향키
    // 페이지 이동 로직을 여기에 추가    

    translateX=translateX-500;

    object.css({'transform' : 'translateX(' + translateX + 'px)'});
    console.log(translateX);
    } 
    if (e.keyCode == 39 ) { // 40은 아래쪽 방향키
    // 페이지 이동 로직을 여기에 추가    

    translateX=translateX+500;

    object.css({'transform' : 'translateX(' + translateX + 'px)'});
    console.log(translateX);
    } 
  })
});
