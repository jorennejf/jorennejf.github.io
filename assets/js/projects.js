/* These functions change categories. When a category is clicked,
 * projects not in that category will be hidden.
 * Old version (commented out) just decreased opacity.
 */
function showAll() {
	unboldAll();
	$( "#all" ).addClass( "current" );
	$( ".all" ).hide(200);
	$( ".all" ).show(200);
	//$( ".all" ).css("transition", ".5s ease");
	//$( ".all" ).css("opacity", "1");
}

function showArt() {
	unboldAll();
	$( "#art" ).addClass( "current" );
	$( ".all" ).hide(200);
	$( ".art" ).show(200);
	//$( ".all" ).css("transition", ".5s ease");
	//$( ".all" ).css("opacity", "0.2");
	//$( ".art" ).css("opacity", "1");
}

function showDesign() {
	unboldAll();
	$( "#design" ).addClass( "current" );
	$( ".all" ).hide(200);
	$( ".design" ).show(200);
	//$( ".all" ).css("transition", ".5s ease");
	//$( ".all" ).css("opacity", "0.2");
	//$( ".design" ).css("opacity", "1");
}

function showTechnical() {
	unboldAll();
	$( "#technical" ).addClass( "current" );
	$( ".all" ).hide(200);
	$( ".technical" ).show(200);
	//$( ".all" ).css("transition", ".5s ease");
	//$( ".all" ).css("opacity", "0.2");
	//$( ".technical" ).css("opacity", "1");
}

function unboldAll() {
	$( "#all" ).removeClass( "current" );
	$( "#art" ).removeClass( "current" );
	$( "#design" ).removeClass( "current" );
	$( "#technical" ).removeClass( "current" );
}
