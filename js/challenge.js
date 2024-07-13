const counter = document.getElementById('counter')
const minus = document.getElementById("minus")
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const comments = document.querySelector('.comments')
const form = document.getElementById('comment-form')
const input = document.getElementById('comment-input')
const like = document.querySelector('.likes')
let counters = 0;
let likes = {};
let paused = false;
let interval;
//Incrementing counter
function updateCounter(){
   counter.innerHTML = counters
}
function startCounter() {
    interval = setInterval(() => {
        counters++;
        updateCounter();
    }, 1000);
};
//stop counter
function stopCounter  () {
    clearInterval(interval);
};

function togglePause () {
    if (paused) {
        paused = false;
        startCounter();
        pause.innerText = 'pause'
    } else {
        paused = true;
        stopCounter();
        pause.innerText = 'resume';
    }
};
minus.addEventListener('click', () => {
    counters--;
    updateCounter();
});

plus.addEventListener('click', () => {
    counters++;
    updateCounter();
});

heart.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = `Number ${counters} was liked`;
    like.appendChild(li);
    
});

pause.addEventListener('click', togglePause);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = input.value;
    if (comments) {
        const p = document.createElement('p');
        p.innerText = comment;
        comments.appendChild(p);
        input.value = '';
    }
});


startCounter();
