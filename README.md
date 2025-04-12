# 🌐 AA Server Base — Astro + Bun Starter Template

A minimal and blazing-fast starter template built with **Astro** and powered by **Bun** runtime.  
Designed for developers who want to quickly scaffold secure, scalable, and stylish web applications with modern tooling.

---

## 🚀 Getting Started

Use the following command to initialize your project with Astro + Bun using the minimal template:

```bash
bun create astro@latest -- --template minimal
```

---

## 📁 Project Structure

```txt
/
├── public/               # Static assets
│   └── favicon.svg
├── src/                  # Main source folder
│   ├── layouts/          # Shared layouts (e.g., main layout)
│   │   └── Layout.astro
│   └── pages/            # Page components (route-based)
│       └── index.astro
├── .vscode/              # Editor config (optional)
├── .gitignore
├── astro.config.mjs      # Astro configuration
├── bun.lockb             # Bun lockfile
├── package.json
├── tsconfig.json         # TypeScript settings
└── README.md
```

> ✅ **Notes**
>
> - Avoid committing `node_modules/` or `.DS_Store` files
> - Keep the project root clean (don’t nest inside another folder)
> - Always run commands from the project root

---

## 🧪 Bun Dev Commands

| Command               | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `bun install`         | Install dependencies                                                 |
| `bun dev`             | Launch local dev server at [`localhost:4321`](http://localhost:4321) |
| `bun run build`       | Build the project for production in `./dist/`                        |
| `bun run preview`     | Preview the production build locally                                 |
| `bun astro add`       | Add integrations like TailwindCSS, Vercel, etc.                      |
| `bun astro -- --help` | Show available Astro CLI commands                                    |

---

## 📚 Useful Resources

- 📘 [Astro Documentation](https://docs.astro.build)
- 💬 [Astro Discord](https://astro.build/chat)
- ⚡ [Bun Documentation](https://bun.sh/docs)

---

## 🛠️ About

This template was crafted and extended with passion by [**Samar Abdelhameed**](https://github.com/samarabdelhameed).  
Feel free to fork, improve, and build something amazing 🚀

---

> Built with ❤️ using Astro & Bun
