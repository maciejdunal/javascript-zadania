document.addEventListener('DOMContentLoaded', () => {
//Exercise 1
  document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));

  document.addEventListener('mousemove', (event) => console.log(event));

  document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));

  document.addEventListener('keypress', (event) => console.log(event));

  document.addEventListener('scroll', (event) => console.log(event));

  document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));


  //Exercise 2
  document.querySelector('#ex2').addEventListener('click', (event) => {
      let text = event.target.dataset.text;
      let newTarget = event.target.nextElementSibling;


      newTarget.innerText = text;
  });
  
  //Exercise 3
  document.querySelector('#ex3').addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'blue');

  document.querySelector('#ex3').addEventListener('mouseout', (event) => event.target.style.backgroundColor = 'red');


  //Exercise 4.
  function isInputTestValid(target) {
      let input = target.value;
      let re = /^[a-zA-Z]+$/


      return re.test(input);
  }


  document.querySelector('#input-test').addEventListener('change', (event) => {
      let isInputValid = isInputTestValid(event.target);
    
      let errorSpan = document.querySelector('#ex3-err');


      if (isInputValid == false) {
          errorSpan.innerText = "Dozwolone są tylko znaki od a do Z.";
          return;
      }


      errorSpan.innerText = "";
  });


  //Exercise 5.
  let clickCounter = 0;


  function increaseCounter(event) {
      let target = event.target;


      document.querySelector('#ex5').innerText = ++clickCounter;


      if (clickCounter >= 10) {
          target.removeEventListener('click', increaseCounter);
      }
  }


  document.querySelector('#ex5-button').addEventListener('click', increaseCounter);


  //Exercise 6.
  document.addEventListener('scroll', (event) => {
      let position = window.scrollY;
      let body = document.querySelector('body');


      if (position > 200) {
          body.style.backgroundColor = 'red';
      } else {
          body.style.backgroundColor = 'white';
      }
  });


  // 7.
  let calculatorInput = document.querySelector('#calculator > input');
  let nextClickIsEval = false;
  let nextClickIsClear = false;


  document.querySelectorAll('#calculator > div > button').forEach((element) => {
      element.addEventListener('click', (event) => {
          if (nextClickIsClear == true) {
              calculatorInput.value = "";
              nextClickIsClear = false;
          }


          calculatorInput.value = calculatorInput.value + event.target.innerText;


          if (nextClickIsEval == true) {
              calculatorInput.value = eval(calculatorInput.value);
              nextClickIsEval = false;
              nextClickIsClear = true;
          }


          if (['/', '*', '+', '-'].includes(event.target.innerText)) {
              nextClickIsEval = true;
          }
      });
  });
});