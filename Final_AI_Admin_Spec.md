# Final AI Admin Panel Integration Specification
**Version:** 2.1
**Status:** Confirmed & Finalized

**Preamble: Confirmation of Alignment (Meeting of October 17, 2025)**

This document serves as the definitive specification for the platform's innovative AI engines. Following our alignment meeting, it is confirmed that all core AI functionalities—Session Memory, Process Intelligence Engine (PIE), Confidence Score, and the Adaptive Decision Engine (ADE)—are integral to the platform vision.

The specifications outlined below represent the agreed-upon, pragmatic path for their implementation, providing the development team with a clear and final blueprint.

---

#### **1. Core Principle: Direct Content Linking for Adaptive Interventions**

To ensure maximum control and predictability, the Adaptive Decision Engine (ADE) will function by allowing administrators to link a user's struggle on a specific quiz question to another, existing piece of content anywhere in the platform. This provides a powerful content reuse model without the complexity of a separate "Fallback Library" or an abstract tagging system.

#### **2. Required Changes to Admin Panel**

**2.1. `Adaptive Intervention` in Quiz Blocks**

A new, optional section must be added to the configuration UI for `Single Choice` and `Multiple Choice` quiz blocks.

*   **Section Title:** "Adaptive Intervention (Optional)"
*   **Functionality:**
    1.  **`Trigger after # failures` (Number Input):** Defines the failure threshold (e.g., `3`) for triggering the intervention.
    2.  **`Link to Fallback Content` (Button):**
        *   Opens a modal window displaying a tree-view of all Leagues, Match Days, and their Content Blocks.
        *   The admin can navigate this tree and select any single, existing content block (e.g., an introductory video from a previous Match Day) to serve as the recommended "fallback."
        *   Once selected, the name of the linked block should be displayed, with an option to clear the selection.

**2.2. New Content Block: `Process Analysis (PIE)`**

A new block type must be added to the `+ Add Content Block` menu.

*   **Block Name:** `Process Analysis (PIE)`
*   **Purpose:** Allows an admin to create a "consulting session" where the AI analyzes a user's real-world process.
*   **Configuration Fields:**
    1.  **`Title`** (Required)
    2.  **`Initial Coach Prompt`** (Required, e.g., "Describe your current client intake process.")
    3.  **`System Prompt` (Text Area - Advanced):** An optional field where an admin can provide strict "guard-rail" instructions to the AI to ensure its analysis is focused and its output is predictable (e.g., forcing it to analyze only specific categories and respond in a structured format like JSON).

#### **3. The Intelligent Workflow (How it Connects)**

This design enables the following clear workflows:

*   **ADE Workflow:**
    1.  **Admin:** Links a difficult quiz question in Match Day 8 to an introductory video in Match Day 1.
    2.  **User:** Fails the quiz question in Match Day 8 more times than the set threshold.
    3.  **AI Action:** The ADE triggers and instructs Coach Klaus to proactively offer the linked video from Match Day 1 as a helpful review.

*   **PIE Workflow:**
    1.  **Admin:** Creates a PIE block and writes a prompt asking the user to describe a workflow.
    2.  **User:** Describes their workflow via text or voice.
    3.  **AI Action:** The PIE analyzes the input based on the rules in the `System Prompt` and provides a structured, predictable analysis back to Coach Klaus, who delivers it as conversational feedback.

This finalized specification provides a clear, robust, and controllable path to implementing the innovative AI features you envision.