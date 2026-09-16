# LiquidCalc

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows%2011-0078d4.svg)]()
[![Built with Tauri](https://img.shields.io/badge/Built%20with-Tauri%20v2-24c8db.svg)](https://tauri.app)

A sleek, transparent desktop calculator inspired by **Frutiger Aero** and **Liquid Glass** aesthetics.

LiquidCalc combines the nostalgia of mid-2000s glossy skeuomorphism with modern fluid UI design—featuring soft glowing gradients, realistic specular glass highlights, backdrop blur, and smooth organic animations, all inside a frameless, fully transparent desktop window powered by **Tauri**.

---

## ⚠️ Display & Background Notice

> [!IMPORTANT]
> **Recommended for use on dark, colorful, or patterned backgrounds.**  
> LiquidCalc relies heavily on transparent glassmorphism effects and light specular highlights. Using this app against a **pure white or extremely bright background is not recommended**, as the translucent borders and display elements may become hard to read due to low contrast. For the best visual experience and readability, place the calculator over darker wallpapers, vibrant colors, or your typical desktop workspace.

---

## 🖥️ System Requirements

- **Operating System:** Windows 11 (designed and tested for Windows 11 desktop composition and window transparency).
- **Display:** 100% or higher scaling recommended.

---

## 📥 Installation

Download the latest installer (`.exe` or `.msi`) from the [Releases](https://github.com/Ma5a10/LiquidCalc/releases) page and run the setup.

> [!NOTE]
> **Windows SmartScreen Warning**  
> Since this application is an open-source project without a paid commercial code-signing certificate, Windows Defender SmartScreen may display a warning stating **"Windows protected your PC"** when launching the installer.
>
> To continue installation:
> 1. Click **More info**.
> 2. Click **Run anyway**.

---

## ✨ Features

- **🫧 Frutiger Aero & Liquid Glass Aesthetic:**
  - Organic morphing color blobs that gently animate behind the glass pane.
  - Realistic glassmorphic body with layered specular borders and backdrop blur.
  - Tactile, glossy buttons with subtle 3D hover and click animations.
- **🪟 Frameless Floating Window:**
  - Completely borderless, transparent window that seamlessly sits on top of your desktop.
  - Custom minimal window control buttons (Minimize & Close).
- **🖱️ Draggable Anywhere:**
  - Click and drag anywhere on the calculator's body to move it smoothly across your desktop.
- **⌨️ Comprehensive Keyboard Support:**
  - Full keyboard and numpad interaction with live visual key-press feedback.

---

## ⌨️ Keyboard Shortcuts

| Key                   | Action                 |
| :-------------------- | :--------------------- |
| `0` - `9`             | Input numbers          |
| `.`                   | Decimal point          |
| `+`                   | Addition               |
| `-`                   | Subtraction            |
| `*`                   | Multiplication (`✕`)   |
| `/`                   | Division (`÷`)         |
| `Enter` or `=`        | Calculate result       |
| `Escape` or `c` / `C` | All Clear (`AC`)       |
| `Backspace`           | Delete last digit      |
| `%`                   | Percentage calculation |

---

## 🛠️ Development & Building

### Prerequisites

Ensure you have the following installed on your machine:
- [Rust](https://www.rust-lang.org/tools/install) (stable toolchain)
- [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/)
- Microsoft C++ Build Tools (via Visual Studio Build Tools)

### Setup & Run (Development)

1. Clone this repository:
   ```bash
   git clone https://github.com/Ma5a10/LiquidCalc.git
   cd LiquidCalc/liquid-calc
   ```

2. Install frontend dependencies:
   ```bash
   bun install
   # or: npm install
   ```

3. Start the application in development mode:
   ```bash
   bun run tauri dev
   # or: npm run tauri dev
   ```

### Building for Production

To create an optimized installer / executable:

```bash
bun run tauri build
# or: npm run tauri build
```

The output binaries will be generated under `liquid-calc/src-tauri/target/release/`.

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.
