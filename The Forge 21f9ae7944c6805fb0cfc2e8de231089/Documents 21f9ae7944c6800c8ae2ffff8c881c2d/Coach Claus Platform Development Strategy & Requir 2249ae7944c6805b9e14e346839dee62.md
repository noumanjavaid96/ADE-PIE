# Coach Claus Platform Development: Strategy & Requirements Brief

Author: Nouman Javaid, Bilal Khalid, Muhammad Irtaza
Creation Date: July 2, 2025
Version: Internal

---

<aside>
⏪

Main reference document which was discussed and on basis of this Document:  [Project Briefing Q&A: Answering Critical Questions](Project%20Briefing%20Q&A%20Answering%20Critical%20Questions%2021f9ae7944c680d0918dd574c6c9d497.md) 

</aside>

### **Executive Summary**

This document synthesizes the outcomes of our detailed discussion regarding the Coach Claus platform. The core vision is to create a deeply immersive and emotionally intelligent coaching experience that transcends traditional Learning Management Systems (LMS). The platform will guide business teams through a gamified journey of improvement across ten key business models, using a unique AI persona, **"Coach Claus,"** as a sensitive, context-aware guide.

Key components defined include: a multi-stage user onboarding process, a quantitative "Tactic Check" for league classification, a structured "Match Day" learning loop, a qualitative **"Process Intelligence Engine"** (PIE) for real-world application, and a sophisticated **Confidence Scoring** mechanism to modulate the AI's empathic response.

The user experience (UX) is paramount, with the goal of creating a "stunning," "video game-like" environment that fosters an emotional connection with the user.

---

### **2. User Journey & Onboarding**

The user journey is designed to progressively build engagement and gather foundational data for the AI.

- **Step 1: Initial Contact & Preparation**
    - A single representative from the client company (the "student" team) receives a welcome video featuring a well-known German sports speaker to establish an immediate emotional connection.
    - They book their **"Tactic Check"** appointment.
    - Prior to the appointment, they complete a **standardized, non-AI questionnaire** (e.g., company size, number of employees). This is a team-based activity.
- **Step 2: The Onsite "Tactic Check"**
    - A **physical, human coach** conducts an in-person assessment at the client's company.
    - **Evaluation:** The coach asks 100 questions (10 questions across 10 different business topics/models).
    - **Scoring & League Classification:** Each answer is scored 1-6. The total score for each of the 10 topics determines the team's starting "league" for that specific topic (e.g., "Playmaker League" in Digital Transformation, but "Starting League" in Recruiting).
    - **First AI Data Input:** This quantitative score and any free-text notes from the human coach form the **initial baseline for the AI's session memory**. The free text provides context but does not influence the league score.
- **Step 3: Platform Activation**
    - Following the Tactic Check, the company can subscribe to the full platform, unlocking the "Match Days" and micro-learnings.

---

### **3. The Core Experience: "Match Days"**

The primary learning mechanism is the "Match Day," a 45-60 minute session designed to be completed twice a week. Each Match Day follows a structured 5-phase loop.

1. **Phase 1: Intro by Coach Claus:** An automatic, proactive video from the coach to set the context, motivate the user, and reflect on learnings from the previous session.
2. **Phase 2: Knowledge Input:** Delivery of core learning content (e.g., videos, animated explainers, text).
3. **Phase 3: Processing & Quizzing:** Interactive quizzes and reflection questions to reinforce the knowledge. Mistakes and interactions here feed the Confidence Score.
4. **Phase 4: Transfer Application (Process Intelligence Engine - PIE):**
    - The user applies their new knowledge to a real-world scenario by describing a process (via text/speech) or uploading a relevant document (e.g., a PDF of an onboarding checklist).
    - The AI analyzes the input and provides **qualitative feedback** (e.g., "This process has media discontinuity," "Consider automating this step.").
    - **Crucially, this is not scored or graded**, but the interaction and its outcome are saved to the session memory for future context.
5. **Phase 5: Conclusion & Summary:** An automatic, proactive outro from Coach Claus summarizing the key takeaways from the Match Day.

---

### **4. The Confidence Scoring Engine: The Heart of the AI's Empathy**

The Confidence Score is a background system designed to make Coach Claus feel less like a bot and more like an intuitive, sensitive mentor.

- **Purpose:** The score's primary function is to determine the **tonality and empathy** of the AI's responses. A declining score will trigger more supportive, patient, and emotionally-aware language from the coach.
- **Key Data Inputs:**
    - **Performance:** Number of incorrect answers in quizzes.
    - **Behavior:** Number of times a user re-watches a video or repeats a micro-learning module.
    - **Language:** Frequency of questions asked to the coach and the presence of "negative sentiment" keywords (e.g., "I don't get it," "I'm so dumb," "repeat").
    - **Pacing:** Analysis of user's words-per-minute during speech-to-text interaction to infer hesitation or confidence.

**Requirement:** The specific weighting and logic for this engine need to be defined in a detailed requirements document.

---

### **5. Coach Claus: Interaction Model & User Experience (UX) Strategy**

The success of the platform hinges on the implementation of the Coach Claus persona and the overall user interface.

- **AI Persona:** Coach Claus is an **always-present**. The goal is to avoid the feeling of a simple chatbot.
- **Interaction Model:**
    - **Presence:** The avatar will be persistently visible on the screen in a non-intrusive manner to create a feeling of constant support.
    - **Activation:**
        - **Proactive:** The coach will initiate interactions automatically at fixed points (start/end of Match Days).
        - **Reactive:** For user-led help, the interaction (and associated API costs) will only begin when the user **clicks on the avatar/microphone icon**.
    - **Context:** When activated by the user, the coach will have full context of the current screen/content the user is viewing (e.g., "I see you're on the video about Large Language Models...").
- **UX/UI Vision: The "Video Game" Experience**
    - The client's vision is for a **stunning, immersive, and highly engaging interface** that feels more like a sports management video game than a corporate LMS. Users should feel they are "in the stadium."
    - **Risk:** There is a potential disconnect between this high-level creative vision and the initial project budget/timeline. Careful expectation management is required.
- **Cost Management:** To control AI operational costs, user interactions will be metered. The baseline plan will include a set number of questions/minutes per Match Day. Additional interaction credits can be purchased via an in-platform shop.
- **Data Privacy (GDPR):** This is a non-negotiable requirement.
    - All user-uploaded data and PIE interactions are confidential.
    - The system architecture will ensure **strict data isolation**: one user/company cannot see another's data.
    - The AI's session memory is specific to each user; there is no cross-contamination of knowledge.
    - Only a designated "Super Admin" role will have access to the anonymized analytics dashboard.