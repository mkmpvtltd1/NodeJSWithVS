// Wait for the DOM to be ready
$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
            surname: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        // Specify validation error messages
        messages: {
            name: "Please enter your firstname",
            surname: "Please enter your lastname",
            message: {
                required: "Please Write some message",
                minlength: "Write some meaning full message"
            },
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});
