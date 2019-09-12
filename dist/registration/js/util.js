/**
 * File Name: util.js
 *
 * Sheik Oodally
 */


/**
 * Calculates the age
 * @param dob The Date of Birth
 * @returns {number} The age
 */
function getCurrentAge(dob) {
    var year = Number(dob.substr(0,4));
    var month = Number(dob.substr(5,2)) - 1;
    var day = Number(dob.substr(8,2));

    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;

    }
    return age;
}

function doValidate_frmMember() {
    var form = $("#formAddMember");
    form.validate({
        rules:{
            txtNameAdd:{
                required: true,
                minlength: 2
            },
            txtFullNameAdd:{
                required: true,
                rangelength: [2,20]
            },
            txtDOBAdd:{
                required: true,
                // max: "1990-01-01"
                agecheck: true
            }

        },
        messages:{
            txtNameAdd:{
                required: "You must specify Name",
                minlength: "Name must be at least 2 characters long"
            },
            txtFullNameAdd:{
                required: "You must specify full name",
                rangelength: "Full Name must be 2-20 characters long"
            },
            txtDOBAdd:{
                required: "You must specify DOB",
                // max: "You must be born before 1990-01-01"
                agecheck: "Must be at least 6 years"
            }
        }
    });
    return form.valid();
}


jQuery.validator.addMethod("agecheck",
    function(value, element){
        var age = getCurrentAge(value);
        if (age >= 6) {
            return true;
        }
        return false;
    },
    "Age must be at least 6 years");


    function doValidate_frmFixture() {
        var form = $("#formAddFixture");
        form.validate({
            rules:{
                txtTeam1Add:{
                    required: true,
                    minlength: 2

                },
                txtTeam2Add:{
                    required: true,
                    minlength: 2
                },
                fixtureLocation:{
                    required: true
                },
                txtDateFixtureAdd:{
                    required: true
                }
    
            },
            messages:{
                txtTeam1Add:{
                    required: "You must specify a team Name",
                    minlength: "Team Name must be at least 2 characters long",
                },
                txtTeam2Add:{
                    required: "You must specify a team Name",
                    minlength: "Team Name must be at least 2 characters long",
                },
                fixtureLocation:{
                    required: "You must choose a location"
                },
                txtDateFixtureAdd:{
                    required: "You must specify DOB"
                }
            }
        });
        return form.valid();
    }
    