console.log('lets start');

import $, { css, fn } from 'jquery';
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


  /*** SLIDER ***/

function initSlider(data_from_API){
    //console.log(data_from_API)

   let  SliderData = [];
     $.each( Locations, function(index, item){
        SliderData.push(Object.assign({},  {location: item, ...data_from_API[index] } ))

    } );
    //console.log('SliderData',SliderData)

    function Slider(allSlides){
        this.allSlides = allSlides;
        this.max_slides = allSlides.length;

        this.SlideTemplate = function(location, title, image,id,index ){
            let slideTemp = `<div data-id="${id}" class="Slider_wrapper slider_id_${id} ${index == 0 ? 'currentSlide' : ''} " >
                                <div class="slider_img_wrapper">
                                    <img src="${image}"  alt="${title}">
                                    <div class="absolute info_slider">
                                    <p class="mb-1"> Location : ${location} </p>
                                    <span>Title:  ${title} </span>
                                    </div>
                                </div>
                                   
                             </div>`;
           // console.log(slideTemp);
            return slideTemp;
        }

        this.getCurrentSlideID = function(){
          let currentSlide =   $('.currentSlide');
          let ID = parseInt( currentSlide.attr('data-id') );
             return ID;
        }

        this.nextSlide = function(){
            let current_slideID = this.getCurrentSlideID();
            let nextSlide = current_slideID + 1;
            //console.log($.type(current_slideID))
            if( $('.slider_id_'+nextSlide).length > 0 ){
                $('.currentSlide').fadeOut().removeClass('currentSlide');
                $('.slider_id_'+nextSlide).fadeIn(800).addClass('currentSlide');
            }else{
                $('.currentSlide').fadeOut().removeClass('currentSlide');
                $('.slider_id_1').delay(100).fadeIn(800).addClass('currentSlide');
            }
        }
        this.prevSlide = function(){
            let current_slideID = this.getCurrentSlideID();
            let prevSlide = current_slideID - 1;
            //console.log($.type(current_slideID))
            if( $('.slider_id_'+prevSlide).length > 0 ){
                $('.currentSlide').fadeOut().removeClass('currentSlide');
                $('.slider_id_'+prevSlide).fadeIn(800).addClass('currentSlide');
            }else{
                $('.currentSlide').fadeOut().removeClass('currentSlide');
                $('.slider_id_'+ this.max_slides).delay(100).fadeIn(800).addClass('currentSlide');
            }
        }
     
        this.initSlides = function(){
            let slideTemp =   this.SlideTemplate;
           let all_slides = '';  
           $.each(this.allSlides, function(index, item){
            all_slides += slideTemp(item.location, item.title, item.thumbnailUrl, item.id, index )
            });
            $('#slide_show').append(all_slides)
           // console.log(all_slides);
           
        }


    }


    
    let startSlider = new Slider(SliderData)

    startSlider.initSlides();

    $('.prev').on('click', function (){ startSlider.nextSlide()  })
    $('.next').on('click', function (){ startSlider.prevSlide()  })


}

  let data_from_API;
          //geting data from API 
          $.ajax( {
            url : "https://jsonplaceholder.typicode.com/photos",
            beforeSend: function() {
                $("#loaderDiv").show();
            },
            success : function(data) {
                $("#loaderDiv").hide();
                $('.slide_nav').css({ display: 'flex'})
                data_from_API= data.slice(0,10);
                initSlider(data_from_API);
            }
      
            
        }
        );


        /********** SECOND PAGE ***************/

        $('#hamburger_input').on('click', function(){
           console.log( $(this).is(':checked') )
            if($(this).is(':checked') ) {
               $('.main_content').stop().animate({ left : -50 + 'px' }, 1000, function(){
                   $('#animated_menu li').each( function(index,item){
                        $(this).delay( 2000 * index).css({ transform : 'translateX(0px)'})
                   })
               })
            }else{ 
            $('.main_content').stop().animate({ left : -120 + '%' }, 1000)
            }

        })


      