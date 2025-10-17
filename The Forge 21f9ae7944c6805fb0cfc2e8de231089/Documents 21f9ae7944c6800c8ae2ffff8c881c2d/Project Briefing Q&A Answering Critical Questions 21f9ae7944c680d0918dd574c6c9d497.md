# Project Briefing Q&A: Answering Critical Questions

Author: Nouman Javaid, Bilal Khalid, Hamza

## 1. User Authentication & Authorization

This section covers security, session management, and user access control. The guiding principle is a high level of security and compliance as stated in Sections 2 and 7.2 of the project brief.

### **Role-Based Access Control System**

- **Q: What specific roles should be defined in the initial system?**
    - **A:** The project brief explicitly defines five roles in Section 7.3:
        1. **Law firm account (learner main user):** The primary user teams.
        2. **Internal trainer (Zukunftsschmiede team):** For support, analysis, and conducting the tactics check.
        3. **Editorial office / content team:** Manages learning content.
        4. **Management (admin role):** Full system control and access to all metrics.
        5. **AI dashboard (system role):** For technical monitoring and auditing of the AI.
- **Q: Should we support hierarchical role inheritance?**
    - **A:** No, the initial design is a **flat role structure**, meaning there is no inheritance of permissions between roles. Each role has a unique and distinct set of permissions assigned directly to it.
        - **What this means:** A user assigned one role does not automatically get the permissions of another, "lesser" role. The permissions do not cascade down.
        - **Example:** A user with the **Management (admin role)** does not automatically inherit the permissions of the **Internal trainer**. If an admin needs to view a trainer's dashboard, that specific permission must be explicitly granted to the admin role. The roles are completely separate.
        - **In practice:** An "Internal trainer" can view a law firm's progress but cannot edit learning content. A member of the "Editorial office" can edit content but cannot view the trainer's analytics dashboard. This prevents accidental access and keeps each role's capabilities clearly defined and separate.
    
- **Q: How granular should permissions be (feature-level vs. action-level)?**
    - **A:** Permissions are defined at the **feature-level**. Section 7.3 gives clear examples, such as the "Internal trainer" having access to view learning levels but "No intervention in learning content or AI systems."
- **Q: Do we need audit trails for role and permission changes?**
    - **A:** **Yes.** Section 9 explicitly states the need for "Audit logging in accordance with the AI Act - fully traceable," which would include any changes to roles and permissions.

### **User Session & Login Management**

- **Q: What should be the default session timeout duration?**
    - **A:** This specific duration is not defined in the brief. It should be determined based on the principle of high security (Section 2) while ensuring a good user experience, as users may be engaged in 45-60 minute "match days" (Section 8.2). A reasonable starting point would be 60-90 minutes of inactivity.
- **Q: Should we allow multiple concurrent sessions per user?**
    - **A:** The brief does not specify. However, since the platform is designed for a "team" to go through a match day together (Section 8.2), restricting access to a single session per law firm account at any given time would be logical to avoid conflicting progress.
- **Q: How many failed login attempts should trigger account lockout?**
    - **A:** The brief does not set a number. A standard industry practice of 3-5 failed attempts would align with the high-security principle.
- **Q: Should we implement 'Remember Me' functionality?**
    - **A:** The brief does not specify. This can be considered a lower-priority feature. Given the sensitive nature of business processes discussed, it may be better to omit this for security reasons.
- **Q: Do we need two-factor authentication (2FA)?**
    - **A:** The brief does not mandate it, but it would be a strong addition that aligns with the project's emphasis on being a secure, "European flagship project" (Section 9). Recommended for admin and management roles at a minimum.

### **Password & Registration System**

- **Q: What should be the expiration time for password reset tokens?**
    - **A:** Not specified. A standard, secure timeframe is 15-60 minutes.
- **Q: Should we require email verification before account activation?**
    - **A:** Not explicitly stated, but this is a fundamental security best practice and should be implemented.
- **Q: What password complexity requirements should we enforce?**
    - **A:** Not specified. Standard requirements (e.g., minimum length, mix of character types) should be enforced to align with the security-first approach.

## 2. AI Coach & Adaptive Learning

This section addresses the core AI functionalities that make the learning experience unique.

### **The Personalized 'Micro-Lesson'**

- **Q: What constitutes an optimal length for a micro-lesson (time/content wise)?**
    - **A:** **Approximately 5-10 minutes.** (Section 6, "Microlearning").
- **Q: How will the system personalize content for different learning styles?**
    - **A:** Personalization is driven by two key systems:
        1. **Adaptive Decision Engine (ADE):** Adjusts learning paths, offering challenges to "high-flyers" and support to "insecure or weakening users." (Section 3).
        2. **Confidence Score:** Modifies the AI Coach's tone and approach based on the user's perceived confidence. (Section 4).
- **Q: Should micro-lessons be dynamically generated or pre-authored?**
    - **A:** They are **pre-authored**. The brief details an "editorial office / content team" responsible for creating and managing all learning content via a backend system. (Section 8.6).

### **AI Coach & Knowledge Graph**

- **Q: How will the Knowledge Graph structure tactical concepts and their relationships?**
    - **A:** The brief states the AI will map failed questions to `conceptIds` but does not define the specific data structure of the graph. This is a key technical design decision for the development team to define, likely as a directed graph where nodes are concepts and edges represent dependencies.
- **Q: What machine learning models will power the AI Coach's decision-making?**
    - **A:** Initially, the **Adaptive Decision Engine (ADE) is rule-based** (e.g., "IF CS < 0.6 THEN Coach = compassionate"). The brief mentions a future outlook where an **ML model (like decision trees or reinforcement learning) could be used to enhance these rules. (Section 3).**
- **Q: What confidence thresholds will trigger different types of interventions?**
    - **A:** The brief provides this as a direct example of a configurable rule: "CS < 0.6 → Coach = compassionate" and "CS > 0.9 → Activate additional task." These thresholds will be configurable by the editorial team. (Section 3).

### **The Learner Struggles (Quiz Fail)**

- **Q: What constitutes a 'quiz fail'?**
    - **A:** A specific percentage is not defined. The brief refers to falling "below passing threshold." This will be a configurable parameter set by the editorial team for each quiz.
- **Q: Should the system allow multiple attempts before triggering AI intervention?**
    - **A:** This is not specified and should be a configurable rule within the ADE. The system could, for example, trigger a light intervention after the first failure and a more comprehensive one after a second.
- **Q: How will the system differentiate between careless mistakes and knowledge gaps?**
    - **A:** The brief notes that the ADE's decisions are based on "Error analyses (e.g. systematic misunderstandings vs. simple careless mistakes)." (Section 3). The logic for this differentiation needs to be designed, potentially by analyzing patterns of failure on related concepts vs. one-off errors.

## 3. Process Intelligence Engine (PIE)

- **Q: What LLM model will power the Process Intelligence Engine analysis?**
    - **A:** Exclusively **Aleph Alpha (model variant: World)**. The brief is emphatic that this model is the "strategic core" and "cannot be replaced." (Sections 2 & 5).
- **Q: How will the system identify and source real-world tactical scenarios?**
    - **A:** From the users themselves. The PIE processes "Voice or text input by users" or "File uploads of process documents." (Section 5).
- **Q: How will the system validate that generated checklists are tactically sound?**
    - **A:** The brief does not specify an automated validation method. The quality relies on the prompt engineering and the capabilities of the Aleph Alpha model. The output is presented as "suggestions for improvement" and is moderated by Coach Klaus, implying a coaching-based approach rather than a strictly validated one.

## 4. The User Journey: From Assessment to Mastery

This section is structured to follow the user's path, from their initial assessment and motivation to the underlying content creation that makes it all possible.

### **4.1 The First Step: The Taktikcheck Assessment**

This is the user's entry point, where the system establishes a baseline for their learning journey.

- **Q: How many questions should constitute a complete Taktikcheck?**
    - **A:** **5-10 structured questions per module.** (Section 8.1).

### **4.2 The Result & Ongoing Motivation: Gamification**

After the assessment, these elements provide immediate feedback and long-term motivation.

- **Q: How should the dartboard animation be implemented?**
    - **A:** This is a front-end implementation detail not covered in the brief. The choice of CSS, Canvas, or a library like D3.js would depend on the desired richness of the animation that visualizes the Taktikcheck results.
- **Q: How many leagues should the system support?**
    - **A:** **Three leagues** are defined based on the Taktikcheck results: Starting league, Taktgeberliga, and Playmaker league. (Section 6).
- **Q: What scoring thresholds determine league boundaries?**
    - **A:** Not specified. This will be a configurable parameter based on the results of the "Taktikcheck" and will likely be refined by the editorial team.
    
- **Q: Should there be social features that allow learners to see others in their league?**
    - **A:** **Yes.** The brief describes a "Community & social interaction" component, including "thematic discussion rooms," "highlight walls," and "peer learning," which would naturally extend to league-based groups. (Section 8.4).

### **4.3 The Foundation: Course Creation & Management (Admin Role)**

This covers the backend work required by the platform's administrators and content creators to build the learning experience.

- **Q: What content authoring tools will be provided for course creation?**
    - **A:** The brief specifies that the LMS and its tools are a "completely self-developed solution" and an "individualized in-house development," including an "editorial backend." It mentions support for video, quizzes, and interactive digital boards. (Sections 7.1 & 8.6).
- **Q: How will version control be handled for course updates?**
    - **A:** **Yes, versioning is required.** The brief states, "All learning content should be able to be versioned - incl: Publication date, History of changes, Roll-back function if required." (Section 8.6).