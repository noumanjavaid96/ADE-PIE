# Confidence Score Logic & Sample Match Day Template
**Purpose:** Use this template to create a sample Match Day scenario. This will help us define the precise logic for the Confidence Score calculation. Fill out the sections below to illustrate how different user actions should affect the score.

---

## 1. Baseline & Weights
First, let's define the starting point and the importance of each input category.

*   **Starting Confidence Score:** `75` (out of 100)
*   **Weighting of Inputs:**
    *   Quiz Performance (Mistakes): `35%`
    *   Keyword Usage (Positive/Negative): `20%`
    *   Smart Question Asking: `20%`
    *   Number of Interactions (Clicks/Retries): `25%`

---

## 2. Sample Match Day Scenario
**Match Day Title:** Introduction to Client Onboarding

| Step | Block Type | User Action & Details | Confidence Score Calculation | Resulting Score | Coach's Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | **Start** | User begins the Match Day. | N/A | **75** | Neutral |
| **1** | Video | User watches the "Intro to Onboarding" video once. | `+1` (Completed block with 1 click) | **76** | N/A |
| **2** | Quiz | **Question:** "What is the first step in client intake?"<br>**Action:** User answers INCORRECTLY on the first try. | `-5` (1 mistake x weight) | **71** | N/A |
| **3** | Quiz | **Question:** "What is the first step in client intake?"<br>**Action:** User answers CORRECTLY on the second try. | `+2` (Successful completion) | **73** | N/A |
| **4** | Text | User reads a block of text. | `+1` (Completed block) | **74** | N/A |
| **5** | Coach Help| User clicks the coach and asks: *"I don't get it, can you explain again?"* | `-10` (Negative keyword detected) | **64** | Supportive |
| **6** | Video | User re-watches the "Intro to Onboarding" video three more times. | `-6` (3 clicks x interaction weight) | **58** | N/A |
| **7** | Quiz | **Question:** "Which document is essential for GDPR?"<br>**Action:** User answers CORRECTLY on the first try. | `+5` (First-try success) | **63** | N/A |
| **8** | Coach Help| User asks: *"How can I apply this to a non-EU client?"* | `+10` (Smart question detected) | **73** | Professional |

---

## 3. Keyword Dictionary
This will help the system identify "dumb" vs. "smart" questions.

### Negative Keywords (Lowers Score)
*   "don't get it"
*   "don't understand"
*   "confused"
*   "help"
*   "stupid"
*   "repeat"

### Positive/Smart Keywords (Raises Score)
*   "how can I apply"
*   "what if"
*   "in the context of"
*   "compared to"
*   "what is the impact"
*   "how does this relate"

---

## 4. Notes & Open Questions
*Use this section to add any thoughts or edge cases that come to mind.*

*   **Question:** Should the score change be different if a user re-watches a video *after* failing a quiz versus just re-watching it in general?
*   **Note:** The point system above is just an example. We can adjust the `-5` or `+10` values based on what feels right.
*   **Idea:** Maybe a "first try" correct answer on a quiz should give a bigger bonus than a correct answer on the second or third try.