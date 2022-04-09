/*Создать функцию, генерирующую шахматную доску. 
Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function createTable() {
    const element = document.getElementById('space');

    tab = document.createElement('table');
    element.appendChild(tab);

    tab.border = '1';

    for (let i = 0; i < 8; i++) {
        const row = tab.insertRow(i);

        for (var j = 0; j < 8; j++) {
            const cell = row.insertCell(j);
            const idStr = String.fromCharCode(97 + i).toUpperCase() + (j + 1);
            cell.innerHTML = idStr;
            cell.id = idStr;
            if ((i + j) % 2) {
                cell.style.backgroundColor = 'white';
                cell.style.color = 'black';
            } else {
                cell.style.backgroundColor = 'black';
                cell.style.color = 'white';
            }
            cell.style.height = '50px';
            cell.style.width = '50px';

        };
    };

}

createTable();
