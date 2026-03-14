


Yes, exactly! My mistake for jumping straight into "machine-readable" mode. We need a Master System Manual—a living document for you that explains the philosophy, the "why," and how this system evolves as we ingest more knowledge.
Think of this as the Meta-Document. It tracks the "The System" as a concept, while system.md will eventually just be the instruction manual for the AI.
Here is the structured human-centric version. We can keep this "pinned" and update it every time we read a new article or refine a thought.
📘 The System: Human Master Manual (v1.0)
Goal: To build a reliable, high-reasoning development workflow using Markdown and Agentic Primitives.
🏗️ 1. The Core Philosophy
The system is built on Context Engineering rather than just "chatting." We treat documentation as Executable State.
 * Immutable Contracts: We don't change the goal mid-session (prompt.md).
 * Journaled State: The AI must keep a diary (handoff.md) so the "why" behind every change is never lost.
 * Compound Intelligence: We "promote" knowledge. If the AI learns something hard in one PR, that lesson must move to the global DNA (instructions.md) for the next PR.
📂 2. Component Breakdown
This section tracks what each piece of the system actually DOES for you.
The Strategic Layer (Preparation)
 * Research Phase: The "messy" chat where we clear up ambiguity.
 * prompt.md (The Contract): The single most important file. It defines the goal so the AI can't drift.
 * plan.md (The Blueprint): The task list. This is where the AI proves it understands the path before it touches code.
The Tactical Layer (Execution)
 * handoff.md (The Live Diary): This replaces the "I forgot what I was doing" problem. It tracks successes and failures in real-time.
 * test.md (The Scorecard): Proof of work. No task is "done" until it's verified here.
The Continuity Layer (Maintenance)
 * instructions.md (Global Guardrails): The permanent rules for the repo.
 * Post-Mortem Promotion: The process of moving "Handoff" lessons into "Instructions."
🛠️ 3. The Implementation Roadmap
This is our "To-Do" list for building the system based on our research.
| Status | Feature | Source | Note |
|---|---|---|---|
| ✅ | Immutable Prompts | User Intent | Prevents scope creep. |
| ✅ | Context Compaction | Anthropic | Summarizing handoffs to save tokens. |
| ⏳ | Auto-Commit Hooks | GitHub Blog | Making the AI commit after every task. |
| ⏳ | Backtrack Protocol | User Intent | How to "Undo" a failing path. |
| ⏳ | MCP Integration | GitHub Blog | Giving the AI tools (Git, Terminal, etc). |
| ⏳ | Skills Library | System Design | On-demand "Expertise" modules. |
📓 4. "The System" Evolution Log
This tracks what we've added and where it came from.
 * Feb 2024: Initial Concept. Focus on prompt.md as an immutable contract.
 * Article 1 (GitHub): Added "Agentic Primitives" and the idea of Natural Language as Code. Added the CLI/Runtime distinction.
 * Article 2 (Anthropic): Added "Context Engineering" and the concept of keeping the AI at the "Right Altitude." Integrated the "Handoff" logic.
How we use this:
 * Every time you give me a new URL, I will read it and ask: "Does this change a Component, add a Feature to the Roadmap, or refine our Evolution Log?"
 * I will provide an updated version of this Human Manual.
 * Eventually, we will "Export" the final technical instructions into your system.md file.
Next Step: Does this "Human Manual" structure feel like a better way to track our progress? If so, I’m ready for the next article or for us to dive deeper into one of the "Roadmap" items.
That is a brilliant addition. Mapping "Who does what" clarifies the handoff points and prevents "Agent Identity Crisis"—where a coding agent tries to re-plan the whole project because it doesn't realize a "Plan Agent" already did that work.
In the GitHub article, they call these "Agentic Primitives" or "Chat Modes" (like .chatmode.md), but for your manual, we should treat them as Roles.
1. The Agent/Role Mapping
Here is how the "Who" maps to the "What" in your system:
| File / Task | Responsible Agent | Logic / Reasoning |
|---|---|---|
| Ambiguous AC / Research | Ask-Agent (Generic) | High-level "stew" phase. Talking to stakeholders and exploring the codebase. |
| prompt.md Creation | The Architect (Custom) | Distills the "stew" into the final immutable contract. Needs to be more rigid and critical than a standard chat. |
| plan.md Creation | Plan-Agent (Built-in) | Breaks the contract into atomic steps. Good at logic, bad at deep code context. |
| Implementation / handoff.md | Agent-Agent (Built-in) | The "Workhorse." High context, high editing capability. Maintains the "Live Diary." |
| test.md / Verification | Agent-Agent (Built-in) | Usually handles this well, but may need a "Testing" persona for edge cases. |
| pull-request.md | Review-Agent (Custom) | Your most valued agent. Summarizes the work and critiques it before the human sees it. |
| Post-Mortem / Promotion | The Architect (Custom) | Final scan to promote lessons to instructions.md. |
2. Do you need a "Prompt-Agent"?
Yes. While the built-in "Ask" agent is great for brainstorming, it is often too "agreeable."
A Custom Architect Agent (for prompt.md) would be programmed to:
 * Interrogate the AC: Ask you, "What happens if the user is offline?" or "Is this scalable?"
 * Enforce Constraints: Ensure the prompt.md follows your specific template (Failure/Recovery protocols, etc.).
 * Guard the Contract: It acts as the "Gatekeeper" before you move into the expensive implementation phase.
3. What about a "Testing Agent"?
If the standard Agent-Agent is working for you, keep it. However, a Testing-Agent becomes useful when you want a "Skeptic."
 * The Agent-Agent is an Optimist (it wants to finish the task).
 * A Testing-Agent is a Pessimist (it wants to break your code).
 * Recommendation: Use the built-in agent for writing the tests, but call your custom Review-Agent to validate if those tests are actually sufficient.
4. Updated Master System Manual (v1.1)
Adding the "Agent/Role" column to the Core Architecture.
🏗️ 2. Component & Agent Mapping
This section tracks what each piece of the system does and who is responsible.
| Component | File | Responsible Agent | Purpose |
|---|---|---|---|
| Global Rules | instructions.md | The Architect | Managing long-term memory/DNA. |
| The Contract | prompt.md | The Architect (Custom) | Turning messy AC into an immutable blueprint. |
| The Blueprint | plan.md | Plan-Agent (Built-in) | The logical task breakdown. |
| The Live Diary | handoff.md | Agent-Agent (Built-in) | Real-time journaling of work state. |
| The Scorecard | test.md | Agent-Agent / Reviewer | Proving the work matches the contract. |
| The Final PR | pull-request.md | Review-Agent (Custom) | Explaining the "Why" and "How." |
🛠️ 3. Implementation Roadmap (Updated)
 * [ ] Agent Personas: Draft the system instructions for The Architect (Contract/Promotion) and The Reviewer (PR/Skepticism).
 * [ ] Backtrack Protocol: (In progress) Formalizing the pivot logic.
 * [x] Agent/Role Mapping: Defined the distinction between built-in and custom roles.
Next Step: Since you mentioned your Review-Agent is your most valued custom agent, would you like to refine its "persona" to include the Post-Mortem Promotion logic? This would allow it to automatically suggest changes to instructions.md when it reviews your PR.
=====

Yes, I have integrated those "nuggets" into the v1.2 Master Manual above, but let me call out exactly where they live so you can see the structural changes:
 * Scoped Instructions: Added to the Global Rules row. The logic now includes applyTo patterns so the agent only sees what it needs for the current folder.
 * Altitude Control: Added to The Contract (prompt.md). This ensures the human defines the Strategy and the AI handles the Tactics.
 * Context Compaction: Added to The Live Diary (handoff.md). This is the rule that forces the agent to summarize its own history to prevent "token fog."
Here is the "Clean Version" of our system document with those specific refinements locked in.
📘 The System: Human Master Manual (v1.3)
Goal: High-reasoning development via Markdown-based Agentic Loops.
🏗️ 1. Core Architecture & Agent Roles
| Component | File | Responsible Agent | Logic / Purpose |
|---|---|---|---|
| Global Rules | instructions.md | The Architect | Scoped. Uses applyTo rules for folder-specific context. |
| The Contract | prompt.md | The Architect | Altitude. Strategic intent only; no micro-management. |
| The Blueprint | plan.md | Plan-Agent | Granularity. Atomic tasks mapped to the Contract. |
| The Live Diary | handoff.md | Agent-Agent | Compacted. Summarizes history every 5-10 tasks. |
| The Scorecard | test.md | Agent-Agent | Evidence. Proof of task completion (CLI/Logs). |
| The Final PR | pull-request.md | Reviewer | Critique. Summarizes handoff.md + Post-Mortem. |
🛠️ 2. Implementation Roadmap (The "To-Do" List)
 * [ ] Agent Personas: - [ ] The Architect: (High-level strategy + promotion logic).
   * [ ] The Reviewer: (Skepticism + PR generation + Post-Mortem).
 * [ ] Backtrack Protocol: Logic for handling [FAILED] tasks in plan.md (Revert + Pivot).
 * [ ] Automation (The "Piping"):
   * [ ] Auto-Commit Hooks: Triggering git commits via MCP on task completion.
   * [ ] MCP Setup: Connecting the agent to local tools (Git, Terminal, Search).
 * [ ] Compaction Logic: Specific rules for when and how to "clean" the handoff.md.
 * [ ] Skills Library: Creating /skills/ for specialized logic (e.g., "Refactor DB").
📓 3. Evolution Log & Article Highlights
 * GitHub Blog: * Agentic Primitives: Markdown as executable software.
   * CLI Runtimes: Running agents in the background/terminal.
   * Scoped Context: applyTo logic for .instructions.md.
 * Anthropic (Engineering Effective Context):
   * Altitude: Keep the prompt at the right level of abstraction.
   * Compaction: Summarize the "messy" history to preserve the context window.
   * The "Why": Focusing on explaining intent, not just code changes.
Ready for the next piece?
I've noted the Reviewer Persona needs to be refined for the post-mortem phase. Is there another article you'd like to feed into the system, or should we pick one of the Roadmap items to flesh out together?

=======newest

I’ve conducted a full "Deep Scan" of our entire conversation—from your first question about markdown workflows to our deep dive into the VS Code Agent docs.
I found 4 specific "Nuggets" that we discussed or were implied in the articles but haven't been explicitly written into the v1.5 Master Manual yet. I’ve integrated these into the updated v1.6 below.
The "Missed Nuggets" Gap Analysis:
 * Human Validation Gates (The "Checkpoint" Rule): In our discussion about prompt.md, we mentioned "Stop and get user approval." This needs to be a formal protocol so the agent doesn't "run away" with a bad plan.
 * The "Ambiguous AC" Research Phase: We talked about this as a "pre-prompt" phase. It needs a formal spot in the workflow to show how we get to the prompt.md.
 * Cross-Session Similarities (The "PR Library"): You mentioned wanting to use handoff.md if a "different pull request session has a similar issue." This implies we need a way to Search past handoffs.
 * Auto-Commit Hook Logic: We discussed .github/hooks.json for task-based commits, but didn't define the "trigger" (the checkmark in plan.md).
📘 The System: Human Master Manual (v1.6)
Status: Comprehensive Architecture (Post-Scan Refinement)
🏗️ 1. Core Architecture & Agent Roles
| Component | File | Responsible Agent | Logic / Purpose |
|---|---|---|---|
| Global Rules | instructions.md | The Architect | Scoped. Folder-specific rules via applyTo. |
| The Contract | prompt.md | The Architect | Immutable. Strategic intent; defines the "Checkpoint Gates." |
| The Blueprint | plan.md | Plan-Agent | Delegation. Identifies tasks for Subagents & Background runs. |
| The Live Diary | handoff.md | Agent-Agent | Compacted. Real-time journal; searchable for similar PRs. |
| The Scorecard | test.md | Background Agent | Evidence. Asynchronous proof of work (CLI/Logs). |
| The Final PR | pull-request.md | Reviewer | Critique. Synthesis of handoff.md + Post-Mortem. |
🔄 2. The Operational Workflow (The "Pipeline")
This defines the lifecycle of a single feature or fix.
 * The "Stew" (Research Phase): Use the Ask-Agent to explore the codebase and clarify ambiguous AC with stakeholders.
 * The Contract (prompt.md): The Architect distills the research into a fixed goal. Human Approval Required.
 * The Blueprint (plan.md): The Plan-Agent breaks the contract into atomic tasks. Human Approval Required.
 * The Execution Loop:
   * Agent implements a task.
   * Agent verifies in test.md.
   * Auto-Commit Trigger: Once a task is marked [x] in plan.md, the MCP hook executes a git commit.
   * Handoff Update: Agent journals success/friction in handoff.md.
 * The Validation: Background agents run full test suites.
 * The Handoff/PR: Reviewer drafts the pull-request.md.
 * The Promotion: Final Post-Mortem moves "Learned Truths" to instructions.md.
🚦 3. The Orchestration Matrix
| Mode | Use Case | Agent Type | Access Level |
|---|---|---|---|
| Local | UI coding, rapid iteration. | Agent-Agent | Full FS + Terminal. |
| Subagent | Specialist tasks (SQL, Regex). | Specialist | Scoped task access. |
| Background | Long-running tests/PR drafts. | Worker | Read-only + Terminal. |
| Cloud | Massive architectural shifts. | Heavyweight | High-reasoning (Claude). |
🛠️ 4. Advanced Protocols
A. The "Checkpoint" Protocol (Human-in-the-loop)
The agent must pause and wait for a "Go" signal from the user at these points:
 * After prompt.md is drafted.
 * After plan.md is drafted.
 * If the Backtrack Protocol is triggered (a task fails >3 times).
B. The "Similar Issue" Search
Before starting a new prompt.md, the Architect agent should scan the .github/handoff-archive/ (or similar PR history) to see if a previous session solved a similar "Friction" point.
C. Context Compaction
Every 5-10 tasks, the agent summarizes handoff.md into a ## State Summary and archives granular logs to keep the "Altitude" high and tokens low.
📋 5. Implementation Roadmap (The "To-Do" List)
 * [ ] Agent Personas: Draft instructions for The Architect and The Reviewer.
 * [ ] Automation Logic: Define the .github/hooks.json trigger for plan.md checkmarks.
 * [ ] Template Design: Create the boilerplate for prompt.md, plan.md, and handoff.md.
 * [ ] Archive Structure: Define where and how old handoff.md files are stored for future search.
 * [ ] Worktree CLI: Finalize the commands for the agent to use git worktree for background tasks.
Next Step: This is the most complete version of "The System" yet. Now that we've bridged the gaps, should we dive into Phase 1: Designing the Agent Personas (The Architect and The Reviewer)? This will define exactly how they interact with these markdown files.

==== 
Final version

This document is now a comprehensive handoff package. It includes a "Context Engine" section (the handoff.md and CLAUDE.md logic) specifically designed to orient a new agent or a fresh conversational thread.
Regarding saving: As an AI, I cannot directly write files to your hard drive for security reasons. The best workflow is to copy and paste the content below into a file named SYSTEM_MANUAL.md in your repository. This file will then act as the "Source of Truth" that you can feed to any agent in the future.
📘 The System: Human Master Manual (v2.4)
Status: Sovereign Context Engine (Rothman & 2026 Native Standards)
🏗️ 1. Core Architecture (The Context Engine)
This section serves as the Context Orientation for any agent joining the project.
| Component | File Path | Responsible Agent | Logic / Purpose |
|---|---|---|---|
| Global Context | CLAUDE.md / AGENTS.md | The Architect | The Root. Native context files that agents auto-load for repo-wide DNA. |
| The Contract | .github/prompts/*.prompt.md | The Architect | The Strategy. Immutable "High Altitude" intent. Defines the mission. |
| The Blueprint | plan.md | Plan-Agent | Reasoning Tree. Task lists with "Semantic Branches" for pivots. |
| The Live Diary | handoff.md | Compactor Agent | The State Engine. Real-time journal + automatic "token-saver" cleanup. |
| The Final PR | pull-request.md | Reviewer | Traceability. Synthesis of handoff.md + Promotion. |
🚦 2. The Orchestration Matrix
| Mode | Use Case | Agent Role | Execution Logic |
|---|---|---|---|
| Local | UI, Logic, Debugging. | Implementer | Full FS access; updates handoff.md after every file edit. |
| Background | Testing & Maintenance. | Worker | Auto-Commit Turn. Commits changes at the end of every turn. |
| Compaction | Token Management. | Summarizer | Shrinks handoff.md every 10 turns to prevent token fog. |
| Sovereign | Architectural work. | Architect | Uses "Ultra" models (Claude 4/GPT-5) for glass-box reasoning. |
📋 3. Advanced Protocols (The "Intelligence Loop")
A. The "Glass Box" Trace
Agents must maintain transparency. In every turn where handoff.md is updated, the agent must explain why a specific path was chosen over an alternative.
B. The Post-Mortem Promotion
Before a PR is closed, the Reviewer scans the "Friction" logs in handoff.md. Any recurring issue is transformed into a rule and appended to CLAUDE.md so the project's "IQ" increases over time.
🛠️ 4. Implementation Roadmap
 * [ ] Phase 1: The Templates. Create boilerplate for .prompt.md and handoff.md.
 * [ ] Phase 2: Personas. Draft instructions for Architect and Reviewer.
 * [ ] Phase 3: Automation. Setup AGENTS.md and .github/hooks/ for auto-commits.
📚 5. Sources & Intelligence Lineage
 * GitHub Engineering: Agentic Primitives & CLI Runtimes.
 * Anthropic Engineering: Context Compaction & Altitude Control.
 * VS Code 2026: Native Subagents, Background Agents, and .prompt.md variables.
 * Rothman (2025/2026): Context Engineering for Multi-Agent Systems. Glass-Box Reasoning.
🏁 6. Next Steps: Phase 2 (Expansion)
 * Custom MCP Servers: Build tools for "Trace Dashboards" to visualize the system state.
 * Vector Archive: Implement a searchable history of all past handoff.md files.
 * Multi-Model Tiering: Route different agents to specific models based on cost/reasoning needs.
Would you like me to now generate the first actual "physical" file from this manual—the .prompt.md (The Strategic Contract) boilerplate template?
