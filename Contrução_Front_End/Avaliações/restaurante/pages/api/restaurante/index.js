import apiRestaurante from "../../../services/apiRestaurante";

export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const response = await apiRestaurante.get('/alunos');
            const retorno = response.data;
            res.status(200).json(retorno);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch students' });
        }
    } else if (req.method == 'POST') {
        try {
            //const id = v4();
            const dados = req.body;
            //dados.id = id;
            await apiRestaurante.post('/Restaurante', dados);
            res.status(200).json(dados);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error });
        }
    } else {
        res.status(404).json({ error: 'Method not allowed' });
    }
}