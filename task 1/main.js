let list = [];
function getData() {
    let data1 = prompt("enter an information")
    let data2 = prompt("enter an information")
    list.push(data1 , data2)
    
    for (const i of list ){
        alert(i)
    }
}
getData()