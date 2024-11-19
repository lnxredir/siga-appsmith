export default {
	AddUser_Modal_ConfirmonClick () {
AddUser_Query.run()
  .then(response => {
    if (response && response.length > 0) {
      showAlert("User created successfully!", "success");
    } else {
      showAlert("Error: Username already exists.", "error");
    }
  })
  .catch(error => {
    showAlert("Unexpected Error: " + error.message, "error");
  });

	}
}