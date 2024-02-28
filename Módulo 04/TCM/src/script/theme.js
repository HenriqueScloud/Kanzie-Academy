export function ThemeDarkMode(){

    const btnDarkMode = document.querySelector(`.header__theme-btn`); 
    const html = document.querySelector('html');

    let darkMode = false;

    function themeDark(){
        darkMode = !darkMode;
        btnDarkMode.classList.toggle('header__theme-btn--dark');
        html.classList.toggle('darkMode');        
        localStorage.setItem("theme", JSON.stringify(darkMode));  
    }
    btnDarkMode.addEventListener("click", themeDark);

    function themeJustify(){
        darkMode = JSON.parse(localStorage.getItem("theme")); 
        if (darkMode) {
            btnDarkMode.classList.add('header__theme-btn--dark');
            html.classList.add('darkMode');
        }
    }
    themeJustify();
};