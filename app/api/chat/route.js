// app/api/chat/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'API key not found' }, { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 100,
      }),
    });

    // Check if the response is OK
    if (!response.ok) {
      console.error('OpenAI API Error:', await response.text());
      return NextResponse.json({ error: 'OpenAI API request failed' }, { status: 500 });
    }

    const data = await response.json();

    // Check if the response has the expected data
    if (!data.choices || data.choices.length === 0 || !data.choices[0]?.message?.content) {
      console.error('Unexpected response format:', data);
      return NextResponse.json({ error: 'Unexpected response from OpenAI' }, { status: 500 });
    }

    const reply = data.choices[0].message.content;
    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Error in /api/chat:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
