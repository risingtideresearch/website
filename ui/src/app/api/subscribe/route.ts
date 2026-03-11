export async function POST(req: Request) {
  const { email } = await req.json();

  const res = await fetch("https://api.buttondown.email/v2026-04-01/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (res.status === 422) return Response.json({ error: "already_subscribed" }, { status: 422 });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    return Response.json({ error: "Failed to subscribe", status: res.status, detail: body }, { status: res.status });
  }
  return Response.json({ success: true });
}
