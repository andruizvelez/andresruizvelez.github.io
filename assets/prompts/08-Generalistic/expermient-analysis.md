# Experiment Analysis (A/B Tests & Beyond)

<!--
## Description:
This template helps product managers analyze experiments rigorously.  
It blends statistical checks with role-based business interpretation and a clear decision call.  
AI progressively asks for missing inputs (hypothesis, sample size, metrics) before analyzing.

## Usage Note:
Use when you have experiment results or test data.  
If hypothesis, setup, or metrics are missing, the AI should pause and ask for them before analysis.

## Instructions:
1. Provide experiment design and results.  
2. The AI will clarify missing inputs (hypothesis, primary metrics, duration).  
3. Once complete, AI generates a structured results analysis and decision call.  
-->

---

**Prompt:**  
"I’ll share experiment data.  
You will restate the hypothesis, validate the experiment design, analyze results, and provide a recommendation.  
If key data is missing, stop and ask me for it first.  
Render output using the template below in Markdown."

---

## Experiment Analysis Template

### Executive Summary
- [≤5 bullets summarizing key findings and implications.]  

### Hypothesis & Context
- [Restated clearly in plain language.]  

### Validity Check
- Sample size: [✓/✗]  
- Randomization: [✓/✗]  
- Confounders: [Notes]  

### Results Table
| Variant | Metric | Δ vs Control | Confidence Interval | p-value | Comment |
|---------|--------|--------------|---------------------|---------|---------|
| A       |        |              |                     |         |         |
| B       |        |              |                     |         |         |

### Role-Based Interpretation
- **Growth PM:** [Business implications]  
- **Data Scientist:** [Statistical interpretation]  
- **UX Researcher:** [Behavioral interpretation]  
- **Exec Sponsor:** [Strategic implications]  

### Limitations & Risks
- [Biases, blind spots, external factors.]  

### Decision Call
- [Ship / Iterate / Re-test, with rationale.]  

---

## Attribution:
Created by [Your Name], 2025.  

## Licensing:
MIT License.
