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
	//delete the default address field but not the user input
	function clearAddress() {
		if (document.getElementById('addressField').value == 'Example: 805 W Manchester Blvd, Inglewood, CA 90301, USA'){
			document.getElementById('addressField').value = '';
		}
	}
	//bring back the default text if address field is empty
		function resetAddress() {
			if (document.getElementById('addressField').value == ''){
				document.getElementById('addressField').value = 'Example: 805 W Manchester Blvd, Inglewood, CA 90301, USA';
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
