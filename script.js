document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // URL of your API
    const apiUrl = 'YOUR_API_ENDPOINT_HERE';

    // Function to fetch train data and display it
    function fetchTrainData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const trainInfoDiv = document.getElementById('train-info');
                let trainDetails = '<ul>';

                data.forEach(train => {
                    trainDetails += `
                        <li>Train ID: ${train.train_id}</li>
                        <li>Route: ${train.route}</li>
                        <li>Compartment: ${train.compartment_number}</li>
                        <li>Departure Time: ${train.departure_time}</li>
                        <hr>`;
                });

                trainDetails += '</ul>';
                trainInfoDiv.innerHTML = trainDetails;
            })
            .catch(error => console.error('Error fetching train data:', error));
    }

    // Call the function to load train data
    fetchTrainData();
});
