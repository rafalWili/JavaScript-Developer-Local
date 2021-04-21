console.log('lets start');

import $ from 'jquery';
import jqueryValidation from 'jquery-validation';
window.jQuery = $;
window.$ = $;

const Locations = [    
                    "Harrington",
                    "Cornwall",
                    "Southwell",
                    "Mews",
                    "Kensington",
                    "Tourist",
                    "Apartments",
                    ]


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

function initSlider(data_from_API){
    //console.log(data_from_API)

   let  SliderData = [];
     $.each( Locations, function(index, item){
        SliderData.push(Object.assign({},  {location: item, ...data_from_API[index] } ))

    } );
    console.log('SliderData',SliderData)

    function Slider(name){
        this.name = name;
    }








}

  let data_from_API;
          //geting data from API 
          $.ajax( {
            url : "https://jsonplaceholder.typicode.com/photos",
            
        }).then(function(data) {
             // console.log(data.slice(0,10))
              data_from_API= data.slice(0,10);
              initSlider(data_from_API);
        }
        );


        
      