// Your code goes here 

const header = document.querySelector('.main-navigation');

header.addEventListener('mouseover', (event) => {
    header.classList.add('pink');
});

header.addEventListener('mouseleave', (event) => {
    header.classList.remove('pink');
});



Array.from(document.images).forEach(function (image) {
    image.addEventListener('mouseover', (event) => {
        event.target.style.boxShadow = '5px 5px 25px purple';
    });
});

Array.from(document.images).forEach(function (image) {
    image.addEventListener('mouseleave', (event) => {
        event.target.style.boxShadow = 'initial';
    });
});


const busImg = document.querySelector('.intro img');

busImg.addEventListener('click', function() {
    document.body.style.backgroundColor = 'coral';
});

busImg.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'initial';
});



function greenText() {
    document.body.style.color = 'green'
}

window.addEventListener('scroll', function () {
    setTimeout(function() {
        greenText();
    }, 1000);
});



function colorHeadings(event) {
    if (event.key === 'p') {
        document.body.style.color = 'pink';
    } else if (event.key === 'r') {
        document.body.style.color = 'red';
    } else if (event.key === 'o') {
        document.body.style.color = 'orange';
    } else if (event.key === 'b') {
        document.body.style.color = 'blue';
    } else if (event.key === 'Escape') {
        document.body.style.color = 'initial';
    }
}
document.addEventListener('keydown', colorHeadings);


function welcome(event) {
    setTimeout(function() {
        alert('Welcome!!!');
    }, 1000);
}
document.addEventListener('load', welcome());