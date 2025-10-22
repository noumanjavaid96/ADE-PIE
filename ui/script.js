document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('event-form');
    const responseOutput = document.getElementById('response-output');
    const loader = document.getElementById('loader');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userId = document.getElementById('userId').value;
        const eventType = document.getElementById('eventType').value;
        const eventOutcome = document.getElementById('eventOutcome').value;
        const endpointUrl = document.getElementById('endpointUrl').value;

        if (!endpointUrl) {
            responseOutput.textContent = 'Error: Please enter the Pipedream Endpoint URL.';
            responseOutput.style.color = 'red';
            return;
        }

        // Show loader and disable button
        loader.style.display = 'block';
        responseOutput.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Triggering...';

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // The Authorization header is managed by Pipedream's trigger settings,
                    // but for direct API calls, you might need it.
                    // 'Authorization': 'Bearer YOUR_PIPEDREAM_API_KEY'
                },
                body: JSON.stringify({
                    userId,
                    eventType,
                    eventOutcome
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Pipedream workflows can be configured to return a direct response.
            // We assume for this UI that the coaching response is returned directly.
            const result = await response.json();

            // Assuming the response from Pipedream is the direct coaching message
            // or an object containing it.
            const coachingResponse = result.coachingResponse || result.message || JSON.stringify(result, null, 2);

            responseOutput.textContent = coachingResponse;
            responseOutput.style.color = '#333';

        } catch (error) {
            console.error('Error triggering workflow:', error);
            responseOutput.textContent = `Error: ${error.message}. Check the console for more details.`;
            responseOutput.style.color = 'red';
        } finally {
            // Hide loader and re-enable button
            loader.style.display = 'none';
            responseOutput.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Trigger Workflow';
        }
    });
});