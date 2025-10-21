# Clarification on the Deeper_Tech_Brief

Documents Presented: https://www.notion.so/2309ae7944c6807f84bee2c52fb1d122?pvs=21
date: July 14, 2025

# Mon, 14 Jul 25

### **Coach Interface Design Clarification**

- Notes for coach functionality
    - Employee feedback interface where physical coach can input observations
    - Point-based system (e.g., “needs extra advice in point 2 or point 8”)
    - All coach input goes to session memory for keyword matching
- Keyword matching system
    - Captures confidence-related terms (“not confident,” “struggled”)
    - Feeds back to coach course for speech adaptation
- Sentiment analysis
    - Simple positive/negative classification
    - Company performance scoring (1-10 scale)
    - Impacts user’s game day score based on responses

### **LMS Content Requirements**

- Simulation components needed
    - Drag and drop interfaces
    - Process flow chart creation
    - All UI elements for interactive learning
- MVP vs full version approach
    - Full functionality required for go-live (100%)
    - MVP can have 65% of features for market demonstration
    - Content delivery: first league/match day samples for initial development
    - Timeline flexibility for quality vs speed balance

### **Confidence Score Engine**

- Multi-input scoring system
    - Quiz performance (e.g., 8 mistakes out of 10 questions lowers score)
    - Voice interaction analysis
    - Branching scenario responses
    - PDF upload quality assessment
- All interactions affect confidence score with predefined logic
- System will detect user frustration (“I’m so dumb, I don’t get it”)
- Detailed predefined rules for score increases/decreases

### **Experience Module Overview**

- Marketing-focused onboarding sequence
    - Video introduction with sports commentator
    - Pre-recorded content from Sasha and client
    - Emotional engagement strategy
- Post-purchase email workflow
    - 5-day delay after purchase
    - Company assessment questions (employee count, biggest problems)
    - Data feeds into session memory and tactic check
- Minimal backend requirements, primarily frontend interface work

### **Multi-language Support Strategy**

- Limited translation scope
    - Videos remain in German (not translated)
    - Platform content stays in German
    - Only coach interaction supports multiple languages
- Real-time language detection
    - No dropdown menu selection
    - Automatic language identification from user speech
    - Fallback to English/German for unsupported languages
- DeepL integration for text translation between AI and speech systems

### **Next Steps**

- Document creation with visual journey through each module
- Community features discussion needed
    - Text-based user interaction
    - Live call integration (Teams/Zoom)
    - Separate clarification document to be provided
- Wake word functionality (“Hey Coach”) deferred to future development
    - Environmental noise concerns
    - Additional cost considerations
    - Not included in current scope

---

Chat with meeting transcript: [https://notes.granola.ai/d/6bc26207-730a-4fe6-abf7-90b206ac010e](https://notes.granola.ai/d/6bc26207-730a-4fe6-abf7-90b206ac010e)