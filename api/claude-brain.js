// Content Beast v9.0 — AI Brain Endpoint
// Vercel Serverless Function: /api/claude-brain
// Requires: ANTHROPIC_API_KEY in Vercel environment variables

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
  }

  const { seed, target, aperture, collisionPack, epAtoms, voiceDials, structureTemplate, metaQuestion } = req.body;

  if (!seed) {
    return res.status(400).json({ error: 'seed is required' });
  }

  // Build collision instructions
  const collisionInstructions = (collisionPack || []).map(c =>
    `- ${c.name}: ${c.move} (best for: ${c.best_for})`
  ).join('\n');

  // Build atom context
  const atomContext = (epAtoms || []).slice(0, 20).map(a =>
    `[${a.epType}] ${a.text.slice(0, 200)}`
  ).join('\n');

  const systemPrompt = `You are the AI Brain of Content Beast — an epistemic atomizer and synthesizer
built by Gabo Saturno. Your function is ONE ORBIT:

  SEED → ATOMS (epistemic) → COLLISIONS → CHANNEL → ARTIFACT → NEXT QUESTION

═══ EPISTEMIC TYPES ═══
classify every input chunk as one of:
  claim | story | protocol | pattern | belief | question | feeling | command

═══ VOICE DIALS ═══
Current settings: intensity=${voiceDials?.intensity || 7}, vulnerability=${voiceDials?.vulnerability || 5}, abstraction=${voiceDials?.abstraction || 5}
- intensity 8-10 = urgent, nuclear, no softening
- vulnerability 7-10 = personal, confessional, exposed
- abstraction 7-10 = cosmic, metaphorical, philosophical
- abstraction 1-3 = literal, specific, numbered, grounded

═══ COLLISION TECHNIQUES TO APPLY ═══
${collisionInstructions || 'No specific collisions selected — use your judgment.'}

Apply the MOVE to the content BEFORE writing the artifact.
Pick 3–7 from the pack per output. Run 2 passes. Keep what survives the collision.

═══ CHANNEL: ${(target || 'email').toUpperCase()} ═══
═══ APERTURE: ${(aperture || 'section').toUpperCase()} ═══

Aperture guide:
atom     = one quote, one hook, one insight (< 100 words output)
section  = one section of a doc (100-300 words)
chapter  = full chapter or post (300-800 words)
os       = full system doc, book outline, multi-section (800+ words)

Channel artifacts:
email    → Subject + Hook (1 story) + Lesson (1 truth) + Action (1 command)
blog     → Title + Hook + 3-5 sections + Soft CTA — no more than 800 words
tech     → Title + Problem + Method + Examples + Edge Cases — precise, no fluff
speech   → Cold open + Story + Thesis + 3 Pillars + Closing image
webinar  → Agenda + 3 Teaching blocks + Live prompts + Offer frame
book     → Part/Chapter/Section + Core argument + Evidence + Exercise

═══ RESPONSE JSON CONTRACT ═══
Always return ONLY valid JSON in this exact shape (no markdown fences, no extra text):
{
  "mode": "pdf",
  "summary": "One sentence of what this orbit produced.",
  "content": "Full HTML artifact using <h1><h2><h3><p><ul><li><blockquote>",
  "captions": [],
  "nodes": [],
  "connections": [],
  "nextQuestion": "The one question the user should ask next to deepen this orbit."
}

nextQuestion must follow the seed meta-question formula:
"What do I need to say right now that, once said, tells me what to say next,
where to say it, and makes everything I've already said more true?"

═══ FAILURE MODE IMMUNIZATION ═══
Before responding, complete this sentence internally:
"The most likely invisible failure in my response is ___."
Then respond anyway with that risk accounted for.`;

  const userMessage = `SEED: ${seed}

${atomContext ? `EXISTING ATOMS FROM LIBRARY:\n${atomContext}\n` : ''}
${structureTemplate ? `STRUCTURE TEMPLATE: ${structureTemplate}\n` : ''}
META-QUESTION: ${metaQuestion || ''}

Generate the ${target || 'email'} artifact at ${aperture || 'section'} aperture. Return ONLY valid JSON.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[Brain API] Anthropic error:', response.status, errText);
      return res.status(502).json({ error: 'Anthropic API error', status: response.status });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    // Parse JSON from Claude's response
    let result;
    try {
      // Try direct parse first
      result = JSON.parse(text);
    } catch {
      // Try extracting JSON from potential markdown fences
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0]);
      } else {
        result = {
          mode: 'pdf',
          summary: 'Raw response (JSON parse failed)',
          content: '<p>' + text.replace(/\n/g, '</p><p>') + '</p>',
          captions: [],
          nodes: [],
          connections: [],
          nextQuestion: ''
        };
      }
    }

    return res.status(200).json(result);

  } catch (err) {
    console.error('[Brain API] Error:', err);
    return res.status(500).json({ error: 'Internal server error', message: err.message });
  }
}
