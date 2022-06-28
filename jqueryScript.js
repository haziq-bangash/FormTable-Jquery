// console.log('jquery');

// array of objects representing data
const data = [];

// error handling p tag
let error = $('#error'); 

// form tags
let Name = $('#Name');
let email = $('#Email');
let gender = $('input[name = "Gender"]');
let userGender;

// radio buttons
let male = $('#Male');
let female = $('#Female');

// table body tag
const tableBody = $('#tableBody');

// function
$(document).ready(function() {

    // validate input
    $('form').submit(function(e){
        e.preventDefault();
        if(!$('input#Name').val()){
            console.log('no name provided');
            error.removeClass("text-success");
            error.addClass("text-danger");
            error.html('Please enter a name.');
            return false;
        }
        else if(!$('input#Email').val()){
            console.log('no email provided');
            error.removeClass("text-success");
            error.addClass("text-danger");
            error.html('Please enter a email.');
            return false;
        }
        else if(!male.is(":checked") && !female.is(":checked")){
            console.log('please check male or female');
            error.removeClass("text-success");
            error.addClass("text-danger");
            error.html('please check male or female');
            return false;
        }
        else {
            // data entry in table body
            // get the gender selected
            userGender = $("input[name='Gender']:checked").val();
            // temporary object variable
            const temp = {
                name : Name.val(),
                email: email.val(),
                gender : userGender
            };
            // console.log(temp);
            // push temp to data (array of objects)
            data.push(temp);
            console.log(data);
            // insert data to table
            // tableBody.HTML += `<tr><td>${temp.name}</td><td>${temp.email}</td><td>${temp.gender}</td></tr>`;
            let add = `<tr><td>${temp.name}</td><td>${temp.email}</td><td>${temp.gender}</td></tr>`;
            tableBody.append(add);
            error.html('Data Entered successfully!');
            error.removeClass('text-danger')
            error.addClass("text-success");
            return true;
        }
        // Name = $('input#Name').val();
        // console.log(Name);
    });
});
