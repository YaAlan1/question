
// const buttonIds = ['rotateButton1', 'rotateButton2', 'rotateButton3', 'rotateButton4', 'rotateButton5'];


// buttonIds.forEach(id => {
//     const button = document.getElementById(id);
//     button.addEventListener('click', () => {
//         button.classList.toggle('rotated');
//     });
// });


let elems = document.querySelectorAll(".elem")

elems.forEach((elem) => {
    elem.onclick = () => {

        elems.forEach(item => item.classList.remove("active"))
        elem.classList.toggle("active")
    }
})


