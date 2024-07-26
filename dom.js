document.body.style.background = 'darkcyan'
document.body.style.color = 'white'
document.body.style.fontFamily = 'Arial'
document.body.style.fontSize = '20px'

//Element by Id
let three = document.getElementById('toyota') 

three.textContent = 'This is our class on DOM Manipulation'

//Element by Class Name
let four = document.getElementsByClassName('apple')
four[2].textContent = 'This is using the class name but not working'
four[1].textContent = 'The class name is selected and now working with the array'
four[0].style.backgroundImage = 'linear-gradient(to left, purple, lightblue)'
four[0].style.height = '80px'
four[0].style.width = '50%'

//Element by Tag Name
let five = document.getElementsByTagName('div')

five[0].style.background  = 'pink'
five[0].style.width = '50%'
five[0].style.height = '100px'
five[0].textContent = 'Oyenuga Nifemi'
five[0].style.color = 'blue'
five[0].style.display = 'flex'
five[0].style.justifyContent = 'center'
five[0].style.alignItems = 'center'

//Query Selector 
let six = document.querySelector('div')

six.textContent = 'Tofumi'