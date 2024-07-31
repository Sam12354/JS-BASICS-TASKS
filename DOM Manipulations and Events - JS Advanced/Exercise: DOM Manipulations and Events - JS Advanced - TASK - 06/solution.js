function solve() {
    const generateButton = document.querySelectorAll('button')[0];
    const buyButton = document.querySelectorAll('button')[1];
    
    const inputTextArea = document.querySelectorAll('textarea')[0];
    const outputTextArea = document.querySelectorAll('textarea')[1];

    const tableBody = document.querySelector('tbody');
    
    generateButton.addEventListener('click', generateRows);
    buyButton.addEventListener('click', buyFurniture);

    function generateRows() {
        
        const products = JSON.parse(inputTextArea.value);

        products.forEach(product => {
            const productRow = document.createElement('tr');

            const tdImage = document.createElement('td');
            const image = document.createElement('img');
            image.src = product.img;
            tdImage.append(image);
            productRow.append(tdImage);

            const tdName = document.createElement('td');
            tdName.textContent = product.name;
            productRow.append(tdName);

            const tdPrice = document.createElement('td');
            tdPrice.textContent = product.price;
            productRow.append(tdPrice);

            const tdDecFactor = document.createElement('td');
            tdDecFactor.textContent = product.decFactor;
            productRow.append(tdDecFactor);

            const tdMark = document.createElement('td');
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            tdMark.append(checkBox);
            productRow.append(tdMark);

            tableBody.append(productRow);
        });
        inputTextArea.value = ''
    }

    function buyFurniture() {

        const checkedBoxes = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(box => {
        checkedBoxes.push(box.closest('tr'));
        });

        const boughtFurniture = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        checkedBoxes.forEach(row => {
            const cells = row.children;
            const name = cells[1].textContent;
            const price = Number(cells[2].textContent);
            const decFactor = Number(cells[3].textContent);

            boughtFurniture.push(name);
            totalPrice += price;
            totalDecFactor += decFactor;
        });

        const averageDecFactor = totalDecFactor / boughtFurniture.length;

        outputTextArea.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
        outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputTextArea.value += `Average decoration factor: ${averageDecFactor}`;
    }
}