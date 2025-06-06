$(document).ready(function() { 
  var $data=$('#data');
  
    url= 'https://api.ujomusic.com/api/musicreleases';
  
  $.get(url, function (response) {
   // alert(response[0].description);
   console.log(response[0].image.contentURL); $("#description").html(response[0].description );

$("#songname").html(response[0].releaseOf.name);    
    
$("#picture").html('<img src=' + response[0].image.contentURL + '>')    
         
        }
        );  //end get
      
 
    }); //end doc ready
