let list =document.getElementById('list')

let addTodo = ()=> {  
  
    let todo_item =document.getElementById("todo-item")
    // console.log(todo_item.value)

    if (todo_item.value == "" || todo_item.value == null) {
        alert("neeche box mein kch toh likhooooo");
        return false;
      }
    
    let li = document.createElement('li')
    // console.log(li)

    let inp = document.createElement('input')
    inp.setAttribute("type","checkbox")
    inp.setAttribute("class","inp")
    inp.setAttribute("id","get_inp")   
    li.appendChild(inp)


    let li_text = document.createTextNode(todo_item.value)
    // console.log(li_text)

    li.appendChild(li_text)
    // console.log(li)

    list.appendChild(li)
    // console.log(li)

    let breakline = document.createElement("br")
    li.appendChild(breakline)


    let del_btn = document.createElement("button")
    let delText = document.createTextNode("DELETE")
    del_btn.setAttribute("class","red")
    del_btn.setAttribute("onclick","deleteItem(this)")
    del_btn.appendChild(delText)
    li.appendChild(del_btn)




    let edit_btn = document.createElement("button")
    let editText = document.createTextNode("EDIT")
    edit_btn.setAttribute("class","yellow")
    edit_btn.setAttribute("onclick","editItem(this)")
    edit_btn.appendChild(editText)
    li.appendChild(edit_btn)


    let hrline = document.createElement("hr")
    li.appendChild(hrline)


    todo_item.value = ""
    // console.log(li)



}

let delAll = ()=>{
    list.innerHTML = ""

}


let deleteItem = (del)=> {
    // console.log("yes working")
    // console.log(del)
// console.log(del.parentNode)

del.parentNode.remove()

}

let editItem=(edit)=>{
    console.log(edit.parentNode.childNodes[1].nodeValue)
    let val = prompt("Enter edit Value",edit.parentNode.childNodes[1].nodeValue)
    edit.parentNode.childNodes[1].nodeValue=val;

}








    
    







