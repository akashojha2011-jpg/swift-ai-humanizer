import { NextRequest, NextResponse } from "next/server";
import { analyzeTextAIDetection } from "@/lib/aiDetector";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text string required for analysis." }, { status: 400 });
    }

    const metrics = analyzeTextAIDetection(text);
    return NextResponse.json({ success: true, metrics });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to analyze text." }, { status: 500 });
  }
}
