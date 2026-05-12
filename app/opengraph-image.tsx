import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'You Create You'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0e0820 0%, #07050f 50%, #120830 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow orb */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(120,50,200,0.1) 45%, transparent 72%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
        }}/>

        {/* YOU logo mark */}
        <div style={{
          width: '110px',
          height: '110px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #4c1d95 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
          boxShadow: '0 0 50px rgba(139,92,246,0.5)',
        }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: '42px',
            fontStyle: 'italic',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '-0.02em',
          }}>
            YOU
          </span>
        </div>

        {/* Headline */}
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: '58px',
          fontWeight: '300',
          fontStyle: 'italic',
          color: '#f8f5ff',
          textAlign: 'center',
          lineHeight: 1.15,
          marginBottom: '20px',
          maxWidth: '900px',
        }}>
          The version of you<br/>
          who has everything — <span style={{ color: '#c084fc' }}>exists.</span>
        </div>

        {/* Sub label */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '13px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(200,168,255,0.55)',
          marginBottom: '36px',
        }}>
          You Create You · youcreateyou.life
        </div>

        {/* Bottom border line */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.6), rgba(192,132,252,0.8), rgba(168,85,247,0.6), transparent)',
          display: 'flex',
        }}/>
      </div>
    ),
    { ...size }
  )
}
