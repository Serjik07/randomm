const p = document.querySelector('.title > p');
const chanse = document.querySelector('.chanse > p');
const input = document.querySelector('input');
const inputBox = document.querySelector(".inputBox");

function randomCreate() {
  // input.value = "";
  // debugger;
  let randomNum = Math.ceil(Math.random() * 100);
  let chanseN = 7;
  chanse.innerText = `You have ${chanseN} chanses`;
  console.log(randomNum)
  inputBox.addEventListener('submit', function (evn) {
    evn.preventDefault();
    chanseN--;  
    stugum(input.value,randomNum, chanseN)
  })
}
function stugum(value,memotizeNumber,chanseCount) {
  // chanseCount--;
  chanse.innerText = `You have ${chanseCount} chanses`;
  if (chanseCount === 0 && memotizeNumber !== (+value)) {
    p.innerText = 'memorized number changed, start over';
    //  input.value = '';
     randomCreate();
  } else if ((+input.value) > 100 || (+value) < 0) {
    p.innerText = `Dzer mutkagrac tivy durs e mijakayqic`;
    input.value = '';
  } else if ((+value) > memotizeNumber) {
    p.innerText = `the memorized number is smaller`;
    input.value = '';
  } else if ((+value) < memotizeNumber) {
    p.innerText = `the memorized number is larger`;
    input.value = '';
  } else {
    p.innerText = `that's right, you guessed it`;
    input.value = '';

    function pro() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(randomCreate)
        }, 2000)
      })
    }
    pro().then((func) => {

      p.innerText = 'memorized number changed, start over';
      func();
    })
  }
}
randomCreate();
