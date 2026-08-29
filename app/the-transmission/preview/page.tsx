'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'
import AudioSample from '@/components/ui/AudioSample'
import { captureAbandonedEmail } from '@/lib/checkout'

const EASE = [0.22, 1, 0.36, 1] as const

const BODY_PARAGRAPHS = [
  'She looked at them and saw the story they were living.',
  'Not the story they told at dinner parties or wrote in their journals or performed for the people they most wanted to impress. Not the version that appeared on the surfaces of their lives — in the confident answers to how are you, in the curated evidence of a life going well, in the voice they used when they needed to sound like someone who had it together.',
  'The original one.',
  'The one running quietly underneath everything — so familiar, so constant, that most of them had stopped noticing it was a story at all. It had become the texture of reality itself. The background hum against which every day was lived. They moved through it the way fish moved through water — entirely, without ever needing to understand what surrounded them, without ever needing to ask whether the water had always been there or whether it could, theoretically, be different.',
  'She had a gift that most beings who came to observe humanity did not. She could see both at once — the person standing in the present and the story shaping every square inch of their experience of it. And she had learned, after enough lifetimes of this particular kind of seeing, that the two were almost never the same thing.',
]

const PULL_1 = 'The story was not them. That was the first thing she wanted them to know. The first thing she had come to say. Ahead of everything else — the practices, the tools, the transmission in full. Just that.'

const BODY_PARAGRAPHS_2 = [
  'It had started before they had words for it. Before their first question. Before their first conscious choice. Before they were old enough to understand that what was being placed inside them was being placed inside them by people who did not know they were doing it.',
  'The ones who came before — parents, teachers, siblings, the particular culture they had been born into, the decade and its values, the family’s unspoken rules, the grandmother’s grief that nobody ever named — all of them had been teaching. Not to harm. Not in most cases with any awareness at all that they were transmitting something. They passed down what they carried. The way every human carries their inheritance without being told about it. The way a language is learned not through instruction but through immersion — so completely, so early, that it eventually stops feeling like a language and starts feeling like the world.',
  'Their fears became the child’s fears. Their limits became the child’s limits. Their particular way of measuring worth — through achievement, through approval, through the careful management of how much space they allowed themselves to take up — became the child’s measuring stick. Unexamined. Unquestioned. Inherited the way eye color was inherited. Simply there, from the beginning, with no memory of arrival.',
  'And so a story was built. Not in a single dramatic moment. Gradually. Through a thousand small moments of being told, in words or in the subtler language of consequences and silences, who this particular child was and was not. What they deserved and did not deserve. How much love was available and what conditions came attached to it.',
]

const PULL_2 = 'They told that story so many times it stopped feeling like a story. It started feeling like the truth. It started feeling like them. And by the time they were old enough to question it — most of them never did. The story had become indistinguishable from reality. The water had become invisible. The inherited self had become the only self they knew.'

const BODY_PARAGRAPHS_3 = [
  'She watched what the story created.',
  'It moved through their days like weather — shaping every room they entered, every relationship they built, every morning they woke up already wondering if today would be any different. It moved through their bodies too. The particular way a person’s shoulders came forward when the story involved not being enough — a slight but unmistakable contraction, as though the body had been practicing the making-oneself-smaller for so long that it had simply built it into the architecture. The held breath in the moment before someone responded to them. The specific vigilance of someone whose story involved love being conditional — always scanning, always reading the room, always braced for the evidence that the condition had not been met.',
  'She saw the body carrying what the mind refused to name. Tired in ways sleep could not fix. Tense in ways rest could not reach. They described these symptoms to doctors and therapists and friends and never quite said the thing underneath them — not because they were unwilling, but because they genuinely did not know it was there. The story was so close, so woven into the fabric of how they experienced themselves, that it felt like physiology rather than narrative. Like something that had always simply been the case, rather than something that had arrived, been learned, and could — with the right kind of seeing — be revised.',
  'She saw them smile in photographs and feel nothing behind it. She saw them lie awake at 3 a.m. in lives that looked fine from the outside — good enough by every external measure — wondering if this was it. Wondering what was wrong with them. The wondering itself shaped by the story: not what is wrong with my circumstances, but what is wrong with me. The story had convinced them that the dissatisfaction was evidence of their own deficiency rather than information about how the story was shaping the way they met their life.',
]

const PULL_3 = 'Nothing was wrong with them.\nNothing had ever been wrong with them.\n\nWhat they were living was not a verdict. Some of it could act as a mirror — reflecting a story they had inherited before they were old enough to question it.'

const BODY_PARAGRAPHS_4 = [
  'Much of what they thought was simply happening around them had also been meeting what they carried into it. The signal running underneath the performance. The story they had told so many times it had become the frequency they broadcast without knowing — into every room, every conversation, every relationship, every new beginning that somehow kept arriving at the familiar ending.',
  'But she had seen this truth become another reason for humans to blame themselves. Receiving it as blame — as though the signal they had been broadcasting was their fault, a failure of character, something they should have known to fix sooner. That was the story putting on a new costume. The story could not be the cause and the evidence of the failure. It was only ever the inherited pattern, doing faithfully what inherited patterns do.',
  'And the inheritance had never been only darkness. Many of the people she watched had also inherited extraordinary things through these same channels — resilience, warmth, the particular genius of a family line, a way of loving that was generous and specific and real. The inheritance was never only wound. She was pointing at the wound because the wound was what most needed to be seen. Not because it was all there was.',
]

const PULL_4 = 'And somewhere along the way — through the accumulation of all of it, the wound and the gift both — they had stopped believing they were enough.\n\nNot in every moment, not completely — but enough. Enough to shape what they expected. Enough to shape what they carried into every room. Enough for the familiar ending to keep arriving — and to keep sounding like proof.'

const BODY_PARAGRAPHS_5 = [
  'She held that truth carefully. Not as a wound to be pried open. As a key. Because the moment a human could see the story — truly see it, from the outside, without collapsing into it, without making the seeing itself another reason to feel ashamed — more became possible. Not all at once. Simply more.',
  'You cannot change what you cannot see. But what you can see — you can change. And the seeing itself, the act of standing outside the story and looking at it clearly, was already a shift. The person who could see the story was already relating to it from somewhere the story was not. Already more than the story. Already, in some essential way, no longer completely inside it.',
  'So she showed them something they had forgotten. She showed them their own body — not as something to fix or improve or perform with or punish for not being different, but as something that had been keeping faith with them without interruption for their entire life.',
  '“Feel it,” she said. “Your heart beating all day without a single instruction from you. Your lungs breathing while you slept. Your immune system working on your behalf in the background of every day you spent believing yourself to be not enough — working, unceasingly, without complaint, without demanding recognition, without once withdrawing its service because you had forgotten to be grateful for it.',
  '“It has carried you through every morning the first feeling was dread. Through every night you lay awake in a life you were not sure you had earned. Through every year you spent at war with the self it was faithfully carrying. And it has never stopped — not once, not for a single moment of your entire life.”',
  'There was a word for what the body had been doing all along. She had it already — and she was saving it. Some words deserved their own arrival.',
]

const QUOTE_BOX = 'You are not the story.\nYou never were.\n\nSee it — from the outside,\ngently, without shame —\nand something has already changed.\n\nThe one who can see the story\nis not the story.\n\nThat one has been here all along.\nThat one was always enough.'

const BODY_PARAGRAPHS_6 = [
  '“Find a mirror,” she said. “Any mirror. Look into your eyes. Not at your face — into your eyes. And say out loud — using your own name, because a sentence with your name in it is harder to dismiss than a general truth — say: I see you.',
  '“Say it again. Say it when the mind rebels. Say it when it feels like the most uncomfortable sentence you have ever been asked to speak. Say it when something inside you wants to laugh at the absurdity of it or cry at the tenderness of it or simply go very still. Stay with it. Keep saying it. Let it reach the places inside you that have gone unseen for a very long time.',
  '“And if tears come, let them. That is the moment the part of you that was told it was not enough is finally, directly, seen — by the only person who has been present for every single day of this life. You.”',
]

const PULL_5 = 'The story was never you.\nNot one word of it was ever you.\nLife would leave its marks — that is what living means.\nBut underneath the story, carrying every mark,\nis the one who was always enough.\n\nShe saw that in you from the very beginning.\nBefore the first page. Before the first breath.\nShe saw it and she came to show you.'

function PullQuote({ text }: { text: string }) {
  return (
    <p
      className="font-display italic text-[1.15rem] leading-[1.7] my-8 whitespace-pre-line"
      style={{ color: 'rgba(220,195,255,0.85)' }}
    >
      {text}
    </p>
  )
}

export default function TransmissionPreviewPage() {
  const [email, setEmail] = useState('')
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('ycy_preview_unlocked')) setUnlocked(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    captureAbandonedEmail(email)
    setUnlocked(true)
  }

  return (
    <main className="relative overflow-hidden pt-28 pb-24">
      <div aria-hidden className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '70vw', height: '55vh',
          background: 'radial-gradient(ellipse at top, rgba(140,70,255,0.14) 0%, rgba(100,45,200,0.06) 50%, transparent 75%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="gate"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative z-10 container-prose mx-auto text-center"
          >
            <SectionLabel text="A free Transmission" className="mb-6" />
            <h1
              className="font-display font-light italic leading-[1.2] mb-5 text-[clamp(2rem,4vw,2.8rem)]"
              style={{ color: '#f8f5ff' }}
            >
              Transmission One
            </h1>
            <p
              className="font-body text-[1.02rem] leading-[1.9] mb-10 max-w-[48ch] mx-auto"
              style={{ color: 'rgba(235,228,255,0.65)' }}
            >
              Enter your email and we&apos;ll unlock &ldquo;The Mirror&rdquo; right here — the
              opening Transmission from the book, in full, free.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Email address"
                suppressHydrationWarning
                className="input-base px-5 py-3 text-sm"
              />
              <Button type="submit" variant="primary" size="md">
                Unlock Transmission One
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.article
            key="reading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative z-10 container-prose mx-auto"
          >
            <div className="text-center mb-14">
              <SectionLabel text="Transmission One" className="mb-6" />
              <h1
                className="font-display font-light italic leading-[1.2] text-[clamp(2rem,4vw,2.8rem)]"
                style={{ color: '#f8f5ff' }}
              >
                The Mirror
              </h1>
            </div>

            <div className="flex justify-center mb-12">
              <AudioSample />
            </div>

            <div
              className="font-body text-[1.02rem] leading-[1.95]"
              style={{ color: 'rgba(235,228,255,0.72)' }}
            >
              {BODY_PARAGRAPHS.map((p, i) => <p key={`a${i}`} className="mb-6">{p}</p>)}
              <PullQuote text={PULL_1} />
              {BODY_PARAGRAPHS_2.map((p, i) => <p key={`b${i}`} className="mb-6">{p}</p>)}
              <PullQuote text={PULL_2} />
              {BODY_PARAGRAPHS_3.map((p, i) => <p key={`c${i}`} className="mb-6">{p}</p>)}
              <PullQuote text={PULL_3} />
              {BODY_PARAGRAPHS_4.map((p, i) => <p key={`d${i}`} className="mb-6">{p}</p>)}
              <PullQuote text={PULL_4} />
              {BODY_PARAGRAPHS_5.map((p, i) => <p key={`e${i}`} className="mb-6">{p}</p>)}

              <div
                className="rounded-2xl p-8 my-10 text-center"
                style={{ border: '1px solid rgba(210,175,255,0.14)', background: 'rgba(210,175,255,0.03)' }}
              >
                <p className="font-display italic text-[1.05rem] leading-[1.9] whitespace-pre-line" style={{ color: 'rgba(240,236,255,0.85)' }}>
                  {QUOTE_BOX}
                </p>
              </div>

              {BODY_PARAGRAPHS_6.map((p, i) => <p key={`f${i}`} className="mb-6">{p}</p>)}
              <PullQuote text={PULL_5} />
            </div>

            <div className="container-prose mx-auto"><div className="divider-glow my-4" /></div>

            <div className="text-center mt-14 flex flex-col items-center gap-5">
              <p className="font-display italic text-[1.05rem] leading-[1.7] max-w-[42ch]" style={{ color: 'rgba(220,195,255,0.7)' }}>
                This was her first gift. Twenty-eight more are waiting — each one paired with
                a practice inside the app.
              </p>
              <BeginPracticeButton variant="primary" size="lg">
                Begin Your Practice — $97
              </BeginPracticeButton>
              <Link
                href="/the-transmission"
                className="font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-200"
                style={{ color: 'rgba(210,175,255,0.5)' }}
              >
                ← Back to The Transmission
              </Link>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  )
}
