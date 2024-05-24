let wrapper = document.querySelector(".wrapper");
const inp1 = document.querySelector('.input1');

const API = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

let fetchedData = [];

function CreateCard(arr) {
    wrapper.innerHTML = '';
    arr.map(v => {
        let p = document.createElement('p');
        p.innerHTML = `<p>${v.title}</p>`;
        wrapper.appendChild(p);
    });
}

fetch(API)
    .then(response => response.json())
    .then(data => {
        fetchedData = data;
        CreateCard(fetchedData);
    });

inp1.addEventListener("input", () => {
    const result = fetchedData.filter(v => v.title.includes(inp1.value));
    CreateCard(result);
});