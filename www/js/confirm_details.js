import { addValues} from './dbhandler.js'

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

var allFilled = true;
var sbmtBtn = document.getElementById("submitProp")

var propName, propNumber, propType, leaseType, propLocation, propAge, leaseDuration;
var bedrooms, bathrooms, size, price, amenities, description;

sbmtBtn.addEventListener("click", submitTheStuff)

window.onload = function () {

    document.getElementById('propname').value = localStorage["propName"]
    document.getElementById('propnumber').value = localStorage["propNumber"]
    document.getElementById('proptype').value = localStorage["propType"]
    document.getElementById('leasetype').value = localStorage["leaseType"]
    document.getElementById('bathrooms').value = localStorage["bathrooms"]
    document.getElementById('bedrooms').value = localStorage["bedrooms"]
    document.getElementById('size').value = localStorage["size"]
    document.getElementById('proplocation').value = localStorage["propLocation"]
    document.getElementById('askprice').value = localStorage["price"]
    document.getElementById('localamenities').value = localStorage["amenities"]
    document.getElementById('leaseduration').value = localStorage["leaseDuration"]
    document.getElementById('propdescription').value = localStorage["description"]
    document.getElementById('propage').value = localStorage["propAge"]
}

function submitTheStuff() {
    propName = document.getElementById('propname').value
    propNumber = document.getElementById('propnumber').value
    propType = document.getElementById('proptype').value
    leaseType = document.getElementById('leasetype').value
    propAge = document.getElementById('propage').value
    leaseDuration = document.getElementById('leaseduration').value
    propLocation = document.getElementById('proplocation').value
    bedrooms = document.getElementById('bedrooms').value
    bathrooms = document.getElementById('bathrooms').value
    size = document.getElementById('size').value
    price = document.getElementById('askprice').value
    amenities = document.getElementById('localamenities').value
    description = document.getElementById('propdescription').value

    if (propName == "")
        allFilled = false
    if (propNumber == "")
        allFilled = false
    // if (propType == "")
    //     allFilled = false
    // if (leaseType == "")
    //     allFilled = false
    // if (propLocation == "")
    //     allFilled = false
    // if (bedrooms == "")
    //     allFilled = false
    // if (bathrooms == "")
    //     allFilled = false
    // if (size == "")
    //     allFilled = false
    // if (price == "")
    //     allFilled = false

    if (allFilled) {

        // window.location.href = './index.html'

        addValues(propName, propNumber, propType, leaseType, bedrooms, bathrooms, size, propLocation, price, amenities, leaseDuration, description, propAge)

        console.log("propname = ${propName}" + propName)

    } else {
        document.getElementById("instructions1").innerHTML = "Please fill in all required fields(marked with *)"
        window.location.href = '#instructions1'
    }
}
