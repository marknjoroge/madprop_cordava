var db, ID = 0, PROP_TABLE = "PropertyTable"

document.addEventListener("deviceready", function () {
    
    db = window.sqlitePlugin.openDatabase({ name: 'demo.db', location: 'default' });

    db.transaction(function (tx) {
        tx.executeSql("create table if not exists " + PROP_TABLE
            + "(id integer primary key,"
            + " name text,"
            + " number number,"
            + " propType text,"
            + " leaseType text,"
            + " bedrooms number,"
            + " bathrooms number,"
            + " size number,"
            + " location text,"
            + " price number,"
            + " amenities text,"
            + " duration number,"
            + " age number)");
    }, function (error) {
        alert('Transaction ERROR: ' + error.message);
    }, function () {
        alert("Database has been generated successfully.");
    });
}, false);

export function submitValues(propName, propNumber, propType, leaseType, propLocation, propAge, leaseDuration, bedrooms, bathrooms, size, price, amenities, description) {

    // var propName, propNumber, propType, leaseType, propLocation, propAge, leaseDuration;
    // var bedrooms, bathrooms, size, price, amenities, description;

    // propName = document.getElementById('propname').value
    // propNumber = document.getElementById('propnumber').value
    // propType = document.getElementById('proptype').value
    // leaseType = document.getElementById('leasetype').value
    // propAge = document.getElementById('propage').value
    // leaseDuration = document.getElementById('leaseduration').value
    // propLocation = document.getElementById('proplocation').value
    // bedrooms = document.getElementById('bedrooms').value
    // bathrooms = document.getElementById('bathrooms').value
    // size = document.getElementById('size').value
    // price = document.getElementById('askprice').value
    // amenities = document.getElementById('localamenities').value
    // description = document.getElementById('propdescription').value


    var msg = "Information added successfully.";
    var params = [propName, propNumber, propType, leaseType, propAge, leaseDuration,
        propLocation, bedrooms, bathrooms, size, price, amenities, description];

    var strQuery = 'INSERT INTO ' + PROP_TABLE + ' VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,)';

    // if (document.getElementById("btnAdd").value == "Update") {
    //     strQuery = 'UPDATE ' + PROP_TABLE + ' SET name=?, number=?, propType=?,'
    //         + ' leaseType=?, bedrooms=?, bathrooms=?, size=?, location=?, price=?,' 
    //         + ' amenities=?, duration=?, age=?, WHERE ID=?';
    //     params.push(ID);
    //     msg = "Information updated successfully.";

    // document.getElementById("btnAdd").value = "Add";
    // document.getElementById("btnShow").style.display = "inline";
    // document.getElementById("tblData").removeAttribute("style");
    // document.getElementById("tblData").innerHTML = "";
    // }


    db.transaction(function (tx) {
        tx.executeSql(strQuery, params);
    }, function (error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function () {
        alert(msg);
    });
}

export function editRecord(ctrlReff) {
    ID = ctrlReff.parentElement.parentElement.children[1].innerHTML;
    var FirstName = ctrlReff.parentElement.parentElement.children[2].innerHTML;
    var LastName = ctrlReff.parentElement.parentElement.children[3].innerHTML;
    var Pincode = ctrlReff.parentElement.parentElement.children[4].innerHTML;
    var MobileNo = ctrlReff.parentElement.parentElement.children[5].innerHTML;

    document.getElementById("txtFirstName").value = FirstName;
    document.getElementById("txtLastName").value = LastName;
    document.getElementById("txtPincode").value = Pincode;
    document.getElementById("txtMobileNo").value = MobileNo;

    //hide button

    document.getElementById("btnAdd").value = "Update";
    document.getElementById("btnShow").style.display = "none";
    document.getElementById("tblData").style.display = "none";
}

export function showvalues() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM DemoTable', [], function (tx, rs) {
            var tblData = document.getElementById("tblData");
            var strData = "<tr><th>#</th><th>ID</th><th>First Name</th><th>Last Name</th><th>Pincode</th><th>Mobile No</th></tr>";

            for (var i = 0; i < rs.rows.length; i++) {
                strData += "<tr>";
                //All db names are case-sensitive                            
                strData += "<td><input type='button' value='Edit' onclick='EditRecord(this)'/></td>";
                strData += "<td>" + rs.rows.item(i).ID + "</td>";
                strData += "<td>" + rs.rows.item(i).firstname + "</td>";
                strData += "<td>" + rs.rows.item(i).lastname + "</td>";
                strData += "<td align='right'>" + rs.rows.item(i).pincode + "</td>";
                strData += "<td align='right'>" + rs.rows.item(i).mobileno + "</td>";
                strData += "</tr>";
            }

            tblData.innerHTML = strData;

        }, function (tx, error) {
            alert('Error fetching records: ' + error.message);
        });
    });
}