const h3Span = document.querySelector('h3 span')
const divs = document.querySelector('.divs')
const divParagraphe = document.querySelector('.paragraphe')

let isClosed = true

divs.addEventListener('click', function(){
    if(isClosed){
        divs.style.backgroundColor = "hsl(0, 100%, 100%)"
        divParagraphe.style.display = "flex"
    }else if(!isClosed){
        divs.style.backgroundColor = "hsl(210, 60%, 98%)"
        divParagraphe.style.display = "none"
    }

    isClosed = !isClosed
})