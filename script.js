const seven = document.getElementById('numberSeven')

seven.addEventListener('click', () => {
    console.log("seven")
})

const buttons = document.querySelectorAll('.number')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log("the button works");
    });
  });