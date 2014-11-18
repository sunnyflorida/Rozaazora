 // info pop-up
 $(document).ready(function(){  
    $(".pop-up").hide();
    $(".info").on('click', function(){
    	 $(".pop-up").toggle();
 	  });
	
  // catalog menu
    $(".list-group").hide();
    $(".btn_catalog").on('click', function(){
      $(this).parent().parent().children('div').toggle('500'); 
  });

// little pictures on product page
	$('input:radio').change(function(){
	    var src = $(this).parent().parent().find('.product_option_image img').attr('src');
			$(".big_product_image").children('img').attr('src',src);   
	    }
	);    
  $('.product_option_image').on('click',function(){
      var src = $(this).children('img').attr('src');
      $(".big_product_image").children('img').attr('src',src);   
      }
  ); 

  $('.product_option_image').on('click',function(){
      $('input:radio').prop('checked',false);  
      $(this).parent().children('p').children('input:radio').prop('checked',true);  
      }
  );


  $('.btn_cart_remove').on('click',function(){
      $(this).closest('.row').remove(); 
      }
  );     

    $('.dropdown_gifts').on('mouseover',function(){
      $('.dropdown_gifts_menu').show()
    });
    $('.dropdown_gifts').on('mouseout',function(){
      $('.dropdown_gifts_menu').hide()
    });
     $('.dropdown_gifts_menu').on('mouseover',function(){
      $('.dropdown_gifts_menu').show()
    });
    $('.dropdown_gifts_menu').on('mouseout',function(){
      $('.dropdown_gifts_menu').hide()
    });

    $('.dropdown_catalog').on('mouseover',function(){
      $('.dropdown_catalog_menu').show()
    });
    $('.dropdown_catalog').on('mouseout',function(){
      $('.dropdown_catalog_menu').hide()
    });
     $('.dropdown_catalog_menu').on('mouseover',function(){
      $('.dropdown_catalog_menu').show()
    });
    $('.dropdown_catalog_menu').on('mouseout',function(){
      $('.dropdown_catalog_menu').hide()
    });

     $('.dropdown_about').on('mouseover',function(){
      $('.dropdown_about_menu').show()
    });
    $('.dropdown_about').on('mouseout',function(){
      $('.dropdown_about_menu').hide()
    });
     $('.dropdown_about_menu').on('mouseover',function(){
      $('.dropdown_about_menu').show()
    });
    $('.dropdown_about_menu').on('mouseout',function(){
      $('.dropdown_about_menu').hide()
    });
     
 });


$(document).ready(function(){
	$('#font1').on('click',function(){
		var greeting = $('.greeting textarea').val();
		$('.greeting_styled').children('p').text(greeting).css({'font-family':'Wonderland', 'font-size':'25px'});
	});
	$('#font2').on('click',function(){
		var greeting = $('.greeting textarea').val();
		$('.greeting_styled').children('p').text(greeting).css({'font-family':'Zombie', 'font-size':'25px'});
	});
	$('#font3').on('click',function(){
		var greeting = $('.greeting textarea').val();
		$('.greeting_styled').children('p').text(greeting).css({'font-family':'denistina', 'font-size':'25px'});
	});

  $('.greeting textarea').on('keyup',function(){
    var greeting = $('.greeting textarea').val();
    var text = $('.greeting_styled').children('p').text(greeting);
      $('#font1').on('click',function(){
        $(text).css({'font-family':'Wonderland', 'font-size':'25px'});
      });
      $('#font2').on('click',function(){
        $(text).css({'font-family':'Zombie', 'font-size':'25px'});
      });
      $('#font3').on('click',function(){
        $(text).css({'font-family':'denistina', 'font-size':'25px'});
      });

  });

})


function map_init(var_lati,var_long,var_markerTitle,var_contentString){
    
    var var_location = new google.maps.LatLng(var_lati,var_long);
  
    var var_mapoptions = {
      zoom: 10,
      mapTypeControl: false,
      center:var_location,
      panControl:false,
      rotateControl:false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    var var_map = new google.maps.Map(document.getElementById("map-container"), var_mapoptions);
 
    var var_infowindow = new google.maps.InfoWindow({
      content: var_contentString
    });
    
    var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title:var_markerTitle,
    maxWidth: 200,
    maxHeight: 200
    });
    
    google.maps.event.addListener(var_marker, 'click', function() {
      var_infowindow.open(var_map,var_marker);
    });
 
      $('#mapmodals').on('shown.bs.modal', function () {
          google.maps.event.trigger(var_map, "resize");
          var_map.setCenter(var_location);
      });
  }
 
$(document).on("click", ".openmodal", function () {
    var var_mapTitle = $(this).data('id');
    
    if (var_mapTitle == "Rozaazora_1"){
      map_init(53.314454, 28.024190);
    } else if (var_mapTitle == "Rozaazora_2"){
      map_init(53.814454, 38.024190);
    }
    $(".modal-header #title_id").html( var_mapTitle );
    $('#mapmodals').modal('show');
});

$(document).on("click", ".openmodal_cart", function () {
    var var_mapTitle = $(this).data('id');
    $('#mapmodals_cart').modal('show');
});


