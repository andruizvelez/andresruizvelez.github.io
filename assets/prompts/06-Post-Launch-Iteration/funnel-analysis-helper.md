<!--
## Description: Assists in analyzing a conversion or onboarding funnel by calculating conversion rates at each step and identifying where the biggest drop-offs occur and why.
## Usage Note: Use when you have data on how users move through a series of steps (e.g., visit -> sign-up -> activate -> purchase). Share the number of users at each step. The prompt will compute drop-off rates and ask questions to probe reasons behind them.
## Instructions: The AI will prompt you to list each stage in the funnel and how many users progress. Then it will highlight where conversion sharply falls and suggest possible causes and fixes for those stages. The output is a structured breakdown of the funnel with insights, which you can use to prioritize UX improvements or experiments.
## Attribution: Informed by funnel analysis techniques from growth marketing and UX optimization (e.g., AARRR metrics and CRO best practices).
-->

## Funnel Analysis

**Funnel Stages & Conversion:**  
1. **Stage 1: [Name]** – [Total users entering this stage = A]  
2. **Stage 2: [Name]** – [Users here = B] – Conversion from Stage 1: **[(B/A*100).toFixed(1)%]**  
3. **Stage 3: [Name]** – [Users here = C] – Conversion from Stage 2: **[(C/B*100).toFixed(1)%]**  
4. **Stage 4: [Name]** – [Users here = D] – Conversion from Stage 3: **[(D/C*100).toFixed(1)%]**  
*(... continue for all steps ...)*

**Drop-Off Points:**  
- **Biggest Drop:** Between **Stage X and Stage Y** – only **Z%** of users continue.  
  - *Potential Causes:* [List reasons, e.g., "Page Y is too confusing or has too many form fields", "Users might not see the call-to-action"].  
  - *Suggestions:* [List improvements, e.g., "Simplify the form", "Add progress indicator", "Improve loading time or design"].

- **Next Notable Drop:** Between **Stage Y and Stage Z** – **Z2%** conversion.  
  - *Potential Causes:* [Reasons for drop here, e.g., "Many users window-shop but don’t add to cart due to pricing or unclear value"].  
  - *Suggestions:* [E.g., "Display customer reviews or a discount at this stage to encourage progression"].

**Overall Funnel Conversion:**  
- From **Stage 1 to Final Stage**, the overall conversion is **[(final/initial*100).toFixed(1)%]**.  
- This indicates **[e.g., a bottleneck at stage X; once users reach stage Y, conversion is strong]** or **[the funnel is fairly efficient except at the beginning]**.

**Recommendations:**  
- [Address the biggest drop-off first with targeted UX fixes or experiments].  
- [Consider qualitative research (user testing or surveys) at problematic stages to uncover why users drop].  
- [Set up tracking or A/B tests for any changes to measure improvement in conversion rates].

*(By iteratively improving the worst-performing stage and then moving to the next, you can significantly increase overall funnel conversion.)*
