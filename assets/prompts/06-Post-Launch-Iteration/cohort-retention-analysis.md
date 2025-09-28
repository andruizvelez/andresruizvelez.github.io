<!--
## Description: Breaks down user retention by cohort, highlighting how user retention changes over time and identifying patterns or anomalies in different user groups.
## Usage Note: Use when you have retention data (e.g., percentage of users retained each week or month for each signup cohort). Provide whatever data or observations you have; the prompt will help summarize and interpret it.
## Instructions: The AI will ask for the structure of your cohorts and any retention numbers. It will then analyze trends (like decay rates, plateau points) and compare cohorts. The output will call out notable differences between cohorts and any hypotheses about why (like a feature launch or different acquisition source). Use this to pinpoint retention issues or successes to investigate further.
## Attribution: Utilizes the cohort analysis approach popular in product analytics (e.g., case studies from Mixpanel/Amplitude on cohort retention).
-->

## Cohort Retention Analysis

**Cohort Definition:**  
- [Explain how cohorts are defined, e.g., "Users grouped by the month they first signed up"].

**Retention Data Snapshot:**  
*(Example format: Cohort vs retention % over time)*  
- **Jan 2025 Cohort:** Day 0 = 100%, Day 7 = 40%, Day 30 = 25%, Day 90 = 15%  
- **Feb 2025 Cohort:** Day 0 = 100%, Day 7 = 35%, Day 30 = 20%, Day 90 = 12%  
- **Mar 2025 Cohort:** Day 0 = 100%, Day 7 = 42%, Day 30 = 28%, Day 90 = 18%  
*(Use whatever interval makes sense, e.g., week 1, week 4, week 12 retention for monthly cohorts.)*

**Trends & Observations:**  
- Overall, retention appears to **[e.g., drop sharply in the first week and then level off by Day 30 around 20%]**.  
- The **[Mar 2025]** cohort is retaining better than earlier ones at Day 30 (28% vs ~22%), which may indicate improvements (perhaps a product update in March helped onboarding).  
- **Cohort Comparison:** [Highlight any cohort that stands out: e.g., "Users from Jan have slightly better long-term retention than Feb, possibly due to feature X introduced in January."].  
- **Plateau/Churn Point:** [E.g., "Most cohorts plateau around 15% by Day 90, meaning those who stay ~3 months tend to continue using afterwards"].

**Possible Explanations:**  
- [If a cohort performed better, note what changed that month: marketing channel differences, product changes, seasonality].  
- [If a cohort performed worse, hypothesize reasons: e.g., "February cohort had a bug in onboarding affecting retention."].

**Actionable Insights:**  
- [Identify opportunities: e.g., "Focus on improving Week 1 experience, as majority of churn happens then"].  
- [Consider reaching out to or surveying a specific cohort: e.g., "March cohort responded well to new tutorial, apply this to all users"].  
- [Track future cohorts to see if retention continues improving with recent changes].

*(Use this analysis to drive experiments aimed at improving early retention or sustaining long-term engagement.)*
