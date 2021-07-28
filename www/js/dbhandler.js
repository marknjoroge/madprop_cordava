var currentRow;
var PROP_TABLE = "PropertyTable";

document.addEventListener("deviceready", createDatabase, false);

function createDatabase() {

    this.db = window.sqlitePlugin.openDatabase({ name: 'MadPropDatabase', location: 'default' });

    this.db.transaction(
        function (tx) {
            tx.executeSql("create table if not exists " + PROP_TABLE
                + " ( id integer primary key,"
                + " name text,"
                + " number text,"
                + " propType text,"
                + " leaseType text,"
                + " bedrooms text,"
                + " bathrooms text,"
                + " size text,"
                + " location text,"
                + " price text,"
                + " amenities text,"
                + " duration text,"
                + " description text,"
                + " age text)",
                [],
                function (tx, results) { },
                function (tx, error) {
                    console.log("Error while creating the table: " + error.message);
                }
            );
        }, function (error) {
            console.log('Transaction ERROR: ' + error.message);
        }, function () {
            console.log("Database has been generated successfully.");
        }
    );
}

export function addValues(propName, propNumber, propType, leaseType, bedrooms, bathrooms, size, propLocation, price, amenities, leaseDuration, description, propAge) {

    createDatabase()
    var msg = "Information added successfully.";
    var params = [propName, propNumber, propType, leaseType, bedrooms, bathrooms, size, propLocation, price, amenities, leaseDuration, description, propAge];

    var strQuery = 'INSERT INTO ' + PROP_TABLE + ' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,)';

    transact(strQuery, params, msg)
}

export function updateValues(ID, propName, propNumber, propType, leaseType, propLocation, propAge, leaseDuration, bedrooms, bathrooms, size, price, amenities, description) {

    var params = [propName, propNumber, propType, leaseType, bedrooms, bathrooms, size, propLocation, price, amenities, leaseDuration, description, propAge];
    var strQuery = 'UPDATE ' + PROP_TABLE + ' SET name=?, number=?, propType=?,'
        + ' leaseType=?, bedrooms=?, bathrooms=?, size=?, location=?, price=?,'
        + ' amenities=?, duration=?, description=?, age=?, WHERE ID=?';
    params.push(ID);
    var msg = "Information updated successfully.";
    transact(strQuery, params, msg)
}

function transact(strQuery, params, msg) {

    db.transaction(function (tx) {
        tx.executeSql(
            strQuery,
            params,
            function (tx, results) {
                console.log(results)
            },
            function (tx, error) {
                console.log("add product error: " + error.message);
            });
    }, function (error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function () {
        console.log(msg);
    });
}

function searchQueryDB(tx) {
    tx.executeSql("SELECT * FROM " + PROP_TABLE + " where name like ('%" + document.getElementById("txtName").value + "%')",
        [], 
        function (error) {
            console.log('Transaction ERROR: ' + error.message);
        }, 
        function () {
            console.log(msg);
        });
}

// function deleteRow(tx) {
//     tx.executeSql('DELETE FROM ' + PROP_TABLE + ' WHERE id = ' + currentRow, [], queryDB, errorCB);
// }

// function insertDB(tx) {
//     tx.executeSql('INSERT INTO ' + PROP_TABLE + ' (name,number) VALUES ("' +document.getElementById("txtName").value
//             +'","'+document.getElementById("txtNumber").value+'")');
// }

// function goSearch() {
//     var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
//     db.transaction(searchQueryDB, errorCB);
// }

// function goDelete() {
//         var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
//         db.transaction(deleteRow, errorCB);
//         document.getElementById('qrpopup').style.display='none';
// }
