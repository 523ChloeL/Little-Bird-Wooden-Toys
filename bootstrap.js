//delete the default name field but not the user input
	function clearName() {
		if (document.getElementById('nameField').value == 'Example: John Doe'){
			document.getElementById('nameField').value = '';
		}
	}
	//bring back the default text if name field is empty
		function resetName() {
			if (document.getElementById('nameField').value == ''){
				document.getElementById('nameField').value = 'Example: John Doe';
			}
		}
	//delete the default phone field but not the user input
	function clearPhone() {
		if (document.getElementById('phoneField').value == 'Example: 212-123-1234'){
			document.getElementById('phoneField').value = '';
		}
	}
	//bring back the default text if phone field is empty
		function resetPhone() {
			if (document.getElementById('phoneField').value == ''){
				document.getElementById('phoneField').value = 'Example: 212-123-1234';
			}
		}
		//delete the default email field but not the user input
		function clearEmail() {
			if (document.getElementById('emailField').value == 'Example: johndoe123@gmail.com'){
				document.getElementById('emailField').value = '';
			}
		}
	//bring back the default text if email field is empty
		function resetEmail() {
			if (document.getElementById('emailField').value == ''){
				document.getElementById('emailField').value = 'Example: johndoe123@gmail.com';
			}
		}
