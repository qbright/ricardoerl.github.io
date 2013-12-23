$(document).ready(function() {
	$(".block-item").click(function() {
		window.location = $("a:first",this).attr("href");
	});
});