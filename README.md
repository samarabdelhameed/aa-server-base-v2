# 🌟 AA Server Base - Astro + Bun Project Starter

This project is based on Astro Starter Kit using Bun as the JavaScript runtime.  
It includes a basic structure for building fast and modern websites.

---

## 🚀 How to Start

Use this command to create your project using Astro + Bun with the minimal template:

```bash
bun create astro@latest -- --template minimal
```

---

## 📁 Project Structure

Your Astro project structure should look like this:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .vscode/
├── .gitignore
├── astro.config.mjs
├── bun.lockb
├── package.json
├── tsconfig.json
└── README.md
```

✅ **Important Notes:**

- Don't push `node_modules/` to GitHub ❌
- Your repo root should **not** have extra folders like `aa-server-v0` wrapping everything
- You should run all commands from the **project root**
- Make sure `.DS_Store` is excluded in `.gitignore` on Mac

---

## 🧞 Bun Dev Commands

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `bun install`         | Install project dependencies                           |
| `bun dev`             | Start the local development server at `localhost:4321` |
| `bun run build`       | Build the project for production into `./dist/`        |
| `bun run preview`     | Preview the build locally                              |
| `bun astro add`       | Add integrations like `tailwind`, `vercel`, etc.       |
| `bun astro -- --help` | Get help about available Astro CLI options             |

---

## 🌐 Astro Docs

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Bun Documentation](https://bun.sh/docs)

---

> 💡 Built with ❤️ using Astro and Bun by [Samar Abdelhameed](https://github.com/samarabdelhameed)

```

```
