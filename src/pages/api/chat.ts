export const prerender = false;

import type { APIRoute } from 'astro';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.GROQ_API_KEY ?? process.env.GROQ_API_KEY ?? '',
});

const SYSTEM_PROMPT = `You are the AI receptionist for PlatinumDetailConcepts, a premium car detailing business in Los Angeles.

Business info:
- Name: PlatinumDetailConcepts
- Address: 145 S April St, Los Angeles, CA
- Phone: +1 (646) 886-5877
- Email: debibi53@gmail.com
- Hours: Monday–Saturday, 8am–6pm (closed Sundays)

Services & Pricing:
1. Basic Wash – $89/session
   Exterior hand wash & dry, wheel & tire cleaning, window cleaning (exterior), interior vacuum, dashboard wipe-down.

2. Premium Detail – $199/session (Most Popular)
   Everything in Basic, plus: clay bar treatment, paint enhancement polish, interior deep clean & steam, leather conditioning, tire dressing & trim restore.

3. Ultimate Package – $349/session
   Everything in Premium, plus: multi-stage paint correction, ceramic coating (2-year), engine bay cleaning, headlight restoration, 6-month protection guarantee.

Custom quotes available for larger vehicles or special conditions.

Your role:
- Answer questions about services, pricing, hours, and location.
- Help customers choose the right package for their needs.
- Encourage bookings by directing them to call, email, or use the contact form on the page.
- Be friendly, professional, and concise (2–4 sentences per reply).
- Do not make up information not listed above.`;

export const POST: APIRoute = async ({ request }) => {
  let messages: { role: 'user' | 'assistant'; content: string }[];

  try {
    const body = await request.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) throw new Error('invalid');
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const completion = await groq.chat.completions.create({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 512,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
          stream: true,
        });

        for await (const chunk of completion) {
          const text = chunk.choices[0]?.delta?.content ?? '';
          if (text) controller.enqueue(new TextEncoder().encode(text));
        }
      } catch (err) {
        console.error('[chat API error]', err);
        controller.enqueue(
          new TextEncoder().encode('Sorry, I encountered an error. Please call us at +1 (646) 886-5877.')
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    },
  });
};
