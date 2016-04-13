$(function(){

	$("#stage").load('manufacturing_nepal2.svg',function(response){

		$(this).addClass("svgLoaded");

		if(!response){ // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from a the http protocol (not locally) and have read <strong><a href="http://shailiza.com/blog/2016/04/top-5-manufacturing-industries-of-nepal/#note">this important part of the tutorial</a></strong>');
		}

	});
});

