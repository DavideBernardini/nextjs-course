import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({ message: "hello from api" })
}

export async function POST(req: Request) {
    const data = await req.json()
    const { name } = data
    return NextResponse.json({ message: `message: hello ${name} from api` })
}