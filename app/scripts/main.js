'use strict';
function interfaces(){
	$('#primary-menu-navigation').spasticNav({speed: 200});

	$('#primary-menu-container').hover(function(){
		$(this).addClass('dropdown-active');
	},function(){
		$(this).removeClass('dropdown-active');
	});
}

function polyfills(){
	$('.footer-links').columnizeList({
		columnCount: 2,
		columnGap: 20
	});
}

$(document).ready(function(){
	interfaces();
	polyfills();
});

