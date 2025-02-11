let myPidor = [
    "Т",
    "Ы",
    "П",
    "И",
    "Д",
    "О",
    "Р",
];

let urlAnimate = () => {
    window.location.hash = myPidor[Math.floor((Date.now() / 100) % myPidor.length)];
    setTimeout(urlAnimate, 100);
};

urlAnimate();