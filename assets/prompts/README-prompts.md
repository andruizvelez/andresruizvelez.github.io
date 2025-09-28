# Product Management AI Prompt Library

AI-assisted tools for **strategic thinking** and **practical execution** across the full product lifecycle.  
Each prompt is a **guided conversation** with AI (ChatGPT/Claude/Gemini) designed to build context progressively, teach as you go (via comment blocks), and produce **decision-ready artifacts** (canvases, briefs, plans, checklists).

---

## Table of Contents

- [Why this library](#why-this-library)
- [How these prompts work](#how-these-prompts-work)
- [Areas & Prompts](#areas--prompts)
  - [🧭 Product Discovery & Problem Framing](#-product-discovery--problem-framing)
  - [🌍 Market & Competitive Analysis](#-market--competitive-analysis)
  - [👤 User Definition & Journey Mapping](#-user-definition--journey-mapping)
  - [🎯 Strategy & Positioning](#-strategy--positioning)
  - [🛠 Requirements, Backlog & Execution](#-requirements-backlog--execution)
  - [🚀 Go-To-Market & Launch](#-go-to-market--launch)
  - [📈 Post-Launch & Iteration](#-post-launch--iteration)
  - [🧑‍🤝‍🧑 Stakeholder Alignment & Storytelling](#-stakeholder-alignment--storytelling)
- [How to use the prompts (step-by-step)](#how-to-use-the-prompts-step-by-step)
- [Recommended lifecycle workflow](#recommended-lifecycle-workflow)
- [Stage gates & handoffs](#stage-gates--handoffs)
- [Best practices](#best-practices)
- [FAQ](#faq)
- [Attribution & License](#attribution--license)

---

## Why this library

- **Context before content:** Prompts start by asking questions to avoid shallow outputs.
- **Framework-guided:** JTBD, Value Proposition Canvas, PESTEL, Five Forces, PR/FAQ, RICE, BDD, North Star, etc.
- **Decision-ready outputs:** PRDs, strategy summaries, canvases, interview guides, GTM plans, risk registers, experiment analyses.
- **Teaching layer:** Each `.md` has comment blocks explaining what the prompt does, when to use it, and how to run the conversation.

---

## How these prompts work

1. **Open a prompt file (.md)** and paste its content into your AI tool.  
2. **Answer the AI’s clarifying questions**—that’s how it builds high-quality context.  
3. **Iterate**: Ask the AI to refine, expand, or reformat outputs for your audience (exec, eng, design, sales).  
4. **Export & share** the generated artifacts (paste into your docs, tickets, briefs).

> Each prompt includes:
> - `## Description` – why it matters  
> - `## Usage Note` – prerequisites, when to use  
> - `## Instructions` – how the AI should guide the conversation  
> - A **structured template** for the final artifact

---

## Areas & Prompts

### 🧭 Product Discovery & Problem Framing
Understand users, problems, and opportunities.

- `problem-discovery-canvas.md` — Frame the **core problem** (JTBD + pains/gains) and produce a concise statement.
- `opportunity-solution-tree.md` — Map **outcomes → opportunities → solutions → assumptions** (Teresa Torres).
- `customer-interview-guide.md` — Turn hypotheses into a **non-leading interview script**.
- `jobs-to-be-done-analysis.md` — Clarify **functional/emotional/social jobs**, pains, and gains.
- `persona-hypothesis.md` — Create **proto-personas** with **assumptions to validate**.

**Use when:** Starting discovery, aligning on problem definition, planning research.

---

### 🌍 Market & Competitive Analysis
Build situational awareness and sharpen positioning.

- `pestel-analysis.md` — Macro forces that could **enable or threaten** your strategy.
- `porter-five-forces.md` — Competitive pressures and industry **profitability dynamics**.
- `competitor-landscape-map.md` — Compare competitors on **key axes**; find white space.
- `market-sizing-analysis.md` — TAM/SAM/SOM **with explicit assumptions**.
- `trend-scouting.md` — Identify **emerging trends** and potential impacts.

**Use when:** Sizing opportunities, preparing strategic reviews, or repositioning.

---

### 👤 User Definition & Journey Mapping
Deepen empathy, surface experience gaps.

- `proto-persona-profile.md` — Quick, **hypothesis-driven persona** to align the team.
- `user-archetype-canvas.md` — Multi-dimensional **archetype** (motivations, barriers, context).
- `customer-journey-map.md` — Stage-by-stage **goals, pains, opportunities**.
- `day-in-the-life.md` — Narrative to **uncover latent needs** in daily routines.
- `user-empathy-map.md` — What users **say/think/do/feel** about a scenario.

**Use when:** Designing experiences, prioritizing UX fixes, planning usability tests.

---

### 🎯 Strategy & Positioning
Align on where to play and how to win.

- `vision-narrative.md` — Story-driven **vision** that motivates and aligns.
- `positioning-statement.md` — Geoffrey Moore format: **For [who]… our product… unlike…**.
- `value-proposition-canvas.md` — Map **pains/gains** to **pain relievers/gain creators**.
- `north-star-metric-workshop.md` — Choose the **single metric** that represents user value.
- `strategic-bets-canvas.md` — Compare **initiatives** by upside, risk, investment, alignment.

**Use when:** Kicking off strategy cycles, clarifying differentiation, aligning execs.

---

### 🛠 Requirements, Backlog & Execution
Specify, slice, and prioritize work that matters.

- `user-story-template.md` — Stories in **Connextra** format with **BDD** acceptance criteria.
- `story-splitting-helper.md` — Decompose epics into **independent, valuable slices**.
- `acceptance-criteria-checklist.md` — Quality gate for **clear & testable** criteria.
- `prioritization-matrix.md` — **RICE/ICE** scoring or **2×2** value/effort grouping.
- `reverse-engineer-SRS-to-PRD.md` — Translate technical specs into a **stakeholder-friendly PRD**.

**Use when:** Grooming backlogs, planning sprints/releases, aligning eng & QA.

---

### 🚀 Go-To-Market & Launch
Make sure the world hears—and understands—the value.

- `press-release-and-faq.md` — Amazon-style **PR/FAQ** to validate narrative pre-build.
- `go-to-market-plan.md` — Segments, messages, channels, **timeline, metrics, risks**.
- `stakeholder-briefing.md` — One-page **exec alignment** doc.
- `launch-risk-register.md` — Proactive **risk/mitigation** planning.
- `sales-enablement-canvas.md` — Target customer, objections, **proof points**, collateral.

**Use when:** Planning launches, coordinating PMM, sales, support, and leadership.

---

### 📈 Post-Launch & Iteration
Learn fast, iterate smart.

- `experiment-analysis.md` — Hypothesis, setup, **results & significance**, decisions.
- `cohort-retention-analysis.md` — Detect **retention decay** patterns and shifts.
- `funnel-analysis-helper.md` — Quantify **drop-offs** and fix bottlenecks.
- `churn-analysis-prompt.md` — Diagnose churn drivers, propose **retention tactics**.
- `post-mortem-facilitation.md` — **Blameless** learning & concrete action items.

**Use when:** Running growth loops, measuring impact, prioritizing next bets.

---

### 🧑‍🤝‍🧑 Stakeholder Alignment & Storytelling
Win hearts, minds, and resources.

- `product-strategy-narrative.md` — Turn strategy into a **memorable story**.
- `storyboard-pitch.md` — Scene-by-scene **visual pitch** outline.
- `executive-summary-helper.md` — BLUF-style **exec updates**.
- `stakeholder-risk-mapping.md` — Map **influence × interest** and engagement plans.
- `vision-storytelling-prompt.md` — Vision as **analogy/hero’s journey**.

**Use when:** Socializing strategy, securing buy-in, and keeping leaders informed.

---

## How to use the prompts (step-by-step)

1. **Pick the right prompt for your current stage.** (See workflow below.)
2. **Open the `.md` file and paste it into your AI tool.**
3. **Answer the AI’s clarifying questions**—don’t skip this step.
4. **Request the artifact** (e.g., “Generate the journey map now”), then **iterate**:
   - “Tighten the executive summary to 5 bullets.”
   - “Add accessibility concerns and severity labels.”
   - “Reformat as a table for my deck.”
5. **Copy the output** into your docs or tickets. Save assumptions and open questions.
6. **Repeat** with the next prompt as you move through the lifecycle.

---

## Recommended lifecycle workflow

A pragmatic path from zero → launch → learning:

