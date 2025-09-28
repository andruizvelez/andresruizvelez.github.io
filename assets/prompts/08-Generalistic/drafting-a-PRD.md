# Drafting a Product Requirements Document (PRD)

<!--
## Description:
This prompt guides AI in facilitating a structured conversation to generate a usable PRD. 
It balances business goals, user needs, technical feasibility, and design considerations. 
AI progressively asks for missing context (personas, metrics, risks) before drafting, ensuring quality.  

## Usage Note:
Run this session after you have:  
- A product idea or problem statement  
- Some knowledge of target users and business goals  
If context is thin, AI should *not draft prematurely*. Instead, it will prompt you to fill in gaps.

## Instructions:
1. Start the session with your idea/problem.  
2. AI will progressively ask you questions to clarify personas, goals, success metrics, and constraints.  
3. Once context is sufficient, AI drafts a structured PRD.  
4. You iterate by asking AI to expand or refine sections.  
-->

---

**Prompt:**  
"Let’s create a PRD together.  
First, I’ll share the product idea or problem space. You will guide me step by step to fill in the necessary context.  
Once we have enough, you’ll generate a structured PRD using the template below.  
If at any point context is missing, stop and ask me targeted questions instead of guessing."

---

## PRD Conversation Template

1. **Kickoff Questions (AI → PM):**  
   - Who are the primary users and their jobs-to-be-done?  
   - What business goals does this initiative serve?  
   - What assumptions or constraints should we track?  
   - What would success look like in measurable terms?  

2. **Context Building (progressive):**  
   - Personas & JTBD  
   - Success metrics & KPIs  
   - Technical or business constraints  
   - Dependencies and risks  

3. **Output PRD (AI Draft in Markdown):**

```markdown
### Executive Summary
[Concise 1–2 paragraph overview.]

### Problem Statement & Why Now
[Persona-driven problem definition.]

### Goals & Non-Goals
- Goals: [SMART, prioritized]  
- Non-Goals: [Out of scope]  

### Personas & JTBD
- Persona A: …  
- Persona B: …  

### User Journeys
[Table of steps, pain points, desired outcomes.]

### Requirements
- Functional (Must/Should/Could)  
- Technical  
- UX/Accessibility  

### Dependencies & Risks
- [Enumerated]  

### KPIs & Success Metrics
- Leading indicators: …  
- Lagging indicators: …  

### Open Questions
- [Outstanding decisions or tradeoffs]
