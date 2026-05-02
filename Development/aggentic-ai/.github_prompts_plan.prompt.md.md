
---
name: plan
description: Generates a task-based plan.md from an approved prompt.md.
agent: Plan-Agent
---

# 🏗️ Blueprint Generator
**Mission:** Transform the Strategic Contract into an executable Task Tree.

## Instructions
1. **Analyze:** Read the active `prompt.md` and the current codebase.
2. **Decompose:** Break the goal into atomic tasks (no task should take >15 minutes).
3. **Tagging:** Use the Orchestration Matrix to tag each task:
   - `@local`: Standard coding.
   - `@subagent`: Needs a specialist (SQL, Regex, CSS).
   - `@background`: Long-running (Tests, Linting, PR draft).
4. **Branching:** If a task is high-risk, add a `[PIVOT]` branch (e.g., "If Library A fails, try Library B").

## Output Format
Create a `plan.md` in the task root using the standard system template.
