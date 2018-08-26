import { CANVAS } from './canvas.js';

let mousePos =
{
    x: 0,
    y: 0
};

let mouseIsClicked = false;

document.addEventListener('mousedown', (evt) =>
{
    if (evt.button === 0)
    {
        mouseIsClicked = true;
    }
});

document.addEventListener('mouseup', (evt) =>
{
    if (evt.button === 0)
    {
        mouseIsClicked = false;
    }
})

document.addEventListener('mousemove', (evt) =>
{
    let rect = CANVAS.getBoundingClientRect();

    mousePos = {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * CANVAS.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * CANVAS.height
    };
});

export { mousePos, mouseIsClicked };