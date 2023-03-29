import * as utils from '../utils';

export async function onRequestPost(context) {
    const body = await context.request.json();
    return utils.reply(context.request, {status: "Fields not valid"});
}