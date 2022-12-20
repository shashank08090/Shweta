// jb b multipal option h usme  add event listner , on click event mat kro , parent ko target kto and find out kis parent ko apne click kiya tha
//issse ek bar event call hoga, apne kis button ko call kiya tha





///CREATING A RESPONSIVE NAVBAR component///
//==========================================

const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerElem =document.querySelector(".header");


mobile_nav.addEventListener('click', ()=>{

  headerElem.classList.toggle('active');

})
//--------end--------


//======CREATING A PORTFOLIO COMPONENT=====///
const p_btns =document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem =document.querySelectorAll('.image-overlay');


p_btns.addEventListener('click',(e)=>{

    // user ne konse button par click kiya yaha se find out kr skte h

    const p_btn_clicked =e.target;
    //console.log(p_btn_clicked);

    p_btn.forEach((curElem)=>curElem.classList.remove('.p-btn-active'));

  p_btn_clicked.classList.add(".p-btn-active")

  const btn_num =p_btn_clicked.dataset.btnNum;    
  console.log(btn_num );   //number dikhega consol par

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  //sare image ko hidden krenege

  p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

  //kewal jiska no click h wo hi img dikhana h

  img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active")); //jitne img par btn num match hua usko dikha do 

//p_img_elem
//p-btn--1
});





  
////////Scroll bottom top====////////
const heroSection =document.querySelector(".section-hero")///7

const footerElem =document.querySelector(".section-footer");//4



const scrollElement = document.createElement("div"); //1
scrollElement.classList.add("scrollTop-style");//2

scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-Up"></ion-icon>`///3

footerElem.after(scrollElement);//5

const scrollUp =()=>{
  heroSection.scrollIntoView({behavior:"smooth"})

}//8 method


scrollElement.addEventListener("click",scrollUp);//6

/////////////ANIMATED NUMBERS//////////////

const counterNum = document.querySelectorAll(".counter-numbers");//1

const speed =200;//2

counterNum.forEach((curElem)=>{    //4

 const updateNumber=()=>{  //5
  const targetNumber=parseInt(curElem.dataset.number); //6
  // console.log(targetNumber);
  const initialNum=parseInt(curElem.innerText); //7
  //console.log(initialNum);

  const increamentNumber= Math.trunc(targetNumber/speed);
  //console.log(increamentNumber);

  if(initialNum<targetNumber){
    curElem.innerText=`${initialNum+increamentNumber}+`;
    setTimeout(updateNumber,10);
  }

 }

  updateNumber();

});



/////////////////swwipper code////////////////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
//////automatic chalwane k
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  }
  ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/////for  client review reponsive////

const myJsMedia=(widthSize)=>{
  if(widthSize.matches){

    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,

    });
  }
}

const widthSize=window.matchMedia("(max-width:780px)");

myJsMedia(widthSize);

widthSize.addEventListener('change', myJsMedia);



