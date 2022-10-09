$(document).ready(function() {
	//#region Setting Visibility For Elements
$("#if-script").show();
$("#if-script").css('visibility', 'visible');
$("#vid").hide();
document.getElementById("destroyed").style.visibility = "hidden";
//#endregion
	//#region Backstretch
$.backstretch("background/" + String(Math.floor(Math.random() * 8) + 1) + ".jpeg", {
	duration: 0,
	fade: 750
});
//#endregion
	//#region Intervals
setInterval(() => {
	if(!pageIsDestroyed){
		$.backstretch("background/" + String(Math.floor(Math.random() * 8) + 1) + ".jpeg", {
			duration: 0,
			fade: 750
		})
	}
}, 30000);
//#endregion
});
