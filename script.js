let generateNums = () => {
    const firstRandomNum = Math.floor(Math.random() * 6) + 1

const firstDiceImg = 'dice' + firstRandomNum + '.png'

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImg)


const secondRandomNum = Math.floor(Math.random() * 6) + 1

const secondtDiceImg = 'dice' + secondRandomNum + '.png'

document.querySelectorAll('img')[1].setAttribute('src',secondtDiceImg)

if(firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = "First One Is Winner"
}
else if(firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML = 'Second One Is Winner'
}
else{
    document.querySelector('h1').innerHTML = 'Its A Draw'
}
}