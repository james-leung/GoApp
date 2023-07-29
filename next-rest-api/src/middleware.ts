import { NextResponse } from "next/server"

const allowedOrigins = process.env.NODE_ENV === 'production' ? ['https://www.yoursite.com', 'https://yoursite.com'] : ['http://localhost:3000', 'https://www.google.com']

export function middleware(request: Request) {
    const regex = new RegExp('/api/*')

    const origin = request.headers.get('origin')
    console.log(origin)

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Content-Type': 'text/plain'
            }
        })
    }

    return NextResponse.next()
}