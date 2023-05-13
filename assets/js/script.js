const form = document.getElementById('form-activity');
const imgApprove = `<img src="./assets/img/aprovado.png" alt="Emoji celebrando"> `;
const imgDisapprove = `<img src="./assets/img/reprovado.png" alt="Emoji decepcionado"> `;
const activity = [];
const note = [];
const approve = '<p class="approve">Aprovado</p>';
const disapprove = '<p class="dispprove">Reprovado</p>';
const noteMin = parseFloat(prompt("Digite o valor da média:"));

let rows = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addRows();
    updateTable();
    updateAverageEnd();
    calcAverageEnd();
});

function addRows(){
    const containerNameActivity = document.getElementById('name-activity');
    const containerNoteActivity = document.getElementById('note-activity');

    if(activity.includes(containerNameActivity.value)){
        alert(`A atividade: ${containerNameActivity.value} já oi inserida`);
    } else {

        activity.push(containerNameActivity.value);
        note.push(parseFloat(containerNoteActivity.value));
    
        let row = `<div class="row-table">`;
        row += `<div class="col col-one">${containerNameActivity.value}</div>`;
        row += `<div class="col col-two">${containerNoteActivity.value}</div>`;
        row += `<div class="col col-tree">${containerNoteActivity.value >= noteMin ? imgApprove : imgDisapprove}</div>`;
        row += `</div>`;
        row += `<hr id="division">`;
        rows += row;
    
        containerNameActivity.value = '';
        containerNoteActivity.value = '';   
    }

};
function updateTable(){
    const bodyTable = document.querySelector('#new-row');
    bodyTable.innerHTML = rows;
};
function updateAverageEnd() {
    const averageEnd = calcAverageEnd();
    document.getElementById('averageTotal').innerHTML = averageEnd;
    document.getElementById('result').innerHTML = averageEnd >= noteMin ? approve : disapprove;
};
function calcAverageEnd() {
    let sumNote = 0;
    for(let i=0; i < note.length; i++){
        sumNote += note[i];
    }
    return sumNote / note.length;
}