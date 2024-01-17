function showMessage() {
  alert("Gracias por entrar A Burger cool");

  let nombreUsuario = prompt("Ingrese su nombre")
  console.log()
  alert("Hola" + " " + nombreUsuario)

  let edad = prompt("Ingrese su edad para chequear si te podemos vender alcohol");

  if (edad >= 18) {
    alert("Podes comprar alcohol");
  } else {
    alert("Sos menor, no poder comprar Alcohol")
  }



  let tuTotal = 1000

  let tuPedido = prompt("Hace tu pedido" + " " + nombreUsuario + "\n1-Burger Cheese \n2-Burger Bacon \n3-Burger Cool \n4- Tu total\n5- Presione X para salir")
  while (tuPedido != "x" && tuPedido != "X") {
    switch (tuPedido) {
      case "1": alert(" Burger Cheese Buena elección")
        console.log("burger Cheese")
        break
      case "2": alert("Burger Bacon, Buena elección")
        console.log("burger Bacon")
        break
      case "3": alert("Burger Cool, Buena elección")
        console.log("burger Cool")
        break
      case "4": pagarTutotal()
    }
    tuPedido = prompt("\n1-Burger cheese \n2-Burger Bacon \n3-Burger cool \n4- Tu total \n5- presione X para salir")


    function pagarTutotal() {

      let pago = parseInt(prompt("con cuanto abonas?"))

      if (tuTotal <= pago || pago <= tuTotal && pago == tuPedido) {
        pago -= tuTotal
        alert("Tu pago fue exitoso, tu vuelto es " + pago)
      }
      else {
        alert("No tenes plata")
      }

    }
  }

}







