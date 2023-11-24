const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    speed.style.transfrom = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    alert("Allow this to work");
});