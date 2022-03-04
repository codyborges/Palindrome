console.log(2+2)

// Don't forget your console logs

//DOM variables
let direction = document.querySelector('.directions')
console.log(direction)
let enter = document.querySelector('.entWord')
let submitBtn = document.querySelector('.subBtn')
let answer = document.querySelector('.answer')

//Event Listeners
submitBtn.addEventListener('click', palindrome)

//Function
function palindrome(){
let value = enter.value
console.log(value)
if(value.split('').reverse().join('') == value){
answer.innerHTML = 'It is a palindrome'
answer.style.color = 'blue'
answer.style.fontSize = '30px'
}else {
  answer.innerHTML = 'It is not a palindrome'
  answer.style.color = 'red'
  answer.style.fontSize = '30px'
}

}