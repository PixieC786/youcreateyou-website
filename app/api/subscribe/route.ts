import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify({ email, groups: ['186552626043684858'] }),
  })

  // 200 = already subscribed (treated as success), 201 = newly subscribed
  if (!res.ok && res.status !== 200) {
    return NextResponse.json({ error: 'Could not subscribe' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
