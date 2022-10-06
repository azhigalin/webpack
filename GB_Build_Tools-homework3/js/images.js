'use strict';

import img1 from '../media/images/1.jpg';
import img2 from '../media/images/2.jpg';
import img3 from '../media/images/3.jpg';
import img4 from '../media/images/4.gif';

const content = document.querySelector('.content');
const items = [
    {
        title: 'Изображение 1',
        imgUrl: `${img1}`
    },
    {
        title: 'Изображение 2',
        imgUrl: `${img2}`
    },
    {
        title: 'Изображение 3',
        imgUrl: `${img3}`
    },
    {
        title: 'Изображение 4',
        imgUrl: `${img4}`
    }
];

items.forEach(item => {
    content.insertAdjacentHTML('beforeend', `
        <figure class="item">
            <img src="${item.imgUrl}">
            <figcaption>${item.title}</figcaption>
        </figure>
    `);
});
