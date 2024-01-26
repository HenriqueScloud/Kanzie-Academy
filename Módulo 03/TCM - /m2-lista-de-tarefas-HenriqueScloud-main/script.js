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
  const ulTasks = document.querySelector('.tasks__list');
  ulTasks.innerHTML ='';
  array.forEach((task) => {
    const newTask = createTaskItem(task);
    ulTasks.appendChild(newTask);
  });
}
renderElements(tasks);
function createTaskItem(task){
  //criando tags 
  const li = document.createElement('li');
  const div = document.createElement('div');
  const spanTask_type = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');
  //adicionando evento de delete ao botão
  button.addEventListener('click', () => {
    const foundIndex = tasks.indexOf(task);
    tasks.splice(foundIndex,1);
    renderElements(tasks);
  });
  //adicionando as class as tags
  li.classList.add('task__item');
  div.classList.add('task-info__container');
  spanTask_type.classList.add('task-type');
  button.classList.add('task__button--remove-task');
  // condicional para urgencias 
  if(task.type =='Normal' || task.type =='normal'){
    spanTask_type.classList.add('span-normal');
  }
  else if(task.type =='Importante' || task.type =='importante'){
    spanTask_type.classList.add('span-important');
  }
  else if(task.type == 'Urgente'|| task.type == 'urgente'){
    spanTask_type.classList.add('span-urgent');
  }
  // adicionando conteudo das tags 
  p.innerText = task.title;
  button.innerHTML = '<img src="assets/trash-icon.svg" alt="limpar tarefa">'
  // organizando tags dentro de tags 
  li.append(div,button);
  div.append(spanTask_type,p);
  return li;
}
createTaskItem(tasks);
function newTasks(){
  const form = document.querySelector('.form__container');
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const title = document.querySelector('#input_title').value;
    const type = document.querySelector('.form__input--priority').value;
    const newTask = {
      title: title,
      type: type,
    };
    tasks.push(newTask);
    renderElements(tasks);
  })
}
newTasks();