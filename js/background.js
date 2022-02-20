const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
