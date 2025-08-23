export default function handler(req, res) {
  if (req.method === 'GET') {
    // para testar no browser
    return res.status(200).json({ ok: true, service: 'cheque-renderer', status: 'up' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Stub inicial só para a Lovable validar a URL
  const { code, width, height } = req.body || {};
  return res.status(200).json({ ok: true, received: { code, width, height } });
}
