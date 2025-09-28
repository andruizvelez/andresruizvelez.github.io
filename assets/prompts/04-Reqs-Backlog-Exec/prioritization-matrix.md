<!--
## Description: Helps prioritize a list of initiatives or features by applying a scoring model (e.g., RICE, ICE) or a 2x2 matrix, to identify high-impact, low-effort items.
## Usage Note: Use when you have multiple items competing for attention. Provide the items and any scoring criteria values (impact, effort, etc). The prompt will calculate scores or categorize items for prioritization.
## Instructions: The AI will ask which prioritization framework you want (e.g., RICE or ICE) and the necessary inputs for each item. Then it will output a ranked list or matrix grouping, complete with scores and rationale. Use this to facilitate discussion on what to do next. Ensure you have estimated values for impact, effort, etc., even if rough.
## Attribution: Utilizes popular prioritization frameworks like ICE (from growth hacking) and RICE (from Intercom), as well as the classic effort vs. value matrix.
-->

## Prioritization Matrix

*(Example below uses RICE scoring for illustration. Adjust if using ICE or others.)*

**Criteria Definitions:**  
- **Reach:** [Number of customers or frequency of impact in a given time period].  
- **Impact:** [Estimated impact per customer (e.g., 3 = high, 1 = low impact on user satisfaction or key metric)].  
- **Confidence:** [Confidence in estimates (100% = high confidence, lower if assumptions)].  
- **Effort:** [Effort to implement (in person-weeks or relative size; lower means easier)].

**Item Scores:**  

- **Feature/Initiative A** – Reach: [#], Impact: [#], Confidence: [#%], Effort: [#]  
  - **RICE Score:** [ (Reach * Impact * Confidence) / Effort ]  
  - **Notes:** [Brief justification or any assumption for A].

- **Feature/Initiative B** – Reach: [#], Impact: [#], Confidence: [#%], Effort: [#]  
  - **RICE Score:** [calculated value]  
  - **Notes:** [Brief reasoning for B].

- **Feature/Initiative C** – Reach: [#], Impact: [#], Confidence: [#%], Effort: [#]  
  - **RICE Score:** [value]  
  - **Notes:** [Any caveats or factors for C].

**Prioritized List:**  
1. [Feature with highest score or priority] – [mention why (e.g., "high impact, low effort")].  
2. [Next feature] – [reason].  
3. [Next...] – [...].

*(If using a 2x2 matrix instead: categorize each item as High/Low Impact vs High/Low Effort and list which fall into “Quick Wins” (High Impact, Low Effort), “Big Bets” (High Impact, High Effort), etc.)*
