// $(document).ready(() => {
// 	$('#navbar').hide()
// });

$(document).click(function(e) {
	if (!$(e.target).is('.panel-body')) {
    	$('.collapse').collapse('hide');	    
    }
});


