var list=document.getElementById('list');


function additem(){
    var additem=document.getElementById('todo-item')
    var li = document.createElement('li')
    var liText=document.createTextNode(additem.value)
    li.appendChild(liText)


 //    Delete Button
    var deletebutton=document.createElement('button')
    var deleteText=document.createTextNode('Delete Item')
    deletebutton.appendChild(deleteText)
    deletebutton.setAttribute('onclick','removeItem(this)')
    li.appendChild(deletebutton)

//      Edit Button
    var eidtBtn=document.createElement('button')
    var editText=document.createTextNode("Edit Item")
    eidtBtn.appendChild(editText)
    eidtBtn.setAttribute('onclick','editItem(this)')
    li.appendChild(eidtBtn)
    
    
    list.appendChild(li)
    additem.value=""
    
    
}

// Delete Function
function removeItem(e){
    e.parentNode.remove()
}

// DeleteAll Function

function deleteAll(){
    list.innerHTML=""
}

// Edit Function

function editItem(e){
    var val=e.parentNode.firstChild.nodeValue
    var editValue=prompt("Enter Edit Value", val )
    e.parentNode.firstChild.nodeValue =editValue
    console.log(val)

}