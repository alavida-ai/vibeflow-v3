# Cheat Sheet

## Cursor Tips & Tricks

Firstly use the shortcut below to view this file in a human readable format
- `Cmd+Shift+V` - Preview Markdown file (this will open a new previe tab that sync with edits in the md tab)

### Essential Cursor AI Shortcuts
- `Cmd+K` - Open in-file Cursor chat
- `Cmd+L` - Toggle Chat Window
- `Cmd+Shift+L` - Add selection to chat context
- `Cmd+Y` - Apply AI suggestion
- `Cmd+N` - Reject AI suggestion

### Navigation & File Management
- `Cmd+P` - Quick open file
- `Cmd+Shift+P` - Command palette
- `Cmd+Option+→/←` - Navigate between open tabs/files
- `Cmd+W` - Close current tab
- `Cmd+Shift+T` - Reopen closed tab
- `Cmd+\` - Split editor
- `Cmd+Shift+E` - Focus file explorer
- `Cmd+B` - In markdown file this boldens the selected text. In code files this toggles sidebar visibility
- `Cmd+J` - Toggle panel (terminal/problems/output)

### Code/Text Navigation & Selection
- `Cmd+D` - Select next occurrence
- `Cmd+/` - Toggle comment
- `Cmd+Shift+/` - Toggle block comment
- `Cmd+U` - Undo cursor position
- `Cmd+Shift+U` - Redo cursor position

### Search & Replace
- `Cmd+F` - Find in file
- `Cmd+Shift+F` - Find in all files
- `Cmd+E` - Use selection for find

### Multi-Cursor & Selection
- `Option+Click` - Add cursor at click position
- `Cmd+Option+↑/↓` - Add cursor above/below
- `Cmd+fn+F2` - Select all occurrences of current word

### Cursor Chat Features
- Use `@` to reference files/folders in chat
- Drag and drop files into chat for context
- Pin important conversations for later reference
- Rename specific chat by clicking on the chat tab (top of Cursor window)
- Add new chat by clicking `+` (top right of Cursor window)
- View history (top right of Cursor window)
- Branch chat to new tab from breakpoint with `...` lcoated at the end of the last AI response you want to include in this chat branch
- Double click on one of your previous prompts to edit and re-prompt (note downstream conversations will be lost)

### Code Generation Tips
- Include relevant context files with `@`
- Use inline edit (`Cmd+I`) for targeted changes
- Use chat selection (`Cmd+L`) for explaining code
- Reference existing code patterns in your codebase

## OpenCode Tips & Tricks

### Essential Terminal Commands
- `opencode` - Open a terminal and run to start OpenCode session
- `opencode --help` - Show help

### TUI (Terminal User Interface) Commands

OpenCode provides an interactive terminal interface (TUI) (triggered from the Cursor terminal) for working on your projects. Running `opencode` on the Cursor terminal starts the TUI.

#### Prompting
- You can prompt the TUI with a message, e.g., "Give me a quick summary of the codebase."

#### File References
- Reference files in your messages using `@`. This does a fuzzy file search in the current working directory and automatically adds the file content to the conversation.
  - Example: `How is auth handled in @packages/functions/src/api/index.ts?`

#### Bash Commands
- Start a message with `!` to run a shell command. The output is added to the conversation as a tool result.
  - Example: `!ls -la`

#### Slash Commands
Type `/` followed by a command name to quickly execute actions. Most commands also have a keybind using `ctrl+x` as the leader key (default leader key is `ctrl+x`).

You will find that the most useful commands are:
- `/new`
- `/models`
- `/sessions`
- `/compact`
- `/details`
- `/redo` / `/undo`

Keybinds are keyboard short cuts to execute these commands faster. You can customise you keybind configuration in the `opencode.json` file at the root of your project.

| Command     | Description                                             | Keybind    | Aliases                |
| ----------- | ------------------------------------------------------- | ---------- | ---------------------- |
| `/help`     | Show the help dialog                                    | `ctrl+x h` |                        |
| `/new`      | Start a new session                                     | `ctrl+x n` | `/clear`               |
| `/exit`     | Exit opencode                                           | `ctrl+x q` | `/quit`, `/q`          |
| `/editor`   | Open external editor for composing messages             | `ctrl+x e` |                        |
| `/export`   | Export current conversation to Markdown and open editor | `ctrl+x x` |                        |
| `/init`     | Create or update AGENTS.md file                         | `ctrl+x i` |                        |
| `/models`   | List available models                                   | `ctrl+x m` |                        |
| `/sessions` | List and switch between sessions                        | `ctrl+x l` | `/resume`, `/continue` |
| `/share`    | Share current session                                   | `ctrl+x s` |                        |
| `/unshare`  | Unshare current session                                 |            |                        |
| `/themes`   | List available themes                                   | `ctrl+x t` |                        |
| `/compact`  | Compact the current session                             | `ctrl+x c` | `/summarize`           |
| `/details`  | Toggle tool execution details                           | `ctrl+x d` |                        |
| `/redo`     | Redo a previously undone message                        | `ctrl+x r` |                        |
| `/undo`     | Undo last message and revert file changes               | `ctrl+x u` |                        |

**Tips:**
- `/redo` and `/undo` also restore/revert any file changes, using Git under the hood (your project must be a Git repository).
- Use `ctrl+x right` and `ctrl+x left` to navigate to subagents chats when your primary agent has invoked these.
\
\
Note: Mac users require editing the keybind configuration for `session_child_cycle` and `session_child_cycle_reverse`

#### OpenCode Configuration
You can customize OpenCode behavior in your `opencode.json` config file:
  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "tui": {
      "scroll_speed": 3
    }
  }
  ```
E.g. `scroll_speed`: Controls how fast the TUI scrolls when using scroll commands (default: 2, minimum: 1)

### MCP Configuration

#### Adding MCP to opencode.json
```json
{
    "OtherConfiguration": {
        ...
    },
    "mcpServers": {
        "server-name": {
            "type": "local",
            "command": [
                "command-to-run",
                "arg1", 
                "arg2"
            ]
            "environment": {
                "ENV_VAR": "value"
            },
            "enabled": true
        }
    },
}
```

#### Common MCP Servers
```json
{
  "context7": {
        "type": "local",
        "command": [
            "npx",
            "-y",
            "@upstash/context7-mcp@latest"
        ],
        "enabled": true
    },
    "dataForSEO": {
        "type": "local",
        "command": [
            "npx",
            "-y",
            "@smithery/cli@latest",
            "run",
            "@moaiandin/mcp-dataforseo",
            "--key",
            "<api-key>",
            "--profile",
            "<profile>"
        ],
        "enabled": true
    },
    "perplexity-ask": {
        "type": "local",
        "command": [
            "npx",
            "-y",
            "server-perplexity-ask"
        ],
        "enabled": true,
        "environment": {
            "PERPLEXITY_API_KEY": "<api-key>"
        }
    },
    "firecrawl-mcp": {
        "type": "local",
        "command": [
            "npx",
            "-y",
            "firecrawl-mcp"
        ],
        "enabled": true,
        "environment": {
            "FIRECRAWL_API_KEY": "<api-key>"
        }
    }
}
```

### OpenCode Best Practices

#### Context Management
- Use `@filename` to reference specific files, ensure to include the relative path
- Reference files in commands using `@` - this does fuzzy file search and adds content to conversation
- Keep context focused and relevant to avoid overwhelming the AI
- Regularly clean up irrelevant context to maintain performance

#### Agents Architecture

**Primary Agents**:
- These are your main workflow managers and general helpers
- Toggle between them using the tab button (visible in bottom right of OpenCode terminal)
- OpenCode comes with 2 pre-built primary agents: `build` and `plan`
- Configure with `"mode": "primary"` in opencode.json

**Subagents** (task-specific experts):
- Invoked by mentioning them with `@subagent-name` in chat
- Designed for specialized tasks (code review, security audits, documentation)
- Configure with `"mode": "subagent"` in opencode.json
- Examples: `@code-reviewer`, `@security-auditor`, `@docs-writer`
- Subagents cannot invoke other subagents.

**Best Practices for Agent Design:**
- Use Primary agents as workflow orchestrators
- Use Subagents as domain experts for specific tasks
- Avoid overwhelming primary agents with too many tools
- Give agents only necessary tools for their role
- Tell primary agents when to delegate to subagents
- Design clear agent responsibilities and boundaries

#### Commands (Reusable Prompts)
Commands are frequently-used prompts saved for quick execution (like generating optimized tweets or code reviews).

**Usage:**
- Execute with `/<command-name>` 
- Pass arguments with `$ARGUMENTS` placeholder in template
- Reference files with `@filepath` for context
- Reference subagents in commands to delegate tasks

**Common Pitfalls:**
- Defining `subtask` option as `true` means the agent executing this command will not delegate to subagents (event if these subagents are referenced in the command)
- Subagents **cannot** invoke other subagents - **solution**: add a specific step in the command for every subagent required
- Sub-commands cannot be triggered in commands (OpenCode does not allow for this functionality) - **solution**: create subagents for each specific tasks and add all the tasks requirements in the subagent's system prompt. Do not attempt to make subagents multipurpose.

**Configuration Example:**
```json
{
  "command": {
    "review": {
      "template": "@code-reviewer please review @$ARGUMENTS for security and best practices",
      "description": "Code review with security focus",
      "agent": "build"
    }
  }
}
```

#### Permissions & Security
- Configure granular permissions for different agents
- Use `"ask"`, `"allow"`, or `"deny"` for bash, edit, and webfetch permissions
- Set global defaults and override per agent as needed
- Example: Planning agents should have `edit: deny, bash: deny`

#### Tool Usage & MCP Integration
- Use MCP servers to extend agent capabilities
- Configure tools per agent based on their role
- Batch related operations together for efficiency
- Verify results before applying changes
- Test changes incrementally

#### File System Operations
- OpenCode has full project access for reading, writing, modifying files
- Always review changes before applying
- Use proper file referencing with relative paths
- Leverage version control integration for safe operations

#### Agent Coordination Patterns
- Design task-specific agents for better, focused results
- Keep agent workflows isolated to avoid conflicts
- Minimize dependencies between agents
- Ensure clear communication patterns between human and AI
- Use delegation patterns: Primary → Subagent → Results

#### Development Workflow
- Use `/new` to start fresh sessions when context gets cluttered
- Use `/compact` to summarize long conversations
- Leverage `/undo` and `/redo` with Git integration
- Run verification commands after changes (lint, typecheck, tests)

IMPORTANT\
Everytime you make changes to your Agents or Commands you will need to restart OpenCode with `/exit` and following with running `opencode` again on the terminal (or use the up arrow to get to your last command which would be `opencode`)

#### Troubleshooting & Support
- Use the Vibeflow primary agent to understand Vibeflow framework
- Verify MCP server configurations and environment variables
- Check agent permissions and tool access
- Use verbose logging and `/details` for debugging