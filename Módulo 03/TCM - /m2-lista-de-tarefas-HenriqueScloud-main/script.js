const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(array){  
}

function createTaskItem(array){
    
  const newObject = array.map((item) => {

      const li = document.createElement('li');
      li.classList.add('task__item');

      const div = document.createElement('div');
      div.classList.add("task-info__container");

      const span = document.createElement("span");
      span.classList.add("task-type");

      const p = document.createElement('p');
      p.innerText = item.title;

      const button  = document.createElement("button");
      button.classList.add('task__button--remove-task')
      button.innerHTML = '<img src="assets/trash-icon.svg" alt="limpar tarefa"></img>';

      if (item.type == 'normal'){
        span.classList.add('span-normal')
      }
      else if(item.type == 'urgente'){
        span.classList.add('span-urgent')

      }
      else{
        span.classList.add('span-important')
      }
      li.append(div,button)
      div.append(span,p)

  })
}
renderElements(tasks);




