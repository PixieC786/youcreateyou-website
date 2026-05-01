import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://xdfxawwydrypjzgpncam.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZnhhd3d5ZHJ5cGp6Z3BuY2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMjI5MTUsImV4cCI6MjA5MDg5ODkxNX0.N-UQ0HuPQS-1LUPBFprEgbsjndPSZ_cbh3HYuQTtNiw'
)

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  const { error } = await supabase.from('email_signups').insert({ email })
  if (error && error.code !== '23505') {
    return NextResponse.json({ error: 'Could not save email' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
