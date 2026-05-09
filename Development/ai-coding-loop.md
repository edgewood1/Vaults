# AI-Assisted Coding Loop (SPDIR)

*From Tony Alicea's "Don't Imitate Understand" newsletter, Jan 2025*

## The loop: Spec → Plan → Decompose → Implement → Review

**Spec** — human-written markdown spec of what the feature does, including *why* and the real-world process it supports. Context produces more readable code (better function names, better pattern matching).

**Plan** — ask the LLM to build a plan and save it to a markdown file. Don't have it do anything yet. Human reviews and adjusts the plan.

**Decompose** — break the plan into human-reviewable smaller tasks. The biggest mistake is asking the LLM to produce more code than you can comfortably review at once.

**Implement** — ask the LLM to implement one decomposed task at a time.

**Review** — review the LLM's code and test the feature yourself as you normally would.

## What you need for this to work

- Good context: the spec, decomposed plans, any info you'd need to build it yourself
- Good example code: documentation (via MCP), sample usages in the codebase, hand-built components for the LLM to pattern-follow

## Note

This is not the "10x agentic miracle" process. It's a controlled loop that experienced devs have converged on. Review LLM code before making a PR.

*Pronounce SPDIR as "speedier." First steps only = "spud."*

## Related

- Book: *Cascade Methodology: Software Development Practices for the Age of AI* — Tony Alicea (free online, first 9 chapters)
- Course: Modern JavaScript Frameworks + AI-assisted development (tonyalicea.dev)
