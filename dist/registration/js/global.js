/**
 * File Name: global.js
 *
 * Sheik Oodally
 *       
 */
alert("View in mobile size screens for a better experience");

function btnCalculate_click() {
    showCalculatedAge();
}

function btnAdd_click() {
    addMember();
}



function btnUpdate_click() {
    updateMember();
}

function btnDelete_click() {
    deleteMember();
}

function btnShowAll_click() {
    showAllMembers();
}
function btnShowOne_click() {
    showOneMember();
}

function pageMembers_show() {
    showAllMembers();
}

function pageDetail_show() {
    showOneMember();
}


function btnAddFixture_click() {
    addFixture();
}

function pageFixtures_show() {
    showAllFixtures();
}

function pageFixDetail_show() {
    showOneFixture();
}

function btnFixDelete_click() {
    deleteFixture();
}

function btnFixUpdate_click() {
    updateFixture();
}

function init() {
    $("#btnCalculate").on("click", btnCalculate_click);
    $("#txtDOBAdd").on("change", btnCalculate_click);
    $("#btnAdd").on("click", btnAdd_click);

    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnDelete").on("click", btnDelete_click);
    $("#btnShowAll").on("click", btnShowAll_click);
    $("#btnShowOne").on("click", btnShowOne_click);

    $("#pageMembers").on("pageshow", pageMembers_show);
    $("#pageDetail").on("pageshow", pageDetail_show);


    $("#btnAddFixture").on("click", btnAddFixture_click);
    $("#pageFixtures").on("pageshow", pageFixtures_show);
    $("#pageFixMod").on("pageshow", pageFixDetail_show);
    $("#btnFixDelete").on("click", btnFixDelete_click);
    $("#btnFixUpdate").on("click", btnFixUpdate_click);






    
}

function initDB(){
    try{
        DB.createDatabase();
        if (db) {
            console.info("Creating Tables...");
            DB.createTables();
        }
        else{
            console.error("Error: Cannot create tables: Database does not exist!");
        }
    } catch(e){
        console.error("Error: (Fatal) Error in initDB(). Can not proceed.");
    }
}

$(document).ready(function () {
    init();
    initDB();
});
