'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'
import { captureAbandonedEmail } from '@/lib/checkout'

const EASE = [0.22, 1, 0.36, 1] as const

const BODY_PARAGRAPHS = [
  'She looked at them and saw the story they were living.',
  'Not the story they told at dinner parties or wrote in their journals or performed for the people they most wanted to impress. Not the version that appeared on the surfaces of their lives — in the confident answers to how are you, in the curated evidence of a life going well, in the voice they used when they needed to sound like someone who had it together.',
  'The original one.',
  'The one running quietly underneath everything — so familiar, so constant, that most of them had stopped noticing it was a story at all. It had become the texture of reality itself. The background hum against which every day was lived. They moved through it the way fish moved through water — entirely, without ever needing to understand what surrounded them, without ever needing to ask whether the water had always been there or whether it could, theoretically, be different.',
  'She had a gift that most beings who came to observe humanity did not. She could see both at once — the person standing in the present and the story shaping every square inch of their experience of it. And she had learned, after enough lifetimes of this particular kind of seeing, that the two were almost never the same thing.',
]

const PULL_1 = 'The story was not them. That was the first thing she wanted them to know. The single most important thing she had come to say. Before any of the rest. Before the practices, before the tools, before the transmission in full. Just that.'

const BODY_PARAGRAPHS_2 = [
  'It had started before they had words for it. Before their first question. Before their first conscious choice. Before they were old enough to understand that what was being placed inside them was being placed inside them by people who did not know they were doing it.',
  'The ones who came before — parents, teachers, siblings, the particular culture they had been born into, the decade and its values, the family’s unspoken rules, the grandmother’s grief that nobody ever named — all of them had been teaching. Not to harm. Not in most cases with any awareness at all that they were transmitting something. They passed down what they carried. The way every human carries their inheritance without being told about it. The way a language is learned not through instruction but through immersion — so completely, so early, that it eventually stops feeling like a language and starts feeling like the world.',
  'Their fears became the child’s fears. Their limits became the child’s limits. Their particular way of measuring worth — through achievement, through approval, through the careful management of how much space they allowed themselves to take up — became the child’s measuring stick. Unexamined. Unquestioned. Inherited the way eye color was inherited. Simply there, from the beginning, with no memory of arrival.',
  'And so a story was built. Not in a single dramatic moment. Gradually. Through a thousand small moments of being told, in words or in the subtler language of consequences and silences, who this particular child was and was not. What they deserved and did not deserve. How much love was available and what conditions came attached to it.',
]

const PULL_2 = 'They told that story so many times it stopped feeling like a story. It started feeling like the truth. It started feeling like them. And by the time they were old enough to question it — most of them never did. The story had become indistinguishable from reality. The water had become invisible. The inherited self had become the only self they knew.'

const BODY_PARAGRAPHS_3 = [
  'She watched what the story created.',
  'She watched it move through their days like weather — shaping every room they entered, every relationship they built, every morning they woke up already wondering if today would be any different. She watched it move through their bodies. The particular way a person’s shoulders came forward when the story involved not being enough — a slight but unmistakable contraction, as though the body had been practising the making-oneself-smaller for so long that it had simply built it into the architecture. The held breath in the moment before someone responded to them. The specific vigilance of someone whose story involved love being conditional — always scanning, always reading the room, always braced for the evidence that the condition had not been met.',
  'She saw the body carrying what the mind refused to name. Tired in ways sleep could not fix. Tense in ways rest could not reach. She watched people describe these symptoms to doctors and therapists and friends and never quite say the thing underneath them — not because they were unwilling, but because they genuinely did not know it was there. The story was so close, so woven into the fabric of how they experienced themselves, that it felt like physiology rather than narrative. Like something that had always simply been the case, rather than something that had arrived, been installed, and could — with the right kind of seeing — be updated.',
  'She saw them smile in photographs and feel nothing behind it. She saw them lie awake at 3am in lives that looked fine from the outside — good enough by every external measure — wondering if this was it. Wondering what was wrong with them. The wondering itself shaped by the story: not what is wrong with my circumstances, but what is wrong with me. The story had convinced them that the dissatisfaction was evidence of their own deficiency rather than information about the life the story was generating.',
]

const PULL_3 = 'Nothing was wrong with them.\nThat was the first thing she wanted them to know.\nNothing was ever wrong with them.\n\nWhat they were living was not a verdict. It was a mirror. A reflection of a story they had inherited before they were old enough to question it.'

const BODY_PARAGRAPHS_4 = [
  'The world had not been happening to them. The world had been responding to them. To the signal running underneath the performance. To the story they had told so many times it had become the frequency they broadcast without knowing — into every room, every conversation, every relationship, every new beginning that somehow kept arriving at the familiar ending.',
  'She wanted to be careful here. She had watched humans receive this particular truth in ways that did them harm. Receiving it as blame — as though the signal they had been broadcasting was their fault, a failure of character, something they should have known to fix sooner. That was the story putting on a new costume. The story could not be the cause and the evidence of the failure. It was only ever the inherited pattern, doing faithfully what inherited patterns do.',
  'She also wanted to be careful about something else. The story had not all been darkness. Many of the people she watched had also inherited extraordinary things through these same channels — resilience, warmth, the particular genius of a family line, a way of loving that was generous and specific and real. The inheritance was never only wound. She was pointing at the wound because the wound was what most needed to be seen. Not because it was all there was.',
]

const PULL_4 = 'And somewhere along the way — through the accumulation of all of it, the wound and the gift both — they had stopped believing they were enough.\n\nNot in every moment. Not completely. But enough. Enough for the belief to shape the signal. Enough for the signal to shape the world. Enough for the world to keep confirming what the story had always said.'

const BODY_PARAGRAPHS_5 = [
  'She held that truth carefully. Not as a wound to be pried open. As a key. Because the moment a human could see the story — truly see it, from the outside, without collapsing into it, without making the seeing itself another reason to feel ashamed — everything became possible. Not everything at once. But everything, eventually.',
  'You cannot change what you cannot see. But what you can see — you can change. And the seeing itself, the act of standing outside the story and looking at it clearly, was already a shift. The person who could see the story was already operating from somewhere the story was not. Already more than the story. Already, in some essential and irreversible way, free of it.',
  'So she showed them something they had forgotten. She showed them their own body — not as something to fix or improve or perform with or punish for not being different, but as something that had been loving them without interruption for their entire life.',
  '“Feel it,” she said. “One hundred thousand heartbeats today without a single instruction from you. Your lungs breathing while you slept. Your immune system working on your behalf in the background of every day you spent believing yourself to be not enough — working, unceasingly, without complaint, without demanding recognition, without once withdrawing its service because you had forgotten to be grateful for it.',
  '“Your body has been loving you through every morning the first feeling was dread. Through every night you lay awake in a life you were not sure you had earned. Through every year you spent at war with the self it was faithfully carrying. That is love. The most patient, most faithful, most quietly extraordinary love you have ever been shown. And it has never stopped. Not once. Not for a single moment of your entire life.”',
]

const QUOTE_BOX = 'Love yourself the way a mother loves a child.\nNot because the child is perfect.\nNot because the child has earned it.\nNot because the child deserves it by any measurable standard.\nBecause the child exists. Because the child is here.\n\nYou are that child.\nYou are also that mother.\nBoth of them live inside you.\nThey always have.\nThe work — all of the work that begins here —\nis simply learning to let them meet.'

const BODY_PARAGRAPHS_6 = [
  '“Find a mirror,” she said. “Any mirror. Look into your eyes. Not at your face — into your eyes. And say out loud — using your own name, because names carry power and the body knows the difference between a general truth and a truth directed at the specific person inside the skin — say: I love you.',
  '“Say it again. Say it when the mind rebels. Say it when it feels like the most uncomfortable sentence you have ever been asked to speak. Say it when something inside you wants to laugh at the absurdity of it or cry at the tenderness of it or simply go very still in the presence of something that feels, underneath everything, true. Stay with it. Keep saying it. Let it find the places inside you that have not been told this in a very long time.',
  '“And when the tears come — you will know. That is not sentiment. That is the moment the forgetting meets the remembering. That is the moment the part of you that was told it was not enough finally hears, from a voice it cannot dismiss, that it always was.”',
]

const PULL_5 = 'The story was never you.\nNot one word of it was ever you.\nUnderneath it — unchanged, untouched, unmarked by any of it,\nwaiting with a patience that belongs only to what is eternal —\nis the one who was always enough.\n\nShe saw that in you from the very beginning.\nBefore the first page. Before the first breath.\nShe saw it and she came to show you.\n\nThat was always the whole point of this transmission.'

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
                Begin Your Practice — $79
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
