// Slack deploy notifications (successor to the old deploy-status.js, which
// needed node-fetch — Node's built-in fetch replaces it).
//
// Setup (Netlify UI):
//   1. Site configuration → Environment variables → add SLACK_WEBHOOK
//      (the Slack Incoming Webhook URL — never commit it)
//   2. Site configuration → Notifications → add TWO outgoing webhooks
//      pointing at https://<site>/.netlify/functions/deploy-notify :
//      "Deploy succeeded" and "Deploy failed"
//
// The webhook payload is the deploy object; `state` distinguishes the events.

export default async (request) => {
  const webhook = process.env.SLACK_WEBHOOK;
  if (!webhook) return new Response('SLACK_WEBHOOK not configured', { status: 500 });

  let deploy = {};
  try {
    deploy = await request.json();
  } catch {
    /* keep defaults */
  }

  const failed = deploy.state === 'error';
  const branch = deploy.branch ?? 'unknown branch';
  const logUrl =
    deploy.admin_url && deploy.id ? `${deploy.admin_url}/deploys/${deploy.id}` : deploy.admin_url;

  const message = {
    username: 'Deploy to Netlify',
    text: failed
      ? `❌ Deploy of UVA Press FAILED (${branch})`
      : `✅ Successful deploy of UVA Press (${branch})`,
    attachments: [
      {
        color: failed ? '#d00000' : '#2eb886',
        fields: [
          { title: 'Status', value: failed ? 'Failed' : 'Success', short: true },
          { title: 'Branch', value: branch, short: true },
          ...(failed && deploy.error_message
            ? [{ title: 'Error', value: String(deploy.error_message).slice(0, 500) }]
            : []),
        ],
        actions: [
          ...(logUrl ? [{ type: 'button', text: 'Deploy log', url: logUrl }] : []),
          ...(deploy.ssl_url ? [{ type: 'button', text: 'Website', url: deploy.ssl_url }] : []),
        ],
      },
    ],
  };

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(message),
  });
  return new Response(res.ok ? 'notified' : `slack error ${res.status}`, {
    status: res.ok ? 200 : 502,
  });
};
