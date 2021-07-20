
var currentRow;
var PROP_TABLE = "properties";

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
}

// Populate the database
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS ' + PROP_TABLE + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, name,number)');
}

function searchQueryDB(tx) {
    tx.executeSql("SELECT * FROM " + PROP_TABLE + " where name like ('%"+ document.getElementById("txtName").value + "%')",
            [], querySuccess, errorCB);
}

// Transaction error callback
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

// Transaction success callback
function successCB() {
    var db = window.openDatabase("madprop.db", "1.0", "madprop database", 200000);
    db.transaction(queryDB, errorCB);
}

// Query the database
function queryDB(tx) {
    tx.executeSql('SELECT * FROM ' + PROP_TABLE, [], querySuccess, errorCB);
}


// Query the success callback
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

//Delete query
function deleteRow(tx) {
    tx.executeSql('DELETE FROM ' + PROP_TABLE + ' WHERE id = ' + currentRow, [], queryDB, errorCB);
}

//Insert query
//
function insertDB(tx) {
    tx.executeSql('INSERT INTO ' + PROP_TABLE + ' (name,number) VALUES ("' +document.getElementById("txtName").value
            +'","'+document.getElementById("txtNumber").value+'")');
}

function goInsert() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(insertDB, errorCB, successCB);
}

function goSearch() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(searchQueryDB, errorCB);
}

function goDelete() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(deleteRow, errorCB);
        document.getElementById('qrpopup').style.display='none';
}


function editRow(tx) {
    tx.executeSql('UPDATE ' + PROP_TABLE + ' SET name ="'+document.getElementById("editNameBox").value+
            '", number= "'+document.getElementById("editNumberBox").value+ '" WHERE id = '
            + currentRow, [], queryDB, errorCB);
}
function goEdit() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(editRow, errorCB);
    document.getElementById('qrpopup').style.display='none';
}