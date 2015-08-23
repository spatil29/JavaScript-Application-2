
(function (a2, $, undefined){	

 a2.start = function(hookElementSelection, dataurl) {
   localStorage.clear();
	$.ajax({url:dataurl}).success(function(data) {
	//parse JSON data
			parseJSONData(data);
	});

	
 var parseJSONData = function(data) {
 
    var parseData = data;
	
	// array for Video Name , content URL and Thumb URL
	var videoName=[parseData[0]["name"],parseData[1]["name"],parseData[2]["name"],parseData[3]["name"],parseData[4]["name"],parseData[5]["name"]];
	var videoContentURL=[parseData[0]["content-url"],parseData[1]["content-url"],parseData[2]["content-url"],parseData[3]["content-url"],parseData[4]["content-url"],parseData[5]["content-url"]];
	var videoThumbURL=[parseData[0]["thumb-url"],parseData[1]["thumb-url"],parseData[2]["thumb-url"],parseData[3]["thumb-url"],parseData[4]["thumb-url"],parseData[5]["thumb-url"]];
	var videoDescription=[parseData[0]["description"],parseData[1]["description"],parseData[2]["description"],parseData[3]["description"],parseData[4]["description"],parseData[5]["description"]];
	localStorage.setItem('isTheatre', 'false');
	
	// Shuffle video
		shuffle(videoName,videoContentURL,videoDescription,videoThumbURL);
	// Local Storage
		var y = localStorage.getItem('videoId');
		var y1 = localStorage.getItem('videoId1');
		var y2 = localStorage.getItem('videoId2');
	
		if(y != null && y1 != null && y2!= null){
		var name_array = y.split(',');
		var name_array1 = y2.split(',');
		var name_array2 = y1.split(',');
	
		$.each(name_array , function(i,video){
			if($.inArray(video,videoName) != -1){
				videoName.splice($.inArray(video,videoName),1);
			}
		});
		$.each(name_array , function(i,video){
				videoName.push(video);
	
			});
			
		$.each(name_array1 , function(i,video){
			if($.inArray(video,videoContentURL) != -1){
				videoContentURL.splice($.inArray(video,videoContentURL),1);
			}
		});
		$.each(name_array1 , function(i,video){
				videoContentURL.push(video);
				
			});

		$.each(name_array2 , function(i,video){
			if($.inArray(video,videoThumbURL) != -1){
				videoThumbURL.splice($.inArray(video,videoThumbURL),1);
			}
		});
		$.each(name_array2 , function(i,video){
				videoThumbURL.push(video);
				
			});
	
	}
		function shuffle(array1, array2,array4,array3) {
        var counter = array1.length, temp, temp2,temp3,temp4,index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array1[counter];
        temp2 = array2[counter];
		temp3 = array3[counter];
		temp4 = array4[counter];

        array1[counter] = array1[index];
        array2[counter] = array2[index];
		array3[counter] = array3[index];
		array4[counter] = array4[index];

        array1[index] = temp;
        array2[index] = temp2;
		array3[index] = temp3;
		array4[index] = temp4;

    }
}
	var videoTitle0 = $("<h6 id=1>" + videoName[0] + "</h6>");
	var finalHTML0 = $("<ul id='playMe' class='sha' ><img src="+videoThumbURL[0]+" class='col-md-2'></img></ul>");
	hookElementSelection.append(videoTitle0);
	hookElementSelection.append(finalHTML0);
	
	
	 var videoTitle1 = $("<h6 id='2'>" + videoName[1]  + "</h6>");
	var finalHTML1= $("<ul id='playMe1' class='sha' ><img  src="+videoThumbURL[1]+" class='col-md-2'></img></ul>");
	hookElementSelection.append(videoTitle1);
	hookElementSelection.append(finalHTML1);

	var videoTitle2 = $("<h6 id='3'>" + videoName[2]+ "</h6>");
    var finalHTML2 = $("<ul id='playMe2' class='sha' ><img  src="+videoThumbURL[2]+" class='col-md-2'></img></ul>");
    hookElementSelection.append(videoTitle2);
    hookElementSelection.append(finalHTML2);
		
    var videoTitle3= $("<h6 id='4'>" + videoName[3] + "</h6>");
	var finalHTML3 = $("<ul id='playMe3' class='sha' ><img src="+videoThumbURL[3]+" class='col-md-2'> </img></ul>");
    hookElementSelection.append(videoTitle3);
	hookElementSelection.append(finalHTML3);
		
	
	  var videoTitle4 = $("<h6  id='5'>" + videoName[4] + "</h6>");
	  var finalHTML4 = $("<ul id='playMe4' class='sha'><img  src="+videoThumbURL[4]+" class='col-md-2'></img></ul>");
	   hookElementSelection.append(videoTitle4);
	   hookElementSelection.append(finalHTML4);

		var videoTitle5 = $("<h6  id='6'>" + videoName[5]+ "</h6>");
	    var finalHTML5 = $("<ul id='playMe5'><img width='100' height='100'src="+videoThumbURL[5]+" class='col-md-2'></img></ul>");
		hookElementSelection.append(videoTitle5);
		hookElementSelection.append(finalHTML5); 
		
	

   $('#playMe').click(function() { 
			var video = $("<video class='youtube_video' id='videoToPlay' width='400' height='200'><source src="+videoContentURL[0]+" type='video/ogg' ></video>");
			 $("#vid").html(video);
			 $("#title").hide();
		   // setting parameters to pass
			var displayName=videoName[0];
			var thumbURL=videoThumbURL[0];
			var contentURL=videoContentURL[0];
			var desc=videoDescription[0];
			storeData(displayName,thumbURL,contentURL);
			var vidId=document.getElementById('videoToPlay');
			videoPlayPause(displayName,video,vidId,desc,thumbURL,contentURL);
			
    });
	$('#playMe1').click(function() {
        var video = $("<video class='youtube_video' id='videoToPlay' width='400' height='200'><source src="+videoContentURL[1]+" type='video/ogg' ></video>");
	   $("#vid").html(video);
	   	$("#title").hide();
	   var displayName=videoName[1];
	   var thumbURL=videoThumbURL[1];
	   var contentURL=videoContentURL[1];
	   	var desc=videoDescription[1];
	   storeData(displayName,thumbURL,contentURL);
	   var vidId=document.getElementById('videoToPlay');
			videoPlayPause(displayName,video,vidId,desc,thumbURL,contentURL);
		
    });
	$('#playMe2').click(function() {

  var video = $("<video class='youtube_video' id='videoToPlay' width='400' height='200'><source src="+videoContentURL[2]+" type='video/ogg' ></video>");
      $("#vid").html(video);
	  $("#title").hide();
	 var displayName=videoName[2];
    var thumbURL=videoThumbURL[2];
	var contentURL=videoContentURL[2];
	var desc=videoDescription[2];
	storeData(displayName,thumbURL,contentURL);
	 var vidId=document.getElementById('videoToPlay');
		videoPlayPause(displayName,video,vidId,desc,thumbURL,contentURL);
    });
	$('#playMe3').click(function() {
  
  var video = $("<video class='youtube_video' id='videoToPlay' width='400' height='200'><source src="+videoContentURL[3]+" type='video/ogg' ></video>");
   $("#vid").html(video);
   $("#title").hide();
	  var displayName=videoName[3];
	 var thumbURL=videoThumbURL[3];
	 var contentURL=videoContentURL[3];
	 var desc=videoDescription[3];
     storeData(displayName,thumbURL,contentURL);
	 var vidId=document.getElementById('videoToPlay');
   });
	$('#playMe4').click(function() {
  
  var video = $("<video class='youtube_video' id='videoToPlay' width='400' height='200'><source  src="+videoContentURL[4]+" type='video/ogg' ></video>");
    $("#vid").html(video);
	$("#title").hide();
	 var displayName=videoName[4];
	var thumbURL=videoThumbURL[4];
	var contentURL=videoContentURL[4];
	var desc=videoDescription[4];
	storeData(displayName,thumbURL,contentURL);
	var vidId=document.getElementById('videoToPlay');
		videoPlayPause(displayName,video,vidId,desc,thumbURL,contentURL);
	
   });
	$('#playMe5').click(function() {
   var video = $("<video class='youtube_video' id='videoToPlay' width='400' height='200'><source src="+videoContentURL[5]+" type='video/ogg' ></video>");
   $("#vid").html(video);
   $("#title").hide();
	var displayName=videoName[5];
	var thumbURL=videoThumbURL[5];
	var contentURL=videoContentURL[5];
	 var desc=videoDescription[5];
	storeData(displayName,thumbURL,contentURL);
   var vidId=document.getElementById('videoToPlay');
	videoPlayPause(displayName,video,vidId,desc,thumbURL,contentURL);

   });
 
// Local storage
	 var storeData=function(displayName,thumbURL,contentURL){ 
	 if (localStorage.getItem("videoId") != null) { 
	 if(localStorage.getItem("videoId").search(displayName) === -1){
	     // Store
		var x = localStorage.getItem("videoId")+","+displayName;
		var x1 = localStorage.getItem("videoId1")+","+thumbURL;
		var x2 = localStorage.getItem("videoId2")+","+contentURL;
		localStorage.setItem("videoId",x); 
		localStorage.setItem("videoId1",x1); 
		localStorage.setItem("videoId2",x2); 
	 }

}
else{
		 localStorage.setItem("videoId",displayName); 
		 localStorage.setItem("videoId1",thumbURL); 
		 localStorage.setItem("videoId2",contentURL); 
	}
	
 }// Local Storage End


// HideAll details 
	 var hideAll= function(){
	  $("#playMe").hide();
	 $("#playMe1").hide();
	 $("#playMe2").hide();
	 $("#playMe3").hide();
	 $("#playMe4").hide();
	 $("#playMe5").hide();
	  $("#1").hide();
	    $("#2").hide();
		  $("#3").hide();
		    $("#4").hide();
			  $("#5").hide();
			    $("#6").hide();
	
 }
	 
    // Video Play pause progress bar Full screen
	var videoPlayPause= function(displayName,video,vidId,desc1,thumbURL,contentURL){
		video.trigger('play');
		var space =$("<br></br><br></br><br></br>");
		var playButton =$("<button type='button' class='button'id='play'>Play</button>");
		var divider=$("<div class='divider'/>");
		var divider1=$("<div class='divider'/>");
		var pauseButton =$("<button type='button' class='button' id='pause'>Pause</button>");
		var progressBar=$("<progress id='progressBar' value='0' max='100'></progress>")
        var seekBar=$("<input id='seek-bar' style='width:300px; margin:20px' type='range' min='0' max='100' value='0' step='1'>");
        var timeDuration =$("<span id='currentTime'>00:00</span> / <span id='durationTime'>00:00</span>");
		var fullScreenButton = $("<button type='button' id='full-screen' class='button'>Theatre Mode</button>");
		var homePage = $("<button type='button' class='button' id='HomePage'>Home Page</button>");
		var desc=$("<h6 class='slider' style='color:white' id='desc'>"+desc1+"</h6>");
		var para_tag = $("<p id='default'>Default Mode</p>");
		if( !$("#default").length){$("#mode_div").append(para_tag);}
        $("#result").html(playButton.add(divider.add(pauseButton.add(divider1.add(fullScreenButton.add(seekBar.add(timeDuration)))))));
		
	
		
	$('#play').click(function() {	
	 console.log("In play Loop");
	 video.trigger('play'); 
     });	
	 
	 $('#pause').click(function() {	
	 console.log("In pause Loop");
     video.trigger('pause');
     var pauseTime= vidId.currentTime;
	 localStorage.setItem("pauseTime",pauseTime); 
     //set the name of the video
     localStorage.setItem("videoName",displayName);
 });	
 
     var seekBarId=document.getElementById('seek-bar');
	 seekBarId.addEventListener("change" ,function() {
	  var seekValue = vidId.duration * (seekBarId.value / 100);
	   vidId.currentTime = seekValue;

	 }); 
	  
	vidId.addEventListener("timeupdate", function() {
	var time = vidId.currentTime * (100 / vidId.duration);
	seekBarId.value = time;
			if(seekBarId.value==25){
				  $("#title").html(desc);
				  $("#title").show();
			 } 
			
	localStorage.setItem("videoDes",desc1);	
  
	var currentMin = Math.floor(vidId.currentTime / 60);
	var currentSec = Math.floor(vidId.currentTime - currentMin * 60);
	var durationMin = Math.floor(vidId.duration / 60);
	var durationSec = Math.floor(vidId.duration - durationMin * 60);
	currentTime.innerHTML = currentMin+":"+currentSec;
	durationTime.innerHTML = durationMin+":"+durationSec;
    });
			 
	$("#videoToPlay").on('play', function() {	
	 var name =localStorage.getItem("videoName");
	 if(localStorage.getItem("pauseTime")!=null && displayName === name){
		  vidId.currentTime = localStorage.getItem("pauseTime");
		  localStorage.removeItem("pauseTime");
	    }
  });
  

// FULL Screen code 
		
	 var fullScreenButtonId = document.getElementById("full-screen");
	 fullScreenButtonId.addEventListener("click", function() {  
			localStorage.setItem('isTheatre', 'true');
			hideAll();
			var w_window = $(window).width();
			var h_window = $(window).height();
			$('#default').remove();
			var theatre_tag = $("<p id='theatre'>Theatre Mode</p>");
			$("#full-screen").hide();
			var space_div = $("<div></div>");
			$("#result").append(space_div);
			$("#result").append(homePage);
			$("#mode_div").append(theatre_tag);
			$("#videoToPlay").css('width',w_window);
			$("#videoToPlay").css('height',h_window);
			$("#videoToPlay").css('-webkit-transition','width 1s linear');
			$("#videoToPlay").css('transition','width 1s linear');
			$("#HomePage").click(function() {
			 		location.reload();
		       });
			  
	 });
	 
		// Play next video in full screen mode
		var currentVideo=document.getElementById('videoToPlay');
		currentVideo.addEventListener('ended',playNext,false);
	
			 function playNext() {
	
			  	var videoSource = localStorage.getItem("videoSource");
				var nextDes=localStorage.getItem("videoDes");
				if(videoSource === null){
					videoSource =  displayName;
				}
				var isTheatre =localStorage.getItem("isTheatre");
				if(isTheatre != null && isTheatre === 'true'){
				
				if($.inArray(contentURL,videoContentURL) != -1){
					console.log("Play Next Mode");
					var nextSrc = videoContentURL[($.inArray(contentURL, videoContentURL) + 1) % videoContentURL.length];
				    var nextTitle = videoName[($.inArray(videoSource, videoName) + 1) % videoName.length];
					var nextDesc= videoDescription[($.inArray(nextDes, videoDescription) + 1) % videoDescription.length];
					var nextThumb= videoThumbURL[($.inArray(thumbURL, videoThumbURL) + 1) % videoThumbURL.length];
				    var video = $("<video class='youtube_video' id='videoToPlay'><source src="+nextSrc+" type='video/ogg' ></video>");
					$("#vid").html(video);
					video.load();
					localStorage.setItem("videoSource",nextTitle);
					video.trigger('play');
				    var w_window = $(window).width();
				    var h_window = $(window).height();
					$("#videoToPlay").css('width',w_window);
			        $("#videoToPlay").css('height',h_window);
					var vidId=document.getElementById('videoToPlay');
					videoPlayPause(nextTitle,video,vidId,nextDesc,nextThumb,nextSrc);
					$('#default').remove();
					 $("#title").hide();
					$("#full-screen").remove();
					var space_div1 = $("<div></div>");
					$("#result").append(space_div1);
					$("#result").append(homePage);
					$("#HomePage").click(function() {
			 		     location.reload();
		              });
					}				
				}

             
            }  	 		 
}  // End Video Play pause

   }; // third
   
   }; // second last
 
})(window.a2 = window.a2 || {}, jQuery);



