
const Todo = require("./servicer/Todo");
let id;

function row(item) {
    let table = document.querySelector('#list')
    table.innerHTML += `<tr>
    <div>
    <img src="${item.image}">
</div>
    <div>
        <td ><h5>${item.title}</h5></td>
        <td > <p>${item.description}</p></td>
        <td><div><p>${item.rating.count}</p>
        </div>
        </td>
        </div>
    </tr>`;
}


Todo.list().then(response =>{

    let data = response.data; 
    console.log(data)
    for(let i in data){
    row(data[i]);
    }
} )

