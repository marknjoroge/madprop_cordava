
var PROP_TABLE

var db = null
function createDatabase() {
    this.db = window.openDatabase(
        "madprop.db",
        "1.0",
        "product database",
        1000000);
    this.db.transaction(
        function (tx) {
            //Run sql here using tx
            tx.executeSql(
                "create table if not exists " + PROP_TABLE
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
                + " age number)",
                [],
                function (tx, results) { },
                function (tx, error) {
                    console.log("Error while creating the table: " + error.message);
                }
            );
        },
        function (error) {
            console.log("Transaction error: " + error.message);
        },
        function () {
            console.log("Create DB transaction completed successfully");
        }
    );
}

function queryDB(tx) {
    tx.executeSql('SELECT * FROM ' + PROP_TABLE, [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var tblText='<table id="t01"><tr><th>ID</th> <th>Name</th> <th>Number</th></tr>';
    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        var tmpArgs=results.rows.item(i).id + ",'" + results.rows.item(i).name
                + "','" + results.rows.item(i).number+"'";
        tblText +='<tr onclick="goPopup('+ tmpArgs + ');"><td>' + results.rows.item(i).id +'</td><td>'
                + results.rows.item(i).name +'</td><td>' + results.rows.item(i).number +'</td></tr>';
    }
    tblText +="</table>";
    document.getElementById("tblDiv").innerHTML =tblText;
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}
