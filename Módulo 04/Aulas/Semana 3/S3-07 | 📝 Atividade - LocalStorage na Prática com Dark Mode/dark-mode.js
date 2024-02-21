const buttonDark = document.querySelector(`.button-dark`);
const body = document.body;


let darkMode = false;

// Criando a função
function themeChange(){

	// invertendo o valor da variável
	darkMode = !darkMode;

	// Acessando o body via DOM e implementando/tirando a classe
	body.classList.toggle("dark-mode");

	// Chamando o localStorage e acessando o método
	// Convertendo o valor para JSON
    localStorage.setItem("theme", JSON.stringify(darkMode));
    darkMode == true ?  buttonDark.innerText = "Ligth Mode ⭐" : buttonDark.innerText = "Dark Mode 🌙";

}

buttonDark.addEventListener("click", themeChange);

// Criando a função que analisa o tema
function themeAnalasys() {

	// Reatribuindo o valor da variável conforme o valor salvo
	// Usando o JSON.parse para converter o valor de JSON para JS
	darkMode = JSON.parse(localStorage.getItem("theme"));

	// Verificando se darkMode é true
	if (darkMode) {
	// Adicionando darkMode
    body.classList.add("dark-mode");
    }
}

// Chamando a função em escopo global
themeAnalasys()
