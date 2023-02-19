export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    try {
      return new Response(atob(url.pathname.slice(1)));
    } catch(e) {
      return new Response("Error: Decoding Failed", { status: 400 })
    }
  }
}
