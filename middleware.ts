import { NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(req: NextRequest) {
  //   console.log(req)
  return NextResponse.next()
}

export const config = {
  matcher: '/news',
}
