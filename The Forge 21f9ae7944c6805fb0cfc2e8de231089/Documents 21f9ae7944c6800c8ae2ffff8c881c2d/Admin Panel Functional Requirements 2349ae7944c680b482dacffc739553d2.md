# Admin Panel Functional Requirements

Author: Muhammad Usman Khan, Bilal Khalid, Muhammad Irtaza, Nouman Javaid
Creation Date: August 8, 2025
Version: clarifying

**Summary of New Features**

This table summarizes the major feature additions and architectural changes described in this document, based on the expanded scope.

| Feature Area | Description of Added Features |
| --- | --- |
| **New Content Types** | Added several advanced interactive blocks: `Pinboard` for reflection, `Drag & Drop` exercises, `Matching with Images`, `Branching Scenarios`, `Process Designer`, and `Interactive Simulations`. |
| **Advanced Trigger System** | Replaced the simple trigger system with a powerful, rule-based engine. Admins can now create complex rules with multiple conditions (`IF`) and trigger multiple actions (`THEN`). |
| **Visual Path Logic Editor** | Introduced a new visual, map-based editor to design and visualize non-linear learning paths, showing how all content blocks connect. |
| **Dedicated 'Coach Klaus'** | Refactored the coach from a simple text pop-up into its own fully-configurable content block with options for format (video, avatar, text), purpose, and appearance. |
| **Content Versioning** | Added a new system for version control, allowing admins to create manual snapshots of a Match Day, view version history, and restore previous versions. |

# Admin Panel and UI Documentation

## 1. Introduction/Overview

This document outlines the design and user interface (UI) for both the content creation platform (admin experience) and the end-user platform (player experience). It also defines the scope for the initial design and development milestone.

## 2. Content Creation Platform (Admin Experience)

### 2.1. Login and Dashboard

**Login:**

- A secure login page with fields for username and password.
- "Forgot Password" functionality.
- Authentication will be handled via tokens.

**Dashboard:**

- Upon successful login, the admin is redirected to the main dashboard.
- The dashboard provides a high-level overview of the existing content.
- It will display a list of all created "Leagues."
- Each league in the list will be a clickable item that takes the admin to the "League Management" view for that specific league.
- A prominent "Create New League" button will be present on the dashboard.

**UI Mockup/Description:**

- **Login Page:** A clean, centered form with input fields for username and password, a "Login" button, and a "Forgot Password?" link.
- **Dashboard:** A top navigation bar with the platform's logo and a "Logout" button. The main content area will feature a heading "Leagues" followed by a list of leagues. Each list item will have the league name and "Edit" and "Delete" buttons. A large "+" or "Create New League" button will be at the top right of the list.

### 2.2. League Management

- From the dashboard, clicking on a league or the "Create New League" button will take the admin to the League Management page.
- **Creating a new league:**
    - The admin will be prompted to enter a "League Name."
    - Upon creation, the admin is taken to the "Match Day Management" view for this new league.
- **Editing an existing league:**
    - The admin can change the "League Name."
- **Deleting a league:**
    - A confirmation modal will appear to prevent accidental deletion. Deleting a league will also delete all associated "Match Days" and their content.

**UI Mockup/Description:**

- **League Management Page:** A simple form with a single input field for "League Name" and "Save" and "Cancel" buttons. If editing, the current name will be pre-filled.

### 2.3. Match Day Management

- This view is accessed by selecting a league from the dashboard.
- It displays a list of all "Match Days" within the selected league.
- Each match day in the list is a clickable item that takes the admin to the "Content Block Management" view for that specific match day.
- A "Create New Match Day" button will be available.

**UI Mockup/Description:**

- **Match Day Management Page:** Similar to the league dashboard, this page will have a heading with the league name (e.g., "League 1 - Match Days"). Below it will be a list of match days (e.g., "M1", "M2"). Each match day will have "Edit" and "Delete" buttons. A "Create New Match Day" button will be at the top right.

### 2.4. Content Block Management

- This is the core of the content creation process. It's a visual, block-based editor.
- The admin can add, edit, reorder, and delete content blocks for a specific match day.
- **Adding a Content Block:**
    - A "+" button will be available to add a new content block.
    - Clicking it will open a modal or a dropdown where the admin can select the type of content block to add:
        - Video
        - Audio File
        - PDF
        - Text Block
        - Single Choice Question
        - Multiple Choice Question
        - Matching Exercise
- **Editing a Content Block:**
    - Each block will have an "Edit" icon. Clicking it will open a configuration panel for that block.
    - **Video Block:**
        - **UI:** A field to paste a video URL (e.g., from a CDN or a video hosting service) or an upload button.
        - **Admin Input:** Video URL or file.
    - **Audio Block:**
        - **UI:** A field to paste an audio URL or an upload button.
        - **Admin Input:** Audio URL or file.
    - **PDF Block:**
        - **UI:** An upload button for the PDF file. A checkbox for "Allow Download."
        - **Admin Input:** PDF file, boolean for download.
    - **Text Block:**
        - **UI:** A rich text editor (WYSIWYG) to format text.
        - **Admin Input:** Formatted text.
    - **Single Choice Question Block:**
        - **UI:** A text field for the question, and a dynamic list of text fields for the answers. A radio button next to each answer to select the correct one.
        - **Admin Input:** Question text, list of answer texts, index of the correct answer.
    - **Multiple Choice Question Block:**
        - **UI:** A text field for the question, and a dynamic list of text fields for the answers. A checkbox next to each answer to select the correct ones.
        - **Admin Input:** Question text, list of answer texts, list of indices of correct answers.
    - **Matching Exercise Block:**
        - **UI:** Two columns of text fields. The admin fills in the matching pairs.
        - **Admin Input:** List of pairs of strings.
- **Reordering Content Blocks:**
    - The admin can drag and drop the content blocks to change their sequence.
- **Deleting a Content Block:**
    - Each block will have a "Delete" icon. A confirmation modal will appear.
- **Input Validation and Error Handling:**
    - The system will provide real-time validation to prevent errors.
    - **Required Fields:** All essential fields (e.g., Question text, Video URL) will be marked as required. The "Save" button for the block will be disabled until all required fields are filled.
    - **URL Validation:** Fields for video or audio URLs will validate that the input is a properly formatted URL. An error message like "Please enter a valid URL" will appear otherwise.
    - **Quiz Validation:** For Single and Multiple Choice questions, the system will ensure that at least one correct answer is selected before the block can be saved.
    - **Error Display:** Errors will be clearly displayed next to the corresponding field with a descriptive message in red text. The border of the invalid field will also turn red.

**UI Mockup/Description:**

- **Content Block Management Page:** A two-column layout. The left column shows a live preview of the match day content as the user would see it. The right column is the editor, with the list of content blocks. Each block is a card with its type, a summary of its content, and "Edit" and "Delete" buttons. A large "+" button is at the bottom of the list to add new blocks. If a block has an error, a red error icon will appear on the card.

### 2.5. CTA and Trigger System

- After each content block, there is a mandatory "CTA" (Call to Action) block.
- **Adding/Editing a CTA:**
    - The admin can edit the CTA associated with each content block.
    - **UI:** A text field for the "CTA Label" (e.g., "Continue," "Next Step"). A dropdown menu for the "Trigger."
    - **Admin Input:** CTA Label (string), Trigger (from a predefined list).
- **Predefined Triggers:**
    - **Proceed to next content block:** The default behavior.
    - **Trigger 'Coach' intervention/message:**
        - **UI:** If this trigger is selected, a text area appears for the admin to enter the coach's message.
        - **Admin Input:** Coach message (string).
    - **Play a transition video:**
        - **UI:** If this trigger is selected, a field appears to paste a video URL or an upload button for the transition video.
        - **Admin Input:** Transition video URL or file.

**UI Mockup/Description:**

- **CTA Editor:** This can be part of the content block's edit panel or a separate block itself. It will have a field for the button text and a dropdown for the trigger. Depending on the trigger selected, additional fields will dynamically appear below it.

### 2.6. User Roles and Permissions

To ensure content quality and system integrity, the admin panel will support a role-based access control (RBAC) system. Initially, two roles will be defined:

**1. Super Admin:**

- **Permissions:** Has unrestricted access to all features of the admin panel.
- **Responsibilities:**
    - Managing user accounts (inviting, promoting, and deleting other Admins and Content Creators).
    - Creating, editing, and deleting Leagues.
    - Overseeing all content and having the final say on publishing.
    - Accessing platform-wide settings and analytics (future feature).

**2. Content Creator:**

- **Permissions:** Has restricted access focused solely on content creation and management within assigned leagues.
- **Responsibilities:**
    - Creating and managing Match Days within the Leagues they have been given access to.
    - Adding, editing, reordering, and deleting Content Blocks within their assigned Match Days.
    - Uploading assets (videos, PDFs, etc.) to the Media Library for their content.
- **Restrictions:**
    - Cannot create or delete Leagues.
    - Cannot manage user accounts.
    - Cannot publish a Match Day directly; must submit it for review by a Super Admin.

**UI Mockup/Description:**

- A "User Management" tab will be visible only to Super Admins. This area will list all users, their roles, and provide options to "Invite New User," "Edit Role," or "Delete User."

### 2.7. Media Library

To streamline asset management and reuse, the admin panel will include a centralized Media Library. Instead of uploading files directly into a content block every time, admins can manage all assets in one place.

- **Functionality:**
    - **Centralized Upload:** A dedicated page where admins can upload all necessary files (videos, audio clips, PDFs, background images).
    - **Asset Organization:** Assets can be viewed as a grid or list. Admins can filter by file type (e.g., "Video," "Image") and use a search bar to find files by name.
    - **Asset Details:** Clicking on an asset will show its details, such as file name, type, size, upload date, and a preview if applicable.
    - **Delete Assets:** Admins can delete assets from the library. A warning will be shown if the asset is currently being used in any Match Day content.
- **Integration with Content Blocks:**
    - When an admin wants to add a video, audio file, PDF, or background image, the UI will present two options: "Upload New" or "Choose from Library."
    - "Choose from Library" will open a modal view of the Media Library, allowing the admin to select an existing asset.

**UI Mockup/Description:**

- **Media Library Page:** A full-page view with a prominent "Upload Asset" button. The main area is a grid of thumbnails for each asset. A sidebar or top bar contains filtering and search tools.
- **Selection Modal:** When choosing from the library, a compact version of the library page will appear in a modal window, allowing for quick selection without leaving the content block editor.

### 2.8. Publishing Workflow

Content will not be instantly live upon creation. A deliberate publishing workflow ensures that content is reviewed and approved before it is visible to end-users.

- **Status States:** Both Leagues and Match Days will have one of the following statuses:
    - **Draft:** The default state for new content. Content in this state is only visible in the admin panel and can be freely edited.
    - **Pending Review:** (For the Content Creator role) The Content Creator marks a Match Day as ready for review. It is locked for editing and a notification is sent to Super Admins.
    - **Published:** The content is live and visible to end-users. A Super Admin must approve and publish the content. To make further changes, a published item must be reverted to Draft (which will unpublish it).
- **The Workflow:**
    1. A **Content Creator** or **Super Admin** creates a Match Day. It is in **Draft** state.
    2. Once complete, a **Content Creator** submits it for review, changing the status to **Pending Review**. A **Super Admin** can directly publish their own content.
    3. A **Super Admin** reviews the content. They can either:
        - **Approve & Publish:** The status changes to **Published**.
        - **Reject:** The status reverts to **Draft**, and the Super Admin can leave feedback notes for the Content Creator.
- **Unpublishing:**
    - A Super Admin can unpublish a League or Match Day at any time by reverting it to **Draft**. This immediately removes it from the user-facing application.

**UI Mockup/Description:**

- In the League and Match Day management lists, each item will have a status indicator (e.g., a colored dot or a badge: "Draft," "Pending Review," "Published").
- For Super Admins, the "Save" button on a Match Day will have a dropdown option: "Save as Draft" or "Publish."
- For Content Creators, the button will be "Save as Draft" or "Submit for Review."

## 3. User-Facing Design (Player Experience)

### 3.1. Navigation Flow

The end-user will navigate through a structured, visually distinct environment.

1. **Main Entry ("Stadium"):** The user first lands in a main area where they can see and select from different "Leagues" (e.g., League 1, League 2, League 3).
2. **League View:** After selecting a league, the user sees all the "Match Days" within it (e.g., M1, M2, M3...).
3. **Match Day:** The user selects a match day to begin the lesson. Completed match days will be visually marked (e.g., grayed out).

### 3.2. Visual Design & Technical Constraints

- **Backgrounds:** Each of the 10 match days will have a unique background image, which will be uploaded by the admin.
- **Fixed Layout:** The placement of components (the video player, text boxes, buttons) is **static and will not change**. While the background image can be different for each day, the components will always appear in the same position on the screen.
- **Standard Components:** Buttons and other UI elements will be standard. Custom-shaped buttons (e.g., a trophy) are not in scope.

<aside>

## 4. Scope for Initial Milestone (First 8 Working Days)

The first development phase will be a fixed-cost project to deliver the foundational elements.

### 4.1. Deliverables

1. **Design of the First 10 Match Days:** A complete design for the initial 10-day course content provided for League 1.
2. **Core Navigation & Dashboard:** The design of the user's main navigation flow, including the "stadium" (league selection) and match day selection screens. This serves as the user's main dashboard.

### 4.2. Asset Requirements

The design will require approximately 10-30 images to build out the environment for the first league.

## 5. Technical Specifications & Exclusions

### 5.1. Video Generation

The development team is **not** responsible for creating or editing video content.

### 5.2. Client Responsibility

The client must provide all video files in a lightweight format (e.g., MP4 or WebM) and a standard resolution (1920x1080p).

</aside>