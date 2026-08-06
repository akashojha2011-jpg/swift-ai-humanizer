import { NextRequest, NextResponse } from "next/server";
import { humanizeText, HumanizeOptions } from "@/lib/humanizerEngine";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, tone = "casual", mode = "quick" } = body;

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "Please provide valid text to humanize." }, { status: 400 });
    }

    if (text.length > 15000) {
      return NextResponse.json({ error: "Text exceeds maximum character limit of 15,000 characters per request." }, { status: 400 });
    }

    const options: HumanizeOptions = {
      tone,
      mode,
    };

    const result = await humanizeText(text, options);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("Humanize API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process text humanization." },
      { status: 500 }
    );
  }
}
