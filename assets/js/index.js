console.log('lets start');

import $ from 'jquery';
import jqueryValidation from 'jquery-validation';


$("#registration_form").validate({
    rules: {
        user_name:{
            required: true,
            minlength: 2            
        },
        user_email: {
          required: true,
          email: true         
        },
        pass1 : {
            minlength : 5
        },
        pass2 : {
            minlength : 5,
            equalTo : "#pass1"
        }
    },
        messages: {
            user_name : {
            required: "Required input!",
            minlength: $.validator.format("Please, at least {0} characters are necessary")
            },
            user_email : {
                required: "Required input!",

            }
            
          }
        
    
  });