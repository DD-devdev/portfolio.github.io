
const btntotop= document.querySelector('.btn');


window.addEventListener('scroll',()=>{
  if(window.scrollY>100){
    btntotop.classList.add("active");
  }
  else{
    btntotop.classList.remove("active");
  }
})
btntotop.addEventListener('click',()=>{
  window.scrollTo(0,0);
})

function submitform(){
  window.alert("Par mujhe nahi karni baat.");
}

const btn=document.querySelector('#submitbtn');

function func(){
  const replace=document.querySelector('#contact');
  replace.innerHTML='<h2 class="cntcthd">Contact Me</h2> <div class="thnx">Thank You for contacting! I will soon get in touch with you.</div>';
}


btn.addEventListener('click',func);
