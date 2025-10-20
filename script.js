document.addEventListener('DOMContentLoaded', () => {
    const initialScore = 75;
    let confidenceScore = initialScore;

    const scoreValueEl = document.getElementById('score-value');
    const scoreBarEl = document.getElementById('score-bar');
    const actionLogEl = document.getElementById('action-log');
    const actionButtons = document.querySelectorAll('.action-btn');
    const resetButton = document.getElementById('reset-btn');

    const scoreActions = {
        'watch-video': { base: 1, text: 'Watched video' },
        'answer-quiz-correct': { base: 5, text: 'Answered quiz correctly' },
        'answer-quiz-incorrect': { base: -5, text: 'Answered quiz incorrectly' },
        'read-text': { base: 1, text: 'Read text block' },
        'ask-coach-positive': { base: 10, text: 'Asked a smart question' },
        'ask-coach-negative': { base: -10, text: 'Asked for basic help' },
    };

    function updateScore(newScore) {
        confidenceScore = Math.max(0, Math.min(100, newScore));
        scoreValueEl.textContent = confidenceScore;
        scoreBarEl.style.width = `${confidenceScore}%`;

        if (confidenceScore < 40) {
            scoreBarEl.style.backgroundColor = '#e53e3e'; // Red
        } else if (confidenceScore < 70) {
            scoreBarEl.style.backgroundColor = '#ecc94b'; // Yellow
        } else {
            scoreBarEl.style.backgroundColor = '#48bb78'; // Green
        }
    }

    function logAction(text, change) {
        const li = document.createElement('li');
        const changeText = change > 0 ? `+${change}` : change;
        const changeClass = change > 0 ? 'score-up' : 'score-down';

        li.innerHTML = `${text} <span class="${changeClass}">(${changeText})</span>`;
        actionLogEl.appendChild(li);
        actionLogEl.scrollTop = actionLogEl.scrollHeight;
    }

    function handleAction(event) {
        const button = event.target;
        const action = button.dataset.action;
        let scoreChange = 0;
        let logText = '';

        switch (action) {
            case 'watch-video':
                const clicks = parseInt(button.dataset.clicks, 10);
                scoreChange = clicks === 1 ? scoreActions[action].base : -2 * clicks;
                logText = clicks === 1 ? scoreActions[action].text : `Re-watched video ${clicks} times`;
                break;
            case 'answer-quiz':
                const isCorrect = button.dataset.correct === 'true';
                if (isCorrect) {
                    scoreChange = scoreActions['answer-quiz-correct'].base;
                    logText = scoreActions['answer-quiz-correct'].text;
                } else {
                    scoreChange = scoreActions['answer-quiz-incorrect'].base;
                    logText = scoreActions['answer-quiz-incorrect'].text;
                }
                break;
            case 'read-text':
                scoreChange = scoreActions[action].base;
                logText = scoreActions[action].text;
                break;
            case 'ask-coach':
                const keyword = button.dataset.keyword;
                if (keyword === 'positive') {
                    scoreChange = scoreActions['ask-coach-positive'].base;
                    logText = scoreActions['ask-coach-positive'].text;
                } else {
                    scoreChange = scoreActions['ask-coach-negative'].base;
                    logText = scoreActions['ask-coach-negative'].text;
                }
                break;
        }

        if (scoreChange !== 0) {
            updateScore(confidenceScore + scoreChange);
            logAction(logText, scoreChange);
        }
    }

    function resetSimulation() {
        updateScore(initialScore);
        actionLogEl.innerHTML = '';
        logAction('Simulation Reset', 0);
    }

    actionButtons.forEach(button => {
        button.addEventListener('click', handleAction);
    });

    resetButton.addEventListener('click', resetSimulation);

    // Initial log
    logAction('Simulation Started', 0);
});