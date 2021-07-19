document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

var propName, propNumber, propType, leaseType, location, propAge, leaseDuration;
var bedrooms, bathrooms, size, price, amenities, description;

var clicked = false;

var db = null;

document.getElementById('submitProp').addEventListener("click", check)

function check() {
    if(!clicked) {

        document.getElementById('instructions').innerHTML = "Please confirm the details to continue"
        clicked = true

        var submit = document.getElementById('submitProp')

        submit.href = "#proptype"

    } else {

        propName = document.getElementById('propname').value
        propNumber = document.getElementById('propnumber').value
        propType = document.getElementById('proptype').value
        leaseType = document.getElementById('leasetype').value
        propAge = document.getElementById('propage').value
        leaseDuration = document.getElementById('leaseduration').value
        location = document.getElementById('proplocation').value
        bedrooms = document.getElementById('bedrooms').value
        bathrooms = document.getElementById('bathrooms').value
        size = document.getElementById('size').value
        price = document.getElementById('askprice').value
        amenities = document.getElementById('localamenities').value
        description = document.getElementById('propdescription').value


        // document.addEventListener('deviceready', function() {
        //     db = window.sqlitePlugin.openDatabase({
        //         name: 'my.db',
        //         location: 'default',
        //     });
        // });
    }
}
