let myPidor = [
    "3",
    "Ы",
    "7",
    "И",
    "Д",
    "7",
    "1",
];

let urlAnimate = () => {
    window.location.hash = myPidor[Math.floor((Date.now() / 100) % myPidor.length)];
    setTimeout(urlAnimate, 100);
};

urlAnimate();