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
            let tt8 = $allData[16].title;
            let tt9 = $allData[17].title;       
            let tt10 = $allData[18].title;
            let tt11 = $allData[19].title;
            let tt12 = $allData[20].title;
            let tt13 = $allData[21].title;
            let tt14 = $allData[22].title;
            let tt15 = $allData[23].title;
            let tt16 = $allData[24].title;       
            let tt17 = $allData[25].title;
            let tt18 = $allData[26].title;
            let tt19 = $allData[27].title;
            let tt20 = $allData[28].title;
            let tt21 = $allData[29].title;       
            let tt22 = $allData[30].title;
            let tt23 = $allData[31].title;
            let tt24 = $allData[32].title;
            let tt25 = $allData[33].title;
            let tt26 = $allData[34].title;
            let tt27 = $allData[35].title;
            let tt28 = $allData[36].title;
            let tt29 = $allData[37].title;
            let tt30 = $allData[38].title;       
            let tt31 = $allData[39].title;
            let tt32 = $allData[40].title;
            let tt33 = $allData[41].title;
            let tt34 = $allData[42].title;
            let tt35 = $allData[43].title;       
            let tt36 = $allData[44].title;
            let tt37 = $allData[45].title;
            let tt38 = $allData[46].title;
            let tt39 = $allData[47].title;
            let tt40 = $allData[48].title;
            let tt41 = $allData[49].title;
            let tt42 = $allData[50].title;
            let tt43 = $allData[51].title;
       
            
  let speach_bubble = $('.speach_bubble');
            menu.eq(0).find('a').text(mn1);
            menu.eq(1).find('a').text(mn2);
            menu.eq(2).find('a').text(mn3);
            menu.eq(3).find('a').text(mn4);
            
            speach_bubble.find('p').eq(0).html(tt7);
  
  let objecttxttrans = $('.objecttxt');
  objecttxttrans.eq(0).find('div > h3').html(tt8);
  objecttxttrans.eq(0).find('div > p').eq(0).html(tt9);
  objecttxttrans.eq(0).find('div > p').eq(1).html(tt10);

  objecttxttrans.eq(1).find('div > h3').html(tt11);
  objecttxttrans.eq(1).find('div > p').eq(0).html(tt12);
  objecttxttrans.eq(1).find('div > p').eq(1).html(tt13);

  objecttxttrans.eq(2).find('div > h3').html(tt14);
  objecttxttrans.eq(2).find('div > p').eq(0).html(tt15);
  objecttxttrans.eq(2).find('div > p').eq(1).html(tt16);

  objecttxttrans.eq(3).find('div > h3').html(tt17);
  objecttxttrans.eq(3).find('div > p').eq(0).html(tt18);
  objecttxttrans.eq(3).find('div > p').eq(1).html(tt19);

  objecttxttrans.eq(4).find('div > h3').html(tt20);
  objecttxttrans.eq(4).find('div > p').eq(0).html(tt21);
  objecttxttrans.eq(4).find('div > p').eq(1).html(tt22);
  
  objecttxttrans.eq(5).find('div > h3').html(tt23);
  objecttxttrans.eq(5).find('div > p').eq(0).html(tt24);
  objecttxttrans.eq(5).find('div > p').eq(1).html(tt25);

  objecttxttrans.eq(6).find('div > h3').html(tt26);
  objecttxttrans.eq(6).find('div > p').eq(0).html(tt27);
  objecttxttrans.eq(6).find('div > p').eq(1).html(tt28);

  objecttxttrans.eq(7).find('div > h3').html(tt29);
  objecttxttrans.eq(7).find('div > p').eq(0).html(tt30);
  objecttxttrans.eq(7).find('div > p').eq(1).html(tt31);

  objecttxttrans.eq(8).find('div > h3').html(tt32);
  objecttxttrans.eq(8).find('div > p').eq(0).html(tt33);
  objecttxttrans.eq(8).find('div > p').eq(1).html(tt34);

  objecttxttrans.eq(9).find('div > h3').html(tt35);
  objecttxttrans.eq(9).find('div > p').eq(0).html(tt36);
  objecttxttrans.eq(9).find('div > p').eq(1).html(tt37);

  objecttxttrans.eq(10).find('div > h3').html(tt38);
  objecttxttrans.eq(10).find('div > p').eq(0).html(tt39);
  objecttxttrans.eq(10).find('div > p').eq(1).html(tt40);
  
  objecttxttrans.eq(11).find('div > h3').html(tt41);
  objecttxttrans.eq(11).find('div > p').eq(0).html(tt42);
  objecttxttrans.eq(11).find('div > p').eq(1).html(tt43);




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
