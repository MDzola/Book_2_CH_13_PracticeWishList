let savedData = document.getElementById("shoppingList")
let Item = document.getElementById("thingToBuy")
let Place = document.getElementById("placeToBuy")

document.getElementById("saveEntry").addEventListener("click", () => {
    if (Item.value && Place.value !== "") {
    let ii = Item.value
    let ee = Place.value

    savedData.innerHTML += `
    <section>
    <h1>${ii}</h1>
    <div>${ee}</div>
    </section>
    `
    clear();
    
    document.getElementById("thingToBuy").focus();
    } else {
        prompt("please put in all the info")
    }


})


function clear () {
    let Item = document.getElementById("thingToBuy").value = "";
    let Place = document.getElementById("placeToBuy").value = "";
}


if (Item.value && Place.value) {}