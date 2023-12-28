const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/summarize', async (req, res) => {
    const prompt = req.query.prompt;
    const fetch = await import('node-fetch').then(module => module.default);
    const apiUrl = 'https://jgxv5sdfkg.execute-api.us-west-2.amazonaws.com/dev/demoTextSummerization'; // Replace with your API endpoint

    try {
        const response = await fetch(`${apiUrl}?prompt=${prompt}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
