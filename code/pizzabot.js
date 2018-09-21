const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

const submitButton = document.getElementById("submit-button")

// Check if the ordered pizza is on the menu
const checkOrderName = (itemOrdered) => {
  return itemOrdered === vegetarian || itemOrdered === hawaiian || itemOrdered === pepperoni
}

// Check the total cost of the order
const totalCost = (totalOrdered) => {
  return pizzaPrice * totalOrdered
}

// Check cooking time
const calculateCookingTime = (itemsToCook) => {
  if (itemsToCook > 0 && itemsToCook <= 2) {
    return 10
  } else if (itemsToCook > 2 && itemsToCook <= 5) {
    return 15
  } else if (itemsToCook >= 6) {
    return 20
  }
}

const submitOrder = () => {
  let orderName = document.getElementById("pizza-name").value
  let orderQuantity = document.getElementById("pizza-quantity").value
  let orderMessage = ""
  
  const orderTotal = totalCost(orderQuantity)
  
  const cookingTime = calculateCookingTime(orderQuantity)
  
  if (!checkOrderName(orderName))  {
    orderMessage = `Please enter either ${vegetarian}, ${hawaiian} or ${pepperoni}.`
  } else {
    if (orderQuantity < 1 || isNaN(orderQuantity)) {
      orderMessage = `Please enter a number above 0.`
    } else {
      if (orderQuantity > 1) {
      orderMessage = `We'll get started on your ${orderName}s right away. It will take ${cookingTime} minutes and cost ${orderTotal} kr.`
      } else {
        orderMessage = `We'll get started on your ${orderName}s right away. It will take ${cookingTime} minutes and cost ${orderTotal} kr.`
      }
    }
  }
  
  const orderBox = document.getElementById("order-box")
  
  orderBox.textContent = orderMessage
  
  orderBox.style.display = "block"
    
}

submitButton.addEventListener("click", submitOrder);
