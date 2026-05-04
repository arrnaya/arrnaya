# Windows Setup Guide

Clone and run this project on your Windows PC.

---

## 1. Prerequisites

- **Node.js** 20+ with npm — [Download](https://nodejs.org/)
- **Git** — [Download](https://git-scm.com/download/win)

---

## 2. Clone & Install

```powershell
git clone <your-repo-url>
cd arrnaya
npm install
```

---

## 3. Set Up Environment Variables (Manual)

The following sensitive values are **not** in the repo. You must set them manually.

### A. Anthropic API Key

Create a `.env.local` file in the project root:

```env
ANTHROPIC_API_KEY=sk-ant-api03-...
```

> Get your key from your macOS `openclaw-bin/commands.txt` or regenerate at [console.anthropic.com](https://console.anthropic.com/)

### B. Ollama API Key

Ollama is local — any value works, but it must be set:

```env
OLLAMA_API_KEY=ollama-local
```

Or set it as a Windows environment variable:
```powershell
[Environment]::SetEnvironmentVariable("OLLAMA_API_KEY", "ollama-local", "User")
```

---

## 4. Install Ollama (Windows)

1. Download from [ollama.com/download](https://ollama.com/download/windows)
2. Run the installer — it adds `ollama` to PATH and runs as a background service
3. Pull the model used by agents:

```powershell
ollama pull llama3:8b
```

> Ollama on Windows runs as a system service automatically. You do **not** need to keep a terminal open with `ollama serve`.

Verify it works:
```powershell
ollama list
curl http://localhost:11434/api/tags
```

---

## 5. Build & Run

### Development server (with hot reload)
```powershell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Static export (generates `out/` folder)
```powershell
npm run build
```

Serve the static output:
```powershell
npx serve out
```

---

## 6. OpenClaw Agents (Optional)

If you want the OpenClaw agent system on Windows:

1. The `openclaw-bin/` folder is included minus `commands.txt`. Install deps:
   ```powershell
   cd openclaw-bin
   npm install
   cd ..
   ```

2. Copy your macOS `~/.openclaw/openclaw.json` to Windows `%USERPROFILE%\.openclaw\openclaw.json`
   - Update any macOS-specific paths (e.g., `/Users/arrnaya/...` → `C:\Users\<You>\...`)

3. Run OpenClaw commands via:
   ```powershell
   npx openclaw gateway run
   ```

---

## Files Excluded from Repo

| File / Folder | Why Excluded | What You Need to Do |
|---------------|--------------|---------------------|
| `openclaw-bin/commands.txt` | Contains `ANTHROPIC_API_KEY` | Set the key manually (step 3A) |
| `ollama-local/` | 485MB macOS Ollama.app binary | Install Ollama for Windows (step 4) |
| `.local/` | Local working drafts & images | Not needed to run the site |
| `node_modules/` | Auto-generated dependencies | Run `npm install` |
| `.next/` | Next.js build cache | Auto-generated |

---

## Quick Checklist

- [ ] Node.js 20+ installed
- [ ] `npm install` completed
- [ ] `.env.local` created with `ANTHROPIC_API_KEY`
- [ ] `OLLAMA_API_KEY` environment variable set
- [ ] Ollama Windows installed & `llama3:8b` pulled
- [ ] `npm run dev` starts without errors
