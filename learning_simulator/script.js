document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const confidenceScoreValue = document.getElementById('confidence-score-value');
    const confidenceBar = document.getElementById('confidence-bar');
    const coachMessage = document.getElementById('coach-message');
    const endpointUrlInput = document.getElementById('endpointUrl');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const loaderContainer = document.querySelector('.loader-container');
    const quizContainer = document.querySelector('.quiz-container');

    // --- Application State ---
    let currentConfidenceScore = 50;
    const userId = 'user_sim_001';

    // --- Functions ---

    /**
     * Updates all UI elements based on the current state.
     * @param {number} score - The new confidence score.
     * @param {string} message - The new message from Coach Klaus.
     */
    const updateUI = (score, message) => {
        currentConfidenceScore = score;

        // Update score text
        confidenceScoreValue.textContent = Math.round(score);

        // Update confidence bar width and color
        confidenceBar.style.width = `${score}%`;
        confidenceBar.classList.remove('high', 'medium', 'low');
        if (score > 66) {
            confidenceBar.classList.add('high');
        } else if (score > 33) {
            confidenceBar.classList.add('medium');
        } else {
            confidenceBar.classList.add('low');
        }

        // Update coach's message
        coachMessage.textContent = message;
    };

    /**
     * Shows a loading state while waiting for the API.
     */
    const showLoader = () => {
        quizContainer.style.display = 'none';
        loaderContainer.style.display = 'block';
    };

    /**
     * Hides the loading state and shows the content.
     */
    const hideLoader = () => {
        loaderContainer.style.display = 'none';
        quizContainer.style.display = 'block';
    };

    /**
     * Triggers the Pipedream workflow.
     * @param {string} eventType - The type of event.
     * @param {string} eventOutcome - The outcome of the event.
     */
    const triggerWorkflow = async (eventType, eventOutcome) => {
        const endpointUrl = endpointUrlInput.value;
        if (!endpointUrl) {
            alert('Please enter a valid Pipedream webhook URL.');
            return;
        }

        showLoader();

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    eventType,
                    eventOutcome,
                    // Sending the current score allows the workflow to use it as the "previous" score
                    previousConfidenceScore: currentConfidenceScore
                })
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            const result = await response.json();

            // --- IMPORTANT ---
            // We expect the Pipedream workflow to return a JSON object with this structure:
            // {
            //   "confidenceScore": 75.5,
            //   "coachingResponse": "Great job! That's correct."
            // }
            if (result.confidenceScore !== undefined && result.coachingResponse) {
                updateUI(result.confidenceScore, result.coachingResponse);
            } else {
                throw new Error("Invalid response format from Pipedream.");
            }

        } catch (error) {
            console.error('Error triggering workflow:', error);
            coachMessage.textContent = `An error occurred: ${error.message}. Please check the console and your Pipedream setup.`;
        } finally {
            hideLoader();
        }
    };

    /**
     * Handles the click event on an answer button.
     * @param {Event} e - The click event object.
     */
    const handleAnswerClick = (e) => {
        const button = e.target;
        const eventOutcome = button.dataset.outcome;

        // Provide immediate visual feedback
        answerButtons.forEach(btn => btn.disabled = true);
        button.classList.add(eventOutcome.toLowerCase());

        triggerWorkflow('QUIZ_ANSWERED', eventOutcome);

        // Reset button states after a delay to show feedback
        setTimeout(() => {
            button.classList.remove(eventOutcome.toLowerCase());
            answerButtons.forEach(btn => btn.disabled = false);
        }, 2000);
    };

    // --- Event Listeners ---
    answerButtons.forEach(button => {
        button.addEventListener('click', handleAnswerClick);
    });

    // --- Initial UI Setup ---
    updateUI(currentConfidenceScore, 'Welcome! Let\'s start your learning journey. Answer the question to begin.');
});