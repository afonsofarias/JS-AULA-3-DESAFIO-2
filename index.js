
function adicionarTarefa() {
    var tarefaTexto = document.getElementById('tarefaInput').value;

    if (tarefaTexto !== '') {

        var novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefaTexto;
        document.getElementById('listaTarefas').appendChild(novaTarefa);
        document.getElementById('tarefaInput').value = '';
    }
}
document.getElementById('botaoAdicionar').addEventListener('click', adicionarTarefa);