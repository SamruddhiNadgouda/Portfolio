emailjs.init("veGk_qdcjOU3kJZGf");

const sendEmail = (e) => {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    emailjs.sendForm('service_2b94ufs', 'template_mf394ug', form)
        .then((result) => {
            console.log(result.text);
            form.reset();
            alert("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("There was an error sending the email. Please try again later.");
        });
};
