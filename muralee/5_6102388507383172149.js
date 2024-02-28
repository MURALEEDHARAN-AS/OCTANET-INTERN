const navbarCollapse = document.getElementById("navbarNav");
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
}); 

const scrollContainer = document.querySelector('.gallary'); // Use a more descriptive variable name
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('rigth-arrow');

scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault(); // Prevent default scrolling behavior
  scrollContainer.scrollLeft += e.deltaX; // Use deltaX for horizontal scrolling
  scrollContainer.style.scrollBehavior = 'auto'
});

// Add event listeners for arrow buttons (assuming their intended functionality)
leftArrow.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth'
  scrollContainer.scrollLeft -= 900; // Adjust scroll amount as needed
});

rightArrow.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth'
  scrollContainer.scrollLeft += 900; // Adjust scroll amount as needed
});




//set the qustions 
const qustions = [
  {qustions : 'Enter Your First Name'},
  {qustions : 'Enter Your Last Name'},
  {qustions : 'Enter Your Email',Pattern :'^[a-zA-Z0-9.!#$%&`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'},
  {qustions : 'Enter Your Password',type:'password'}
]
//set th timing 
let shaketime = 100;
const switchtim = 200;
//initialize the posistion 
let position = 0;

//create motion

function transform(x,y){
  formbox.style.transform = `translate(${x}px,${y}px)`;
}

//grab the dom elemetn 

const  formbox = document.getElementById('form-box');
const  prevbtn = document.getElementById('prev-btn');
const  nextbtn = document.getElementById('next-btn');
const  inputname = document.getElementById('input-name');
const  inputlable= document.getElementById('input-lable');
const  inputprogress = document.getElementById('input-progress');
const  progressbar = document.getElementById('progress-bar');
  
  nextbtn.addEventListener('click',validate);
  
  inputname.addEventListener('keyup',(e) => {
      if(e.keyCode == 13){
          validate();
      }
  });
  //click the next-btn
  nextbtn.addEventListener('click',validate)
   //when Dom content loaded ;
  document.addEventListener('DOMContentLoaded',getqustion)
  function getqustion(){
  //get current qustion
  inputlable.innerHTML  = qustions[position].qustions;
  //get current type 
  inputname.type = qustions[position].type || 'text';
  //get input value 
  inputname.value = qustions[position].answer || '';
  //focus on current 
  inputname.focus();
  inputprogress.style.width = (position *100)/qustions.length + '%';
  
  prevbtn.className = position ? "fa-solid fa-angle-left"
  : "fa-solid fa-user"
  
  shovalue();
}

function shovalue(){
  inputname.style.opacity =1;
  inputprogress.style.transition ='';
  inputlable.style.opacity =1;
  inputprogress.style.width ='75%';
}

function hideqistion(){
  inputname.style.opacity =0;
  inputlable.style.marginLeft= 0;
  inputprogress.style.width =0;
  inputname.style.border =null;
}

function validate(){
  if(!inputname.value.match(qustions[position].Pattern || /.+/)){
      inputfail();
  }else{
      inputpass();
  }
}

function inputfail(){
  inputprogress.className = 'error';
  
  for(let i =0; i<6; i++){
      setTimeout(transform, shaketime*i, ((i%2)*2-1)*20,0);
      
      setTimeout(transform,shaketime *6,0,0);
      inputname.focus();
  }
}

function inputpass(){
   formbox.className = '';
   setTimeout(transform,shaketime *0,0,10);
   setTimeout(transform,shaketime *1,0,0);
  //icement position
   position++;

   if(qustions[position]){
      hideqistion();
      getqustion();
   }else{
      hideqistion();
      formbox.className = 'close';
      progressbar.style.width = '100%';

      //form complte
      formComplete();
   }

}
function formComplete() {
  document.getElementById('result').innerHTML =' <i class="fas fa-check-circle"></i> <span>Success!</span>'
}


window.addEventListener('load', () => {
  window.scrollTo(0, 0); // Scroll to top
});


const card1 = document.getElementById('Project');
const card2 = document.querySelector('.grid1');

card1.addEventListener('click', () => {
  card1.classList.add('selected');
});

card2.addEventListener('mouseover', () => {
  if (card1.classList.contains('selected')) {
    card2.style.backgroundColor = 'red'; // Change background color
  }
});

card2.addEventListener('mouseout', () => {
  card2.style.backgroundColor = ''; // Reset background color
});
