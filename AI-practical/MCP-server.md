
package.json

tsconfig.

src/index.ts

**Other settings**

Library/Application Support/Code/User/settings.json
* This tells us the copilot/gemini code assist to run our mcp-server+
* this is called "configuring" the server.
* we add teh server to our MCP configuration file.


```json
"geminicodeassist.project": "smiling-smithy-mq6tl",
	"mcpServers": {
		"obsidian-bridge": {
		"command": "node",
"args": [
"/Users/meldejesus/Desktop/mcp-server/dist/index.js",
"/Users/meldejesus/Library/Mobile Documents/iCloud~md~obsidian/Documents"
]
	}
}
```
Explanation of the above code: