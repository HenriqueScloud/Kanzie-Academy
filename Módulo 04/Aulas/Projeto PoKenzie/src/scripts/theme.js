export function handleDarkMode(){
    const darkModeButtom = document.querySelector('.header__theme-btn');
    const html = document.querySelector('html');

    let darkMode = false;


    function themeDark(){
        darkMode = !darkMode;
        darkModeButtom.classList.toggle('header__theme-btn--dark');
        html.classList.toggle('dark-mode');        
        localStorage.setItem("theme", JSON.stringify(darkMode));        
    }
    darkModeButtom.addEventListener("click", themeDark);


    function themeJustify(){
        darkMode = JSON.parse(localStorage.getItem("theme")); 
        if (darkMode) {
            darkModeButtom.classList.add('header__theme-btn--dark')
            html.classList.add('dark-mode')
        }
    }
    themeJustify()
}