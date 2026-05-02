## 🧹 Context Management (Compaction)
- **Trigger:** Every 10 tool invocations, or when approaching 90% context limit.
- **Action:** Run the `/compact` command (or equivalent) to summarize the current `handoff.md`.
- **Archive:** Move granular terminal logs from `handoff.md` to `.github/archive/logs_[timestamp].log`.
- **Focus:** Ensure the bottom 500 tokens of context always contain the "Strategic Intent" and the "Next Step" from the `handoff.md`.
