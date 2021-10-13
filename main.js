let valueTabl = document.querySelector('#mainValue');

function numberTabl() {
    let btn = document.querySelectorAll('.numBtn')
    btn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            valueTabl.value += btn.value
        });
    });
};
numberTabl();

function consider() {
    let consider = document.querySelector('.equals')
    consider.onclick = function () {
        valueTabl.value = eval(valueTabl.value)//.toFixed(3)  
    };
};
consider();

function clear() {
    document.querySelector('.clear').addEventListener('click', function () {
        valueTabl.value = ''
    });
};
clear();