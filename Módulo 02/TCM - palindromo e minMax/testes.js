const palindromeTable = document.getElementById('palindrome_table');
const minMaxTable = document.getElementById('minmax_table');
const palindromeTests = [
    {
        id: 1,
        text: 'Radar',
        expectedReturn: true
    },
    {
        id: 2,
        text: 'Arara',
        expectedReturn: true
    },
    {
        id: 3,
        text: 'Ovo',
        expectedReturn: true
    },
    {
        id: 4,
        text: 'Anilina',
        expectedReturn: true
    },
    {
        id: 5,
        text: 'Cadeira',
        expectedReturn: false
    },
    {
        id: 6,
        text: 'Ursinho',
        expectedReturn: false
    },
    {
        id: 7,
        text: 'Monitor',
        expectedReturn: false
    },
    {
        id: 8,
        text: 'Kenzie',
        expectedReturn: false
    },
    {
        id: 9,
        text: 'A sacada da casa',
        expectedReturn: true
    },
    {
        id: 10,
        text: 'Ame o poema',
        expectedReturn: true
    },
    {
        id: 11,
        text: 'A mala nada na lama',
        expectedReturn: true
    },
    {
        id: 12,
        text: 'A torre da derrota',
        expectedReturn: true
    },
    {
        id: 13,
        text: 'Estudar javascript',
        expectedReturn: false
    },
    {
        id: 14,
        text: 'O rei roeu a roupa do rato',
        expectedReturn: false
    },
    {
        id: 15,
        text: 'Cinco patinho foram passear',
        expectedReturn: false
    },
    {
        id: 16,
        text: 'Um senhor doutor',
        expectedReturn: false
    }
]

const minMaxTests = [
    {
        id: 1,
        array: [1,52,59,16,13,9],
        min: 1,
        max: 59
    },
    {
        id: 2,
        array: [2,30,33,11,51,56],
        min: 2,
        max: 56
    },
    {
        id: 3,
        array: [35,9,10,58,55,44],
        min: 9,
        max: 58
    },
    {
        id: 4,
        array: [52,58,47,31,37,5],
        min: 5,
        max: 58
    },
    {
        id: 5,
        array: [16,11,13,35,49,50],
        min: 11,
        max: 50
    },
    {
        id: 6,
        array: [59,57,28,22,13,5],
        min: 5,
        max: 59
    },
]

// Funções palíndromo
function createPalindromeCard({id, text, expectedReturn}){
    let template = `<tr id="teste_${id}" frase="${text}">
        <th scope="row">${id}</th>
        <td>${text}</td>
        <td class="expected_return">${expectedReturn}</td>
        <td class="return">-</td>
        <td class="result">-</td>
    </tr>`
    return template;
}
function createPalindromeTestCard({id, text, expectedReturn}){
    let retorno = isPalindrome(text);
    let isExpectedReturn = retorno == expectedReturn;
    let template = `<tr id="teste_${id}" frase="${text}">
        <th scope="row">${id}</th>
        <td>${text}</td>
        <td class="expected_return">${expectedReturn}</td>
        <td class="return">${retorno}</td>
        <td class="result">${isExpectedReturn ? "✅" : "❌"}</td>
    </tr>`;
    return template;
}
function testPalindromos(){
    let tbody = palindromeTable.querySelector('tbody');
    tbody.innerHTML = "";
    palindromeTests.forEach((test)=>{
        tbody.insertAdjacentHTML('beforeend', createPalindromeTestCard(test));
    })
    document.querySelector('#accordionPalindrome .accordion-collapse.collapse').classList.add('show')
}

// Funções MinMax
function createMinMaxCard({id, array, min, max}){
    let template = `<tr id="teste_${id}">
        <th scope="row">${id}</th>
        <td>[${array.toString()}]</td>
        <td class="min">${min}</td>
        <td class="max">${max}</td>
        <td class="return">-</td>
        <td class="result">-</td>
    </tr>`
    return template;
}
function createMinMaxTestCard({id, array, min, max}){
    let retorno = arrayMaxMin(array);
    let isExpectedReturn = retorno[0] == min && retorno[1] == max && retorno.length == 2;
    let template = `<tr id="teste_${id}">
        <th scope="row">${id}</th>
        <td>[${array.toString()}]</td>
        <td class="min">${min}</td>
        <td class="max">${max}</td>
        <td class="return">${retorno}</td>
        <td class="result">${isExpectedReturn ? "✅" : "❌"}</td>
    </tr>`
    return template;
}

function testMinMax(){
    let tbody = minMaxTable.querySelector('tbody');
    tbody.innerHTML = "";
    minMaxTests.forEach((test)=>{
        tbody.insertAdjacentHTML('beforeend', createMinMaxTestCard(test));
    })
    document.querySelector('#accordionMinMax .accordion-collapse.collapse').classList.add('show')
}

function init(){
    let tbodyPalindrome = palindromeTable.querySelector('tbody');
    palindromeTests.forEach((test)=>{
        tbodyPalindrome.insertAdjacentHTML('beforeend', createPalindromeCard(test));
    })

    let tbodyMinMax = minMaxTable.querySelector('tbody');
    minMaxTests.forEach((test)=>{
        tbodyMinMax.insertAdjacentHTML('beforeend', createMinMaxCard(test));
    })
}
addEventListener("load", (event) => {init()});
