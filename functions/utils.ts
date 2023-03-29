
const allowedOrigins = [
    'https://kilianpichard.com',
    "http://localho.st:3000",
    "http://localho.st:8788"
]

export const corsHeaders = (origin: any) => ({
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Origin': origin
})

export const checkOrigin = (request: any) => {
    const origin = request.headers.get("Origin")
    const foundOrigin = allowedOrigins.find(allowedOrigin => allowedOrigin.includes(origin))
    return foundOrigin ? foundOrigin : allowedOrigins[0]
}

export function toJSON(request: any, data: unknown, status = 200): Response {
    let body = JSON.stringify(data, null, 2);
    let headers = {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Access-Control-Allow-Origin,Content-Type"};
    const allowedOrigin = checkOrigin(request)
    return new Response(body, { headers: { 'Content-type': 'application/json', ...corsHeaders(allowedOrigin) }, status: status });
}

export function toError(request: any, error: string | unknown, status = 400): Response {
    return toJSON(request, {error}, status);
}

export function reply(request: any, output: any, attribute?: string): Response {
    if (output != null) {
        if (attribute != null) return toJSON(request, {[attribute]: output[attribute]}, 200);
        return toJSON(request, output, 200);
    }
    return toError(request, 'Error with the query', 500);
}

export async function sendEmail(senderEmail: string = "contact@kilianpichard.com", senderName: string = "Kilian Pichard", receiverEmail: string, subject: string, content: string): Promise<string> {
    const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "personalizations": [{
                "to": [{
                    "email": receiverEmail,
                }],
            }],
            "from": {
                "email": "contact@kilianpichard.com",
                "name": "Kilian Pichard"
            },
            "subject": subject,
            "content": [{
                "type": "text/plain",
                "value": content,
            }],
        })
    })

    const resp = await fetch(send_request);
    return resp.status === 202 ? "SUCCESS" : "ERROR";
}