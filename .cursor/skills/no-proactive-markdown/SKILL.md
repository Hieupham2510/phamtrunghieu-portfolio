---
name: no-proactive-markdown
description: Do not create markdown (.md) files unless the user explicitly requests them. Apply when editing, adding files, or generating documentation in the project.
---

# No Proactive Markdown Files

## Rule

**Do not create any `.md` (markdown) files unless the user explicitly asks for them.**

- Do not proactively add README.md, CHANGELOG.md, docs/*.md, or any other markdown file.
- Do not suggest or generate documentation files "to be helpful" without explicit request.
- Only create or write to `.md` files when the user clearly asks (e.g. "tạo file README", "viết docs/API.md", "thêm file .md ghi lại...").

## Exceptions

- Creating or editing a skill file (e.g. `.cursor/skills/.../SKILL.md`) when the user asks to create or edit a skill.
- The user explicitly requests a specific markdown file or documentation.

## Summary

No unsolicited markdown. Create `.md` only when requested.
