# Llama model deployment and GDPR compliance planning with cloud services strategy

date: June 30, 2025

### LLM Platform Changes & Strategy

- Aleph Alpha closed their LLM service
- Plan B: Switch to Meta’s Llama model (version 3.3)
- Key advantages of Llama:
    - Open source implementation
    - Self-hosting capabilities
    - More cost-effective (server costs only, no API fees)
    - Full control over deployment and usage

### Infrastructure & Compliance Requirements

- Cloud Services Strategy:
    - AWS Sagemaker for LLM deployment (handles GDPR compliance)
    - Hetzner (German provider) for middleware
    - Frankfurt-based AWS deployment for better D-ID pricing
- GDPR & AI Act Compliance:
    - Model must not learn from interactions
    - Deployment must be region-specific
    - Super-admin level logging of interactions
    - Only Sasha and technical team will have access to logs

### Confidence Scoring System

- Multiple factors determine user confidence score:
    - Quiz performance (e.g., 10/10 vs 2/10)
    - Video lesson replay frequency
    - Speech pattern analysis (speed, word count)
    - Trigger words in questions
- Score thresholds:
    - Below 30%: Triggers motivation/reflective coaching
    - Above 85%: Triggers positive reinforcement
- Score remains invisible to users
- System adjusts coaching approach based on confidence levels

### Document Processing & Analysis

- Users can upload documents at fixed points in learning journey
- Process includes:
    - Document analysis
    - Pattern identification
    - Solution suggestions
- Planning to implement:
    - PDF checklist generation
    - Customized feedback documents
    - Real-life case applications

### Next Steps

- Meeting scheduled for tomorrow at:
    - 9:00 AM German time
    - 12:00 PM Pakistan time
- New document coming in next 30 minutes
- Will discuss:
    - UI/UX details
    - User journey specifics
    - Analysis area requirements

---

Chat with meeting transcript: [https://notes.granola.ai/d/17aec4e7-0f4d-4ad9-bf68-f64c23ebb25b](https://notes.granola.ai/d/17aec4e7-0f4d-4ad9-bf68-f64c23ebb25b)