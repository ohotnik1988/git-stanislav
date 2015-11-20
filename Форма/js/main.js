$(function () {
	$( '#login' ).on( 'submit', function(e) {
		var formData = $( this ).serialize();
		$( '.str' ).text('Вот такой запрос отправлен: ' + formData);
		$('#myModal').modal('hide')
		return false
	});
})