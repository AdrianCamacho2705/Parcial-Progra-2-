function calculo(){
    var producto = document.getElementById("producto").value
    var precio = document.getElementById("precio").value
    var cantidad = document.getElementById("cantidad").value
    var subtotal = document.createElement("subtotal")
    subtotal= precio*cantidad
    
    var table= document.getElementsByTagName("table")[0]
    var newRow =table.insertRow(1)
    var cell1= newRow.insertCell(0)
    var cell2= newRow.insertCell(1)
    var cell3= newRow.insertCell(2)
    var cell4= newRow.insertCell(3)

    cell1.innerHTML= producto
    cell2.innerHTML= precio
    cell3.innerHTML= cantidad
    cell4.innerHTML= subtotal
    
}