# Clarification of Tasks / Milestone Plan

Author: Nouman Javaid, Muhammad Irtaza, Bilal Khalid
Creation Date: September 26, 2025
Type: Milestone/Sprint Plan
Version: Final

This document is the **single source of truth** for our meeting. It provides a clear alignment between your core requirements and our detailed development plan, including specific user stories and acceptance criteria. This document replaces all previous alignment files.

---

## 1. Core Feature Alignment & Detailed Backlog

### 1.1. Adaptive Decision Engine (ADE) & Confidence Score Logic

- **Requirement:** A proactive AI system that intervenes based on a dynamic Confidence Score, user inactivity, and recognition of user confusion.
- **Implementation Sprints:** Sprint 3 & 4

**Detailed User Stories:**

| User Story | Acceptance Criteria |
| --- | --- |
| As a Learner who is struggling, I want Coach Klaus to proactively offer a targeted micro-lesson so that I can get help when I need it most. | 1. The ADE monitors for triggers: 3+ incorrect quiz attempts OR a Confidence Score below 40% OR 90 seconds of inactivity on an interactive element. 

2. When triggered, Coach Klaus appears and offers an optional micro-lesson. 

3. Declining the offer dismisses the prompt. |
| As a Learner, I want to take a personalized micro-lesson that appears within my current view so that my learning flow is not disrupted. | 1. The micro-lesson (e.g., a short video or text) appears in a themed overlay within the scene. 

2. The main activity is dimmed but remains in the background. 3. Completing the micro-lesson returns the user to the original activity. |

---

### 1.2. The Taktikcheck as a Dedicated Component

- **Requirement:** A hybrid on-site and digital assessment process, including a dedicated "Trainer-Facing UI" for data entry.
- **Implementation Sprints:** Sprint 1 & 2 (Foundational) and Sprint 8 (Trainer UI)

**Detailed User Stories:**

| User Story | Acceptance Criteria |
| --- | --- |
| As a Trainer, I need a secure, efficient UI to enter the results of an on-site Taktikcheck so that the learner's starting profile is accurate. | 1. A dedicated login for the 'Trainer' role exists. 

2. The UI provides a form to enter scores and qualitative notes for each Taktikcheck dimension. 3. Submitting the form updates the specific learner's profile and initial Confidence Score. |

---

### 1.3. Interactive, Empathic Coach Klaus with Wake-up Logic

- **Requirement:** A deep AI persona who acts as a narrative guide, has a memory of user interactions, and is managed by a "Prompt Layer / Role & Prompt Control Engine".
- **Implementation Sprints:** Sprint 3

**Detailed User Stories:**

| User Story | Acceptance Criteria |
| --- | --- |
| As a Learner, I want to be greeted by Coach Klaus when I start a Matchday so that the experience feels guided and personal. | 1. Coach Klaus's avatar appears in a designated spot in the scene. 
2. He delivers a pre-scripted welcome message relevant to the Matchday. 
3. He may gesture towards the first activity to guide the user. |
| As an AI system, I need a Prompt Control Engine so that all of Coach Klaus's responses are consistent with his defined empathetic and motivating persona. | 1. The system prepends persona-defining instructions to all prompts sent to the LLM. 
2. The system maintains a 'Session Memory' of recent interactions to provide context. 
3. The engine is hard-coded to use the Llama  model. |

---

### 1.4. Community Elements (Highlight Wall, Calls, Flutlichttalk)

- **Requirement:** Community features including a "Highlight Wall" and live "Community Calls (Flutlichttalk)".
- **Implementation Sprints:** Sprint 4 & 5 (In-Scope), Sprint 8 (New Component)

**Detailed User Stories:**

| User Story | Acceptance Criteria |
| --- | --- |
| As a Learner, I want to view my achievements and see what else I can unlock on a 'Highlight Wall' so that I am motivated to continue. | 1. A dedicated 'Highlight Wall' or 'Trophy Case' section is accessible from my profile. 
2. It displays all earned badges vibrantly. 
3. It displays unearned badges as greyed-out silhouettes with a hint about how to earn them. |
| As a Learner, I want to create a new post in a module-specific forum so that I can ask questions or share insights with my peers. | 1. A 'Start Discussion' button is available within each module's community tab. 
2. The post editor allows for a title and rich-text body. 
3. The user can attach one image or file per post. 
4. The post appears in the correct module forum upon submission. |
| (New) As a Learner, I want to join a scheduled live video call ('Flutlichttalk') so that I can participate in real-time group discussions. | 1. The platform displays a schedule of upcoming calls. 
2. A 'Join Call' button becomes active shortly before the start time. 
3. Clicking the button launches an embedded video conferencing client (e.g., Zoom/Teams). 4. Admins have host/moderator privileges in the call. |

---

### 1.5. Audit & Logging Layer and Monitoring Dashboard

- **Requirement:** A compliance layer for AI Act/DSGVO and a dashboard with custom metrics.
- **Implementation Sprint:** Sprint 7 (Integration)

**Detailed User Stories:**

| User Story | Acceptance Criteria |
| --- | --- |
| As a Developer, I need to ensure all user interactions and AI decisions are logged via the ExerlebenAI platform so that we are compliant with AI Act & DSGVO. | 1. An API client is implemented to connect to the ExerlebenAI endpoint. 
2. Key events (e.g., user login, quiz completion, PIE submission, ADE trigger) are sent to the logging service. 
3. The integration is tested to ensure no data loss. |

---

## 2. Design & Commercials

- **Design Scope:** We confirm that, as per your request, the responsibility for creating all final, high-quality 2D background images now rests with your team to ensure the "WOW factor" is achieved.
- **Commercial Offer:** We are prepared to discuss the adjusted commercial offer reflecting this change in scope during our call.

---

## 3. Conclusion

This document clarifies that the project has been on the right track, with the core innovative features already integrated into the development timeline. We are confident that a walkthrough of this detailed plan will restore full confidence and provide a clear path forward.