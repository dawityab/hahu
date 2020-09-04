console.log('iam hard');
var btn_hard = () => {
    var ken = new Date();
    document.querySelector('#space').innerHTML = ken.getFullYear();
    console.log("it is hard time");
};
var hard_btn =  document.querySelector('.easy11');
hard_btn.addEventListener('click',btn_hard);

