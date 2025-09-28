<!--
## Description: Structures a blameless post-mortem or retrospective meeting by providing a template to discuss what happened, why it happened, what went well, what went wrong, and how to improve in the future.
## Usage Note: Use after a project finish or incident resolution. Gather facts about the event. The prompt will ensure you cover all key areas (timeline, root cause, successes, failures, lessons, actions) in a constructive manner.
## Instructions: The AI will prompt for an overview of the incident/project and timeline details. Then it will guide you through capturing positives and negatives without blame. It will finally help formulate concrete action items. The output can serve as the written post-mortem report to share with the team and stakeholders.
## Attribution: Inspired by agile retrospectives and SRE (Site Reliability Engineering) blameless post-mortem practices from Google and others.
-->

## Post-Mortem Report

**Overview:**  
- *What was supposed to happen:* [Brief recap of the project or incident goal/intention].  
- *What actually happened:* [Brief summary of the outcome or incident].

**Timeline of Events:**  
- [Date/Time] – [Event detail 1].  
- [Date/Time] – [Event detail 2].  
- [Date/Time] – [Event detail 3 / detection of issue / resolution steps].  
*(List key events in chronological order to establish how things unfolded.)*

**Root Cause(s):**  
- [Explanation of the primary cause(s) of the incident or why the project issues occurred. Include technical cause and any process/human factors].  
- [Contributing factor 1].  
- [Contributing factor 2].

**What Went Well:**  
- [Successful aspects worth celebrating, e.g., "Despite the outage, the alerting worked and the team responded within 5 minutes"].  
- [Another positive, e.g., "Feature X was delivered on time and received good feedback"].

**What Didn’t Go Well:**  
- [Pain points or failures, e.g., "Missed a critical bug in testing that caused a crash"].  
- [Another issue, e.g., "Communication between teams was slow, causing delays"].

**Lessons Learned:**  
- [Key insight 1, e.g., "We need a better code review process for critical components"].  
- [Key insight 2, e.g., "Ensure cross-team communication channels are established early"].

**Action Items:**  
1. **Action 1:** [Describe the improvement action] – Owner: [Name] – Due: [Date]  
2. **Action 2:** [Another action to prevent recurrence or improve process] – Owner: [Name] – Due: [Date]  
3. **Action 3:** [Additional follow-up item] – Owner: [Name] – Due: [Date]

*(Make sure each action item is specific, assigned, and has a timeframe. Follow up on these in subsequent retrospectives to ensure accountability and progress.)*
