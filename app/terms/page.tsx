import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — You Create You',
  description: 'The agreement between you and You Create You. Plain English and binding.',
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display italic text-[clamp(1.4rem,2.2vw,1.85rem)] font-light mt-14 mb-4 leading-snug"
    style={{ color: 'rgba(210,175,255,0.92)' }}>
    {children}
  </h2>
)

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-[9px] tracking-[0.22em] uppercase mt-8 mb-3"
    style={{ color: 'rgba(179,136,255,0.65)' }}>
    {children}
  </h3>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-[1rem] leading-[1.9] mb-4"
    style={{ color: 'rgba(235,228,255,0.68)' }}>
    {children}
  </p>
)

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="font-body text-[1rem] leading-[1.9] mb-2 pl-2"
    style={{ color: 'rgba(235,228,255,0.68)' }}>
    {children}
  </li>
)

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-body font-normal" style={{ color: 'rgba(240,236,255,0.92)' }}>
    {children}
  </strong>
)

export default function TermsPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="container-prose mx-auto">

        {/* Back link */}
        <Link
          href="/"
          className="font-mono text-[9px] tracking-[0.22em] uppercase mb-10 inline-flex items-center gap-2 transition-colors duration-200"
          style={{ color: 'rgba(179,136,255,0.45)' }}
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <h1 className="font-display italic text-[clamp(2.2rem,5vw,3.2rem)] font-light mt-6 mb-3 leading-[1.1]"
          style={{ color: '#f8f5ff' }}>
          Terms of Service
        </h1>
        <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-12"
          style={{ color: 'rgba(179,136,255,0.45)' }}>
          You Create You · The Agreement Between Us
        </p>

        <P>
          By using YOU CREATE YOU (the app at{' '}
          <a href="https://youcreateyou.life" style={{ color: 'rgba(210,175,255,0.8)' }}>
            youcreateyou.life
          </a>
          ), you are agreeing to these terms. If you don't agree, please don't use the app.
          These terms are written in plain English — real and binding, but human.
        </P>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>What this app is</H2>
        <P>
          YOU CREATE YOU is a 365-day consciousness practice — a daily ritual app with
          reflective tools, guided meditations, and an AI-assisted "I AM" reflection feature.
          It is designed for self-discovery, contemplation, and personal practice.
        </P>

        {/* Alert box */}
        <div className="my-8 p-6 rounded-2xl"
          style={{
            border: '1px solid rgba(210,175,255,0.2)',
            background: 'rgba(210,175,255,0.04)',
          }}>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-4"
            style={{ color: 'rgba(210,175,255,0.7)' }}>
            Important — please read carefully
          </p>
          <P>
            YOU CREATE YOU is <Strong>not medical, psychological, psychiatric, or therapeutic advice</Strong>.
            It is not a substitute for professional mental-health care, medical treatment, or
            guidance from a licensed practitioner.
          </P>
          <P>
            If you are experiencing a mental-health crisis, suicidal thoughts, severe depression
            or anxiety, trauma, addiction, or any condition that needs clinical attention, please
            contact a qualified professional, your local emergency services, or a crisis line.
            In the US, the Suicide &amp; Crisis Lifeline is <Strong>988</Strong>.
          </P>
          <P>
            The practices, AI responses, affirmations, and meditations in this app are for
            personal reflection and self-inquiry only. Always consult a doctor, therapist,
            or qualified professional for any condition that requires real care.
          </P>
          <P>
            The Quantum Creation and Frequency Tuner practices, AI-generated reflections
            (I AM), and other tools in the app are offered for personal reflection,
            self-exploration, and entertainment. They are{' '}
            <Strong>not scientific, medical, psychological, financial, or professional
            claims</Strong>, and results are not guaranteed.
          </P>
        </div>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Your account</H2>
        <P>
          You can use this app without an account — your practice data lives on your device.
          If you choose to sign in with your email for cloud sync across devices, you are
          responsible for keeping your email account secure since a magic link is sent there.
        </P>
        <P>
          You agree that the email you provide is yours, that you are at least 13 years old,
          and that the information you give is accurate.
        </P>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Payment</H2>

        <H3>Pricing</H3>
        <P>
          The Transmission ebook and lifetime access to the app are sold together as a single
          <Strong> $79, one-time payment</Strong>. This is not a subscription — there is nothing
          to renew, and nothing that auto-charges you again.
        </P>

        <H3>How payment works</H3>
        <P>
          Payment is handled by a <Strong>secure third-party payment processor</Strong>. We never
          see your card details. Once payment succeeds, you have lifetime access to the ebook and
          every portal in the app — there is no billing period, no auto-renewal, and nothing to
          cancel.
        </P>

        <H3>Refunds</H3>
        <P>
          If you've genuinely given the practice a try — checked in with your Frequency, opened
          your journal, spent real time with the Transmissions — and it still didn't land the way
          it was meant to, you have 90 days. We'll take care of it. Just email{' '}
          <a href="mailto:hello@youcreateyou.life" style={{ color: 'rgba(210,175,255,0.8)' }}>
            hello@youcreateyou.life
          </a>.
        </P>

        <H3>Price changes</H3>
        <P>
          We may change the price for new purchases at any time — for example, once an audiobook
          is added to the bundle. This never affects anyone who has already purchased: your access
          doesn't change, and any future digital additions to the bundle (like the audiobook) are
          yours at no extra cost.
        </P>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>The I AM feature and AI</H2>
        <P>
          The "I AM" reflection tool uses AI technology to write a personal response to what
          you share, and voice synthesis technology to speak that response aloud. By using
          I AM, you understand and agree:
        </P>
        <ul className="ml-5 mb-6 list-disc">
          <Li>The responses are generated by AI, not by a human or a teacher.</Li>
          <Li>AI responses may occasionally feel off or generic, and are never a substitute for human conversation, therapy, or guidance.</Li>
          <Li>Your spoken words are processed by third-party services to generate the response. See our <Link href="/privacy" style={{ color: 'rgba(210,175,255,0.8)' }}>Privacy Policy</Link> for details.</Li>
          <Li>You should never rely on AI responses for any decision that has real consequences for your health, finances, relationships, or safety.</Li>
        </ul>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Your content</H2>
        <P>
          The journal entries, reflections, intentions, gratitudes, and other personal content
          you write in this app belong to you. We claim no ownership over your words.
        </P>
        <P>
          We do not read your entries. They live on your device, and (if you sign in to sync)
          in encrypted cloud storage that we do not access without your request.
        </P>

        <H2>Our content</H2>
        <P>
          The app's design, code, copy, voice recordings, wisdom prompts, sacred sequences,
          daily practices, and overall structure are owned by You Create You. You are welcome
          to use the app personally while you have an active subscription. You may not:
        </P>
        <ul className="ml-5 mb-6 list-disc">
          <Li>Copy, redistribute, or rebrand the app or its contents.</Li>
          <Li>Use it to train AI models.</Li>
          <Li>Sell, sublicense, or commercialize any part of it.</Li>
          <Li>Reverse-engineer, scrape, or attempt to bypass any security measures.</Li>
        </ul>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Acceptable use</H2>
        <P>Please do not use this app to:</P>
        <ul className="ml-5 mb-6 list-disc">
          <Li>Harm yourself or anyone else, or encourage harm to others.</Li>
          <Li>Spam, abuse, or attempt to break any system or service.</Li>
          <Li>Submit content that is illegal, hateful, threatening, or violates the rights of others.</Li>
          <Li>Attempt to access another user's account or data.</Li>
        </ul>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Limitation of liability</H2>
        <P>
          To the fullest extent allowed by law, YOU CREATE YOU is provided "as is" without
          any warranties of any kind. We cannot guarantee the app will be available 100% of
          the time, free of bugs, or perfectly suited to your specific needs.
        </P>
        <P>
          Our total liability to you is limited to the total amount you have paid in the past
          12 months (or $50, whichever is greater). We are not responsible for the consequences
          of any actions you take based on practices, reflections, or AI responses in the app.
        </P>

        <H2>Termination</H2>
        <P>
          You can stop using the app at any time. We reserve the right to suspend or terminate
          any account that violates these terms.
        </P>

        <H2>Governing law</H2>
        <P>
          These terms are governed by the laws of the <Strong>United States</Strong>. Any
          disputes that cannot be resolved directly will be subject to binding arbitration
          or the jurisdiction of competent courts in the United States.
        </P>

        <H2>Changes to these terms</H2>
        <P>
          If we update these terms in a meaningful way, signed-in users will be notified by
          email. By continuing to use the app after changes, you are agreeing to the new version.
        </P>

        <H2>Contact</H2>
        <P>
          For any questions, concerns, or billing issues —{' '}
          <a href="mailto:hello@youcreateyou.life" style={{ color: 'rgba(210,175,255,0.8)' }}>
            hello@youcreateyou.life
          </a>
        </P>

        <div className="my-10" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <p className="font-display italic text-[1.05rem] leading-[1.9] mb-8"
          style={{ color: 'rgba(210,175,255,0.55)' }}>
          Thank you for trusting us with your practice. May this app serve you well.
        </p>

        <p className="font-mono text-[9px] tracking-[0.2em] uppercase"
          style={{ color: 'rgba(179,136,255,0.35)' }}>
          Last updated: May 1, 2026
        </p>

      </div>
    </main>
  )
}
