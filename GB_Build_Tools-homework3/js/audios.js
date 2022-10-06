'use strict';

import audio1 from '../media/audio/1.mp3';
import audio2 from '../media/audio/2.mp3';
import audio3 from '../media/audio/3.mp3';

const content = document.querySelector('.content');
const items = [
    {
        title: 'Звук 1',
        audioUrl: `${audio1}`
    },
    {
        title: 'Звук 2',
        audioUrl: `${audio2}`
    },
    {
        title: 'Звук 3',
        audioUrl: `${audio3}`
    }
];

items.forEach(item => {
    content.insertAdjacentHTML('beforeend', `
        <figure class="item">
            <audio controls src="${item.audioUrl}"></audio>
            <figcaption>${item.title}</figcaption>
        </figure>
    `);
});
