# The Learner Struggles (Quiz Fail)

Acceptance Criteria: [ ] System detects when a learner fails a quiz (below passing threshold)
[ ] System captures which specific questions were answered incorrectly
[ ] System maps failed questions to their corresponding tactical concepts (conceptIds)
[ ] System records the learner's incorrect answers for analysis
[ ] System tracks patterns of failure across multiple quiz attempts
[ ] System stores failure data in a format accessible to the AI Coach
[ ] System provides immediate feedback to learner about failed areas
[ ] System prevents learner from proceeding until remedial action is taken
[ ] System logs failure events with timestamps for analytics
[ ] System identifies prerequisite concepts that may need reinforcement
[ ] System triggers the AI Coach intervention workflow automatically
Critical Questions & Ambiguities: 1. What constitutes a 'quiz fail' - specific percentage threshold or other criteria?
2. How granular should the concept mapping be for failed questions?
3. Should the system allow multiple attempts before triggering AI intervention?
4. What data structure will store the relationship between questions and concepts?
5. How will the system handle partial credit or nuanced wrong answers?
6. Should failure patterns be analyzed across individual learners or cohorts?
7. What privacy considerations apply to storing detailed failure data?
8. How will the system differentiate between careless mistakes and knowledge gaps?
9. Should there be different failure thresholds for different types of content?
10. How will the system handle technical failures vs. knowledge-based failures?
Epic: Untitled (https://www.notion.so/21ba91a7eae6813a9349e9a9bd340ed2?pvs=21)
Module: Learning
Status: Backlog
User Story: As a Learner, when I fail a quiz, I want the system to capture detailed information about my mistakes so that the AI Coach can provide targeted interventions and personalized learning recommendations.