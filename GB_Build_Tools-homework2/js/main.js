'use strict';

import './datecalc.js';
import './timer.js';
import { dateCalcForm } from './datecalc.js';
import '../style.css';

const btnCalc = document.getElementById('btnCalc');
const btnTimer = document.getElementById('btnTimer');

// const dateCalcForm = document.getElementById("datecalc");
const timer = document.getElementById('timer');

btnCalc.addEventListener('click', () => {
    btnCalc.disabled = true;
    btnTimer.disabled = false;
    dateCalcForm.classList.toggle('hidden');
    timer.classList.toggle('hidden');
});

btnTimer.addEventListener('click', () => {
    btnTimer.disabled = true;
    btnCalc.disabled = false;
    dateCalcForm.classList.toggle('hidden');
    timer.classList.toggle('hidden');
});


