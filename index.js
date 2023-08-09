let firstBtn = document.getElementById('button1')
let secondBtn = document.getElementById('button2')
let colorChangeBtn = document.getElementById('changeColorBtn')
let firstContent = document.getElementById('content1')
let secondContent = document.getElementById('content2')

firstBtn.addEventListener('click', function() {
    displayText()
})

function displayText() {
    var text = document.getElementById('content1')
    text.style.display = 'block'
}

secondBtn.addEventListener('click', function() {
    displayText1()
})

function displayText1() {
    var text = document.getElementById('content2')
    text.style.display = 'block'
}

changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red'
})
