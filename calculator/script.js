//selecting all required elements
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let button = document.querySelectorAll('.button');
let erasebtn =  document.querySelector('#erase');
let clearbtn =  document.querySelector('#clear');
let evaluate =  document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", [] => {
    realTimeScreenValue = [''];
    answerScreen.innerhtml = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color =" rgba(150, 150, 150, 0.87)";


})