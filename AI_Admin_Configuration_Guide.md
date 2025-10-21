# AI Configuration Guide for The Forge Admin Panel
**Version:** 1.0
**Audience:** Content Creators & Administrators
**Purpose:** This guide explains how to configure and manage all AI-driven features for Coach Klaus using the admin panel.

---

## Introduction: Your AI Toolkit

The Forge platform gives you powerful AI tools to create a truly adaptive and personal learning experience. This guide will show you how to use them.

There are two types of AI systems:

1.  **Automatic Systems:** These work in the background without any configuration from you.
2.  **Configurable Systems:** These are tools you will use directly in the **Content Block Editor** to craft the AI's behavior.

---

## 1. Automatic AI Systems (No Configuration Needed)

These two systems are always running. You don't need to do anything to activate them; they work by observing the content you create.

### **✅ Session Memory**
*   **What it does:** Automatically remembers everything a user does—quiz answers, video views, questions asked, and PIE results.
*   **Your Role:** None. Simply build your Match Days, and the memory works automatically.

### **✅ Confidence Score Engine**
*   **What it does:** Automatically analyzes a user's behavior to determine if they are confident or struggling. It uses this to change Coach Klaus's emotional tone (e.g., from supportive to demanding).
*   **Your Role:** None. The engine works by analyzing the content blocks you've already created.

---

## 2. Configurable AI Systems (Your Direct Controls)

You have three primary tools in the admin panel to control the AI.

### **Tool #1: The "Process Analysis (PIE)" Content Block**
This is how you create a "consulting session" with Coach Klaus, where he analyzes a user's real-world workflow.

**How to Use It:**
1.  Inside the **Content Block Editor**, click the **"+ Add Content Block"** button.
2.  From the menu, select the new block type: **`Process Analysis (PIE)`**.
3.  A configuration panel will appear with the following fields:
    *   **`Title`**: Give the block a name (e.g., "Onboarding Process Review").
    *   **`Initial Coach Prompt`**: **(Required)** Write the exact question you want Coach Klaus to ask to start the analysis.
        *   *Good Example:* "Describe your current client intake process, from the first phone call to the final file."
    *   **`(Optional) Linked Knowledge Module`**: If this analysis relates to a specific topic, you can select it from a dropdown menu. This helps the AI provide more focused feedback.

That's it. When the user reaches this block, Coach Klaus will appear, ask the question you wrote, and intelligently analyze the user's response.

### **Tool #2: The "Adaptive Intervention" Feature (in Quiz Blocks)**
This is how you give Coach Klaus the ability to **proactively help a user who is stuck**. You pre-define a "lifeline" for users who fail a question multiple times.

**How to Use It:**
1.  Add a `Single Choice` or `Multiple Choice` quiz block to your Match Day as you normally would.
2.  In the configuration panel for that quiz, below where you set the correct answer, you will see a new, optional section labeled **"Adaptive Intervention"**.
3.  Click to expand it. You will see two fields:
    *   **`Trigger after # failures`**: Enter a number. This is how many times the user must get the question wrong before the AI steps in. A good starting point is `2` or `3`.
    *   **`Link Fallback Content`**: Click this button. Your **Document Management (Knowledge Base)** will open. Select the "micro-learning" asset (e.g., a short video, a helpful PDF, or a simple text explanation) that you want Coach Klaus to offer the user.
4.  Save the quiz block.

Now, if a user fails that specific question the number of times you set, Coach Klaus will automatically appear and say something like, *"It looks like you're having trouble with this. I've found a simpler explanation that might help. Would you like to see it?"*

### **Tool #3: The "Coach Trigger System"**
This is your tool for writing all of the **scripted, non-interactive dialogue** for Coach Klaus. This is perfect for intros, outros, and transitions.

**How to Use It:**
This is an existing system in the admin panel.
1.  After any content block, you will find the **"post-block action"** area.
2.  Click the dropdown under **"Available Triggers"**.
3.  Select **`Fixed Coach Interjection`**.
4.  A text box will appear. Write the exact line you want Coach Klaus to say before the user proceeds to the next block.
    *   *Good Example:* "Great job on that quiz! Now, let's see how this applies in the real world."

By using these three tools, you have complete control over the AI's behavior, allowing you to build a dynamic and supportive learning journey.