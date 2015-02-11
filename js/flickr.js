$(document).ready(function(){
	
	$('button').on("click", function() {
		$('button').removeClass("selected");
		$(this).addClass("selected");
		
		var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		
		var animal = $(this).text();
		
		var options = {
			format: "json",
			tags: animal
			
		}
		
		function displayPhotos(data) {
			var photoHTML = "<ul>";
			$.each(data.items, function(i, photo){
				photoHTML += "<li class='grid-25 tablet-grid-50'>";
				photoHTML += "<a href='" + photo.link + "' class='image'>";
				photoHTML += "<img src='" + photo.media.m + "' > </a> </li>";				
				
			})
			photoHTML += "</ul>";
			
			$('#photos').html(photoHTML);
		}
		
		
		$.getJSON(flickrAPI, options, displayPhotos)
		
	})
	
	
	
})