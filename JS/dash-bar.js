let side = document.querySelector('.side-bar')

const openSide = () => {
    side.classList.add('active-side');
}

const closeSide = () => {
    side.classList.remove('active-side');
}


// admin drop

let admin = document.querySelector('.admin')
let adminUl = document.querySelector('.drop')

const toggleAdmin = () => {
    admin.classList.toggle('drop-admin')
}

adminUl.addEventListener('click', (event) => {
    admin.classList.toggle('drop-admin')
});

document.addEventListener('click', (event) => {
    if (!admin.contains(event.target)) {
        admin.classList.remove('drop-admin');
    }
});