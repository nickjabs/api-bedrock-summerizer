function summarizeText() {
    var prompt = document.getElementById('prompt').value;

    // Make a request to your backend server
    fetch(`/summarize?prompt=${prompt}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data); // Log the response for debugging

            try {
                const parsedData = JSON.parse(data.body); // Parse the body JSON string
                const generatedText = parsedData.generatedText;

                if (generatedText) {
                    document.getElementById('result').innerHTML = `<strong>Generated Text:</strong><br>${generatedText}`;
                } else {
                    throw new Error('Generated text not found in parsed data');
                }
            } catch (error) {
                throw new Error('Error parsing JSON data: ' + error.message);
            }
        })
        .catch(error => console.error('Error:', error));
}
