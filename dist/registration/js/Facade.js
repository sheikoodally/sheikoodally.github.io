/**
 * File Name: Facade.js
 *
 * Sheik Oodally
 */

function showCalculatedAge() {
    var dob = $("#txtDOBAdd").val();

    $("#txtAgeAdd").val(getCurrentAge(dob));
}


function addMember() {

    //do validation
    if (doValidate_frmMember()) {
        //fetch info from inputs
        var name = $("#txtNameAdd").val();
        var fullName = $("#txtFullNameAdd").val();

        var position;

        if (document.getElementById('radCBAdd').checked)
        {
            position = $("#radCBAdd").val();
        }
        else
        {
            position = $("#radSTAdd").val();
        }

        var dob = $("#txtDOBAdd").val();


        //call DAL function to insert the
        var options = [name, fullName, dob, position];

        function callback() {
            console.info("Success: Record inserted successfully");
        }

        member.insert(options, callback);
    }
    else {
        console.error("Form is not valid");
    }
}



function clearDatabase() {
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.dropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}

function updateMember() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var name = $("#txtNameModify").val();
    var fullName = $("#txtFullNameModify").val();
    var position = $("#radSTModify").val();
    var dob = $("#txtDOBModify").val();

    //very important
    var options = [name, fullName, dob, position, id];

    function callback() {
        console.info("Success: Record updated successfully");
    }

    member.update(options, callback);
}

function deleteMember() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");
        $(location).prop('href', '#pageMembers');

    }

    member.delete(options, callback);
}

function showAllMembers() {
    var options = [];

    function callback(tx, results) {

        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {

            // both will work
            // var row = results.rows.item(i);
            var row = results.rows[i];

            console.info("Id: " + row['id'] +
                " Name: " + row['name'] +
                " Full Name: " + row['fullName'] +
                " DOB: " + row['dob'] +
                " Position: " + row['position']);

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>Name: " + row['name'] + "</h1>" +
                "<h2>Full Name: " + row['fullName'] + "</h2>" +
                "<h3>DOB: " + row['dob'] + "</h3>" +
                "<h3>Position: " + row['position'] + "</h3>" +
                "</a></li>";
        }

        var lv = $("#lvAll");

        lv = lv.html(htmlCode);
        lv.listview("refresh"); // very important
        //attach event handler for each list items
        $("#lvAll a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));

            //navigate to the detail page automatically
            //both will work.
            $(location).prop('href', '#pageDetail');
            // $.mobile.changePage("#pageDetail", {transition: 'none'});
        }

    }

    member.selectAll(options, callback);
}

function showOneMember() {


    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");


    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];

        console.info("Id: " + row['id'] +
            " Name: " + row['name'] +
            " Full Name: " + row['fullName'] +
            " DOB: " + row['dob'] +
            " Position: " + row['position']);


        $("#txtNameModify").val(row['name']);
        $("#txtFullNameModify").val(row['fullName']);
        if (row['position'] == 'true') {
            $("#radSTModify").prop("checked", true);
        }
        else {
            $("#radCBModify").prop("checked", true);
        }

        $("#frmModifyMember :radio").checkboxradio("refresh");

        $("#txtDOBModify").val(row['dob']);

    }

    member.select(options, callback);
}






//add fixture

function addFixture() {
    
        //do validation
        if (doValidate_frmMember()) {
            //fetch info from inputs
            var firstTeam = $("#txtTeam1Add").val();
            var secondTeam = $("#txtTeam2Add").val();
    
            var location;
    
            if (document.getElementById('radMelwoodAdd').checked)
            {
                location = $("#radMelwoodAdd").val();
            }
            else
            {
                location = $("#radGoodisonAdd").val();
            }
    
            var fixtureDate = $("#txtDateFixtureAdd").val();
    
    
            //call DAL function to insert the
            var options = [firstTeam, secondTeam, fixtureDate, location];
    
            function callback() {
                console.info("Success: Record inserted successfully");
            }
    
            fixture.insert(options, callback);
        }
        else {
            console.error("Form is not valid");
        }
    }




    function showAllFixtures() {
        var options = [];
    
        function callback(tx, results) {
    
            var htmlCode = "";
    
            for (var i = 0; i < results.rows.length; i++) {
    
                // both will work
                // var row = results.rows.item(i);
                var row = results.rows[i];
    
                console.info("Id: " + row['id'] +
                    " firstTeam: " + row['firstTeam'] +
                    " secondTeam: " + row['secondTeam'] +
                    " fixtureDate: " + row['fixtureDate'] +
                    " location: " + row['location']);
    
                htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                    "<h1>firstTeam: " + row['firstTeam'] + "</h1>" +
                    "<h2>secondTeam: " + row['secondTeam'] + "</h2>" +
                    "<h3>fixtureDate: " + row['fixtureDate'] + "</h3>" +
                    "<h3>location: " + row['location'] + "</h3>" +
                    "</a></li>";
            }
    
            var lav = $("#fixturesDisplay");

            lav = lav.html(htmlCode);
            lav.listview("refresh"); // very important
            //attach event handler for each list items
            $("#fixturesDisplay a").on("click", clickHandler);
    
            function clickHandler() {
                localStorage.setItem("id", $(this).attr("data-row-id"));
    
                //navigate to the detail page automatically
                //both will work.
                $(location).prop('href', '#pageFixMod');
                //$.mobile.changePage("#pageFixMod", {transition: 5});
            }
    
        }
    
        fixture.selectAll(options, callback);
    }





    function showOneFixture() {
        
        
            // var id = $("#txtId").val();
            var id = localStorage.getItem("id");
        
        
            var options = [id];
        
            function callback(tx, results) {
                var row = results.rows[0];
        
                console.info("Id: " + row['id'] +
                " firstTeam: " + row['firstTeam'] +
                " secondTeam: " + row['secondTeam'] +
                " fixtureDate: " + row['fixtureDate'] +
                " location: " + row['location']);
        
        
                $("#txtTeam1Mod").val(row['firstTeam']);
                $("#txtTeam2Mod").val(row['secondTeam']);
                if (row['location'] == 'true') {
                    $("#radMelwoodMod").prop("checked", true);
                }
                else {
                    $("#radGoodisonMod").prop("checked", true);
                }
        
                $("#frmModifyFixture :radio").checkboxradio("refresh");
        
                $("#txtDateFixtureMod").val(row['fixtureDate']);
        
            }
        
            fixture.select(options, callback);
        }





function deleteFixture() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");
        $(location).prop('href', '#pageFixtures');

    }

    fixture.delete(options, callback);
}


function updateFixture() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var firstTeam = $("#txtTeam1Mod").val();
    var secondTeam = $("#txtTeam2Mod").val();
    var location = $("#radMelwoodMod").val();
    var fixtureDate = $("#txtDateFixtureMod").val();

    //very important
    var options = [firstTeam, secondTeam, fixtureDate, location, id];

    function callback() {
        console.info("Success: Record updated successfully");
    }

    fixture.update(options, callback);
}