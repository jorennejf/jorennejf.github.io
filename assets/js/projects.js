function showAll() {
	unboldAll();
	$( "#all" ).addClass( "current" );
	$( ".all" ).fadeOut( "fast", function() {});
	$( ".all" ).fadeIn( "fast", function() {});
}

function showArt() {
	unboldAll();
	$( "#art" ).addClass( "current" );
	$( ".all" ).fadeOut( "fast", function() {});
	$( ".art" ).fadeIn( "fast", function() {});	
}

function showDesign() {
	unboldAll();
	$( "#design" ).addClass( "current" );
	$( ".all" ).fadeOut( "fast", function() {});
	$( ".design" ).fadeIn( "fast", function() {});	
}

function showTechnical() {
	unboldAll();
	$( "#technical" ).addClass( "current" );
	$( ".all" ).fadeOut( "fast", function() {});
	$( ".technical" ).fadeIn( "fast", function() {});	
}

function unboldAll() {
	$( "#all" ).removeClass( "current" );
	$( "#art" ).removeClass( "current" );
	$( "#design" ).removeClass( "current" );
	$( "#technical" ).removeClass( "current" );
}