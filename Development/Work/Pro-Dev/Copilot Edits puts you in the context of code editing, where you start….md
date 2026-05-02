# Copilot Edits puts you in the context of code editing, where you start…


Copilot Edits puts you in the context of **code editing**, where you start an edit session and use prompts for making changes to your codebase. Copilot Edits can generate and apply code changes directly across **multiple files** in your codebase. You can immediately **preview the generated edits** within the context of your code.
The <u>[Chat view](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-view)</u> gives you a more **general-purpose** chat interface for asking questions about your code or technology topics in general. Copilot can also provide code suggestions and generate code blocks as part of the chat conversation. You need to **manually apply** each code block to the different files in your project to evaluate their validity.
<u>[Inline Chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat)</u> keeps you in the coding flow by providing a chat interface in the editor, where you can **preview the generated code** suggestions directly in the context of your code. The scope of Inline Chat is limited to the editor in which it's started, so it can only provide code suggestions for a **single file**. You can also use Inline Chat to ask general-purpose questions.dwh

Based on your prompts, Copilot Edits proposes code changes across multiple files in your workspace. These edits are applied directly in the editor, so you can quickly review them in-place, with the full context of the surrounding code.


You can enable the Copilot Edits feature by setting the github.copilot.chat.edits.enabled setting to true

How this works

Working Set (are the files it will work with )

- insert one file
- Make a request
- If this request requires the creation of new files, it will add these files to the set
- Continue adding requests, and test in the browser. 
- When ok, his accept. 

Scoping

- drag extra files into the set
- you could drag in the routes and the controller since they are both related to 


Ways to start

* Use the ⇧⌘I (Windows Ctrl+Shift+I, Linux Ctrl+Shift+Alt+I) keyboard shortcut
* Open the Copilot menu in the Command Center, and then select 
* **Open Copilot Edits**Use the 
* **View: Toggle Copilot Edits** or **Copilot Edits: Focus on Copilot Edits View** command in the Command Palette (⇧⌘P (Windows, Linux Ctrl+Shift+P))

First step
- add relevant files you want to work with.
- CE doesn’t make changes outside the working set, except when suggesting to create a new file.
- Working set max: 10 files
- CE will auto-add the open editor to the working set (it will add the open editor of each editor group if this is the case).
- To add all open editors, select add files OR paperclip icon, and then choose the files in the quick pick.  
- Use up / down to navigate the list. 
- Use right key to add the item as context. 
- Or drag/drop

Context variables
- use #selection or #terminalSelection with commands.  Or #file references. 
- CE may make changes to 
- #files references, and these are added to working set automatics.

Request code edits

- be specific about changes you want CE to make. 
- If you have a larger task, decompose it in smaller tasks and iterate often to steer copilot in the right direction.  
- Changes appear as a multi-line diff
- Also a description of change appears with file.
- Accept changes
- Undo last edits

Copilot chat - ask questions and explore ideas here in general
If you ware in the middle of a conversation, you can transfer the attached context from your chat conversation action: send to copilot

## **Settings**
The following list contains the settings related to Copilot Edits. You can configure settings through the Setting editor (⌘,).
* github.copilot.chat.edits.enabled - enable or disable Copilot Edits
* chat.editing.confirmEditRequestRemoval - ask for confirmation before undoing an edit (default: true)
* chat.editing.confirmEditRequestRetry - ask for confirmation before performing a redo of the last edit (default: true)
* chat.editing.alwaysSaveWithGeneratedChanges - automatically save generated changes from Copilot Edits to disk (default: false
