/***************** functions to change categories *****************/
function showAll() {
	unboldAll();
	$( "#all" ).addClass( "current" );
	$( ".all" ).css("transition", ".5s ease");
	$( ".all" ).css("opacity", "1");
	//$( ".all" ).fadeOut( "fast", function() {});
	//$( ".all" ).fadeIn( "fast", function() {});
}

function showArt() {
	unboldAll();
	$( "#art" ).addClass( "current" );
	$( ".all" ).css("transition", ".5s ease");
	$( ".all" ).css("opacity", "0.2");
	$( ".art" ).css("opacity", "1");
	//$( ".all" ).fadeOut( "fast", function() {});
	//$( ".art" ).fadeIn( "fast", function() {});	
}

function showDesign() {
	unboldAll();
	$( "#design" ).addClass( "current" );
	$( ".all" ).css("transition", ".5s ease");
	$( ".all" ).css("opacity", "0.2");
	$( ".design" ).css("opacity", "1");
	//$( ".all" ).fadeOut( "fast", function() {});
	//$( ".design" ).fadeIn( "fast", function() {});	
}

function showTechnical() {
	unboldAll();
	$( "#technical" ).addClass( "current" );
	$( ".all" ).css("transition", ".5s ease");
	$( ".all" ).css("opacity", "0.2");
	$( ".technical" ).css("opacity", "1");
	//$( ".all" ).fadeOut( "fast", function() {});
	//$( ".technical" ).fadeIn( "fast", function() {});	
}

function unboldAll() {
	$( "#all" ).removeClass( "current" );
	$( "#art" ).removeClass( "current" );
	$( "#design" ).removeClass( "current" );
	$( "#technical" ).removeClass( "current" );
}
/******************************************************************/