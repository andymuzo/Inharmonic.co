$(".harmonic").click(function(){
		$(".harmonic").removeClass('harmonic_on');
		$(this).addClass('harmonic_on');
		var id = $(this).attr('id');

		$(".link_description").removeClass('link_show');
		switch (id) {
			case "harm1st":
				console.log(id);
				$("#link_description01").addClass('link_show');
				break;
			case "harm2nd":
				console.log(id);
				$("#link_description02").addClass('link_show');
				break;
			case "harm3rd":
				console.log(id);
				$("#link_description03").addClass('link_show');
				break;
			case "harm4th":
				console.log(id);
				$("#link_description04").addClass('link_show');
				break;
			case "harm5th":
				console.log(id);
				$("#link_description05").addClass('link_show');
				break;
			case "harm6th":
				console.log(id);
				$("#link_description06").addClass('link_show');
				break;
			case "harm7th":
				console.log(id);
				$("#link_description07").addClass('link_show');
				break;
			case "harm8th":
				console.log(id);
				$("#link_description08").addClass('link_show');
				break;
			case "harm9th":
				console.log(id);
				$("#link_description09").addClass('link_show');
				break;
			case "harm10th":
				console.log(id);
				$("#link_description10").addClass('link_show');
				break;
			default:
				console.log("nuffink");
		}
});

$(".nav_button").click(function() {
	if ($("#navigation").hasClass("hidden_nav")) {
		showNavigation();
	} else {
		hideNavigation();
	}
});

$("#screen_cover").click(function() {
	hideNavigation();
});

function showNavigation() {
	$("#navigation").addClass('visible_nav');
	$("#navigation").removeClass('hidden_nav');
	$("#screen_cover").addClass('screen_visible');
	$("#screen_cover").removeClass('screen_hidden');
}

function hideNavigation() {
	$("#navigation").addClass('hidden_nav');
	$("#navigation").removeClass('visible_nav');
	$("#screen_cover").removeClass('screen_visible');
	$("#screen_cover").addClass('screen_hidden');
}