   
function updateMarkers(ne_lat, ne_long, sw_lat, sw_long) {
    //console.log("==========================================================================================");
    //console.log(ne_lat + " " + ne_long  + " " + sw_lat + " " + sw_long);
    var x = new XMLHttpRequest();
    x.open("GET", "https://jltadmin.m9corp.com/map_data.php?ne_lat="+ne_lat+"&ne_long="+ne_long+"&sw_lat="+sw_lat+"&sw_long="+sw_long, true);
    x.onreadystatechange = function () {
      if (x.readyState == 4 && x.status == 200){
        var doc = x.responseXML;
            if(doc != null){
                var home_markers = doc.getElementsByTagName("home_marker");
                if(home_markers != null){
                    // Add new markers
                    for (var i = 0, len = home_markers.length; i < len; i++) {           
                        if(home_markers[i] != null){                                            
                            var row_id = home_markers[i].getElementsByTagName("id")[0].textContent; 
                            var row_address = home_markers[i].getElementsByTagName("address")[0].textContent; 
                            var row_file_name = home_markers[i].getElementsByTagName("file_name")[0].textContent; 
                            var row_list_price = home_markers[i].getElementsByTagName("list_price")[0].textContent; 
                            var row_sq_ft = home_markers[i].getElementsByTagName("sq_ft")[0].textContent; 
                            var row_bath_amount = home_markers[i].getElementsByTagName("bath_amount")[0].textContent; 
                            var row_bed_amount = home_markers[i].getElementsByTagName("bed_amount")[0].textContent; 
                            var row_lat = home_markers[i].getElementsByTagName("lat")[0].textContent; 
                            var row_long = home_markers[i].getElementsByTagName("long")[0].textContent;                             
                            var list_type = home_markers[i].getElementsByTagName("list_type")[0].textContent;                             
                            var open_house = home_markers[i].getElementsByTagName("open_house")[0].textContent;     
                            var marker_latlng = new google.maps.LatLng(row_lat, row_long);                                                       
                            var new_info = "<a href='/listing-details?id=" + row_id + "'>"+
                                           "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
                                           "<tbody><tr><td class='navigation_tab' width='80%'>"+
                                           "<table><tbody>"+
                                           "<tr><td width='90px'><img src='https://jltadmin.m9corp.com/uploads/listings/thumbs/"+row_file_name+"' style='max-height:70px; max-width:85px; border:solid 1px #FFF;'></td>"+
                                           "<td style='color:#000;'><strong>"+row_address+"</strong><br>$"+row_list_price+"<br><strong>"+row_sq_ft+" Sq Ft.</strong><br>"+row_bed_amount+" Bed / "+row_bath_amount+" Bath</td></tr>"+
                                           "</tbody></table></td>"+
                                           "<td width='20%' bgcolor='#710303' align='center' style='border-bottom:1px solid #CCC;'>"+
                                           "<img src='https://irp-cdn.multiscreensite.com/65baa37c/dms3rep/multi/more.jpg' style='margin:0 auto;'></td></tr></tbody></table></a>";
                            var marker_icon = "https://irp-cdn.multiscreensite.com/65baa37c/dms3rep/multi/normal-listing.png";
                            if(list_type == 'Coming Soon'){
                                marker_icon = "https://irp-cdn.multiscreensite.com/65baa37c/dms3rep/multi/comingsoon.png";
                            }
                            if(open_house == '1'){
                                marker_icon = "https://irp-cdn.multiscreensite.com/65baa37c/dms3rep/multi/openhouse.png";
                            }                            
                            if(!markers.hasOwnProperty(row_id)){
                                var new_marker = new google.maps.Marker({
                                    position: marker_latlng,
                                    map: map,
                                    icon: marker_icon,
                                    title: row_address,                                
                                });                                     
                                markers[row_id] = new_marker;
                                var new_infowindow = new google.maps.InfoWindow()
                                google.maps.event.addListener(new_marker,'click', (function(new_marker,new_info,new_infowindow){ 
                                        return function() {
                                           infowindow.setContent(new_info);
                                           infowindow.open(map,new_marker);
                                        };
                                    })(new_marker,new_info,new_infowindow));                                 
                            }
                        }
                    }
                }
            }
      }
    };
    x.send(null);    
}
function boundsHaveChanged() {
    if(reloadWait == false){
        reloadWait = true;
            var map_bounds = map.getBounds();    
            var map_ne = map_bounds.getNorthEast();
            var map_sw = map_bounds.getSouthWest();
            updateMarkers(map_ne.lat(),map_ne.lng(),map_sw.lat(),map_sw.lng());
            reloadWait = false;
    }    
}
function success(latitude, longitude) {    
    //alert(latitude +"----"+ longitude);
  //var latlng = new google.maps.LatLng(49.86882551816066, -97.16706006921385);
  var latlng = new google.maps.LatLng(latitude, longitude);
  var myOptions = {
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl:false,
    zoom: 10,
    zoomControl: false,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
 google.maps.event.addListener(map, 'dragend', function() {
    boundsHaveChanged();        
  });    
 google.maps.event.addListener(map, 'zoom_changed', function() {
    boundsHaveChanged();       
  });      
  var marker = new google.maps.Marker({
      position: latlng,
      map: map,      
      title:"You are here!"
  });    
    setTimeout(function(){
      boundsHaveChanged();  
    }, 500); 
}
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

   var header_size = 0;
var footer_size = 0;
var map_size_H = 0;
var map_size_W = 0;
var header_obj = null;
var footer_obj = null;
var map_obj = null;
function updateMapContentHeight(){
    //alert("Oh: " + $( window ).outerHeight( true ) + " Hoh: " + $( "#header" ).outerHeight( true ) + " Foh: " + $( "#footer" ).outerHeight( true ) );  
    //alert("WO: " + window.orientation + " Ow: " + $( window ).outerWidth( true ) + " Oh: " + $( window ).outerHeight( true ));    
    header_size = $( "#header" ).outerHeight( true );
    footer_size = $( "#footer" ).outerHeight( true );
    map_size_H = $( window ).outerHeight( true ) - header_size - footer_size;
    map_size_W = $( window ).outerWidth( true );
    header_obj = $( "#header" );
    footer_obj = $( "#footer" );
    map_obj = $( "#map-canvas" );
    //console.log("Load: " + header_size + " " + footer_size);
    //console.log("MapS: " + map_size + "Or: " + window.orientation);
    if($( window ).outerHeight( true ) <= $( window ).outerWidth( true )){  
        $( "#header" ).hide();
        $( "#footer" ).hide();         
        $( "#map-canvas" ).height( map_size_W );      
    }else{
        $( "#header" ).show();
        $( "#footer" ).show();       
        if(map_size_H < 240){
            map_size_H = 240;
        }
        $( "#map-canvas" ).height( map_size_H );                                           
    }                 
}    
$( document ).ready(function() {          
    //updateMapContentHeight(); 
            if (navigator.geolocation) {
                var notMap = true
                navigator.geolocation.getCurrentPosition(
                    function (position) {  
                        var current_latitude = position.coords.latitude;
                        var current_longitude = position.coords.longitude;
                        success(current_latitude, current_longitude);
                        notMap = false;
                    },
                    function (error) { 
                        if (error.code == error.PERMISSION_DENIED)
                            //console.log("you denied me :-(");
                            //alert('error');
                            success(49.86882551816066, -97.16706006921385);
                            return false;
                    }
                );
                if(notMap){
                    success(49.86882551816066, -97.16706006921385);
                }
            } else {
                success(49.86882551816066, -97.16706006921385);
            }
            //success(); 
        setTimeout(function(){
            google.maps.event.trigger(map, "resize"); 
        }, 3000); 
});     
$( window ).resize(function() {
    if($( window ).outerHeight( true ) <= $( window ).outerWidth( true )){            
        header_obj.hide();
        footer_obj.hide();         
        //alert("Ow: " + $( window ).outerWidth( true) + " msW: " + map_size_W);
        map_obj.height( $( window ).outerWidth( true) );      
    }else{
        header_obj.show();
        footer_obj.show();
        map_obj.height( map_size_H );                                           
    }    
    if(map != null){
        setTimeout(function(){
            google.maps.event.trigger(map, "resize"); 
        }, 500); 
    }
});
