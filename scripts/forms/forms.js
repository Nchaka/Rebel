var $, jQueryValidator;

$ = require('jquery');
jQueryValidator = require('jquery-validation');


module.exports = function(){
	'use strict'

	var init, falseUrl, trueUrl, response;

	window.onload = init;

	falseUrl = 'https://www.mocky.io/v2/5bd897fc310000c73a474f59'; // False
	trueUrl = 'https://www.mocky.io/v2/5bd89817310000c63a474f5b'; // True  

	function init(){
		validateForm();	
	};

	function loadJSON(url){ // Get the JSON from the server
		var xhr;
		xhr = new XMLHttpRequest();
		if(!url){
			url = falseUrl;
		}
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){ // Needs to not check the status because the server sometimes return 500 on localhost
				response = JSON.parse(xhr.responseText);
				(response.error) ? handleResponse(response.error) : handleResponse(response.success);
			}
		};
		xhr.open('GET', url, true);
		xhr.send();
	};

	function handleResponse(response){
		document.querySelector('#response').textContent = response;
	};

	function validateForm(){
		$('#form').validate({
			debug: true,
			rules: {
				iemail: {
					required: true,
					email: true
				},
				iname: {
					required: true,
					minlength: 5,
					text: true
				},
				imsg: {
					required: true,
					minlength: 20
				}		
			},
			invalidHandler: function(event, validator){
				loadJSON(falseUrl);
			},
			submitHandler: function(form){
				loadJSON(trueUrl);
			}
		});
	};
}

module.exports();

