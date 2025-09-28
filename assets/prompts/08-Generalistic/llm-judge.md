# Large Language Model (LLM) Judge

<!--
## Description:
This template guides AI to evaluate multiple LLM outputs for quality, accuracy, completeness, and audience fit.  
It uses role-based perspectives and a structured scorecard.  
AI must not evaluate until both the original prompt and responses are provided.

## Usage Note:
Use this template when comparing responses from one or more AI systems.  
If either the prompt or responses are missing, the AI should prompt you to provide them first.

## Instructions:
1. Provide the original prompt and multiple AI responses.  
2. The AI will clarify the intended audience and evaluation goal.  
3. The AI will then generate a structured comparison and improvement guidance.  
-->

---

**Prompt:**  
"I’ll provide an original prompt and multiple AI responses.  
You will evaluate them step by step, beginning with clarifying questions about the audience and evaluation criteria.  
Then generate a structured assessment using the template below.  
If inputs are incomplete, stop and ask me for them first.  
Render output in Markdown."

---

## LLM Judge Template

### Comparison Table
| Response | Accuracy (0–5) | Completeness (0–5) | Depth (0–5) | Clarity (0–5) | Style Fit (0–5) | Overall (0–10) | Verdict |
|----------|----------------|--------------------|-------------|---------------|-----------------|----------------|---------|
| R1       |                |                    |             |               |                 |                |         |
| R2       |                |                    |             |               |                 |                |         |

### Evaluator Notes
- **Educator Perspective:** …  
- **Researcher Perspective:** …  
- **Writer Perspective:** …  
- **Domain Expert Perspective:** …  

### Ranking
- Best: [Response ID]  
- Weakest: [Response ID]  

### Improvement Playbook
- [3 concrete recommendations to strengthen weaker responses.]  

---

## Attribution:
Created by [Your Name], 2025.  

## Licensing:
MIT License.
