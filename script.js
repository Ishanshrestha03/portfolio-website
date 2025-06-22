VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x9f78ff,
  backgroundColor: 0x0A0A1A,
  points: 12.00,
  maxDistance: 22.00,
  spacing: 18.00
});

const form = document.getElementById('contact-form');
const formContainer = document.getElementById('contact-form-container');
const successMessage = document.getElementById('form-success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                formContainer.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                console.log(response);
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.log(error);
            alert('Something went wrong. Please try again.');
        });
});
