'use strict';

function handleMobile() {
    document.getElementById('nav-list').classList.toggle('nav-show');
}

function handleResize() {
    if(screen.width > 600) {
        document.getElementById('nav-list').classList.remove('nav-show');
    }
}