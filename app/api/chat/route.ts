import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { buildSystemPrompt } from '@/app/ai/kb';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Missing GOOGLE_GENERATIVE_AI_API_KEY' }, { status: 500 });
    }
    const { messages } = await req.json();
    const google = createGoogleGenerativeAI({ apiKey });
    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

    const result = await streamText({
      model: google(modelName) as any,
      system: buildSystemPrompt(),
      messages,
    });
    return result.toAIStreamResponse();
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Chat error' }, { status: 500 });
  }
}


