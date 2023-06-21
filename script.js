const seven = document.getElementById('numberSeven')
const addition = document.getElementById('addition')

let inputArray = []

seven.addEventListener('click', () => {
    console.log("seven")
    inputArray.push(7)
    console.log(inputArray)
})

addition.addEventListener('click', () => {
  console.log("plus!")
})

const buttons = document.querySelectorAll('.number')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log("the button works");
    });
  });

  function input () {document.createElement('div') 

}
