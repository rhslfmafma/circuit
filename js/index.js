$(function() {  
  //로딩애니메이션이 3초간 있다가 바로 콘텐츠가 나오게 하되, 로딩애니메이션은 
  setTimeout(function(){    
    $('.Loading_anime').hide();
    $('.content').show();},
  3000);

  
  //언어버튼 클릭 시 드롭다운 슬라이드 다운
  let languagebtn = $('.languagebtn');
  let dropdownMenu = $('.dropdown-menu');

  languagebtn.click(function(){
    dropdownMenu.slideToggle();
  })

  // 스페이스키 또는 엔터키 눌렸을 때 이벤트 핸들러
  /* 슬라이드 내용 차용 */
//   let display = $('.whitedisplay');
//   let displayCount = display.length;//슬라이드 개수 
//   let currentdisplayIdx = 0;

//   function moveSlide(num){
//     slideContainer.style.left = `${-num*100}%`;
//     currentSlideIdx = num;
//     console.log(currentSlideIdx);
  
//     if(currentdisplayIdx === displayCount -1){
//       nextBtn.classList.add('disabled');
//     } else{
//       nextBtn.classList.remove('disabled');
//     }
//     //처음이면 이전버튼이 사라지고, 처음이 아니라면 다시보이도록
//     if(currentdisplayIdx === 0){
//       prevBtn.classList.add('disabled');
//     } else{
//       prevBtn.classList.remove('disabled');
//     }
//     //모든슬라이드에서 active를 제거하고, 지금 보고 있는 슬라이드에 active를 추가
//     for(let sl of slides){
//       sl.classList.remove('active');
//     }
//     slides[currentSlideIdx].classList.add('active');
//     //모든 페이저에서 active를 제거하고, 현재 슬라이드번호의 pager에 active 추가
//     for(let pb of pagerBtn){
//       pb.classList.remove('active');
//     }
//     pagerBtn[currentdisplayIdx].classList.add('active');  
  
//      //moveslide
// moveSlide(0);

// nextBtn.addEventListener('click',()=>{
//   //마지막이 아니라면
//   if(currentSlideIdx < slideCount -1){
//     moveSlide(currentSlideIdx + 1);
//   }
// });
// //이전 버튼을 클릭하면 할일, 처음이 아니라면
// prevBtn.addEventListener('click',()=>{

//   if(currentSlideIdx > 0){
//     moveSlide(currentSlideIdx - 1);
//   }
// });
//   }

  

  let display01 = $('.display01');
  let display02 = $('.display02');
  let display03 = $('.display03');
  let display04 = $('.display04');
  let display05 = $('.display05');
  let display06 = $('.display06');
  let display07 = $('.display07');
  let display08 = $('.display08');
  let display09 = $('.display09');
  let isDisplay01Hidden = false;
  let isDisplay02Hidden = true;
  let isDisplay03Hidden = true;
  let isDisplay04Hidden = true;
  let isDisplay05Hidden = true;
  let isDisplay06Hidden = true;
  let isDisplay07Hidden = true;
  let isDisplay08Hidden = true;
  let isDisplay09Hidden = true;
  
  $(document).keydown(function(e) {
    console.log(e.keyCode);        
    if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 39) { // 13은 엔터키, 32는 스페이스키, 39는 오른쪽 방향키
    // 페이지 이동 로직을 여기에 추가          
      if (!isDisplay01Hidden) {
        display01.hide();
        display02.show();
        isDisplay01Hidden = true;
        isDisplay02Hidden = false;
      }
      else if (!isDisplay02Hidden) {
          display02.hide();
          display03.show();
          isDisplay02Hidden = true;
          isDisplay03Hidden = false;
      }
      else if (!isDisplay03Hidden) {
          display03.hide();
          display04.show();
          isDisplay03Hidden = true;
          isDisplay04Hidden = false;
      }
      else if (!isDisplay04Hidden) {
          display04.hide();
          display05.show();
          isDisplay04Hidden = true;
          isDisplay05Hidden = false;
      }
      else if (!isDisplay05Hidden) {
          display05.hide();
          display06.show();
          isDisplay05Hidden = true;
          isDisplay06Hidden = false;
      }
      else if (!isDisplay06Hidden) {
          display06.hide();
          display07.show();
          isDisplay06Hidden = true;
          isDisplay07Hidden = false;
      } else {
        $(window).attr('location', '../history.html'); // Corrected this line
      }
        
    } else if (e.keyCode == 37) {
      if (!isDisplay09Hidden) {
        display09.hide();
        display08.show();
        isDisplay09Hidden = true;
        isDisplay08Hidden = false;
      } 
      else if (!isDisplay08Hidden) {
        display08.hide();
        display07.show();
        isDisplay08Hidden = true;
        isDisplay07Hidden = false;
      } 
      else if (!isDisplay07Hidden) {
        display07.hide();
        display06.show();
        isDisplay07Hidden = true;
        isDisplay06Hidden = false;
      } 
      else if (!isDisplay06Hidden) {
        display06.hide();
        display05.show();
        isDisplay06Hidden = true;
        isDisplay05Hidden = false;
      } 
      else if (!isDisplay05Hidden) {
        display05.hide();
        display04.show();
        isDisplay05Hidden = true;
        isDisplay04Hidden = false;
      } 
      else if (!isDisplay04Hidden) {
        display04.hide();
        display03.show();
        isDisplay04Hidden = true;
        isDisplay03Hidden = false;
      }
      else if (!isDisplay03Hidden) {
        display03.hide();
        display02.show();
        isDisplay03Hidden = true;
        isDisplay02Hidden = false;
      }      
    }
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
            
            displayprompt.eq(0).find('.speach_buble p').html(tt1);
            displayprompt.eq(1).find('.speach_buble p').html(tt2);
            displayprompt.eq(2).find('.speach_buble p').html(tt3);
            displayprompt.eq(3).find('.speach_buble p').html(tt4);
            displayprompt.eq(4).find('.speach_buble p').html(tt5);
            displayprompt.eq(5).find('.speach_buble p').html(tt6);
            



        });
  }
    changeLang('kor');


    let btn = $('.lang');
    
    btn.click(function(){      
    let target = $(this).attr('data-lang');
    changeLang(target);
    })

   

/* histroy.html */

let objects = [];
for (let i =1; i<12; i++) {
  objects.push($('.object_'+(i<10 ? '0' + i : i)));
}

$(document).keydown(function(e) {
  console.log(e.keyCode);        
  if (e.keyCode == 40 ) { // 40은 아래쪽 방향키
  // 페이지 이동 로직을 여기에 추가    
  objects.forEach((object, index) => {
    let translateX = parseInt($(object).css('transform').split(',')[4].trim()) - (40 + index * 400);
    $(object).css({'transform' : 'translateX(' + translateX + 'px)'});
  });
  }
});  


});


