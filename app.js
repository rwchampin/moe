$(document).ready(function(){
	$('.ferdinand-text').click(function(){
		$('.menu').removeClass('libby-bg').addClass('ferdinand-bg');
	});
	$('.libby-text').click(function(){
		$('.menu').removeClass('ferdinand-bg').addClass('libby-bg');
	});

	$('.ferdinand').click(function(){
		$('.menu').addClass('leave');
		$('video').prop("src", "vids/vid.mp4");
	})
	$('.libby').click(function(){
		$('.menu').addClass('leave');
		$('video').prop("src", "vids/vid.mp4");
	})
});