// உங்கள் Backend URL-ஐ கீழே கொடுக்கவும்
fetch('https://my-backend-app-yfti.onrender.com')
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch(err => {
        console.error('Error:', err);
        document.getElementById('response').innerText = "Error connecting to backend.";
    });
