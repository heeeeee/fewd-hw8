$(document).ready(function(){

	var $nav = $("#primary-nav li");

	$nav.on("click", function(e){

		// stop links from jumping down on page upon click
		e.preventDefault();
		
		// closing tab
		if ( $(this).hasClass("active")) {
			$nav.removeClass("active");
			$( "#slide-down" ).slideUp("slow");

		// opening tab
		} else {

			// initiatlize: hide everything except the tab clicked
			$('#primary-nav li a').each(function(){
				$($(this).attr('href')).hide();
			});

			// extract out the dropdown to show
			var section = $(this).children('a').attr("href");
			console.log(section);

			// show ONLY the selected
			$(section).show();

			$( "#slide-down" ).slideDown( "slow" );

			// initialize: remove active class from all
			$nav.removeClass("active");

			// then apply the active class on selected
			$(this).addClass("active");
		}
	});

	// $(".politics").on("click", function(e){

	// 	// stop links from jumping down on page upon click
	// 	e.preventDefault();


	// 	if ( $(this).hasClass("active")) {
	// 		$( "#primary-nav li" ).removeClass("active");
	// 		$( "#slide-down" ).slideUp("slow");
	// 	} else {

	// 		// hide everything except the tab clicked
	// 		$("#international-drop").hide();
	// 		$("#politics-drop").show();
	// 		$("#business-drop").hide();
	// 		$("#technology-drop").hide();
	// 		$("#culture-drop").hide();
	// 		$("#blogs-drop").hide();

	// 		$( "#slide-down" ).slideDown( "slow" );
	// 		$( "#primary-nav li" ).removeClass("active");
	// 		$(this).addClass("active");
	// 	}
	// });

});