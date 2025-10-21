document.addEventListener('DOMContentLoaded', () => {
    const initialScore = 60;
    let currentScore = initialScore;

    // DOM Elements
    const scoreValueEl = document.getElementById('score-value');
    const scoreBarEl = document.getElementById('score-bar');
    const scoreZoneEl = document.getElementById('score-zone');
    const actionLogEl = document.getElementById('action-log');
    const coachReactionTextEl = document.getElementById('coach-reaction-text');
    const actionButtons = document.querySelectorAll('.action-btn');
    const resetButton = document.getElementById('reset-btn');

    /**
     * Calculates the confidence zone based on the score.
     * @param {number} score - The current confidence score.
     * @returns {number} The corresponding zone.
     */
    function getZone(score) {
        if (score <= 20) return 1;
        if (score <= 40) return 2;
        if (score <= 60) return 3;
        if (score <= 75) return 4;
        if (score <= 90) return 5;
        return 6;
    }

    /**
     * Updates all UI elements related to the score.
     * @param {number} score - The new score to display.
     */
    function updateScoreUI(score) {
        const zone = getZone(score);

        scoreValueEl.textContent = score;
        scoreBarEl.style.width = `${score}%`;
        scoreZoneEl.textContent = zone;

        // Update bar color based on zone
        if (zone <= 2) {
            scoreBarEl.style.backgroundColor = '#e53e3e'; // Red
        } else if (zone <= 4) {
            scoreBarEl.style.backgroundColor = '#ecc94b'; // Yellow
        } else {
            scoreBarEl.style.backgroundColor = '#48bb78'; // Green
        }
    }

    /**
     * Logs the detailed calculation formula to the log panel.
     * @param {number} prevScore - The score before the calculation.
     * @param {number} rawValue - The raw value from the user action.
     * @param {number} smoothedValue - The score after the smoothing formula is applied.
     * @param {number} finalScore - The final rounded score.
     */
    function logCalculation(prevScore, rawValue, smoothedValue, finalScore) {
        const li = document.createElement('li');
        li.innerHTML = `(0.7 × ${prevScore}) + (0.3 × ${rawValue}) = ${smoothedValue.toFixed(1)} → <strong>${finalScore}</strong>`;
        actionLogEl.appendChild(li);
        actionLogEl.scrollTop = actionLogEl.scrollHeight;
    }

    /**
     * Handles the click event on an action button.
     * @param {Event} event - The click event.
     */
    function handleAction(event) {
        const button = event.target;
        const rawValue = parseInt(button.dataset.rawValue, 10);
        const coachReaction = button.dataset.coachReaction;

        const previousScore = currentScore;
        const smoothedValue = (0.7 * previousScore) + (0.3 * rawValue);
        const finalScore = Math.round(smoothedValue);

        // Update state
        currentScore = finalScore;

        // Update UI
        updateScoreUI(currentScore);
        coachReactionTextEl.textContent = coachReaction;
        logCalculation(previousScore, rawValue, smoothedValue, finalScore);

        // Disable button after use
        button.disabled = true;
    }

    /**
     * Resets the simulation to its initial state.
     */
    function resetSimulation() {
        currentScore = initialScore;
        updateScoreUI(currentScore);

        actionLogEl.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = 'Simulation reset to initial state.';
        actionLogEl.appendChild(li);

        coachReactionTextEl.textContent = 'Awaiting first action...';

        actionButtons.forEach(button => {
            button.disabled = false;
        });
    }

    // Attach event listeners
    actionButtons.forEach(button => {
        button.addEventListener('click', handleAction);
    });
    resetButton.addEventListener('click', resetSimulation);

    // Initial setup
    updateScoreUI(initialScore);
    const li = document.createElement('li');
    li.textContent = 'Simulation started. Initial score: 60.';
    actionLogEl.appendChild(li);
});