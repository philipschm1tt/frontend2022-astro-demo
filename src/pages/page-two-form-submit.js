import { addCard, getCards } from "../data/cards.server";

export async function post({ params, request }) {
    const formData = await request.formData();

    const title = formData.get("title");
    const body = formData.get("body");
    const delay = formData.get("delay");

    const errors = {
        title: title ? null : "Title is required",
        body: body ? null : "Slug is required",
    };
    const hasErrors = Object.values(errors).some(
        (errorMessage) => errorMessage
    );
    if (hasErrors) {
        return new Response(JSON.stringify(errors), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    await addCard({ title, body });
    await getCards(); //wast a bit of time to get around eventual consistency issues

    if (delay) {
        await new Promise((res) => setTimeout(res, 5000));
    }

    const baseUrl = new URL(request.url).origin;
    return Response.redirect(new URL('/page-two', baseUrl));
}
