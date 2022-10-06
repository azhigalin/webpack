'use strict';

import { formatError } from "./common.js";
import { diffDates, diffToHtml } from "./diffDates.js"; 

export const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const result = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(result);
    } else {
        dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля!");
    }
}

