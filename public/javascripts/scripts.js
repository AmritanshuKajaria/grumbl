// scripts.js
document.addEventListener('DOMContentLoaded', function() {
	$('.ups').on('click', function() {
		$.post('/post/up', {id: $(this).attr('value')});
		$(this).prop('disabled', true);
	});
	$('.downs').on('click', function() {
		$.post('/post/down', {id: $(this).attr('value')});
		$(this).prop('disabled', true);
	});
});
