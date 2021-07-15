let moon = document.getElementById('moon')
let stars = document.getElementById('stars')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn_explore = document.getElementById('btn-explore')
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

    
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn_explore.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

    if (value >= 450) {
        text.style.display = "none"
    }else {
        text.style.display = 'block'
    }
    if (value >= 390) {
        btn_explore.style.display = "none"

    }else {
        btn_explore.style.display = 'inline-block'
    }
})

// const links = document.querySelectorAll('ul > li');
// link.onclick = () => {
//         links.forEach(function(link) {
//         link.classList.add('active');
//     }
//     console.log('[forEach]', link);
// })
// links.addEventListener('click', link )
var activeItem = document.querySelector('.active')
var item = document.querySelectorAll('ul > li > a');

function clickItem(item) {

    if (activeItem == item) return;

    if (activeItem) {
        activeItem.classList.remove("active");
    }
        
    item.classList.add("active");
    activeItem = item;
}

item.forEach((item) => {
    item.addEventListener("click", () => clickItem(item));
})
