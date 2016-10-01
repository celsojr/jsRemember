/*
 * ////////////////////////// JSREMEMBER ///////////////////////////////////
 * Simple local storage plugin to save forms data before submitting to the
 * server. It support all major browsers including: IE6+, FF2+, Safari4+,
 * Chrome4+, Android 2+ and Opera 10.5+ thanks to jStorage. And it don't
 * depend on the html element's Name, Id or any CSS Class to be applied.
 *
 * jsRemember requires jStorage from Andris Reinman - www.jstorage.info
 *
 * Copyright(c) 2013 Celso Junior, celsojrfull@gmail.com
 * Plugin demo page: http://celsojr.com/demos/jsRemember/
 *
 * NOTE: The file-input element will not be supported for security reasons.
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 
$(function() {
	var sItens = $.jStorage.index();
	if(sItens.length > 0){ //something stored?
	//Get values
		$(':text,:password,textarea').each(function(index, element) {
			var id = 'text'+index;
			if ($.jStorage.get(id.toString()))
				$(element).val($.jStorage.get(id.toString()))
		});
		
		$('select').each(function(index, element) {
			var id = 'select'+index;
			if ($.jStorage.get(id.toString()))
				$(element).val($.jStorage.get(id.toString()));
		});
		
		$(':radio,:checkbox').each(function(index, element) {
			var id = 'non-text'+index;
			if ($.jStorage.get(id.toString()))
				$(element).attr('checked','checked');
		});
	}
	
	//Set values
	$(':text,:password,textarea').change(function() {
		$(':text,:password,textarea').each(function(index, element) {
			var id = 'text'+index;
			if($(element).val() != '')$.jStorage.set(id.toString(),$(element).val());
		});
	});

	$('select').change(function() {
		$('select').each(function(index, element) {
			var id = 'select'+index;
			var sValue = $(element).val();
			if(sValue != '')$.jStorage.set(id.toString(),sValue);
		});			
		
	});
	
	$(':radio,:checkbox').click(function() {
		$(':radio,:checkbox').each(function(index, element) {
			var id = 'non-text'+index;
			if($(element).is(':checked'))$.jStorage.set(id.toString(),true);
		});
	});
	
	$('form').submit(function() {
		$.jStorage.flush()
	});
});
