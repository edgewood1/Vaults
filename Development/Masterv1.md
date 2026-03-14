This is the most comprehensive version of the manual, now expanded into a "Sovereign Operating System" guide. It includes your requested file structures, a concrete "Day in the Life" walkthrough, and a clarification on the "Persona vs. Agent" terminology.

📘 The Sovereign Context Engine: Master Manual (v3.1)

"The Definitive Guide to Markdown-Based Agentic Workflows"

🏗️ PART 1: The Infrastructure (The Map)

To make "The System" work, your repository needs a specific physical structure. This allows the AI to "find its tools" automatically.

1.1 The Workspace Directory Structure

my-project/  
├── 📄 CLAUDE.md              <-- Global DNA / Persistent Rules  
├── 📄 AGENTS.md              <-- The 2026 Native Agent Registry  
├── 📄 SYSTEM_MANUAL.md       <-- This Document (Your Human Guide)  
├── 📄 plan.md                <-- ACTIVE: The Foreman's Clipboard (Live)  
├── 📄 handoff.md             <-- ACTIVE: The Short-Term Memory (Live)  
├── 📂 .github/  
│   ├── 📂 prompts/           <-- STATIC: The "Logic" Templates  
│   │   ├── 📄 contract.prompt.md  
│   │   └── 📄 plan-gen.prompt.md  
│   ├── 📂 agents/            <-- STATIC: The "Brain" Instructions  
│   │   ├── 📄 architect.agent.md  
│   │   └── 📄 reviewer.agent.md  
│   └── 📂 hooks/             <-- AUTOMATION: The "Pipes"  
│       └── 📄 auto-commit.json  
└── 📂 .github/archive/       <-- HISTORICAL: Old handoff/log files  

🤖 PART 2: Agents vs. Personas (The Glossary)

You asked a great question: "Are personas just agents?"

- The Agent: This is the Technical Entity. It is the "software" that can run code, read files, and talk to you. (e.g., GitHub Copilot, Claude Code).
- The Persona: This is the Instructional Layer. It is the "Mask" we put on the agent.

- Think of it like an actor (the Agent) playing a specific role (the Persona).
- We use "Personas" to force the AI to stay in character. If you don't give it a persona, it defaults to being a "helpful assistant" (which is often too agreeable). By giving it the Architect Persona, you force it to be critical, strategic, and skeptical.

🚀 PART 3: The "How-To" Walkthrough (Concrete Examples)

Here is a step-by-step example of adding a Search Bar using the system.

Step 1: Initialize the Mission

You type into the chat:

/contract "Create a fuzzy search bar for the header component."

Step 2: The Architect Responds

The Architect agent reads .github/prompts/contract.prompt.md. It then creates/updates three files in your root directory:

1. .github/prompts/search-bar.prompt.md: The specific "Contract" for this task.
2. plan.md: A list of 5-10 tasks (Installing fuse.js, creating the component, etc.).
3. handoff.md: Initialized with the "Strategic Intent."

Step 3: Human Review (The Checkpoint)

You look at plan.md. You notice the AI forgot to add mobile styling. You edit plan.md directly:

Add: - [ ] @local Ensure search bar collapses into an icon on screens < 768px.

Step 4: Trigger the Work

You copy the content of the newly created search-bar.prompt.md and paste it into the prompt input:

"I approve the plan. Proceed with the Strategic Contract in search-bar.prompt.md."

Step 5: The Implementation Loop

The Implementer Agent (the standard worker) starts working through the plan.md.

- As it finishes a task, the Auto-Commit Hook (auto-commit.json) automatically saves the code to Git.
- The agent updates the handoff.md after every file edit.

Step 6: The Validation

Once all checkboxes in plan.md are green, you call the Reviewer Persona:

@reviewer "Verify the search bar against the contract and draft the PR."

Step 7: The Promotion

The Reviewer finds that the search bar was slow on first load. It suggests a fix. Once fixed, the Architect adds a rule to CLAUDE.md:

"Always lazy-load search libraries to maintain 100/100 Lighthouse scores."

❓ PART 4: Detailed Q&A for Study

Q: Why do we keep plan.md in the root and not in .github?

- A: Because it is "State." You want it visible and easily accessible. Keeping it in the root makes it the "center of the universe" for that specific session.

Q: What do I do if the AI gets stuck in a loop?

- A: Delete the last few entries in handoff.md. This "wipes" the bad memory. Then, manually edit the plan.md to give it a very specific, simple next step.

Q: Can I use this for non-coding tasks?

- A: Yes. You can use the same system for writing a book, planning a trip, or researching a topic. Just change the "Implementer" to a "Writer" or "Researcher" persona.

📚 PART 5: Future Reading & Next Steps

📖 Physical Book Recommendations (Introductory to Advanced)

1. "AI Agents in Action" by Micheal Lanham (Manning, 2025). Best for beginners.
2. "Context Engineering for Multi-Agent Systems" by Denis Rothman (Nov 2025). Best for understanding the "why" behind our handoff files.
3. "AI Engineering" by Chip Huyen (2025). Best for overall technical confidence.

🚀 Future Releases (To Watch In 2026)

- "AI-Native Engineering" by Alfonso Graziano. (Look for the "Spec-First" chapters).
- "Practical Context Engineering" by Luca Randall. (Look for the "Token Budgeting" chapters).

🏁 Final Summary for Google Docs

This system is designed to give you Sovereignty. By moving the AI’s "brain" into Markdown files on your computer, you are no longer a passenger in the AI's chat; you are the Director of a structured engineering process.

Next Step: You mentioned wanting a Cheat Sheet. Would you like me to generate a single-page "Desk Reference" with the key commands and file paths that you can print out and keep next to your monitor?