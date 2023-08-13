function showCarousel() {
    // Toggle the visibility of the first carousel
   /*  $('.first-owl-carousel').slideToggle({
    
    }
      
      
    ); */
    $('.first-owl-carousel').owlCarousel({
      loop: true,
     items:13,
      nav: false,
  
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }
  

  $(document).ready(function() {
    // Initialize Owl Carousels
    $('.second-owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
  
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });

//when I click on the logo-1 the page called page1-content doesnt show ,can you help
  $(document).ready(function () {
    $('#ic').on('click', function () {
      $('.image-container').hide();  
$("#page1-content").show();



     /*  var pageToShow = $(this).data('page'); */
     /*  $('.new-page-content').removeClass('visible'); */
   /*    $('#' + pageToShow + '-content').addClass('visible'); */
      /* $('.image-container').hide(); */
    });

    $('.back-btn').on('click', function () {
      $('.new-page-content').removeClass('visible');
      $('.image-container').show();
    });
  });

  $(document).ready(function () {
    $('.image-wrapper').on('click', function () {
      var imageText = $(this).find('.image-text-i');
      $('.image-text-i').not(imageText).removeClass('show-text-i');
      imageText.toggleClass('show-text-i');
    });
  });


  $(document).ready(function () {
  

    $('.second-owl-carousel').on('click', '.carousel-image', function () {
      var pageToShow = $(this).data('page');
      $('.image-container').hide();
      $('#' + pageToShow).addClass('show');
    });

    $('.back-btn').on('click', function () {
      $('.carousel-item-content').removeClass('show');
      $('.image-container').show();
    });

    $("#eyebrow").click(function(){
      let owl = $('.owl-carousel');
      owl.trigger("to.owl.carousel",2)
     });
     $(".item-link").click(function(){ 
     })

     $("#seromroghani").click(function(){ 
       let owl = $('.owl-carousel');   
       owl.trigger("to.owl.carousel",3)
      });
      
      $(".item-link").click(function(){
        
      })


      $("#creamoxidan").click(function(){ 
        let owl = $('.owl-carousel');   
        owl.trigger("to.owl.carousel",1)
       });
       
       $(".item-link").click(function(){
         
       })

       $("#poodrdekolore").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",4)
       });
       $(".item-link").click(function(){ 
       })


       $("#variasion").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",5)
       });
       $(".item-link").click(function(){ 
       })

       $("#rangemo").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",6)
       });
       $(".item-link").click(function(){ 
       })

       $("#maskemo").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",7)
       });
       $(".item-link").click(function(){ 
       })


       $("#serommo").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",8)
       });
       $(".item-link").click(function(){ 
       })

       $("#losion").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",9)
       });
       $(".item-link").click(function(){ 
       })


       $("#spray").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",10)
       });
       $(".item-link").click(function(){ 
       })


       $("#argan").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",11)
       });
       $(".item-link").click(function(){ 
       })

       $("#spray2").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",12)
       });
       $(".item-link").click(function(){ 
       })

       $("#pankek").click(function(){
        let owl = $('.owl-carousel');
        owl.trigger("to.owl.carousel",13)
       });
       $(".item-link").click(function(){ 
       })
  });
 

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#mySearch").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });



  