# Transitions within a Matchday UI

Module: Transitions within a Matchday UI
Design: Zain
Design Status: Done
Backend Due Date: 23/09/2025 → 26/09/2025
Frontend Dev: Tayyab Mughal
Frontend Dev Status: Done
Frontend Due Date: 22/09/2025 → 26/09/2025
Backend Dev: Muhammad Faizan Nasir
Backend Dev Status: Done
QA Status: Not started
QA: atif@renesistech.com

---

# **🏟️ EPIC 5: Transitions *within* a Matchday UI (Intra-Matchday Content Transitions)**

- [ ]  **🎯 Goal:** Ensure smooth, immersive, and logical progression between content components *within the same Room/Zone*.
- [ ]  **5.1 Core Principles for Intra-Matchday Transitions**
    - [ ]  Contextual & Localized (only content display area changes, background remains static)
    - [ ]  Clear Signposting (user always knows next step)
    - [ ]  Thematically Consistent (sports/league theming across UI)
    - [ ]  Efficient (quick but distinct transitions)
- [ ]  **5.2 Transition Mechanisms & UI Elements**
    - [ ]  **User-Initiated via In-Scene UI Elements (Primary Method)**
        - [ ]  Themed “Continue / Next Activity” buttons (e.g., "Continue to Quiz," "Proceed to Reflection")
        - [ ]  Placement: inside completed activity UI or consistent “action spot” in scene
        - [ ]  Interaction: user clicks to proceed
        - [ ]  Parallax/Transition Effect: old content fades/slides out → new fades/slides in (localized only)
        - [ ]  Optional subtle sound effect
    - [ ]  **Automatic Advancement (Used Sparingly)**
        - [ ]  Context: very short, passive content (audio cue, title card, etc.)
        - [ ]  Transition auto-loads next activity after 1–2 sec pause
        - [ ]  Not overused to preserve user control
    - [ ]  **Coach Klaus Prompted Transitions**
        - [ ]  Klaus delivers contextual voice/subtitle prompt at breakpoints
        - [ ]  Example: “Great job! Now let’s move to the Pinboard. Click ‘Open Pinboard’.”
        - [ ]  Relevant themed button appears near Klaus or in UI panel
        - [ ]  Interaction: user clicks to proceed
    - [ ]  **Progression Indicators with Click-to-Advance (Limited Use)**
        - [ ]  Visual sequence display (e.g., game plan icons, console lights)
        - [ ]  Active step highlighted, next step becomes clickable after completion
        - [ ]  Prevents skipping far ahead, ensures linear flow
        - [ ]  Serves as orientation + optional navigation tool
- [ ]  **5.3 Visual Effects for Content Area Updates**
    - [ ]  Fade-in/out transitions between activities
    - [ ]  Themed wipes/slides (horizontal, iris wipe, etc.)
    - [ ]  Localized “card flip” or “panel swap” effect on virtual surfaces
    - [ ]  Quick effects to preserve immersion within the 2D environment

---