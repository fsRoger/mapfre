// pages/api/seguros.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
      // Aqui você pode processar os dados recebidos, salvar no banco de dados, etc.
      console.log('Dados recebidos:', data);
      res.status(200).json({ message: 'Dados recebidos com sucesso!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  