# Cheat Sheet

## Cursor Tips & Tricks

### Essential Keyboard Shortcuts
- `Cmd+K` - Open in-file Cursor chat
- `Cmd+L` - Toggle Chat Window
- `Cmd+I` - Inline edit mode
- `Cmd+Shift+L` - Add selection to chat context
- `Cmd+Enter` - Apply AI suggestion
- `Escape` - Reject AI suggestion
- `Cmd+D` - Select next occurrence
- `Cmd+/` - Toggle comment
- `Cmd+P` - Quick open file
- `Cmd+Shift+P` - Command palette

### Cursor Chat Features
- Use `@` to reference files/folders in chat
- Drag and drop files into chat for context
- Pin important conversations for later reference

### Code Generation Tips
- Be specific about the framework/library you're using
- Include relevant context files with `@`
- Use inline edit (`Cmd+I`) for targeted changes
- Use chat selection (`Cmd+L`) for explaining code
- Reference existing code patterns in your codebase

### Composer Mode
- Use for multi-file changes
- Great for refactoring across multiple files
- Can create new files and modify existing ones
- Review all changes before applying

## OpenCode Tips & Tricks

### Essential Commands
- `opencode` - Start OpenCode session
- `opencode --help` - Show help
- `/help` - Get help within OpenCode session
- `Ctrl+C` - Exit OpenCode session

### MCP Configuration

#### Adding MCP to opencode.json
```json
{
  "mcpServers": {
    "server-name": {
      "command": "command-to-run",
      "args": ["arg1", "arg2"],
      "env": {
        "ENV_VAR": "value"
      }
    }
  }
}
```

#### Common MCP Servers
```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "@firecrawl/mcp-server"],
      "env": {
        "FIRECRAWL_API_KEY": "your-api-key"
      }
    },
    "dataForSEO": {
      "command": "node",
      "args": ["path/to/dataforseo-server.js"],
      "env": {
        "DATAFORSEO_USERNAME": "your-username",
        "DATAFORSEO_PASSWORD": "your-password"
      }
    },
    "perplexity": {
      "command": "python",
      "args": ["-m", "perplexity_mcp"],
      "env": {
        "PERPLEXITY_API_KEY": "your-api-key"
      }
    }
  }
}
```

### OpenCode Best Practices

#### Context Management
- Use `@filename` to reference specific files
- Keep context focused and relevant
- Use file patterns like `*.js` or `src/**/*.ts`
- Regularly clean up irrelevant context

#### Task Management
- Break complex tasks into smaller steps
- Use clear, specific instructions
- Provide examples when possible
- Iterate based on results

#### Tool Usage
- Use specialized agents for complex searches
- Batch related operations together
- Verify results before applying changes
- Test changes incrementally

### File System Operations
- OpenCode has access to your entire project
- Can read, write, and modify files
- Can run bash commands and scripts
- Always review changes before applying

### AI Agent Coordination
- Use task-specific agents for better results
- Keep agent workflows isolated
- Minimize dependencies between agents
- Clear communication between human and AI

### Debugging & Troubleshooting
- Check opencode.json syntax if MCP servers fail
- Verify environment variables are set
- Check file permissions for scripts
- Use verbose logging when needed
- Report issues at https://github.com/sst/opencode/issues