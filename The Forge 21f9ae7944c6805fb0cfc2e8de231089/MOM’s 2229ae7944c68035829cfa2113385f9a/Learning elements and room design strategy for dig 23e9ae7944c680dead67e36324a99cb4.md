# Learning elements and room design strategy for digital training platform

Documents Presented: ../Designbriefing_Startelfliga_en-US.pdf
Participants: Muhammad Irtaza, Nouman Javaid
date: July 25, 2025

### Fri, 25 Jul 25

### **Context**

- Learning elements and room design strategy for digital training platform
- Designing 3D room environments with embedded learning content (quizzes, videos, coaching elements)
- Platform will feature avatar coach positioned on right side of screen
- Content includes 3 leagues with 12 different models each, totaling 360 different metrics across 10 match days per model
- Integration challenges between learning elements and 3D room environments need to be resolved

### **Brainstorming**

### **Learning Element Integration Approach**

- Screen/content embedding within 3D room environments
    - Standard size: 1920x2080 pixels for all content
    - Frame-based approach using LED or projector-style frames within room design
    - Challenge: ensuring proper corner alignment and avoiding visual gaps
- Avatar coach placement
    - Always positioned on right side of screen
    - Maximum 70% width allocation
    - Full body representation when possible
    - Provided by Dash ID team
- Content layering strategy
    - UI elements (buttons, progress bars) overlaid on top of room images
    - Navigation elements designed to fit naturally within room aesthetic
    - Avoiding generic dashboard appearance in favor of immersive stadium-like experience

### **Room Design Hierarchy and Progression**

- Three-tiered league system with distinct visual themes
    - Neighborhood level: casual, local sports club aesthetic
    - Main league: professional sports league appearance
    - Highest league: big stadium/dome environment
- Room transition videos
    - 5-8 second duration between room changes
    - Web app format preferred for lightweight loading
    - Sound effects provided by client team
    - AI-generated content used for initial mockups

### **Technical Implementation Challenges**

- Content sequencing and state management
    - Logic system for transitioning between states (room 1 to room 7)
    - Dashboard integration without traditional UI appearance
    - Progress tracking visually embedded in room environment
- Loading and performance considerations
    - Lightweight video files for server hosting
    - Loading indicators during video playback
    - Seamless transitions between learning phases

### **Design System and UI Elements**

- Custom button designs that integrate with room aesthetics
    - Avoiding standard web buttons in favor of contextual designs
    - Challenge: finding background spaces where UI elements don’t appear out of place
- Dashboard reimagined as immersive environment
    - Personal locker room concept rather than traditional dashboard
    - Progress visualization integrated into room elements (tactical boards, LED displays)
    - Leaderboard functionality styled to match stadium environment

### **Content Structure and Requirements**

- Match day format with embedded quizzes and exercises
    - Based on module 7 requirements from previous discussions
    - First 8 days to be prioritized for initial design phase
    - Quiz integration either overlaid or embedded within room elements
- Coaching elements
    - Voice provided by 11 labs text-to-speech
    - Static avatar for design phase (idle state sufficient)
    - Dynamic interaction capabilities to be developed later

### **Decision**

### **Immediate Next Steps**

- Background room creation
    - Start with 4-5 initial room designs based on provided briefings
    - Share early versions for feedback and transition video development
- UI design system development
    - Create comprehensive design system for all interactive elements
    - Design buttons, text fields, dropdowns with room-integrated aesthetic
    - Present unified design language before full implementation
- Avatar integration requirements
    - Client to provide standard/basic avatar from Dash ID by end of week
    - Idle state sufficient for initial design phase
    - Format and integration specifications to be clarified

### **Content and Asset Requirements**

- Quiz and exercise visualization based on module 7 content
- Room briefings for additional environments beyond initial 4 rooms
- Transition video specifications confirmed (5-8 seconds, web app format)
- Sound effects and coaching voice assets to be provided by client

### **Project Coordination Updates**

- Leonie introduced as new technical coordination operator
- Christian remains available for strategic decisions but delegating day-to-day coordination
- Weekly milestone reviews planned with design deliverables
- Freelancer milestone to be created for design phase tracking

### **Technical Specifications Confirmed**

- Screen resolution: 1920x2080 pixels standard
- Coach avatar: right-aligned, max 70% width
- Video format: web app preferred for performance
- Loading states: implement during video transitions
- Frame integration: LED/projector style with customizable design elements

---

Chat with meeting transcript: [https://notes.granola.ai/d/e6b1fe38-41a1-4a59-a071-687927b08e64](https://notes.granola.ai/d/e6b1fe38-41a1-4a59-a071-687927b08e64)