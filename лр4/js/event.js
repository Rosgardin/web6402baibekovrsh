document.getElementById("load_table_button").addEventListener("click", async (event) => {
    try {
        let response = await fetch("http://localhost:8000/data_table", {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`Внимание! Ошибка: ${response.status}`); 
        }

        let data = await response.json(); 
        if (!data) {
            throw new Error("Данные не загружены (сбой передачи)");
        }

        fillTable(data["data"]);
    } catch (err) {
        alert(err.message); // Вывод ошибки
    }
});

function fillTable(data) {
    let table = document.getElementById("main_table").getElementsByTagName('tbody')[0]; 
    table.innerHTML = ""; 

    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();
        let marshCell = row.insertCell(0);
        marshCell.textContent = data[i]["departureTime"]; 
        let startCell = row.insertCell(1);
        startCell.textContent = data[i]["arrivalTime"]; 
        let endCell = row.insertCell(2);
        endCell.textContent = data[i]["trainNumber"]; 
        let hype = row.insertCell(3);
        hype.textContent = data[i]["route"]; 
    }
}
