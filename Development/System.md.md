
This is "The System" as we’ve built it so far—a fusion of the GitHub "Agentic Primitives" and the Anthropic "Context Engineering" philosophies.
You can copy the content below directly into a file named SYSTEM.md in your repository. This will serve as the "Source of Truth" for both you and any AI agent you hire for a task.
🤖 The Agentic Development System (v5.1)
Architecture for Reliable AI-Native Software Engineering
1. Core Workflow Pipeline
The system moves through four distinct phases for every Pull Request.
| Phase | Documents | Primary Agent | Key Goal |
|---|---|---|---|
| 0. Research | Chat History | Researcher | De-risk ambiguous AC (Acceptance Criteria). |
| 1. Planning | prompt.md + plan.md | Architect | Create an immutable contract and a testable checklist. |
| 2. Execution | handoff.md + Code | Implementer | Atomic code changes + real-time "Journaling." |
| 3. Validation | test.md + pull-request.md | Reviewer | Verify implementation and explain the "Why." |
| 4. Wisdom | instructions.md | Curator | Post-mortem promotion of lessons learned. |
2. The File System (The "Primitives")
📜 instructions.md (Global Guardrails)
 * Location: .github/copilot-instructions.md
 * Role: Permanent memory. Stores project-wide coding standards, tech stack rules, and promoted lessons from past sessions.
 * Rule: Never modified by agents during a task; only updated during the Post-Mortem.
📝 prompt.md (The Immutable Contract)
 * Location: Task root or .github/prompts/
 * Role: The "What" and "Why." Contains specific AC, technical constraints, and the Failure & Recovery Protocol.
 * Rule: Immutable. If the goal changes, the session is killed and a new prompt.md is drafted.
✅ plan.md (The Blueprint)
 * Location: Task root.
 * Role: The "How." A breakdown of prompt.md into atomic, checkable tasks.
 * Status Markers: [ ] (Pending), [x] (Done), [FAILED] (Pivot required).
📓 handoff.md (The Live Diary)
 * Role: State management. The agent updates this after every successful change or failure.
 * Structure: - Successes: Logic/patterns that worked.
   * Friction: Blocker details (errors, library quirks).
   * Context Compaction: Every 5 updates, the agent must summarize the history to save tokens.
🧪 test.md (The Scorecard)
 * Role: Evidence. Maps every task in plan.md to a specific test result (output, screenshot path, or CLI pass).
3. Operational Protocols
🔄 The Feedback Loop
After every file modification or research step, the agent must:
 * Verify: Run a test or lint check.
 * Journal: Update handoff.md with the result.
 * Commit: (If using Auto-Commit) Execute git commit -m "feat: [Task Name]" via MCP.
⚠️ Backtrack & Pivot Protocol
Triggered if a task fails >3 times or hits a structural roadblock:
 * Log: Explain the failure in handoff.md.
 * Revert: git reset --hard to the last successful task commit.
 * Pivot: Mark the task [FAILED] in plan.md and propose a "New Path" section for human approval.
🚀 The Post-Mortem (Promotion)
Before closing a PR, the agent performs a "Wisdom Scan":
 * Review handoff.md for any unique solutions (e.g., "fixed CSS z-index collision on modals").
 * Ask: "Should this be a global rule?"
 * If yes, move that logic to instructions.md.
4. Technical Infrastructure (Roadmap)
 * [ ] MCP Setup: Install @modelcontextprotocol/server-github to enable auto-commits and PR creation.
 * [ ] Worktree Isolation: Experiment with git worktree for long-running "Background Agents."
 * [ ] Skills Directory: Build /skills/ for procedural playbooks (e.g., refactor-db.md).
 * [ ] Orchestration: Define logic for "Local" (VS Code) vs "Cloud" (Background CLI) handoffs.
Next Step: Now that we have the "Master System" documented, would you like me to start on that Skill Sample we discussed, or would you like to refine the PR Description template that the agent will use in Phase 3?
