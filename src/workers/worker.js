/*
 * Clouldflare Worker – manually configured at dash.cloudflare.com
 * Based on tutorial https://blog.cloudflare.com/building-a-to-do-list-with-workers-and-kv/
 *
 * Examples:
 * curl -X GET "https://frontend2022-kv.philipschm1tt.workers.dev/api"
 *  [{"title":"First Card","body":"Look! A bit of data!"},{"title":"Second Card","body":"In Cloudflare KV"}]
 *
 * curl -X PUT "https://frontend2022-kv.philipschm1tt.workers.dev/api" --data '[{"title":"First Card","body":"Look! A bit of data!"},{"title":"Second Card","body":"In Cloudflare KV"}]'
 *  [{"title":"First Card","body":"Look! A bit of data!"},{"title":"Second Card","body":"In Cloudflare KV"}]
 * */

addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
});

async function getCards(request) {
    const cards = await FRONTEND2022_DEMO.get("cards") || [];

    if (cards === null) {
        return new Response("[]", { status: 404 });
    }
    return new Response(cards, {
        headers: { "Content-Type": "application/json" },
    });
}

async function updateCards(request) {
    const body = await request.text()
    try {
        JSON.parse(body)
        await FRONTEND2022_DEMO.put("cards", body)
        return new Response(body, { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/api")) {
        const cards = await getCards(request);

        if (request.method === "PUT") {
            return updateCards(request);
        } else {
            return getCards(request);
        }
    }

    return fetch("https://welcome.developers.workers.dev");
}
