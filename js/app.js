$(document).ready(function () {

	$('.btn').click(function() {
		var add = $('#field1').val();
		$('<li class="plusone"></li>').appendTo('#added').html('<input type="checkbox" id="listfield">&nbsp<span>' + add + '</span>&nbsp<input type="reset" value="x" id="right">');
			$('#field1').val('');
			$('#field1').focus();
		});
	
	$('#field1').keydown(function (e) {
		if(e.keyCode == 13) {
			var add = $('#field1').val();
			$('<li class="plusone"></li>').appendTo('#added').html('<input type="checkbox" id="listfield">&nbsp<span>' + add + '</span>&nbsp<input type="reset" value="x" id="right">');
			e.preventDefault();
			$('#field1').val('');
		}
	});

	$(document).on('click', '#right', function() {
		$(this).closest('li').fadeOut(300);
		$(this).remove();
	});

});




	


	

	
