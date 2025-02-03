
// Opgave 1


// Vælg knappen og gem den i en variabel
const button = document.querySelector('#my-button');
// Opret et array med colors
const colors = ['#eee', '#7f7'];

let isSelected = false;
let currentIndex = 0; 
// index 0 is the first color in the array and index 1 is the second color in the array



button.style.backgroundColor = colors[currentIndex];

// Tilføj en eventlistener til knappen
button.addEventListener('click', () => {
  isSelected = !isSelected

  currentIndex = 1 - currentIndex; 
  // changes the index from 0 to 1 
  button.style.backgroundColor = colors[currentIndex];
  console.log(isSelected);
  
    
});

// teacher way
// const button = document.querySelector('#my-button');
// button.addEventListener('click', function(){
//   button.classList.toggle("click")
// })
// missin css click color!!


// let isSelected = false;

// button.addEventListener('click', function(){
//   isSelected = !isSelected
//  })
//  console.log(isSelected);
 

// Opgave 2 



function beregn(a, b) {
    return a / b;
  }
  
  let results = beregn(4, 3);
  console.log(results); 


