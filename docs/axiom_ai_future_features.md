# Axiom.ai: Future Feature Specifications

## 1. Introduction

This document captures the specifications for high-value features requested for the **Axiom.ai** platform. These features are documented here to ensure they are preserved for future development cycles.

The current development priority is **The Forge**. These Axiom.ai features will be scheduled for implementation after the core deliverables for The Forge are complete.

---

## 2. Feature: Explain Mode

### 2.1. High-Level Description

"Explain Mode" is a premium feature designed to make complex topics more human and understandable. When a user receives a standard text-based answer from the AI, they will have the option to enter "Explain Mode." In this mode, a human-like avatar appears and re-explains the topic from a different perspective (e.g., as a customer, a patient, a senior consultant). This provides a richer, more contextual learning experience beyond a simple text response.

### 2.2. User Stories

**As a user with a 'Plus' or 'Enterprise' subscription, I want to activate an "Explain Mode" for any AI-generated answer, so that I can receive a more detailed, human-like explanation of the topic from a virtual avatar.**

**Acceptance Criteria:**

-   Next to a standard text response, a button labeled "Explain with Avatar" is available to premium users.
-   Clicking the button transitions the UI to "Explain Mode," where an avatar (e.g., from D-ID) appears.
-   The avatar provides a spoken, more detailed explanation of the previous answer.
-   The system prompt for the avatar can be configured to adopt different personas (e.g., "Explain this from the perspective of a concerned client").
-   The user can have a follow-up conversation with the avatar within this mode.

---

## 3. Feature: Role Groups

### 3.1. High-Level Description

"Role Groups" is a critical feature for organizing and segregating access to different AI personas (roles). As Axiom.ai will serve diverse industries (e.g., healthcare, legal, finance), a company in one industry should not see the roles created for another. This feature introduces a hierarchical structure: Roles are organized into Groups, and users are assigned to a specific Group.

### 3.2. User Stories

**As a platform administrator, I want to create "Role Groups" (e.g., "Healthcare," "Tax Law," "Manufacturing"), so that I can organize different sets of AI personas by industry or function.**

**Acceptance Criteria:**

-   In the Admin Panel, there is a new section for "Manage Role Groups."
-   Admins can create, rename, and delete Role Groups.
-   When creating a new Role, the admin must assign it to a specific Role Group from a dropdown menu.

**As a platform administrator, I want to assign a specific Role Group to each user, so that they can only access the AI personas relevant to their industry.**

**Acceptance Criteria:**

-   In the "User Management" section of the Admin Panel, there is a new dropdown field for each user: "Assign Role Group."
-   When a user logs into the platform, they only see and have access to the Roles that belong to their assigned Role Group.
-   The user management system can be automated via an API, allowing an external e-commerce or sign-up platform to assign the correct Role Group upon user registration.

This structure is essential for the scalability and market segmentation of the Axiom.ai platform.