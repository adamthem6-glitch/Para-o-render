export default async function handler(req, res) {
  // Configuração básica da API
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { html } = req.body; // o HTML do cheque será enviado do frontend

    if (!html) {
      return res.status(400).json({ error: "HTML não fornecido" });
    }

    // Aqui vamos integrar depois o serviço de renderização (ex: html2canvas no frontend ou API externa)
    // Por enquanto devolvemos o HTML recebido como teste:
    return res.status(200).json({ message: "Cheque recebido", preview: html });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao processar o cheque" });
  }
}

