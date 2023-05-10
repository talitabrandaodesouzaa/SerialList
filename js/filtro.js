document.querySelector("#filtrar_assistindo").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
    filtrar(tarefasFiltradas)
})
document.querySelector("#filtrar_assistidos").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)
    filtrar(tarefasFiltradas)
})