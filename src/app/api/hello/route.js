export async function GET() {
    return new Response(JSON.stringify({ message: "Hello, Next.js API!" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  