const divs = document.querySelectorAll('.divs');
let scoreNotification = document.querySelector('h1 span');
const myH2 = document.querySelector('h2')

let notif = 3;

divs.forEach(divs => {
    const paragraphe = divs.querySelector('.paragraphe');
    const pointOrange = divs.querySelector('.divh3 div');
    
    divs.addEventListener('click', () => {
        if (pointOrange && pointOrange.style.display !== "none") {
            pointOrange.style.display = "none";
            notif--;
            scoreNotification.textContent = notif;
        }
        if (paragraphe.style.display === "flex") {
            paragraphe.style.display = "none";
        } else {
            paragraphe.style.display = "flex";
            divs.style.backgroundColor = "hsl(0, 100%, 100%)";
        }
    });
});

myH2.addEventListener('click', () =>{
    notif = 0
    scoreNotification.textContent = notif;
    divs.forEach(divs => {
        const pointOrange = divs.querySelector('.divh3 div');
        pointOrange.style.display = "none"
        divs.style.backgroundColor = "hsl(0, 100%, 100%)";
    });
})