
Here is a "Cheat Sheet" introduction to Redis designed for memorization.
1. The One-Sentence Definition
Redis is a super-fast dictionary that lives in your computer's RAM.
 * "Dictionary": It stores data as Key-Value pairs (like a JSON object or a Python dictionary).
 * "RAM": It doesn't write to the hard drive constantly like MySQL. This makes it insanely fast (microseconds), but volatile (if you pull the plug, data can vanish).
2. The Mental Model: "The Sticky Note Wall"
Imagine a giant whiteboard covered in sticky notes.
 * MySQL is a filing cabinet. You have to open the drawer, find the folder, and read the paper. It's safe, organized, but slow.
 * Redis is the whiteboard. You just glance at it. It's instant.
3. The 5 Commands You Must Memorize
You can do 90% of Redis work with just these five verbs.
| Command | Meaning | Example |
|---|---|---|
| SET | "Write this down." | SET user:1 "John" |
| GET | "Read this back." | GET user:1 → "John" |
| DEL | "Throw this away." | DEL user:1 |
| EXISTS | "Do we have this?" | EXISTS user:1 → 1 (True) or 0 (False) |
| EXPIRE | "Self-destruct in X seconds." | EXPIRE user:1 60 (Deletes John in 1 min) |
 * Note: EXPIRE is the "killer feature" of Redis. It's why everyone uses it for caching (e.g., "Keep this login session for 30 minutes").
4. The Data Structures (The "Values")
In MySQL, you have Rows and Columns. In Redis, the Key is always a string (the sticky note label), but the Value (what's written on the note) can be different shapes.
Memorize these three types first:
 * String: Just text. (The default).
   * Use case: Caching a User ID or a Session Token.
   * Cmd: SET user:1 "John"
 * List: A simple queue. You can add things to the left or right.
   * Use case: A "Recent Jobs" queue or a timeline.
   * Cmd: LPUSH my_queue "Job1"
 * Hash: A mini-dictionary inside the value.
   * Use case: Storing a user profile object (Name, Age, Email) under one key.
   * Cmd: HSET user:1 name "John" age "30"
5. Why do we use it? (The "Why")
If you are asked "Why Redis?" in an interview or architecture meeting, the answer is usually one of these two:
 * Caching: "My database is too slow. I'll put the result in Redis so the next time someone asks, I can give it to them instantly."
 * Session Management: "I need to remember who is logged in, but I don't want to hit the hard drive every time they click a button."
Summary for Memorization
 * It is: A RAM-based Dictionary.
 * It does: Key-Value storage.
 * It is fast because: It avoids the hard drive.
 * Core Commands: SET, GET, DEL, EXPIRE.
Next Step
Would you like to try a "mental practice" exercise where you tell me how you would structure a specific feature (like a "Recent Views" list) using only those Redis commands?
