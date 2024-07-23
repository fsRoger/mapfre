
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

// Definir schema de validação para os dados recebidos
const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Validar os dados recebidos
      const { email, password } = schema.parse(req.body);

      // Aqui você pode implementar a lógica de autenticação
      // Por exemplo, chamar um serviço externo para autenticar o usuário
      // ou acessar um banco de dados para verificar as credenciais

      // Simulando uma resposta de sucesso
      res.status(200).json({ message: 'Login bem-sucedido!' });
    } catch (error) {
      // Em caso de erro de validação ou autenticação
      res.status(400).json({ message: 'Erro ao fazer login', error: error.message });
    }
  } else {
    // Método não permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
