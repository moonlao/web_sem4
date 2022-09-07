// SELECTOR PARA CADA LISTA
const taskList = document.getElementById("all-tasks");
const toDoList = document.getElementById("tasks-in-progress");
const doneList = document.getElementById("finished-tasks");

// CREAR ARREGLO
const tasks = [
    {done: false, text: "Llevar el carro al taller" },
    {done: true, text: "Comprar arcilla" },
    {done: false, text: "Arreglar guitarra" },
    {done: false, text: "Sacar el perro" },
    {done: false, text: "Visitar abuelita" },
    {done: false, text: "Pagar parqueadero U" },
    {done: false, text: "Comprar regalo Raquel" },
    {done: false, text: "Comprar tiquetes SAI" },
    {done: false, text: "Buscar el DS" },
    {done: true, text: "Jugar Nintendogs" }
];

// PINTO EN 
function writeTasks(){
    taskList.innerHTML="";
    toDoList.innerHTML="";
    doneList.innerHTML="";

    tasks.forEach((task) => {
        const elem = document.createElement("li");
        elem.textContent = task.text;
        elem.className = task.done ? "checked":"unchecked";
        elem.classList.add ("item-style");
        elem.addEventListener("click",() =>toggleTask(task));
        
        const cloneElem = elem.cloneNode(true);
        cloneElem.addEventListener("click",()=>toggleTask(task));

        taskList.append(elem);
        
        if(task.done){
            doneList.append(cloneElem);
        }else{
            toDoList.append(cloneElem);
        }
    });
}
writeTasks();

function toggleTask(taskItem){
    taskItem.done=!taskItem.done;
    writeTasks();
}