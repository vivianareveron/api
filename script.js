$(document).ready(function(){

window.onload = getMyLocation;

    function getMyLocation (){

        if (navigator.geolocation){
        
            navigator.geolocation.getCurrentPosition(createUrl);
    
        } else {
        
            alert('Oops, no geolocation support')
    
        }

    }
    

    function createUrl (position){
        
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var div = document.getElementById('location');
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=f159fc813f3d5c272942f43640b27135"
    
        function displayInfo(data){
            
            var temp = Math.round(data.main.temp - 273.14);
            var info = "<ul>";
            
            info += "<li><h2>" + data.name + "</h2></li>";
            info += "<li><p>" + data.weather[0].description + "</p></li>";
            info += "<li><h1>" + temp + "° C</h1></li>";
            info += "<li><p> Humidity: " + data.main.humidity + "%</p></li>";
            info += "<li><p> Wind speed: " + data.wind.speed + "m/s</p></li>";				
			info += "</ul>";
			
			$('#location').html(info);
       
            if(data.weather[0].main == "Clear" && $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("dayclear");
            
            
            } else if (data.weather[0].main == "Clear" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)) {
                
               $("body").addClass("nightclear");
            
            
            }  else if(data.weather[0].main == "Clouds" && $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("daycloudy");
            
            
            } else if (data.weather[0].main == "Clouds" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)){
                
               $("body").addClass("nightcloudy");
            
            }  else if(data.weather[0].main == "Rain" && $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("dayrainy");
            
            
            } else if (data.weather[0].main == "Rain" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)) {
                
               $("body").addClass("nightrainy");
            
            }  else if(data.weather[0].main == "Snow" && $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("daysnowy");
            
            
            } else if (data.weather[0].main == "Snow" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)) {
                
               $("body").addClass("nightsnowy");
            
            }  else if(data.weather[0].main == "Fog" && $.now() > $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("dayfog");
            
            
            } else if (data.weather[0].main == "Fog" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)) {
                
               $("body").addClass("nightfog");
            
            
            } else if(data.weather[0].main == "Mist" && $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("daymist");
            
            
            } else if (data.weather[0].main == "Mist" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)) {
                
               $("body").addClass("nightmist");
            
            } else if(data.weather[0].main == "Haze" && $.now()/1000 > data.sys.sunrise && $.now()/1000 < data.sys.sunset) {
                
               $("body").addClass("dayhaze");
            
            
            } else if (data.weather[0].main == "Haze" && ($.now()/1000 < data.sys.sunrise || $.now()/1000 > data.sys.sunset)) {
                
               $("body").addClass("nighthaze");
            
            } else {
                 $("body").addClass("default");
            }
        
        };

        $.getJSON(url, displayInfo);
        
    }

})
	
	
	


