import * as utils from '../utils.js';

export const onRequestOptions = async (context) => {
    const allowedOrigin = utils.checkOrigin(context.request)
    return new Response(null, {
        status: 204,
        headers: utils.corsHeaders(allowedOrigin)
    });
};

export const onRequest = async ({ next }) => {
    const response = await next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
};
