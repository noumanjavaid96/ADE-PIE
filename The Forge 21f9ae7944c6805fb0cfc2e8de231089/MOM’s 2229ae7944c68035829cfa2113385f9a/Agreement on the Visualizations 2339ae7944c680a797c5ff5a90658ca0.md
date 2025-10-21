# Agreement on the Visualizations

Documents Presented: https://www.notion.so/2329ae7944c681b2813ee203a782b441?pvs=21
Participants: Nouman Javaid, Hamza, Kristian Erxleben
date: July 17, 2025

<aside>

Chat with meeting transcript: [https://notes.granola.ai/d/38d6bad9-cc9e-4346-9fde-0bb6055e04d3](https://notes.granola.ai/d/38d6bad9-cc9e-4346-9fde-0bb6055e04d3)

</aside>

This meeting served as a crucial validation step following the delivery of a detailed UI/UX and technical documentation by the development team. The client, Christian, expressed high satisfaction, stating the document was "exactly what we want" and that he was "totally impressed." This confirmed a strong alignment between the client's vision and the proposed solution. The discussion then focused on clarifying remaining technical and operational details, including the process for future platform expansion and the critical need to finalize the exact content volume (the number of 'game days' per league) to establish the project's final scope, timeline, and cost.

---

### **Topic 1: Project Documentation Validation and Feedback**

**Epic: Technical Documentation Review and Approval**

- **Task: Client Feedback Collection**
    - Christian expressed complete satisfaction with the detailed technical document, praising the development team's research and effort. This confirmed that both parties are aligned on the project's direction and technical solutions.
- **Subtask: Transition Effect Validation**
    - The client specifically approved the proposed transition effects, such as the "door opening" animation and the interactive parallax effect on the login screen. He emphasized that these immersive transitions are exactly what is needed to create the desired user experience, moving beyond simple page clicks.
- **Task: Technical Architecture Confirmation**
    - Both parties formally agreed on the technical architecture and scope definition outlined in the document. This marked the successful completion of the discovery phase and established a solid foundation for a controlled, step-by-step execution of the project.

### **Topic 2: Video Generation and AI Integration Requirements**

**Epic: AI-Powered Video Content Generation System**

- **Task: Video Generation Responsibility Clarification**
    - It was agreed that the development team cannot hold 100% responsibility for the final AI-generated video transitions due to the unpredictable nature of AI tools. The process will require a trial-and-error approach.
- **Subtask: Content Volume Requirements**
    - The project will launch with three leagues. To manage development, a set of 12-15 unique room designs will be created per league and reused across different game days.
- **Task: Alternative Content Creation Strategy**
    - A hybrid approach was agreed upon: the development team will provide the necessary AI tools and training. The client's team will then be responsible for creating the actual video content, with the option to hire a specialized freelancer if needed.
- **Subtask: Content Creation Process**
    - The client is responsible for creating the video content. The development team will provide the tools, training, and technical support to facilitate this process.

### **Topic 3: Platform Latency and Performance Considerations**

**Epic: Platform Performance Optimization and Latency Management**

- **Task: Latency Source Identification**
    - Potential latency was identified as coming from two main sources: third-party services like D-ID and the platform's own backend processing.
- **Subtask: D-ID Integration Latency**
    - The development team clarified they have no control over the response times of the D-ID service, as the interaction is handled by embedding their code.
- **Task: Video Loading Optimization Strategy**
    - To ensure a smooth user experience regardless of internet speed, the platform will implement pre-loading screens. This ensures all assets are ready before the user enters an environment, preventing sync issues between animations and interactive elements.
- **Subtask: Server-Side Performance Considerations**
    - The performance of custom AI models will depend on the server's GPU power. It was agreed that hosting the infrastructure in Germany, close to D-ID's servers, would be the best strategy to minimize latency.

### **Topic 4: Server Infrastructure and Hosting Strategy**

**Epic: Infrastructure Setup and Management**

- **Task: Hosting Provider Selection**
    - The development team will leverage their extensive experience with AWS to guide the client. The recommendation is to use AWS servers located in Germany to ensure optimal performance and low latency.
- **Subtask: Technical Support Requirements**
    - The development team will provide expert consultation on selecting the right server specifications and configurations to meet the project's demands, assisting the client in making informed decisions.
- **Task: Infrastructure Scalability Planning**
    - The server architecture will be planned to handle the significant load of the platform's video-based game days and the processing requirements of the AI models, with strategies for performance monitoring and optimization.

### **Topic 5: Timeline, Milestones, and Pricing Finalization**

**Epic: Project Planning and Commercial Agreement**

- **Task: Milestone Structure Definition**
    - The project will follow a controlled, milestone-based approach. With the discovery phase complete, the next milestone will be the design phase, which will require client approval before development begins.
- **Subtask: MVP Definition and Scope**
    - A clear definition of the MVP's scope and the timeline for its delivery will be included in the final quotation, ensuring there is no ambiguity.
- **Task: Pricing and Quotation Delivery**
    - A final, fixed-price quotation will be delivered to the client within 24 hours, detailing the costs associated with each milestone.
- **Subtask: Future Expansion and Editor Functionality**
    - A crucial point of alignment was reached regarding future platform expansion. It was explicitly agreed that the scope for this project **does not include a self-service 'Editor' functionality** that would allow the client to create new leagues independently.
    - Kristian and his team confirmed their understanding that for any future additions, such as a 'League 4', they will need to **re-engage and hire Renesis** for a new, separate development cycle. This ensures that the quality and integrity of the immersive experience are maintained for all future content.

### **Topic 6: Content Creation Responsibilities and Process**

**Epic: Content Generation and Management Framework**

- **Task: Content Creation Workflow**
    - Responsibilities are clearly divided: the client will generate the learning content (quizzes, scenarios), while the development team will provide the technical framework and tools.
- **Subtask: AI Video Generation Process**
    - The client will take the lead on producing the AI-generated video assets, using tools and training provided by the development team.
- **Task: Content Volume Management**
    - While the discussion mentioned numbers around 120 game days per league, this requires final confirmation.
    - **Action Item for Client:** Provide a definitive number of "game days" to be included per league for the V1 launch. This is a critical dependency for finalizing the project scope, timeline, and quotation.

<aside>

### **Topic 7: Next Steps and Action Items**

**Epic: Project Initiation and Immediate Actions**

- **Task: Documentation and Quotation Delivery**
    - **Action:** The development team will deliver the final quotation with fixed pricing and a detailed milestone timeline within 24 hours.
- **Subtask: Technical Clarifications**
    - **Action (Client):** Provide a definitive count of "game days" per league for the V1 scope. This is critical for finalizing the quotation and project timeline.
    - **Action (Client):** Provide minor clarifications on the "Taktikcheck" module via Teams.
- **Task: Project Kickoff Preparation**
    - **Action:** The client is ready to start immediately upon approval of the quotation and will assign an additional team member to the project.
- **Subtask: Proof of Concept Development**
    - **Action:** It was suggested to begin with a small proof of concept, such as developing 2-3 match days, to test the D-ID avatar integration and validate performance before full-scale development.
</aside>