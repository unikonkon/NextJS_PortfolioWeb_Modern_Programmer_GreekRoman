# 🏛️ Portfolio Techniques: Modern × Programmer × Classical Greek-Roman

> เทคนิคการออกแบบ Portfolio ที่ผสมผสาน 3 สไตล์:
> - **Modern** — สะอาด ทันสมัย เน้น composition
> - **Programmer** — Terminal, Code Editor, Technical aesthetics
> - **Classical Greek-Roman** — ความงามแบบกรีก-โรมัน หินอ่อน เสาโรมัน ประติมากรรม

---

## 🎭 Design Concept: "Digital Renaissance"

```
"Where ancient wisdom meets modern code"
"โค้ดที่สลักบนหินอ่อน"
```

### Core Philosophy

| กรีก-โรมัน | Programmer | ผลลัพธ์ |
|-----------|------------|--------|
| Marble texture | Dark terminal | Marble terminal window |
| Gold accents | Syntax highlighting | Golden code syntax |
| Columns | Sidebar/Layout | Classical column layout |
| Sculptures | Profile image | Statue-style portrait |
| Scrolls | Documentation | Papyrus code blocks |
| Laurel wreath | Success badges | Achievement crowns |

---

## 🎨 Color Palette: "Olympian Code"

### Primary Colors

| สี | Hex Code | ชื่อ | การใช้งาน |
|---|----------|-----|----------|
| **Marble White** | `#f5f5f0` | Carrara | พื้นหลังหลัก |
| **Marble Cream** | `#faf7f2` | Parian | พื้นหลังรอง |
| **Obsidian Black** | `#1a1a1a` | Volcanic | Terminal background |
| **Pantheon Gray** | `#2d2d2d` | Temple Stone | Code blocks |
| **Olympic Gold** | `#d4af37` | Chrysos | Accent หลัก / Highlights |
| **Bronze** | `#cd7f32` | Chalkos | Accent รอง |
| **Patina Green** | `#4a7c59` | Verdigris | Success / Links |
| **Wine Red** | `#722f37` | Burgundy | Error / Important |
| **Aegean Blue** | `#1e3a5f` | Mediterranean | Secondary accent |
| **Terracotta** | `#c67b5c` | Clay | Warm accent |

### Dark Mode: "Night at the Colosseum"

| สี | Hex Code | การใช้งาน |
|---|----------|----------|
| **Nero Black** | `#0a0a0a` | พื้นหลังหลัก |
| **Charcoal** | `#1c1c1c` | Cards/Sections |
| **Ash Gray** | `#2a2a2a` | Code blocks |
| **Ivory** | `#fffff0` | ข้อความหลัก |
| **Pale Gold** | `#ffd700` | Accent highlights |

### Gradient Combinations

```css
/* Golden Hour */
--golden-hour: linear-gradient(135deg, #d4af37 0%, #f5e6a3 50%, #cd7f32 100%);

/* Marble Vein */
--marble-vein: linear-gradient(45deg, #f5f5f0 0%, #e8e8e3 25%, #f5f5f0 50%, #dcdcd7 75%, #f5f5f0 100%);

/* Patina */
--patina: linear-gradient(180deg, #cd7f32 0%, #4a7c59 100%);

/* Twilight Temple */
--twilight-temple: linear-gradient(180deg, #1e3a5f 0%, #722f37 100%);

/* Papyrus */
--papyrus: linear-gradient(180deg, #f5e6c8 0%, #e8d4a8 100%);
```

---

## 🔤 Typography

### Font Pairing

| ประเภท | Font แนะนำ | ลักษณะ |
|--------|-----------|--------|
| **Display/Hero** | Cinzel, Trajan Pro, Playfair Display | Classical serif, Roman inscriptions |
| **Headings** | Cormorant Garamond, EB Garamond | Elegant serif |
| **Body** | Lora, Source Serif Pro | Readable serif |
| **Code/Terminal** | JetBrains Mono, Fira Code | Modern monospace |
| **Accent/Labels** | Spectral SC, Cinzel Decorative | Small caps, classical |
| **Greek Text** | GFS Didot, Noto Serif | สำหรับอักษรกรีก |

### Typography Hierarchy

```
HERO TITLE          → Cinzel, 72-120px, uppercase, letter-spacing: 0.2em
Section Heading     → Cormorant Garamond, 48-64px, normal
Subsection          → Playfair Display, 32-40px, italic
Body Text           → Lora, 18-20px, line-height: 1.8
Code                → JetBrains Mono, 14-16px
Caption/Meta        → Spectral SC, 12-14px, small-caps
```

### Typography Features

```
✓ Roman numerals สำหรับ numbering (I, II, III, IV, V)
✓ Small caps สำหรับ labels
✓ Drop caps ตัวอักษรแรกของ paragraph
✓ Ligatures สำหรับ code (=>, ===)
✓ Greek letters สำหรับ decorative (α, β, γ, Ω)
✓ Classical quotation marks « »
```

---

## ✨ Core Techniques

### 1. 🏛️ Marble Terminal Window

| Element | รายละเอียด |
|---------|-----------|
| Window frame | ขอบหินอ่อนแทน chrome ปกติ |
| Column borders | เสา Ionic/Corinthian ด้านข้าง |
| Title bar | จารึกแบบโรมัน + ปุ่มสีทอง |
| Background | Marble texture หรือ dark obsidian |
| Syntax colors | Gold, bronze, patina green |
| Scrollbar | แบบ scroll papyrus |

```
╔═══════════════════════════════════════════════════════════╗
║  🏛️                TERMINVS CLAVDII                    ⚱️ ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  $ echo "Veni, Vidi, Vici"                               ║
║  > I came, I saw, I coded                                ║
║                                                           ║
║  $ cat skills.scroll                                      ║
║  > React      ████████████████████ C                     ║
║  > Node.js    █████████████████░░░ XC                    ║
║  > TypeScript ██████████████░░░░░░ LXXX                  ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### 2. 📜 Papyrus Code Blocks

| Element | รายละเอียด |
|---------|-----------|
| Background | Papyrus/parchment texture |
| Border | Aged, torn edges |
| Line numbers | Roman numerals (I, II, III...) |
| Syntax | Gold keywords, bronze strings |
| Scroll effect | Curl ที่มุม |
| Seal | Wax seal สำหรับ "verified code" |

```
┌─────────────────────────────────────────────────┐
│ ╭───────────────────────────────────────────╮   │
│ │  📜 codex_maximus.jsx                    │   │
│ ├───────────────────────────────────────────┤   │
│ │   I   const Hero = () => {               │   │
│ │  II     return (                         │   │
│ │ III       <section className="olympus">  │   │
│ │  IV         <h1>Ave, Developer</h1>      │   │
│ │   V       </section>                     │   │
│ │  VI     );                               │   │
│ │ VII   };                                 │   │
│ ╰───────────────────────────────────────────╯   │
│                                          🔱     │
└─────────────────────────────────────────────────┘
```

### 3. 🏺 Classical Grid Layout

| Element | รายละเอียด |
|---------|-----------|
| Golden Ratio | Layout ตามสัดส่วน 1:1.618 |
| Column system | 12 columns แบบ classical orders |
| Symmetry | Balance แบบวิหารกรีก |
| Negative space | เว้นว่างแบบ museum gallery |
| Frame borders | กรอบแบบ Greek key pattern |

### 4. 🗿 Sculpture Profile Section

| Element | รายละเอียด |
|---------|-----------|
| Profile image | ประมวลผลให้ดูเป็น sculpture |
| Pedestal | ฐานรูปปั้น |
| Lighting | Dramatic museum lighting |
| Nameplate | แผ่นจารึกชื่อ |
| Laurel frame | กรอบใบมะกอก |

### 5. 🏆 Achievement & Badge System

| Badge Type | Design |
|------------|--------|
| Skills | เหรียญโรมัน |
| Certifications | Laurel wreath |
| Years experience | Roman numerals |
| Project count | Trophy/amphora |
| GitHub stars | Golden stars |

---

## 🎬 Animations

### Essential Animations

| Animation | ใช้ตรงไหน | Style |
|-----------|----------|-------|
| **Chisel Typing** | Hero text | ตัวอักษรสลักทีละตัว |
| **Scroll Unroll** | Code blocks | ม้วน papyrus คลี่ออก |
| **Column Rise** | Page load | เสาขึ้นมาจากพื้น |
| **Statue Reveal** | Profile | แสงส่องไปที่รูปปั้น |
| **Gold Shimmer** | Hover accents | ทองแวววาว |
| **Marble Crack** | Loading | รอยแตกบนหินอ่อน |
| **Torch Flicker** | Ambient | เปลวไฟกระพริบ |
| **Coin Flip** | Success | เหรียญหมุน |

### Animation Timing

```
- Chisel typing: 150ms per character (slower, deliberate)
- Scroll unroll: 0.8s ease-out
- Column rise: 1.2s cubic-bezier
- Gold shimmer: 2s infinite
- Hover transitions: 0.4s ease
- Page transitions: 0.6s ease-in-out
```

### Keyframes Reference

```
@keyframes chisel
  0%: opacity 0, transform scale(1.2)
  50%: opacity 0.5
  100%: opacity 1, transform scale(1)

@keyframes unroll
  0%: transform rotateX(90deg), height 0
  100%: transform rotateX(0), height auto

@keyframes shimmer
  0%: background-position -200%
  100%: background-position 200%

@keyframes flicker
  0%, 100%: opacity 1
  50%: opacity 0.8
  25%, 75%: opacity 0.9
```

---

## 🖼️ Layout & Components

### Navigation

| Style | รายละเอียด |
|-------|-----------|
| **Temple Header** | Navigation แบบหน้าวิหาร มีเสา 2 ข้าง |
| **Frieze Menu** | แถบ menu แบบ frieze (แถบแกะสลัก) |
| **Scroll Tabs** | Tabs เป็น scroll papyrus |
| **Coin Menu** | เหรียญโรมันเป็น menu items |
| **Arch Frame** | โค้งแบบซุ้มประตูโรมัน |

```
            ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
         ╱                                      ╲
        ╱    I · DOMVS    II · OPERA    III · SCRIBE    ╲
       ╱____________________________________________╲
      ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
      ║                                            ║
      🏛️                                            🏛️
```

### Hero Section: "The Grand Entrance"

```
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║    🏛️                                                          🏛️    ║
║    ║                                                            ║    ║
║    ║           ╭────────────────────────────────╮               ║    ║
║    ║           │                                │               ║    ║
║    ║           │     A  V  E                    │               ║    ║
║    ║           │                                │               ║    ║
║    ║           │     D E V E L O P E R         │               ║    ║
║    ║           │                                │               ║    ║
║    ║           │  ─────────── ✦ ───────────    │               ║    ║
║    ║           │                                │               ║    ║
║    ║           │  Crafting digital empires     │               ║    ║
║    ║           │  with ancient wisdom and      │               ║    ║
║    ║           │  modern code                  │               ║    ║
║    ║           │                                │               ║    ║
║    ║           │  $ ./build_empire.sh▌         │               ║    ║
║    ║           │                                │               ║    ║
║    ║           │  [🏛️ Enter Temple]  [📜 Scrolls] │               ║    ║
║    ║           │                                │               ║    ║
║    ║           ╰────────────────────────────────╯               ║    ║
║    ║                                                            ║    ║
║    ║                        🔱                                  ║    ║
║    ╚══════════════════════════════════════════════════════════╝    ║
║                                                                      ║
║  ═══════════════════════════════════════════════════════════════    ║
║              « Veni · Vidi · Codi »                                  ║
╚══════════════════════════════════════════════════════════════════════╝
```

#### Hero Options

| Style | Description |
|-------|-------------|
| **Temple Entrance** | เสาโรมัน + terminal ตรงกลาง |
| **Marble Bust** | รูปปั้นครึ่งตัว + bio |
| **Ancient Scroll** | Papyrus ที่คลี่ออก |
| **Colosseum View** | Terminal ใน arena |
| **Philosophy Quote** | คำคม + code ด้านล่าง |

### About Section: "The Chronicle"

| Format | ตัวอย่าง |
|--------|---------|
| **Stone Tablet** | ข้อมูลจารึกบนหิน |
| **Philosopher Bio** | แนะนำตัวแบบนักปรัชญา |
| **Museum Plaque** | ป้ายพิพิธภัณฑ์ |
| **Scroll Document** | เอกสารม้วน papyrus |

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    ╭─────────────╮                      │
│                    │             │                      │
│                    │   🗿        │                      │
│                    │   Bust      │                      │
│                    │             │                      │
│                    ╰─────────────╯                      │
│                                                         │
│              D E V E L O P E R I V S                    │
│                  M A X I M V S                          │
│                                                         │
│         ─────────────── ✦ ───────────────              │
│                                                         │
│    "One who builds digital temples with                 │
│     the precision of Roman engineering                  │
│     and the wisdom of Greek philosophy"                 │
│                                                         │
│    ┌──────────────────────────────────────┐            │
│    │ ORIGIN    : Bangkok, Kingdom of Siam │            │
│    │ CRAFT     : Full Stack Development   │            │
│    │ YEARS     : VII years of service     │            │
│    │ STATUS    : ⚱️ Accepting commissions │            │
│    └──────────────────────────────────────┘            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Skills Section: "The Armory"

| Style | รายละเอียด |
|-------|-----------|
| **Roman Shields** | แต่ละ skill เป็นโล่ |
| **Medal Collection** | เหรียญเรียงแบบพิพิธภัณฑ์ |
| **Weapon Rack** | Skills เป็นอาวุธต่างๆ |
| **Temple Pillars** | เสาแต่ละต้น = 1 skill |
| **Mosaic Display** | โมเสกแสดง tech stack |

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║                    A R M A M E N T A                       ║
║                    ═══════════════                         ║
║                                                            ║
║     ┌─────────┐    ┌─────────┐    ┌─────────┐            ║
║     │  ⚔️     │    │  🛡️     │    │  🏹     │            ║
║     │ React   │    │ Node.js │    │ TypeS.  │            ║
║     │ ████████│    │ ███████ │    │ ██████  │            ║
║     │   C     │    │  XCV    │    │  XC     │            ║
║     └─────────┘    └─────────┘    └─────────┘            ║
║                                                            ║
║     ┌─────────┐    ┌─────────┐    ┌─────────┐            ║
║     │  🗡️     │    │  ⚓     │    │  🔱     │            ║
║     │ Python  │    │ Docker  │    │ GraphQL │            ║
║     │ █████   │    │ ████    │    │ ████    │            ║
║     │  LXXX   │    │  LXX    │    │  LXV    │            ║
║     └─────────┘    └─────────┘    └─────────┘            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### Projects Section: "The Conquests"

| Style | รายละเอียด |
|-------|-----------|
| **Campaign Cards** | โปรเจกต์ = Campaign ที่พิชิต |
| **Trophy Room** | ห้องถ้วยรางวัล |
| **Map Territories** | แผนที่อาณาจักร |
| **Monument Gallery** | อนุสาวรีย์แต่ละโปรเจกต์ |

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    C O N Q V E S T S                        │
│                    ════════════════                         │
│                                                             │
│   ╭───────────────────────────────────────────────────╮    │
│   │                                                   │    │
│   │   🏛️ OPVS MAGNVM I                               │    │
│   │   ══════════════════                              │    │
│   │                                                   │    │
│   │   E-Commerce Emporium                            │    │
│   │   ─────────────────                              │    │
│   │                                                   │    │
│   │   A grand marketplace built with React           │    │
│   │   and Node.js, serving X merchants               │    │
│   │                                                   │    │
│   │   Tech: ⚛️ React  🟢 Node  🐘 PostgreSQL         │    │
│   │                                                   │    │
│   │   ⭐ CXXIV stars  ⎇ XLV forks                    │    │
│   │                                                   │    │
│   │   [📜 View Codex]  [🔱 Live Demo]                │    │
│   │                                                   │    │
│   ╰───────────────────────────────────────────────────╯    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Experience/Timeline: "The Odyssey"

| Style | รายละเอียด |
|-------|-----------|
| **Journey Map** | เส้นทางการเดินทาง |
| **Era Timeline** | ยุคสมัยต่างๆ |
| **Column Timeline** | เสาเรียงตาม timeline |
| **Conquest Path** | เส้นทางการพิชิต |

```
            T H E   O D Y S S E Y
            ═══════════════════════

    MMXXIV ─────●───── Senior Architect
                │      @ Digital Rome
                │      "Leading legions of code"
                │
    MMXXII ─────●───── Full Stack Centurion
                │      @ Tech Republic
                │      "Conquered the frontend"
                │
    MMXX ───────●───── Junior Tribune
                │      @ Startup Agora
                │      "First steps in the arena"
                │
    🏛️ ─────────●───── The Beginning
                       "Lorem ipsum dolor sit amet"
```

### Contact Section: "The Senate"

| Style | รายละเอียด |
|-------|-----------|
| **Petition Form** | ฟอร์มขอเข้าพบ |
| **Messenger Scroll** | ส่งข้อความแบบม้วนหนังสือ |
| **Temple Offering** | ถวายข้อความ |
| **Senate Request** | ร้องขอต่อสภา |

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                  P E T I T I O N                           │
│            ─────────── ⚱️ ───────────                      │
│                                                             │
│    "Seek audience with the developer"                       │
│                                                             │
│    ┌───────────────────────────────────────────────────┐   │
│    │ Your Name:                                        │   │
│    │ ┌─────────────────────────────────────────────┐   │   │
│    │ │ Marcus Aurelius▌                            │   │   │
│    │ └─────────────────────────────────────────────┘   │   │
│    │                                                   │   │
│    │ Your Message:                                     │   │
│    │ ┌─────────────────────────────────────────────┐   │   │
│    │ │                                             │   │   │
│    │ │ I seek your expertise in building...       │   │   │
│    │ │                                             │   │   │
│    │ └─────────────────────────────────────────────┘   │   │
│    │                                                   │   │
│    │         [📜 Send Petition]                        │   │
│    │                                                   │   │
│    └───────────────────────────────────────────────────┘   │
│                                                             │
│    ─────────────────────────────────────────────────────   │
│                                                             │
│    📧 tribune@developer.temple                             │
│    📍 Bangkok, Kingdom of Siam                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Micro-interactions

| Interaction | Effect |
|-------------|--------|
| **Hover Card** | Gold border glow + slight lift |
| **Hover Link** | Underline grows like vine |
| **Hover Button** | Marble texture reveals |
| **Click Button** | Coin stamp/press effect |
| **Scroll** | Parallax columns + marble layers |
| **Code Copy** | "Transcribed to papyrus! 📜" |
| **Form Submit** | "Petition sent to the Senate! 🏛️" |
| **Error** | "By Jupiter! An error occurred ⚡" |
| **Success** | "Victoria! ✨" + laurel animation |
| **Loading** | Hourglass / sundial spinner |

---

## 🌟 Decorative Elements

### Borders & Frames

| Element | ลักษณะ |
|---------|--------|
| **Greek Key (Meander)** | ขอบแบบ meandering pattern |
| **Laurel Border** | กรอบใบมะกอก |
| **Acanthus Scrolls** | ลายใบ acanthus |
| **Egg-and-Dart** | ลายไข่และลูกศร |
| **Column Dividers** | เส้นแบ่งเป็นเสา |
| **Frieze Pattern** | แถบลายกรีก |

```
Greek Key Pattern:
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ │

Laurel Border:
🌿═══════════════════════════════🌿

Column Divider:
║                                 ║
```

### Icons & Symbols

| Symbol | ใช้สำหรับ |
|--------|----------|
| 🏛️ | Home/Main |
| 📜 | Documentation/Code |
| ⚱️ | About/Profile |
| 🔱 | Special/Featured |
| ⚔️ | Skills/Tools |
| 🏆 | Achievements |
| 🌿 | Success |
| ⚡ | Error/Warning |
| 🗿 | Portrait |
| 🎭 | Creative work |
| ⏳ | Loading |
| 🪙 | Currency/Stats |

### Roman Numerals Reference

```
I=1, V=5, X=10, L=50, C=100, D=500, M=1000

Examples:
- 85% → LXXXV
- 2024 → MMXXIV
- 100 commits → C commits
- 5 years → V years
- Section 3 → III
```

### Latin Phrases for UI

| Phrase | Meaning | ใช้สำหรับ |
|--------|---------|----------|
| "Veni, Vidi, Codi" | I came, I saw, I coded | Tagline |
| "Ave" | Hello/Hail | Greeting |
| "Carpe Codem" | Seize the code | CTA |
| "Opus Magnum" | Great work | Featured project |
| "Ex Nihilo" | From nothing | New project |
| "Ad Astra" | To the stars | Success |
| "Eureka" | I found it | Search |
| "Fiat Lux" | Let there be light | Dark mode toggle |
| "Memento Mori" | Remember death | 404 page |
| "Gloria" | Glory | Achievement |

---

## 📱 Responsive Design

| Breakpoint | ปรับแต่ง |
|------------|---------|
| **Desktop (1200px+)** | Full columns, all decorations |
| **Tablet (768-1199px)** | 2 columns, simplified borders |
| **Mobile (<768px)** | Single column, minimal ornaments |

### Mobile Optimizations

```
✓ Simplify Greek key patterns
✓ Reduce column decorations
✓ Stack sections vertically
✓ Smaller marble textures
✓ Touch-friendly buttons
✓ Hamburger menu (scroll icon)
✓ Essential animations only
```

---

## 🎯 Do's and Don'ts

### ✅ ควรทำ

| Do | เหตุผล |
|----|--------|
| Use serif fonts for headers | ให้ความรู้สึก classical |
| Subtle gold accents | หรูหราไม่ over |
| Marble/stone textures | เพิ่ม depth |
| Consistent Roman theme | สร้าง identity ชัด |
| Balance ornate + minimal | ไม่วุ่นวายเกิน |
| High contrast text | อ่านง่าย |
| Meaningful Latin phrases | ไม่ใช่แค่ random |

### ❌ หลีกเลี่ยง

| Don't | เหตุผล |
|-------|--------|
| Too many gold elements | ดู gaudy/ฉูดฉาด |
| Overuse ornaments | รกตา |
| Hard-to-read fonts | Accessibility |
| All caps everywhere | ยากอ่าน |
| Heavy textures | โหลดช้า |
| Random Greek/Latin | ดูไม่จริงใจ |
| Cheesy clip art | ทำลาย aesthetic |

---

## 🔧 Technical Features

| Feature | รายละเอียด |
|---------|-----------|
| **Theme Toggle** | "Fiat Lux" (Light) / "Nox" (Dark) |
| **Language** | Optional Latin UI mode |
| **Keyboard Nav** | Roman numeral shortcuts (I, II, III) |
| **Console Easter Egg** | ASCII temple + Latin greeting |
| **404 Page** | "Hic sunt dracones" (Here be dragons) |
| **Loading** | Sundial/hourglass animation |
| **Print Style** | Clean parchment print version |

### Console Easter Egg

```javascript
console.log(`
       🏛️ AVE, DEVELOPER! 🏛️
    ╔════════════════════════════╗
    ║                            ║
    ║   "Veni, Vidi, Codi"       ║
    ║                            ║
    ║   You found the temple     ║
    ║   of source code.          ║
    ║                            ║
    ║   > hire()                 ║
    ║   > skills()               ║
    ║   > secretum()             ║
    ║                            ║
    ╚════════════════════════════╝
`);
```

---

## 📋 Section Checklist

```
□ Navigation    → Temple header / Frieze menu
□ Hero          → Grand entrance + terminal
□ About         → Marble bust / Stone tablet
□ Skills        → Armory / Medal collection
□ Projects      → Conquests / Trophy room
□ Experience    → Odyssey timeline
□ Testimonials  → Senate endorsements (optional)
□ Blog          → Codex / Scrolls (optional)
□ Contact       → Petition form
□ Footer        → Inscription + social icons
□ 404           → Lost in the ruins
□ Loading       → Sundial spinner
```

---

## 🎨 Visual Summary

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║    🏛️ ════════════ CLAVDIVS · DEVELOPER ════════════ 🏛️                  ║
║    ║        I·DOMVS    II·OPERA    III·ARMAMENTA    IV·SCRIBE      ║    ║
║    ║══════════════════════════════════════════════════════════════║    ║
║                                                                          ║
║                    ┌────────────────────────────────┐                    ║
║                    │  🔴  🟡  🟢  terminvs          │                    ║
║                    ├────────────────────────────────┤                    ║
║                    │                                │                    ║
║                    │  $ whoami                      │                    ║
║                    │  > Fullstack Centurion        │                    ║
║                    │                                │                    ║
║                    │  $ cat motto.txt              │                    ║
║                    │  > "Veni, Vidi, Codi"▌        │                    ║
║                    │                                │                    ║
║                    │  [🏛️ Enter]  [📜 Scrolls]      │                    ║
║                    │                                │                    ║
║                    └────────────────────────────────┘                    ║
║                                                                          ║
║                            ─────── ⚱️ ───────                            ║
║                                                                          ║
║    ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐               ║
║    │⚔️ React │   │🛡️ Node  │   │🏹 TS    │   │🗡️ Python│               ║
║    │  ████   │   │  ████   │   │  ███    │   │  ██     │               ║
║    │   C     │   │  XCV    │   │  XC     │   │  LXX    │               ║
║    └─────────┘   └─────────┘   └─────────┘   └─────────┘               ║
║                                                                          ║
╟──────────────────────────────────────────────────────────────────────────╢
║   🌿 MMXXIV · Crafted in Bangkok · « Carpe Codem » · 📧 tribune@dev.io  ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🛠️ Recommended Tech Stack

### Frontend

| Tool | Purpose |
|------|---------|
| **Next.js / Astro** | Framework |
| **Tailwind CSS** | Base styling |
| **GSAP / Framer Motion** | Animations |
| **CSS Custom Properties** | Theme variables |

### Assets & Resources

| Resource | Purpose |
|----------|---------|
| **Google Fonts** | Cinzel, Cormorant, JetBrains Mono |
| **Subtle Patterns** | Marble textures |
| **Hero Patterns** | Greek key SVGs |
| **Flaticon** | Classical icons |

### Libraries

```json
{
  "dependencies": {
    "framer-motion": "^10.x",
    "gsap": "^3.x",
    "@fontsource/cinzel": "^5.x",
    "@fontsource/cormorant-garamond": "^5.x"
  }
}
```

---

## 📚 Resources & Inspiration

### Typography
- [Cinzel](https://fonts.google.com/specimen/Cinzel) - Roman inscriptions
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) - Elegant serif
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - Code font

### Color Inspiration
- Roman frescoes color palettes
- Greek pottery (black-figure, red-figure)
- Renaissance paintings

### Patterns
- [Hero Patterns](https://heropatterns.com/) - Greek key SVGs
- [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) - Marble textures

### Reference Sites
- [Vatican Museums](https://www.museivaticani.va/)
- [The Met](https://www.metmuseum.org/) - Classical art
- [British Museum](https://www.britishmuseum.org/)

---

## 🎭 Theme Variations

| Variation | Description |
|-----------|-------------|
| **Carrara Marble** | White marble + gold, very clean |
| **Pompeii Red** | Terracotta + black, bold |
| **Aegean Blue** | Mediterranean blue + white |
| **Bronze Age** | Bronze + dark wood tones |
| **Night Senate** | Dark mode, obsidian + gold |

---

## ✍️ Final Tips

```
I.   Balance is sacred
     → Classical ≠ cluttered

II.  Typography is your pillar
     → Invest time in font pairing

III. Gold is precious
     → Use sparingly for maximum impact

IV.  Textures add depth
     → But optimize file sizes

V.   Latin with purpose
     → Research meanings, avoid gibberish

VI.  Test across devices
     → Roman numerals must be readable

VII. Performance is glory
     → Heavy ornaments = slow temples
```

---

## 🚀 Quick Start Phases

```
Phase I: Foundation
├── Color palette setup
├── Typography selection
└── Basic layout grid (Golden Ratio)

Phase II: Classical Elements
├── Marble textures
├── Column components
├── Greek key borders
└── Basic styling

Phase III: Programmer Touch
├── Terminal components
├── Code block styling
├── Syntax highlighting (gold theme)
└── GitHub integration

Phase IV: Animation & Polish
├── Chisel typing effect
├── Scroll reveals
├── Hover interactions
└── Page transitions

Phase V: Final Glory
├── Responsive testing
├── Performance optimization
├── Easter eggs
└── Launch! 🏛️
```

---

> 🏛️ *"In code, as in architecture, the strength lies in the foundation, the beauty in the details, and the legacy in the impact."*

---

*Crafted with ⚱️ by Claude AI | Anno MMXXIV*

```
        ╭───────────────────────────╮
        │                           │
        │   « FINIS CORONAT OPUS »  │
        │   "The end crowns the work"│
        │                           │
        ╰───────────────────────────╯
                    🏛️
               ╱    │    ╲
              ╱     │     ╲
             🏛️     │     🏛️
                    │
            ════════════════
```
