let chosenService = []
const washBtn = document.getElementById("btn-1")
const movBtn = document.getElementById("btn-2")
const pullweedsBtn = document.getElementById("btn-3")
const sendBtn = document.getElementById("send-invoice")
const serviceDisplay = document.getElementById("service-ul")
const servicePrice = document.getElementById("price-ul")
const total = document.getElementById("total")
const paymentMessage = document.getElementById("payment-message")

washBtn.addEventListener("click",function(){
    const serviceclicked = {
        service: "Wash Car", value: "10"
    }
    chosenService.push(serviceclicked)
    washBtn.disabled = true
    displayservice()
    calctotal()
    
})

movBtn.addEventListener("click",function(){
    const serviceclicked = {
        service: "Mow Lawn", value: "20"
    }
    chosenService.push(serviceclicked)
    movBtn.disabled = true
    displayservice()
    calctotal()
    
})

pullweedsBtn.addEventListener("click",function(){
    const serviceclicked = {
        service: "Pull Weed", value: "30"
    }
    chosenService.push(serviceclicked)
    pullweedsBtn.disabled = true
    displayservice()
    calctotal()
    
})

sendBtn.addEventListener("click",function(){
    chosenService = []
    serviceDisplay.innerHTML = ""
    servicePrice.innerHTML = ""
    total.innerHTML = `$0`
    paymentMessage.innerHTML = ""
    resetbtn()

})


function displayservice(){
    let displayitem = ""
    let displayprice = ""
    for(let i=0; i<chosenService.length; i++){
        displayitem += `
        <li class="service-name">${chosenService[i].service} <span id = "remove-el" onclick = "remove(${chosenService.indexOf(chosenService[i])})">remove</span> </li>`
                  
        displayprice += `
        <li class="service-value"><span id = "span-el">$</span>${chosenService[i].value}</li>
        `
    }
    serviceDisplay.innerHTML = displayitem
    servicePrice.innerHTML = displayprice
    
}

function calctotal(){
    
    
    let totalvalue = 0
    for(i=0;i<chosenService.length;i++){
       totalvalue += parseFloat(chosenService[i].value)
    }
    total.innerHTML = `$${totalvalue} `
    paymentMessage.innerHTML = `<p class="payment-message">We accept cash, credit card, or PayPal</p>`

}
function resetbtn(){
    washBtn.disabled = false
    movBtn.disabled = false
    pullweedsBtn.disabled = false
}

function remove(index){
    chosenService.splice(index,1)
    displayservice()
    calctotal()
    resetbtn()
}



































// Btn1.addEventListener("click", function(){
//     service1.textContent = "Wash Car"
//     service11.textContent = "$10"
// })

// Btn2.addEventListener("click", function(){
//     service2.textContent = "Mow Lawn"
//     service22.textContent = "$20"
// })

// Btn3.addEventListener("click", function(){
//     service3.textContent = "Pull Weeds"
//     service33.textContent = "$30"
// })