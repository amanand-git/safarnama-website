// Cloudflare Pages Function - Proxies requests to OpenRouter API
// The API key is stored as an environment variable (OPENROUTER_API_KEY)
// This keeps your API key secure and hidden from users

export async function onRequestPost(context) {
    try {
        // Get the API key from environment variables
        const apiKey = context.env.OPENROUTER_API_KEY;
        
        if (!apiKey) {
            return new Response(JSON.stringify({
                error: { message: 'API key not configured on server' }
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Parse the incoming request body
        const requestBody = await context.request.json();

        // Forward the request to OpenRouter
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': context.request.headers.get('origin') || 'https://safarnama.pages.dev',
                'X-Title': 'Safarnama AI Chatbot'
            },
            body: JSON.stringify(requestBody)
        });

        // Get the response data
        const data = await response.json();

        // Return the response to the client
        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });

    } catch (error) {
        console.error('Proxy error:', error);
        return new Response(JSON.stringify({
            error: { message: 'Server error: ' + error.message }
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

// Handle CORS preflight requests
export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400'
        }
    });
}
