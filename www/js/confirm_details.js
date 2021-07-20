import { submitValues, showvalues } from './db3.js'

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

var allFilled = false;
var sbmtBtn = document.getElementById("submitProp")

var propName, propNumber, propType, leaseType, propLocation, propAge, leaseDuration;
var bedrooms, bathrooms, size, price, amenities, description;

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

sbmtBtn.addEventListener("click", submitTheStuff)

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

    // if (propName == "")
    //     allFilled = false
    // if (propNumber == "")
    //     allFilled = false
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

    // console.log("allfilled == " + allFilled)


    if (!allFilled) {

        // window.location.href = './index.html'

        // localStorage["propName"] = propName
        // localStorage["propNumber"] = propNumber
        // localStorage["propType"] = propType
        // localStorage["leaseType"] = leaseType
        // localStorage["bedrooms"] = bedrooms
        // localStorage["bathrooms"] = bathrooms
        // localStorage["size"] = size
        // localStorage["propLocation"] = propLocation
        // localStorage["price"] = price
        // localStorage["amenities"] = amenities
        // localStorage["leaseDuration"] = leaseDuration
        // localStorage["description"] = description
        // localStorage["propAge"] = propAge

        submitValues(propName, propNumber, propType, leaseType,
            propLocation, propAge, leaseDuration, bedrooms,
            bathrooms, size, price, amenities, description)

    } else {
        document.getElementById("instructions1").innerHTML = "Please fill in all required fields(marked with *)"
    }
}


