import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — You Create You',
  description: 'How You Create You handles your data. Plain English, no surprises.',
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-12"
          style={{ color: 'rgba(179,136,255,0.45)' }}>
          You Create You · Plain English, No Surprises
        </p>

        <P>
          You Create You is a spiritual practice app. The data you put into it — your reflections,
          fears, gratitudes, intentions — is personal and sacred. We take that seriously.
          Here is everything we collect, why, and what you can do about it.
        </P>

        {/* Divider */}
        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>What we collect</H2>

        <H3>If you use the app without signing in</H3>
        <P>
          Your practice data (daily entries, reflections, gratitude lists, intentions,
          frequency check-ins, etc.) lives <Strong>only on your device</Strong>, in your
          browser's local storage. We don't see it. No one does. If you uninstall the app
          or clear your browser data, it's gone.
        </P>

        <H3>If you sign in to sync across devices</H3>
        <P>
          You provide your <Strong>email address</Strong>, and we send you a magic link —
          no password needed. Your practice data is then backed up to a{' '}
          <Strong>secure cloud database</Strong> so you can access it on another phone or
          computer. Data is stored on US-based servers.
        </P>

        <H3>If you subscribe</H3>
        <P>
          Payments are handled entirely by a <Strong>third-party payment processor</Strong>.
          We never see your card number. We receive only your subscription status
          (active / cancelled / trial) and the email tied to the payment.
        </P>

        <H3>When you use the I AM feature</H3>
        <P>
          The words you speak are sent to a <Strong>third-party AI service</Strong> to
          generate a personal written response. The voice you hear is produced by a{' '}
          <Strong>third-party voice synthesis service</Strong>. Cached audio for common
          responses may be saved to our cloud storage to avoid regenerating identical
          responses — no part of your personal question is retained in those files.
          These services process data according to their own privacy policies.
        </P>

        <H3>Push notifications</H3>
        <P>
          If you allow push notifications, your device generates an anonymous endpoint
          that we store in order to send you daily practice reminders. No personal
          information is attached. You can revoke this at any time in your phone settings.
        </P>

        <H3>What we don't collect</H3>
        <ul className="ml-5 mb-6 list-disc">
          <Li>We do not run tracking pixels, analytics scripts, or advertising tags of any kind.</Li>
          <Li>We do not sell or share your data with anyone, ever.</Li>
          <Li>We do not see your card number or any banking information.</Li>
          <Li>We do not read your journal entries or reflections — they are stored securely and accessed only when you request them on your own devices.</Li>
        </ul>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Third-party services</H2>
        <P>
          To operate this app, we use a small number of trusted third-party services.
          Each processes data according to its own privacy policy, available on their
          respective websites. These services include: a cloud database provider, a payment
          processor, an AI text generation provider, a voice synthesis provider, and a
          web hosting provider.
        </P>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Your rights</H2>
        <P>You can do any of the following at any time:</P>
        <ul className="ml-5 mb-6 list-disc">
          <Li><Strong>Export your data</Strong> — use the Backup &amp; Restore tool in the app to download everything saved on your device.</Li>
          <Li><Strong>Delete your local data</Strong> — clear your browser's site data, or use the "Reset &amp; Start Fresh" option in My Journey.</Li>
          <Li><Strong>Delete your synced cloud data</Strong> — email <a href="mailto:support@youcreateyou.life" style={{ color: 'rgba(210,175,255,0.8)' }}>support@youcreateyou.life</a> and we will permanently delete your account and all associated data within 7 days.</Li>
          <Li><Strong>Cancel your subscription</Strong> — manage it directly through the payment processor's customer portal, or email us.</Li>
          <Li><Strong>Withdraw push notification consent</Strong> — turn them off in your device settings at any time.</Li>
        </ul>

        <div className="my-8" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <H2>Children's privacy</H2>
        <P>
          This app is not intended for anyone under 13 years old. If you believe a child
          has used the app, email{' '}
          <a href="mailto:support@youcreateyou.life" style={{ color: 'rgba(210,175,255,0.8)' }}>
            support@youcreateyou.life
          </a>{' '}
          and we will delete their data immediately.
        </P>

        <H2>Data location</H2>
        <P>
          Synced data is stored on US-based cloud servers. If you are outside the United
          States, by using the app you agree that your data may be processed in the US.
        </P>

        <H2>Changes to this policy</H2>
        <P>
          If we change this policy in a meaningful way, signed-in users will be notified
          by email. The "last updated" date below always reflects the current version.
        </P>

        <H2>Contact</H2>
        <P>
          Questions, concerns, or data requests —{' '}
          <a href="mailto:support@youcreateyou.life" style={{ color: 'rgba(210,175,255,0.8)' }}>
            support@youcreateyou.life
          </a>
        </P>

        <div className="my-10" style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }} />

        <p className="font-display italic text-[1.05rem] leading-[1.9] mb-8"
          style={{ color: 'rgba(210,175,255,0.55)' }}>
          This app is built to support your return to yourself. The way we treat your
          data should reflect the same sacred care you bring to your practice.
        </p>

        <p className="font-mono text-[9px] tracking-[0.2em] uppercase"
          style={{ color: 'rgba(179,136,255,0.35)' }}>
          Last updated: May 1, 2026
        </p>

      </div>
    </main>
  )
}
