var plus = document.querySelectorAll('.plus')
var mins = document.querySelectorAll('.mins')
var qty = document.querySelectorAll('.qty')
var price = document.querySelectorAll('.price')
var totalPrice = document.querySelector('.totalPrice')
var remove = document.querySelectorAll('.close')


function calculateTotal() {
    var qty = document.querySelectorAll('.qty')
    var price = document.querySelectorAll('.price')
    var total = 0
    for (var index = 0; index < price.length; index++) {
        total += Number(price[index].innerHTML) * Number(qty[index].innerHTML)

    }
    totalPrice.innerHTML = total
    return total
}
calculateTotal()

plus.forEach(function (elment, i) {
    elment.addEventListener("click", function () {
        qty[i].innerHTML = Number(qty[i].innerHTML) + 1
        // totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(price[i].innerHTML)
        calculateTotal()
    })
});
mins.forEach(function (elment, i) {
    elment.addEventListener("click", function () {
        if (qty[i].innerHTML == 1) {
            return false
        }
        qty[i].innerHTML = Number(qty[i].innerHTML) - 1
        // totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(price[i].innerHTML)

        calculateTotal()
    })
});

/********************Remove Item ************* */

remove.forEach(function (elment, i) {
    elment.addEventListener("click", function () {
        totalPrice.innerHTML = Number(totalPrice.innerHTML) - (Number(price[i].innerHTML) * Number(qty[i].innerHTML))
        elment.parentNode.parentNode.remove();

    })
});