'use strict';

import { formatError } from "./common.js";
import {Howl} from 'howler';

const timerForm = document.getElementById("timer");
const timerResult = document.getElementById("timer__result");

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

const sound = new Howl({
    src: ['timer.mp3']
});

startBtn.addEventListener("click", timerOn);

function timerOn(event) {
    event.preventDefault();

    let { minutes, seconds } = timerForm.elements;
    
    if (seconds.value > 59) {
        seconds.value = 59;
    } else if (seconds.value < 0) {
        seconds.value = 0;
    }

    if (minutes.value < 0) {
        minutes.value = 0;
    }

    minutes = minutes.value;
    seconds = seconds.value;

    if (minutes && seconds) {
        startBtn.disabled = true;
        stopBtn.disabled = false;

        timerResult.innerHTML = `Осталось ${minutes} минут и ${seconds} секунд`;

        let intervalID = setInterval(function() {
            console.log('test');

            if (seconds < 1) {
                if (minutes >= 1) {
                    minutes--;
                    seconds = 59;
                    timerResult.innerHTML = `Осталось ${minutes} минут и ${seconds} секунд`;
                } else {
                    timerResult.innerHTML = `Время вышло!`;
                    clearInterval(intervalID);
                    startBtn.disabled = false;
                    stopBtn.disabled = true;
                    sound.play();
                }
            } else {
                seconds--;
                timerResult.innerHTML = `Осталось ${minutes} минут и ${seconds} секунд`;
            }
        }, 1000);

        stopBtn.addEventListener("click", () => {
            event.preventDefault();
            clearInterval(intervalID);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        });

    } else {
        timerResult.innerHTML = formatError("Заполните оба поля!");
    }
}
