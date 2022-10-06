'use strict';

import video1 from '../media/video/1.mp4';
import video2 from '../media/video/2.mp4';

const content = document.querySelector('.content');
const items = [
    {
        title: 'Видеозапись 1',
        videoUrl: `${video1}`
    },
    {
        title: 'Видеозапись 2',
        videoUrl: `${video2}`
    }
];

items.forEach(item => {
    content.insertAdjacentHTML('beforeend', `
        <figure class="item">
            <video controls src="${item.videoUrl}"></video>
            <figcaption>${item.title}</figcaption>
        </figure>
    `);
});
