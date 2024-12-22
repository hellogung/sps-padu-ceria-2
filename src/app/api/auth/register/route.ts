export const revalidate = 60

export async function GET(request: Request) {
    if (request.method !== "GET") {
        return Response.json({ message: "Method not allowed" });
    }

    return new Response('get', {
        status:200,
        statusText: "asd"
    })
}