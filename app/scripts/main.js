'use strict';
function interfaces(){
	$('#primary-menu-navigation').spasticNav({speed: 200});

	$('#primary-menu-container').hover(function(){
		$(this).addClass('dropdown-active');
	},function(){
		$(this).removeClass('dropdown-active');
	});
}

$(document).ready(function(){
	interfaces();
});

