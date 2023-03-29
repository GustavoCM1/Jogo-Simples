const maskeiko = document.querySelector('.maskeiko');
const cone = document.querySelector('.cone');

const pulo= () =>{
    maskeiko.classList.add('pulo');

    setTimeout(() => {

        maskeiko.classList.remove('pulo');

    }, 500);

}

const loop= setInterval(() => {

    const conePosition= cone.offsetLeft;
    const maskeikoPosition = window.getComputedStyle(maskeiko).bottom.replace(' ');
    if(conePosition <= 120){

        cone.style.animation = 'none';
        cone.style.left = `${conePosition}px`;

    }

}, 10)


document.addEventListener('keydown', pulo); 