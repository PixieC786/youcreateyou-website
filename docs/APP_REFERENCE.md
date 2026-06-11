# You Create You — Complete App Reference

## App Structure

The app lives at **app.youcreateyou.life**. It is a PWA with a Supabase backend for trial/subscription gating. All user data (reflections, journals, frequency history, seeds, scenes) lives in **localStorage**. The visual language is a dark cosmological aesthetic — near-black background (`#07050f`), Cormorant Garamond serif, DM Mono monospace, and a single accent color: **`rgba(200,138,255)`** (violet-purple).

---

## Home Screen

The home screen (`index.html`) is an orb-based navigation hub. A central glowing orb has radial nodes:

- **FREQ** → `frequency_checkin.html`
- **SEND LOVE** → `send_love.html`
- **TOOLS** → `tools_hub.html`
- **JOURNEY** → `my_journey.html`
- **JOURNAL** → `journal.html`
- **MOMENTS** → moments feature
- **RIGHT NOW** → present state tool

Two primary CTAs:
- **"HOW DO I FEEL NOW?"** → frequency check-in
- **"STEP INTO THE CREATOR FIELD"** → tools hub

Subscription/trial is gated via Supabase `getTrialStatus()`. Non-subscribers are redirected to `index.html?gate=1`.

---

## FREQ — My Frequency Today (`frequency_checkin.html`)

**What it is:** A 45-second phone-camera HRV (heart rate variability) reading that maps your physiological state to a consciousness level.

**How it works:**
1. Intro screen — tap **Begin ✦**
2. Camera screen — place finger over back camera lens, tap "My finger is in place ✦"
3. 45-second countdown with waveform canvas and circular progress ring
4. Processing screen — animated canvas
5. Result screen — shows your frequency number, name, subtitle, comparison chip (up/same/down from last reading)

**The 8 consciousness levels it maps to:**

| Level | Range | Hz | Name | Subtitle |
|---|---|---|---|---|
| 75 | 0–20 | 396 | Grief | The Tender Wound |
| 100 | 20–35 | 417 | Fear | The Body's Warning |
| 175 | 35–50 | 528 | Pride | The Last Wall |
| 200 | 50–62 | 528 | Courage | The Opening |
| 310 | 62–73 | 639 | Willingness | The Turning Point |
| 350 | 73–83 | 639 | Acceptance | The Clearing |
| 500 | 83–92 | 852 | Love | The Field |
| 600 | 92–100 | 963 | Peace | The Stillness |

Each result shows:
- Frequency number (large, in level color)
- "Truths" — 3 I AM statements specific to that level
- A message from Natasha (the author's voice — personal, witnessing, never clinical)
- A recommended YCY tool to use next
- Previous reading comparison chip
- Shareable frequency card
- **localStorage key:** `ycy_frequency_readings` (up to 90 readings)
- Recommended cadence: weekly

---

## SEND LOVE (`send_love.html`)

**What it is:** A single-tap ritual for sending love into the world.

**How it works:**
1. A pulsing circular send button (animated `returnPulse` glow, 3s)
2. Tap once — a ring expands outward (`ringExpand` animation, 2s, grows to 90vw)
3. Text fades in: "Your love just reached the world"
4. Personal count appears: how many times you've sent love
5. Global count appears: worldwide total love waves sent (Supabase counter)
6. Share button + CTA link to Live Love Constellation
7. Leaderboard tab — popcat-style slide-up panel showing top senders

**localStorage:** personal send count persisted locally; global count via Supabase.

---

## Live Love Constellation (`world_love.html`)

**What it is:** A live interactive world map of every love wave ever sent.

- Drag to pan, pinch/scroll to zoom
- Each love wave appears as a pulsing node on the world map
- Tap any node to see it
- "Always moving" — real-time updates
- Shareable

---

## Tools Hub (`tools_hub.html`)

The hub organises all 20 tools across 4 transformation phases. Features:
- Phase tab navigation with description panel for each phase
- 4-column journey map grid
- Rotating truth quotes (10 quotes, every 8 seconds)
- Sacred geometry canvas background (Flower of Life, animated)
- Foundation teachings section (6 quotes)
- Daily Practice banner: **"Breathe · Read · Create · Gratitude · Affirm · Meditate · Embody · Seal · Complete"**

---

## The 4 Phases

### Phase 01 — See Clearly
*"You cannot change what you cannot see. These tools illuminate the patterns, beliefs, and frequencies that shape your reality — often invisibly."*

**Tools:** Ancient Wisdom · Reality Architect · Frequency Tuner · The Observer

### Phase 02 — Release & Discover
*"You cannot build a new life on top of unexamined fear. These tools guide you through the process of releasing what no longer serves — and discovering who you are without it."*

**Tools:** Fear Alchemist · Mind-Body Connection · Ego Alchemy · Identity Rebirth · The Love You Are · Purpose Compass

### Phase 03 — Install the New Reality
*"Much of your life is shaped by patterns operating below conscious awareness. These tools work directly with the subconscious to install new beliefs, visions, and identities at the deepest level."*

**Tools:** New Chapter · Subconscious Reprogrammer · Quantum Creation · Visualisation Meditation

### Phase 04 — Signal & Nurture Daily
*"Transformation is not a single event. It is a daily practice. These tools are your daily signal — gratitude, coherence, intention, joy, and the energy you choose to embody."*

**Tools:** Gratitude Portal · Coherence Lab · Manifestation Garden · The Feminine Way · The Masculine Way · Fun Is the Frequency

---

## Tool 01 — Ancient Wisdom (`ancient_wisdom.html`)

**Phase:** See Clearly

**What it does:** Delivers one wisdom teaching per day from 9 ancient traditions, with reflection capture.

**Daily card:** determined by `Math.floor(Date.now() / 86400000) % 16` — rotates through 16 cards.

**The 16 wisdom cards (tradition → teaching):**

| # | Tradition | Symbol | Teaching Focus |
|---|---|---|---|
| 1 | Hermeticism | ✦ | As within, so without — inner state creates outer reality |
| 2 | Taoism | ☯ | Wu wei — effortless action, flowing with what is |
| 3 | Buddhism | ☸ | Impermanence — attachment to fixed self is the source of suffering |
| 4 | Vedanta | ॐ | Atman — the self that watches is not the self that suffers |
| 5 | Kabbalah | ✡ | Ein Sof — the infinite light within |
| 6 | Stoicism | Ψ | What you cannot control: release it. What you can: master it |
| 7 | Sufism | ☽ | The heart as mirror — polish it through practice and love |
| 8 | Indigenous | ◎ | All things are connected — you are not separate from the field |
| 9 | Hermeticism | ✦ | Vibration — nothing is still, everything moves |
| 10 | Taoism | ☯ | The valley spirit — receptivity and yielding as power |
| 11 | Buddhism | ☸ | Right thought — the mind shapes the path |
| 12 | Vedanta | ॐ | Maya — the veil of illusion and seeing through it |
| 13 | Stoicism | Ψ | The inner citadel — the ruling faculty no one can touch |
| 14 | Sufism | ☽ | Fana — the dissolution of the ego into the divine |
| 15 | Quantum Physics | ∞ | Observer effect — consciousness participates in creating reality |
| 16 | Quantum Physics | ∞ | Field theory — you are a frequency in a larger field |

Each card includes: tradition badge, symbol, quote, source, teaching paragraph, "Modern Connection" section.

**Interaction flow:**
1. Daily card shown on load
2. Read the teaching
3. "Next wisdom" button cycles through all cards
4. Tradition filter chips filter by tradition
5. Reflection textarea → "Carry this forward" button → saves to `ycy_wisdom_reflections`
6. Last 3 reflections shown in history
7. Complete → "Return to practice" OR "Continue → Reality Architect"

---

## Tool 02 — Reality Architect (`reality_architect.html`)

**Phase:** See Clearly

**What it does:** Captures your current dominant thought/feeling/word and helps you consciously choose a new reality.

**Inputs:**
1. **Dominant Thought** — text field: "What thought is on repeat right now?"
2. **Dominant Feeling** — 15 chip buttons (select one):

| Feeling | Color |
|---|---|
| Gratitude | `#88ffbb` |
| Love | `#ff88aa` |
| Joy | `#fff9c4` |
| Peace | `#b3e5fc` |
| Excitement | `#ffcc80` |
| Hope | `#c8e6c9` |
| Contentment | `#dcedc8` |
| Courage | `#ffe082` |
| Neutral | `#f5f5f5` |
| Anxiety | `#ce93d8` |
| Frustration | `#ff8a65` |
| Sadness | `#90caf9` |
| Fear | `#b39ddb` |
| Anger | `#ef9a9a` |
| Shame | `#78909c` |

3. **Dominant Word** — text field: "What single word is your dominant broadcast?"
4. **What reality am I creating?** — textarea: reflection on current pattern
5. **What reality do I CHOOSE to create instead?** — textarea: new intentional reality

**Reality Map:** canvas chart plotting feeling score (1–10 scale) over last 30 days. Gradient fill, colored dots. Insight text changes with trend: "Your frequency is rising" / "Your frequency is steady" / "Your frequency is ready to rise."

**History journal:** last 7 entries with date, thought, feeling (color-coded chip), word, new reality.

**localStorage key:** `ycy_reality_entries` (up to 60 entries)

**Complete →** "Continue → Frequency Tuner"

---

## Tool 03 — Frequency Tuner (`frequency_tuner.html`)

**Phase:** See Clearly

**What it does:** Full 16-level I AM Frequency Map based on Dr. David Hawkins' Map of Consciousness. Select your current level, receive a practice, and play the corresponding Solfeggio tone.

**The 16 levels (full data):**

| Level | Name | Emotion | Color |
|---|---|---|---|
| 700 | Enlightenment | Pure Consciousness | `#f0e8ff` |
| 600 | Peace | Bliss · Transcendence | `#c878ff` |
| 540 | Joy | Serenity · Radiance | `#a050f0` |
| 500 | Love | Reverence · Unconditional | `#7840d8` |
| 400 | Reason | Understanding · Wisdom | `#4080e0` |
| 350 | Acceptance | Forgiveness · Harmony | `#2090e8` |
| 310 | Willingness | Optimism · Intention | `#18c8b0` |
| 250 | Neutrality | Trust · Release | `#48c848` |
| 200 | Courage | Empowerment · Affirmation | `#90c018` |
| 175 | Pride | Scorn · Inflation | `#d4901a` |
| 150 | Anger | Hate · Aggression | `#d04020` |
| 125 | Desire | Craving · Addiction | `#c07020` |
| 100 | Fear | Anxiety · Withdrawal | `#d88020` |
| 75 | Grief | Regret · Despair | `#c04010` |
| 50 | Apathy | Hopelessness · Despair | `#882020` |
| 20 | Shame | Humiliation · Elimination | `#5a0a0a` |

**On selecting a level:** a practice panel appears with:
- Teaching about that level
- Practice steps
- I AM affirmation
- Wisdom quote
- Solfeggio tone player

**Solfeggio tone map (consciousness level → Hz):**

| Levels | Hz | Solfeggio Name |
|---|---|---|
| 700, 600 | 963 Hz | UT — Divine Consciousness |
| 540, 500 | 852 Hz | LA — Returning to Spiritual Order |
| 400 | 741 Hz | SOL — Awakening Intuition |
| 350, 310 | 639 Hz | FA — Harmonising Relationships |
| 250, 200, 175 | 528 Hz | MI — Love / Healing / Transformation |
| 150, 125, 100 | 417 Hz | RE — Facilitating Change |
| 75, 50, 20 | 396 Hz | UT — Liberating Guilt / Fear / Shame |

**Tone playback mechanics:** Web Audio API sine wave oscillator + octave harmonic (0.08 gain), 2-second fade-in to 0.35 master gain, real-time waveform canvas visualiser.

**"Record this frequency"** saves to `ycy_frequency_history` (up to 30 entries).

**14-day frequency graph** canvas with average frequency display.

**Complete →** "Continue → The Observer"

---

## Tool 04 — The Observer (`the_observer.html`)

**Phase:** See Clearly

**What it does:** A 6-stage written self-inquiry — a structured process for seeing through painful thoughts and beliefs, inspired by Byron Katie's The Work.

**The 6 stages:**

| Stage | Name | Prompt | Hint |
|---|---|---|---|
| 01 | The Thought | "What thought or belief is causing you pain right now?" | "Be specific. Name the exact story your mind is running." |
| 02 | The Body | "Where do you feel this in your body?" | "Scan inward. Chest, throat, stomach, shoulders." |
| 03 | The Inquiry | "Is this actually true, or is it a story?" | "Can you find even one moment in your life where this belief was not true?" |
| 04 | The Cost | "How has believing this limited your life?" | "What have you not done, said, or become because of this belief?" |
| 05 | The Flip | "What is the opposite of this belief?" | "Write it as if it were equally true." |
| 06 | The Choice | "Who do you choose to be now?" | "From this place of awareness, make a conscious declaration." |

**"Reveal insights"** button — shows an Observer insight panel for each stage simultaneously. First visit: insights auto-shown. Sets `ycy_observer_visited` flag after first use.

**History:** last 5 inquiries saved. **localStorage key:** `ycy_observer_entries` (up to 30 entries).

**Complete →** "Continue → Fear Alchemist"

---

## Tool 05 — Fear Alchemist (`fear_alchemist.html`)

**Phase:** Release & Discover

**What it does:** A 6-stage full-screen immersive process for moving from fear → clarity → action.

**UI:** full-screen sections, opacity transitions (1.8s), progress dots at bottom.

**The 6 stages:**

| Stage | Name | What you do |
|---|---|---|
| 0 | Welcome | "Fear is not your enemy. It is a messenger..." — read the teaching |
| I | Name It | Select fear tags from a grid OR type custom fear |
| II | Body | Select fear-tags for where you feel it (jaw, chest, stomach, etc.) |
| III | Breathe | Interactive breath ring — grow/shrink animation — breathe with it |
| IV | Inquiry | Tap through inquiry-cards: questions that examine the fear |
| V | The Gift | Gift box animation reveals the hidden gift inside the fear |
| VI | Action | Text input: "What is one step forward?" |

**Complete →** Returns to tools hub.

---

## Tool 06 — Mind-Body Connection (`mind_body_connection.html`)

**Phase:** Release & Discover

**What it does:** A somatic release sequence — identifies where tension lives in the body and moves it through breath.

**The phases:**

1. **Tension identification** — tension-tags with meaning descriptions (e.g. jaw = things unsaid, shoulders = burdens carried, chest = grief held)
2. **Shoulder release** — animated shoulder-ring breathing (2.5s transitions)
3. **Breath work** — 4-4-6 breathing with ring animation (grow/hold/shrink)
4. **Body scan** — scan-card layout guiding attention through the body
5. **Ground ring** — longer 4s breathing transition for grounding
6. **Gratitude closing** — appreciation for the body

Progress dots at bottom. Full-screen phase-based layout.

---

## Tool 07 — Ego Alchemy (`ego_alchemy.html`)

**Phase:** Release & Discover

**What it does:** A 7-phase journey to recognise the ego, understand its origin, hear its voice, meet the True Self, and befriend it.

**The 7 phases:**

1. **Recognition** — emotion chips (e-btn) to identify how the ego shows up
2. **Origin** — trace where this pattern began
3. **The Voice** — trait chips (t-btn) for the ego's language and strategies
4. **True Self** — labelled textarea: declaration of what exists beneath the ego
5. **Befriending** — commit block: "I choose to work with this part of me, not against it"
6. **Integration** — combining insights
7. **Complete** — pulsing symbol

All text saved to localStorage. Full-screen layout with progress dots.

---

## Tool 08 — Identity Rebirth (`identity_rebirth.html`)

**Phase:** Release & Discover

**What it does:** A 7-phase process for consciously shedding old identity and declaring the new one.

**The 7 phases:**

1. **Shedding** — role entries: flex rows with role-input fields ("Add another" button) — old roles, labels, stories being released
2. **What remains** — what is eternal and unchanged beneath the roles
3. **Eternal Self** — textarea for pure self-definition
4. **Core Qualities** — quality chips (q-btn grid) to select essential qualities
5. **Your Vow** — textarea: the declaration
6. **Identity card** — generated statement card assembled from all inputs (border-radius 18px, styled)
7. **Complete**

`p-rule` dividers between sections. Full-screen layout.

---

## Tool 09 — The Love You Are (`self_love.html`)

**Phase:** Release & Discover

**What it does:** An 8-phase full-screen journey — the deepest self-love practice in the app. Pink/rose color scheme.

**Theme quote:** *"Every religion. Every tradition. Every lineage of human wisdom... all pointing to the same truth."*

**Color:** `--love: rgba(235,105,145,0.96)` — love orb `♡` with `lovePulse` animation (scale 0.93→1.07, 5s).

**The 8 phases:**

1. **Welcome** — the teaching: all traditions point to the same truth about love
2. **The Root** — "Where did you learn you weren't enough?" — wisdom cards reveal with opacity delay
3. **Wisdom** — wisdom-card grid: teachings from traditions about self-love
4. **Mirror** — affirmation cards (aff-card layout) — read and receive
5. **Body** — somatic practice: loving the body, textarea for writing
6. **Voice** — gender paths via path-cards that expand on selection: self-love practices tailored to the user's path
7. **Vow** — vow-wrap with animated vow-line elements (show class) — your love vow
8. **Complete** — pulsing heart `♡`

`btn-love` variant: pink/rose button style throughout.

---

## Tool 10 — Purpose Compass (`purpose_compass.html`)

**Phase:** Release & Discover

**What it does:** An Ikigai-based 8-phase journey to discover your life's purpose.

**The 4 circles (all purple family):**

- `c1` — **What I love** (violet)
- `c2` — **What I'm great at** (deep purple / mastery)
- `c3` — **What the world needs** (lavender / mission)
- `c4` — **What I can be paid for** (mid purple / vocation)

**The 8 phases:**
1. Introduction to Ikigai
2. What do you love — fill circle 1
3. What are you great at — fill circle 2
4. What does the world need from you — fill circle 3
5. What value can you give and receive for — fill circle 4
6. Ikigai canvas — interactive visualisation of the 4 overlapping circles
7. Purpose box — auto-assembled purpose statement from inputs; editable via `p-edit` textarea
8. Complete — `completePulse` animation

---

## Tool 11 — New Chapter (`new_chapter.html`)

**Phase:** Install the New Reality

**What it does:** A 7-phase process for closing the old chapter of your life and writing the next one — culminating in a personal manifesto.

**The key stages:**

- **Stage I — The Goodbye:** textarea to write gratitude for the old chapter — what it taught, why it mattered
- **Stage II — The Vision:** 5 life-area cards in a 2-column grid, each with its own textarea:
  - Work, Relationships, Health, Abundance, Growth
- **Stage III — 90-Day Plan:** 3-column `plan-grid` (Month 1 / Month 2 / Month 3), each with textarea
- **Stage IV — The Manifesto:** auto-assembled display from all inputs — `manifesto-line` items with `ml-label` — shows as a beautiful formatted document
- Remaining stages: seal and complete sequence

The manifesto is preserved in localStorage for the Subconscious Reprogrammer to reference in the next tool.

---

## Tool 12 — Subconscious Reprogrammer (`subconscious_reprogrammer.html`)

**Phase:** Install the New Reality

**Badge:** *"Best used 5 minutes before sleep"*

**What it does:** Guides you into theta state (4–7 Hz brainwave) — the hypnagogic window between waking and sleep — and plants a scene of your wish fulfilled.

**Sections (scrollable, form-based layout):**

1. **Scene writer** — textarea: write your "wish fulfilled" scene in present tense — feel it as real, now
2. **Journey hint card** — pulls your identity and purpose data from previous tools; "Use this as my scene foundation" button to pre-fill the scene
3. **Theta induction session** — begins on button press:
   - Animated SVG ring (`thetaRing` stroke-dashoffset countdown)
   - **Theta breathing phases cycle:**
     - Breathe in — 4 seconds
     - Hold gently — 4 seconds
     - Breathe out — 6 seconds
     - Rest — 2 seconds
   - **10 theta prompts** fade in sequence: "Feel your body becoming heavy…" → "Your mind is drifting…" → … → "Drift into sleep holding this feeling…"
   - **Audio files:** `audio/breath_inhale.mp3`, `audio/breath_hold.mp3`, `audio/breath_exhale_slowly.mp3`
   - Timer display during session
4. **Session complete** → links to return to hub or "Continue → Quantum Creation"

**localStorage:** saves scenes for reference by other tools.

---

## Tool 13 — Quantum Creation (`quantum_creation.html`)

**Phase:** Install the New Reality

**What it does:** A 7-stage full-screen immersive transmission ritual — state an intention, breathe it into the quantum field, seal it.

**Sound:** 528Hz ambient music toggle button (top right).

**The 7 stages:**

| Stage | Name | What happens |
|---|---|---|
| 1 | Intention | Text input: state your desired reality |
| 2 | Breath | `i-glow` box shows your intention; breath ring — 4-4-4-4 box breathing (grow/hold-in/shrink/hold-out) |
| 3 | Enter the Field | "Step inside your desired reality" — immersive teaching moment |
| 4 | Choose the Feeling | `feeling-grid` with `f-btn` chips — select the feeling of the wish fulfilled |
| 5 | Transmission | `tx-box` shows intent + `tx-bar` (vertical gradient line) + `tx-feel` (feeling in uppercase) |
| 6 | Seal | `seal-sym` + `seal-word` — the transmission is sealed |
| 7 | Complete | |

---

## Tool 14 — Visualisation Meditation (`visualisation_meditation.html`)

**Phase:** Install the New Reality

**What it does:** A guided 20-minute manifestation meditation with spoken text display and 528Hz ambient music.

**Entry:** blur overlay tap gate — "Tap anywhere to begin" with `tgPulse` animation.

**During the meditation:**
- Large italic centered spoken text (1.4–2.2rem) fades in/out with each passage
- Phase label in upper center (monospace)
- Progress dots (`pdot` elements — 24px width, active = 36px)
- 528Hz ambient music
- Loading bar + loading message during audio load

**Audio fallback:** if audio is unavailable, a visual-only breathing guide appears so the experience still works.

**Complete screen:** "Your New Reality Awaits" with return buttons.

---

## Tool 15 — Gratitude Portal (`gratitude_portal.html`)

**Phase:** Signal & Nurture Daily | **Tagline:** *"Do This Every Day"*

**What it does:** The primary daily practice. The app calls it *"the most powerful daily practice in the entire app."*

**Teaching:** *"Gratitude is the highest vibration a human being can generate. It is the state of someone who already knows they are held by life."*

**The 6 gateways:**

1. **Past** — what you're grateful for from your past; what it taught you
2. **Present** — chip-grid of present-moment gratitudes (selectable from chips, or write your own in `p-input` field)
3. **Today's Miracles** — 5 `miracle-row` inputs (numbered 1–5) for today's specific miracles
4. **Already Received** — `vision-card` — writing from the future as if it's already happened
5. **Transmission** — the heartbeat: a pulsing heart button (`heartPulse` — heartbeat animation, 2.2s) that you tap to send your gratitude as a signal; `signalStatus` text appears; expanding signal rings (`ringExpand` animation)
6. **Meditation** — `med-orb` (pulsing radial gradient, 5s) with breath progress dots; sitting in the feeling of gratitude

**Complete:** `complete-word` display + `streak-badge` showing your daily practice streak.

**localStorage:** streak and all entries saved.

---

## Tool 16 — Coherence Lab (`coherence_lab.html`)

**Phase:** Signal & Nurture Daily

**What it does:** Heart-brain coherence practice inspired by HeartMath research — enter measurable biological coherence through elevated emotion and rhythmic breathing.

**The science card:** *"The heart sends more messages to the brain than the brain sends to the heart — and these messages directly shape your emotional experience, clarity, and perception. When heart and brain are in coherence — synchronised through elevated emotion and rhythmic breathing — the body enters a state of greater openness, creativity, and biological order. Research shows that active positive states — joy, gratitude, love, appreciation — produce the most ordered heart rhythms. Not forced calm. Not suppression. Genuine feeling, combined with a clear intention, is the signal you broadcast into the field."*

**Step 1 — Choose Your Elevated Emotion** (6 options):

- **Gratitude** (default/active)
- **Love**
- **Joy**
- **Compassion**
- **Peace**
- **Appreciation**

Each emotion has a unique activation prompt (e.g. Gratitude: *"Think of one specific moment, person, or gift you genuinely appreciate. Let the memory become vivid. Feel the warmth of it in the centre of your chest right now."*)

**Step 2 — Activate + Choose Duration:**

- **3 min** — reset
- **5 min** — optimal (default) — "5 minutes is the minimum for measurable physiological change"
- **10 min** — deep

Begin with **"I can feel it — begin ♡"**

**Step 3 — Practice Session:**

- Heart canvas (200×200px) — animated heart visualization
- Breath phase text + instruction — guides breathing in real time
- Session timer display
- Intention anchor overlay — keeps chosen emotion visible during practice
- End session button

**Session summary:** emotion name, duration, closing ritual card, session note.

**localStorage:** session history saved.

---

## Tool 17 — Manifestation Garden (`manifestation_garden.html`)

**Phase:** Signal & Nurture Daily

**What it does:** Plant desires as seeds stated as already fulfilled. Return daily to water them. Track 6 stages of growth.

**The 6 growth stages:**

| Stage | Name | Progress bar color |
|---|---|---|
| 0 | Seed | Purple |
| 1 | Sprout | Purple → green gradient |
| 2 | Shoot | Green gradient |
| 3 | Bloom | Green → gold gradient |
| 4 | Flower | Gold → bloom gradient |
| 5 | Manifestation | Bloom → accent gradient |

**Planting a seed:**
- Input: *"I am so happy and grateful now that…"* — the language of the subconscious
- Max 200 characters
- **✦ Plant this seed** button (disabled until text entered)
- `plantPop` animation on planting

**Each seed card shows:**
- Stage emoji/symbol
- Stage name
- Desire text
- Progress bar
- Days counter
- **Water button** — tap daily; `.watered` state turns green
- Delete button (hover to reveal)

**localStorage:** all seeds, stages, and watering dates saved.

---

## Tool 18 — The Feminine Way (`feminine_way.html`)

**Phase:** Signal & Nurture Daily | **Tool 18**

**Color scheme:** pink-purple (`rgba(232,160,255)`)

**What it does:** Daily practice for feminine energy across 7 qualities — drawing from ancient wisdom traditions.

**Essence quote:** *"Feminine energy is not weakness. It is the ocean — vast, deep, and powerful beyond measure. It does not chase. It draws everything to itself through the irresistible force of its own nature."*

**Essence pills:** Feeling · Flow · Intuition · Receptivity

**The 7 qualities (each with daily practice):**

1. **Feeling** — allow emotion without suppressing or dramatising; let it move through
2. **Intuition** — still the mind, ask the body, trust the first answer
3. **Receptivity** — allow support; say yes to being held
4. **Flow** — release the agenda; soften the grip on how things should go
5. **Creation** — express without needing it to be perfect
6. **Love** — return to love as the default state
7. **Presence** — full sensory attention to right now

**Each quality section includes:**
- Practice steps (numbered)
- Animated breath ring (`femBreath` — 10s, scale 1→1.4)
- Affirmation with refresh button for new affirmation
- Sacred reflection question with reflection textarea + save button
- Teacher cards grid (2-column): historical teachers with their teaching on that quality

*"Feminine and masculine are energies, not roles. Every human carries both."*

---

## Tool 19 — The Masculine Way (`masculine_way.html`)

**Phase:** Signal & Nurture Daily | **Tool 19**

**Color scheme:** blue (`rgba(160,200,255)`)

**What it does:** Daily practice for masculine energy across 7 qualities — drawing from ancient wisdom traditions.

**Essence quote:** *"Masculine energy is not aggression. It is the mountain — still, grounded, and immovable. It does not react. It responds. It does not wander. It moves with direction, purpose, and the quiet certainty of a man who knows who he is."*

**Essence pills:** Stillness · Presence · Purpose · Direction · Structure · Action · Protection

**The 7 qualities (each with daily practice):**

1. **Stillness** — stop. Be before you do. Sit in silence for 5 minutes.
2. **Presence** — one thing, fully. No split attention.
3. **Purpose** — ask what you're building and why
4. **Direction** — one decision made with conviction today
5. **Structure** — create one clear container (a schedule, a boundary, a commitment)
6. **Action** — move from clarity, not from anxiety
7. **Protection** — what are you protecting? Name it and stand for it.

**Each quality section:** practice steps, animated breath ring (`mascBreath` — 8s), affirmation + refresh, reflection textarea, teacher cards grid.

*"Feminine and masculine are energies, not roles. Every human carries both."*

---

## Tool 20 — Fun Is the Frequency (`fun_is_the_frequency.html`)

**Phase:** Signal & Nurture Daily | **Tool 20**

**Color scheme:** purple-gold

**What it does:** Reframes joy and play as legitimate transformation practices.

**Teaching:** *"Transformation is not only built through effort. It is also built through joy."*

**The 5 qualities:** Joy · Lightness · Play · Warmth · Aliveness

**Key sections:**

- **Memory card (Inner Child):** "What did you love to do as a child — before anyone told you it wasn't serious?"
- **Heart card:** *"The body that plays is the body that heals. The mind that laughs is the mind that learns. Joy is not a reward. It is a practice."*
- **Spark display (Today's Assignment):** a specific joy spark prompt — rotates daily
- **Ripple group — 3 inputs:**
  - "One thing that makes me laugh"
  - "One thing I want to play with this week"
  - "One way I will be lighter today"
- **Joy meter:** large number display + slider 0–10: "How alive do I feel right now?"
- **Frequency lines** — a cascade of words that illuminate as joy increases
- **Complete:** ripple card showing your three joy commitments

---

## Journal (`journal.html`)

Daily journal with rotating prompts designed to access the subconscious. Not a blank diary — a prompted practice. Prompts change daily. Entries stored in localStorage.

---

## Journey (`my_journey.html`)

Journey tracker showing progress across all tools — which phases you've visited, your history, your arc through the transformation journey.

---

## Cross-Tool Data Architecture

| localStorage Key | What it stores | Used by |
|---|---|---|
| `ycy_wisdom_reflections` | Ancient wisdom reflections | Tool 01 |
| `ycy_reality_entries` | Reality entries (up to 60) | Tool 02 |
| `ycy_frequency_history` | Frequency tuner recordings (up to 30) | Tool 03 |
| `ycy_observer_entries` | Observer inquiry journals (up to 30) | Tool 04 |
| `ycy_frequency_readings` | FREQ check-in readings (up to 90 days) | FREQ |
| `ycy_observer_visited` | First-visit flag | Tool 04 |
| New Chapter manifesto | 90-day plan + manifesto data | Tool 11 → Tool 12 |
| Identity/purpose data | Purpose and identity inputs | Tools 08, 10 → Tool 12 |
| Seed garden | All seeds, stages, watering dates | Tool 17 |

---

## The Daily Practice Sequence

The banner at the top of every page:

**Breathe · Read · Create · Gratitude · Affirm · Meditate · Embody · Seal · Complete**

Recommended daily minimum:
1. **Breathe** — Coherence Lab or Feminine/Masculine breathing ring (5 min)
2. **Read** — Ancient Wisdom daily card
3. **Create** — Reality Architect (check your broadcast)
4. **Gratitude** — Gratitude Portal (the non-negotiable)
5. **Affirm** — Frequency Tuner (pick your level, play your tone)
6. **Meditate** — Coherence Lab or Quantum Creation
7. **Embody** — Mind-Body Connection or Fun Is the Frequency
8. **Seal** — Subconscious Reprogrammer (5 min before sleep)
9. **Complete** — FREQ check-in (weekly)
