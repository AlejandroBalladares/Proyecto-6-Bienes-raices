document.addEventListener('DOMContentLoaded', function(){
    evenListeners();

    darkMode();
});

function evenListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive);

}

function darkMode(){
    const botonDarkMode = document.querySelector('.dark-mode-botton');
    botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
    });
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }
    else{
        navegacion.classList.add('mostrar');
    }
}