# Admin Panel: AI Configuration Specification

## 1. Introduction

To empower content creators and administrators, we will introduce a new "AI Configuration" section within the Admin Panel. This centralized hub will provide simple, powerful tools to tune the platform's AI behavior without requiring any code.

This document specifies the UI and functionality of this new section, covering Coach Klaus's personality, activity scoring, and the Confidence Score parameters.

---

## 2. Coach Klaus: Persona & Behavior Tuning

This section allows admins to define the core personality and empathetic responses of Coach Klaus.

### UI Component: Master System Prompt

-   **Type:** A large, multi-line text area.
-   **Label:** "Coach Klaus Master System Prompt"
-   **Description:** "This prompt defines the core personality, tone, and behavior of Coach Klaus. It is sent to the AI with every interaction. Pay close attention to the instructions for empathetic responses."
-   **Default Value:** The text area will be pre-filled with a professionally engineered prompt. Admins can tweak it as needed.

#### Example Default Prompt:

```text
You are Coach Klaus, a world-class business coach from Germany. Your tone is professional, encouraging, and supportive. Your primary goal is to help the user learn and build confidence.

**Core Directives:**
1.  Keep your responses concise and clear.
2.  Always be positive and encouraging, even when the user makes a mistake.
3.  When asked a direct question, provide a direct answer.

**Empathetic Response Protocol:**
This is your most important directive. You will be provided with the recent conversation history. If you detect that the user is asking the same type of question multiple times, expressing repeated confusion (e.g., using phrases like "I don't get it," "I'm still confused"), or seems stuck on a topic, you MUST adapt your tone. Your responses should become more gentle and reassuring. Use simpler language, break down complex topics into smaller pieces, and explicitly reassure the user (e.g., "No problem at all, let's try looking at it another way," or "This is a tricky concept, it's completely normal to take a few tries to get it."). Do this automatically and naturally based on the flow of the conversation.
```

---

## 3. Content Block Scoring Configuration

This section allows admins to configure how different content blocks are scored.

### 3.1. AI-Powered Blocks (e.g., Branching Scenario)

For blocks scored by the AI, the admin needs to provide the benchmark for a "good" answer.

-   **UI:** When a Branching Scenario block is created, a new button will appear: **"Set Ideal Path for AI."**
-   **Functionality:**
    1.  Clicking the button opens a modal window that simulates the user-facing scenario.
    2.  The admin clicks through the scenario, selecting the sequence of choices that represents the "ideal" or "most effective" path.
    3.  Upon completion, this sequence is saved and associated with the content block.
    4.  When a user completes the scenario, their path and this "ideal path" are sent to the LLM for a comparative evaluation.

### 3.2. Deterministic Blocks (e.g., Quiz, Process Designer)

For blocks with clear right/wrong answers, admins can set the raw score values.

-   **UI:** A new tab "Scoring" will be added to the configuration of these content blocks.
-   **Fields for Quiz:**
    -   `Correct Answer Score:` (Number input, e.g., `0.8`)
    -   `Incorrect Answer Score:` (Number input, e.g., `-0.5`)
-   **Functionality for Process Designer:**
    -   The score will be calculated deterministically based on the percentage of correctly sequenced steps. No extra configuration is needed here, as the "correct" order is already defined in the block's setup.

---

## 4. Global Confidence Score Tuning

This section provides global controls over the Confidence Score formula itself.

### UI Components:

-   **Previous Score Weight:**
    -   **Label:** "Memory Weight (Previous Score)"
    -   **Type:** Slider or number input (0.0 to 1.0).
    -   **Default:** `0.7`
-   **Current Block Weight:**
    -   **Label:** "Impact Weight (Current Block's Score)"
    -   **Type:** Slider or number input (0.0 to 1.0).
    -   **Default:** `0.3`
-   **Intervention Threshold:**
    -   **Label:** "ADE Intervention Threshold"
    -   **Type:** Slider or number input (0.0 to 1.0).
    -   **Description:** "If the user's Confidence Score drops below this value, the Adaptive Decision Engine will be triggered to provide help."
    -   **Default:** `0.2`

This centralized configuration panel will give administrators comprehensive but intuitive control over the platform's most innovative features, ensuring the AI can be fine-tuned to meet the specific needs of the content and users.