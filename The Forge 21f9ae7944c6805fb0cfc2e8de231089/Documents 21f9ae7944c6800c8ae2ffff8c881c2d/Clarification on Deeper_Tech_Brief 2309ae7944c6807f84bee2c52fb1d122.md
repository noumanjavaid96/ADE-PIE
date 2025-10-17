# Clarification on Deeper_Tech_Brief

Author: Nouman Javaid
Creation Date: July 14, 2025
Version: clarifying

# Clarification Request Regarding "Deeper_Tech_Brief"

<aside>
⚠️

This document is based off the document shared by @Kristian Erxleben  : 

[Deeper_tech_brief_EN.pdf](Clarification%20on%20Deeper_Tech_Brief%202309ae7944c6807f84bee2c52fb1d122/Deeper_tech_brief_EN.pdf)

</aside>

## Introduction

Thank you for providing the comprehensive "Deeper_Tech_Brief" document. It offers excellent, detailed insight into the technical and functional vision for the platform. We have analyzed it thoroughly to align our understanding with yours.

To ensure our final technical proposal and fixed-price quote are as accurate as possible and fully meet your expectations, we need to clarify a few specific points where the technical implementation details could vary significantly based on the required depth and complexity.

This document quotes the relevant sections from your brief and follows up with specific questions. Your answers to these will allow us to finalize our scoping and planning.

---

## 1. Tactic Check Clarifications

This section seeks to clarify the specific implementation details for the Tactic Check module to ensure our backend logic and data models align perfectly with your vision.

### 1.1. Topic: Free-Text Answer Evaluation Logic

- **From the `Deeper_Tech_Brief` (Tactic Check, Section 2):**
    
    > "For free-text fields requiring evaluation (e.g., keyword matching, sentiment analysis - to be defined by **Renesis business logic**), the backend will provide hooks or services to perform these evaluations."
    > 
- **Our Understanding & Specific Questions:**
    - We understand that Renesis is responsible for building the technical service to evaluate free-text. To scope this accurately, we need to clarify the complexity for the initial implementation:
        1. **For 'keyword matching,'** could you provide a simple example of the types of keywords or concepts we would need to identify in a free-text response?
            
            <aside>
            ⚠️
            
            This is the note part for the AI session memory.
            
            </aside>
            
        2. **For 'sentiment analysis,'** is a simple positive/negative/neutral classification sufficient for the MVP, or is a more nuanced emotional analysis (e.g., detecting frustration, confidence) required at this stage?
            
            <aside>
            ⚠️
            
            related to session 
            
            </aside>
            
        3. Will the rules for this evaluation (e.g., the list of keywords) be static in the code, or does the **admin need a UI** to configure these keywords and rules over time?

---

## 2. LMS Content Types Clarifications

This section aims to define the Minimum Viable Product (MVP) scope for the more complex interactive content types to ensure our initial development effort is correctly focused.

### 2.1. Topic: Complexity of Advanced Interactive Formats for MVP

- **From the `Deeper_Tech_Brief` (LMS, Key learning formats):**
    
    > "🛠 Process Designer: Interactive visual builder (e.g., swimlanes, drag-and-drop), exportable" "Mini simulations (e.g., branching decision trees)""Digital pinboards for team collaboration and idea sharing"
    > 
- **Our Understanding & Specific Questions:**
    - We understand that our backend must support the logic for these rich interactive formats. To ensure the MVP is delivered on time and on budget, we need to clarify the minimum required functionality for the initial versions of these components.
    1. **For the "Process Designer,"** is the MVP requirement a simple node-and-connector tool where users can place shapes and link them, or does it need to include more complex features like swim lanes, validation against a model, or specific BPMN-like rules from the start?
    2. **For "Mini simulations,"** the brief mentions branching decision trees as an example. For the MVP, should we focus solely on supporting this format, or are there other simple simulation types we need to account for? (e.g., a simulation that involves managing a budget number across several choices).
    3. **For "Digital pinboards,"** the brief mentions "team collaboration." Does the MVP require real-time collaboration between users on a single pinboard, or is an asynchronous model (where one user adds notes, and another can view them later) sufficient for the initial implementation?

<aside>
⚠️

for **MVP** to start with smaller versions

</aside>

---

## 3. Confidence Score Clarifications

This section seeks to confirm the understanding of dependencies related to the more advanced behavioral signals for the Confidence Score calculation.

### 3.1. Topic: Dependency on Frontend Partner for Behavioral Signal Data

- **From the `Deeper_Tech_Brief` (Confidence Score, Calculation Logic):**
    
    > "The score is calculated automatically in the middleware based on weighted behavioral signals:"Signal Types listed include "Voice Patterns (Phrases like “I’m not sure...”)" and "Speed & Reaction (Hesitation, rushed clicking)".
    > 

<aside>
⚠️

- **Our Understanding & Specific Question:**
    - We understand that Renesis will build the backend engine to receive these signals and incorporate them into the Confidence Score using a weighted model.
        1. **Can you confirm your understanding and acceptance of this dependency?** **Renesis** will provide the necessary API endpoints for the **frontend** to send this behavioral data (e.g., `POST /api/v1/signal/hesitation`, with a payload indicating duration), but the feasibility and complexity of *generating* these signals will lie with your frontend partner. A close collaboration will be essential here.
</aside>

---

## 4. Missing Modules Clarifications

This section addresses the modules mentioned in the feedback that require scoping from a technical/backend perspective. While the `Deeper_Tech_Brief` provided excellent detail on many components, we need to define the scope for the following to ensure they are included in our planning.

### 4.1. Topic: The “Experience Module” after booking

- **From Kristian's Feedback:**
    
    > The following modules are completely missing or not described adequately: ... The “Experience Module” after booking
    > 
- **Our Understanding & Specific Questions:**
    - This "Experience Module" was not detailed in the `Deeper_Tech_Brief`. To accurately scope the backend and API development required to support it, we need to understand its purpose and core functionalities.
        1. **What is the primary purpose of the "Experience Module"?** Is it a pre-onboarding engagement tool, a system check, a narrative introduction, or something else?
        2. **What specific user interactions or content needs to be supported by the Renesis backend for this module?** (e.g., does it involve specific interactive elements, saving user choices, triggering events, etc.?)
        3. **How does it connect to the Tactic Check and the first Matchday?** Is it a mandatory step between them?

This is currently the most significant undefined functional area, and clarifying its requirements is critical for a final, fixed-price proposal.

<aside>
⚠️

The explanation provided pre-recorded Marketing part. 

</aside>

---

## 5. Multilingual Intelligence Clarifications

This section seeks to clarify the precise scope of the on-the-fly translation feature to ensure the technical implementation is correctly scaled.

### 5.1. Topic: Scope of On-the-Fly Translation via DeepL

- **From the `Deeper_Tech_Brief` (Multilingual Intelligence, Section 2):**
    
    <aside>
    💡
    
    > "The Prompt Engine: ... If no localized version exists, the German base prompt is translated on-the-fly via DeepL API"
    > 
    </aside>
    
- **Our Understanding & Specific Question:**
    - We understand that the primary use of the DeepL API is for translating base prompts for Coach Klaus if a localized prompt for a detected language is not already available in the system. This ensures Coach Klaus can always respond appropriately.
        
        <aside>
        ⚠️
        
        **To confirm the boundary of this feature, does the on-the-fly translation requirement apply *only* to the AI system's internal prompts, or does it also extend to user-facing static text?** 
        
        For example, if a Matchday's text content, instructions, or button labels are only authored in German, should the Renesis backend also translate these via DeepL for an Italian-speaking user, or is the expectation that all such static content will be pre-translated by the client's editorial team?
        
        </aside>
        
        <aside>
        💡
        
        **Video’s will not be in translated nor any other content only the chat and interaction with the Coach is going to be users language. 
        
        The language if detected by Klaus then it should answer in the spoken language.** 
        
        </aside>
        

Clarifying this will help us scope the number and type of API calls to DeepL and the complexity of the content delivery logic.

<aside>
💡

1. **Community Part** is to be defined in detail. 
</aside>