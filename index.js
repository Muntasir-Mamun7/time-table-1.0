let button1P = document.getElementById('button1')

let button2P = document.getElementById('button2')

let changeColorBtn = document.getElementById('changeColorBtn')

 let content1P = document.getElementById('content1')

 let content2P = document.getElementById('content2')

 button1P.addEventListener('click', function() {
    content1P.style.display = 'block'


})
button2P.addEventListener('click' , function(){
    content2P.style.display = 'block'
 })

 changeColorBtn.addEventListener('click' , function () {
    const randomColor =  Math.floor(Math.random()*16777215).toString(16)

    document.body.style.backgroundColor = "#" + randomColor
    
 })