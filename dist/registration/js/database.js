/**
 * File Name: database.js
 *
 * Sheik Oodally
 */

var db;

/**
 * General purpose error handler
 * @param tx The transaction
 * @param error The error object
 */
function errorHandler(tx, error){
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}

var DB = {
    createDatabase: function(){
        var shortName= "LFC";
        var version = "1.0";
        var displayName = "DB for LFC app";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating Database ...");
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess(){
            console.info("Success: Database created successfully.");
        }
    },
    createTables: function(){

        function txFunction(tx) {
            console.info("Creating table: member");
            var sql = "CREATE TABLE IF NOT EXISTS member(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name  VARCHAR(20) NOT NULL," +
                "fullName VARCHAR(20)," +
                "dob DATE," +
                "position VARCHAR(10));";


            var fixtureSql = "CREATE TABLE IF NOT EXISTS fixture(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstTeam  VARCHAR(25) NOT NULL," +
                "secondTeam VARCHAR(25) NOT NULL," +
                "fixtureDate DATE," +
                "location VARCHAR(15));";

            var options = [];

            function successCreate(){
                console.info("Success: Create table: member successful.");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);
            tx.executeSql(fixtureSql, options, successCreate, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Create tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    },
    dropTables: function(){
        
        function txFunction(tx){
            var sql = "DROP TABLE IF EXISTS member;";
            var fixtureSqlsql = "DROP TABLE IF EXISTS fixture;";
            var options = [];
            
            function successDrop() {
                console.info("Success: member table dropped successfully");
            }
            tx.executeSql(sql, options, successDrop, errorHandler );
            tx.executeSql(fixtureSqlsql, options, successCreate, errorHandler);
        }
        
        function successTransaction(){
            console.info("Success: Drop tables transaction successful");
        }
        
        db.transaction(txFunction, errorHandler, successTransaction);
    }

};