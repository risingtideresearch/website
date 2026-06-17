export async function POST(req: Request) {
  if (!process.env.BUTTONDOWN_API_KEY) {
    console.error("BUTTONDOWN_API_KEY is not set");
    return Response.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const { email } = await req.json();

  const res = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email }),
  });

  const body = await res.json().catch(() => null);

  if (res.status === 400) {
    const isAlreadySubscribed =
      body?.email_address?.some?.((msg: string) =>
        msg.toLowerCase().includes("already") || msg.toLowerCase().includes("unique")
      ) ?? false;

    if (isAlreadySubscribed) {
      return Response.json({ error: "already_subscribed" }, { status: 422 });
    }
  }

  if (!res.ok) {
    console.error("Buttondown error:", res.status, JSON.stringify(body));
    return Response.json({ error: "Failed to subscribe", status: res.status, detail: body }, { status: res.status });
  }

  return Response.json({ success: true });
}
