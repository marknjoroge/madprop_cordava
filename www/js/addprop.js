document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

var propName, propNumber, propType, leaseType, propLocation, propAge, leaseDuration;
var bedrooms, bathrooms, size, price, amenities, description;

var clicked = false;

var allFilled = true;

var db = "";

var checkBtn = document.getElementById('checkProp')

var instructionsTxt = document.getElementById('instructions1')

checkBtn.addEventListener("click", check)

function check() {

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
    if (propType == "")
        allFilled = false
    if (leaseType == "")
        allFilled = false
    if (propLocation == "")
        allFilled = false
    if (bedrooms == "")
        allFilled = false
    if (bathrooms == "")
        allFilled = false
    if (size == "")
        allFilled = false
    if (price == "")
        allFilled = false

    if (!allFilled) {
        instructionsTxt.innerHTML = "Please fill in all required fields(marked with *)"
        allFilled = true;
        console.log('one is empty')
        window.location.href = '#instructions1'
    } else {
        localStorage["propName"] = propName
        localStorage["propNumber"] = propNumber
        localStorage["propType"] = propType
        localStorage["leaseType"] = leaseType
        localStorage["bedrooms"] = bedrooms
        localStorage["bathrooms"] = bathrooms
        localStorage["size"] = size
        localStorage["propLocation"] = propLocation
        localStorage["price"] = price
        localStorage["amenities"] = amenities
        localStorage["leaseDuration"] = leaseDuration
        localStorage["description"] = description
        localStorage["propAge"] = propAge

        window.location.href = './confirm_details.html'

        console.log('none is empty')
    }
}

