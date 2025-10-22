# Final AI Logic Specification (v3.0)

## 1. Overview

This document outlines the definitive, agreed-upon AI logic for The Forge platform. It supersedes all previous documentation and reflects the advanced, AI-driven approach finalized in our last meeting.

The core principle has evolved from a simple click-tracking model to a sophisticated, context-aware system that leverages Large Language Models (LLMs) to create a truly dynamic and empathetic user experience.

---

## 2. The Confidence Score: AI-Driven Evaluation

The primary function of the Confidence Score remains the same: **to determine when to trigger the Adaptive Decision Engine (ADE) for user intervention.** However, the calculation method has been significantly upgraded.

### 2.1. Calculation Trigger

- The Confidence Score is calculated **only at the end of a content block**, just before the user transitions to the next one. This prevents UI latency and allows for a holistic evaluation of the user's performance within that block.

### 2.2. Core Calculation Logic

The score is derived from two main components: **AI-driven conversation analysis** and **deterministic activity scores**.

1.  **AI Conversation Analysis:**
    -   At the end of a content block, the **full transcript** of the conversation between the user and Coach Klaus is sent to a dedicated LLM endpoint.
    -   A system prompt instructs the LLM to analyze the conversation for signals of understanding, confusion, frustration, or curiosity.
    -   The LLM returns a normalized score (e.g., from -1.0 for "completely lost" to 1.0 for "mastered the topic").

2.  **Deterministic Activity Scores:**
    -   Simple activities like Quizzes will still generate a direct score (e.g., +0.8 for a correct answer, -0.5 for an incorrect one).

3.  **Final Score Update:**
    -   The scores from the block are aggregated and then fed into the smoothing formula to update the user's overall Confidence Score:
        `New Score = (0.7 * Previous Score) + (0.3 * Current Block Score)`

---

## 3. The Empathetic Coach: In-Conversation Dynamics

To ensure Coach Klaus feels responsive and empathetic *during* a conversation, we will use a prompt-based approach rather than real-time score calculations.

-   **Conversation History:** With every user turn, a short history of the recent conversation is passed to the LLM.
-   **Master Empathetic Prompt:** A master system prompt will be engineered to instruct the LLM on its persona. A key part of this prompt will be:
    > "You are Coach Klaus, an empathetic and supportive guide. If you detect that the user is asking the same type of question multiple times or expressing repeated confusion, your tone should become more encouraging. Use simpler words, break down concepts further, and reassure the user that it's okay to struggle. Do this automatically based on the flow of the conversation."
-   This ensures the coach's tone adapts naturally without the need for complex, latency-inducing mid-conversation analysis.

---

## 4. AI-Powered Content Block Evaluation

For complex, open-ended activities, we will leverage an LLM to offload the scoring complexity from the content creator.

### 4.1. Branching Scenario

-   **Admin Setup:** The content creator builds the branching scenario, defining all possible paths and options. They do **not** need to assign scores manually.
-   **User Interaction:** The user navigates through the scenario, making their choices.
-   **AI Evaluation:** At the end, the user's chosen path and the full context of the scenario are sent to the LLM. A prompt will ask the AI to evaluate the quality of the user's decisions against the overall goal of the scenario. The AI will return a score reflecting the effectiveness of the chosen path.

### 4.2. Process Designer

-   **Admin Setup:** The content creator defines the correct, linear sequence of steps.
-   **Evaluation:** This will be a **deterministic** (non-AI) calculation. The system will check how many steps the user placed in the correct sequence, starting from the beginning.
    -   *Example:* If the correct sequence is A-B-C-D-E and the user submits A-B-D-C-E, their score is for 2 correct steps, as the sequence broke at step 3. The score would be `(2 / 5) = 40%`.

---

## 5. System Architecture & Data Flow

-   A **middleware service** will be implemented between the frontend and the D-ID (or equivalent avatar service) to intercept and log the full conversation transcript for later analysis.
-   All AI-driven score calculations will happen **asynchronously** at the end of a content block to ensure the user experience remains fluid and responsive.

This specification provides the blueprint for a truly innovative and responsive learning platform. It aligns the technical implementation with the ambitious vision for the project.

---

## 6. Backend Implementation: Pipedream Workflow

The core backend logic for calculating the Confidence Score and generating dynamic coaching responses is implemented as a serverless workflow on the Pipedream platform.

This approach was chosen to enable rapid development, easy integration with third-party APIs (like OpenAI), and robust, scalable execution.

For complete technical details, including the API contract, workflow steps, and data models, please refer to the dedicated implementation guide:

[**Pipedream Implementation Guide**](./pipedream_implementation_guide.md)