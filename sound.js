let btns = document.querySelectorAll("button");
let clickSound;



function playSound() {
    clickSound = new Audio('./res/buttonclick.mp3');
    clickSound.play();
}
function playSoundEqualBtn() {
    let clickSoundEqual = new Audio('./res/equal.mp3');
    clickSoundEqual.volume = 0.3
    clickSoundEqual.play();
}
function playSoundModeBtn() {
    let clickSoundMode = new Audio('./res/mode.mp3');
    clickSoundMode.play();
}

// Rate-limiting mechanism to control rapid clicks
function throttle(callback, limit) {
    var waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false;
            }, limit);
        }
    };
}

// Attach the throttled click event handler to all buttons
btns.forEach(function (button) {
    if (button.classList.contains('equalBtn')) {

        var throttledClick = throttle(playSoundEqualBtn, 1000);
        button.addEventListener('click', throttledClick);
    }
    else if (button.classList.contains('Mode')) {
        var throttledClick = throttle(playSoundModeBtn, 1000);
        button.addEventListener('click', throttledClick);

    }
    else {
        var throttledClick = throttle(playSound, 1000);
        button.addEventListener('click', throttledClick);
    }
});