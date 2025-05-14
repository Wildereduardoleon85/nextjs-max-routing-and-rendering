import { NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GET(req: NextRequest) {
  return new Response('Hello, Next.js!')
}
