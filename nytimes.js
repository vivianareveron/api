$(document).ready(function(){
	
	$('button').on("click", function() {
		$('button').removeClass("selected");
		$(this).addClass("selected");
		
		var flickrAPI = "http://api.nytimes.com/svc/movies/{version}/reviews/search[.response_format]?[optional-param1=q]&[...]&api-key={eeb70ae0e0418527ed1978848a0ee355:14:71203724}";
            
		var animal = $(this).text();
		
		var options = {
            q: 'test',
			
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