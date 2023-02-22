const frontSize = document.querySelector('#font-size-control');
const getSize = document.querySelector('#text');
 
frontSize.addEventListener('input', (event) => {
    getSize.style.fontSize = `${event.currentTarget.value}px`;
})