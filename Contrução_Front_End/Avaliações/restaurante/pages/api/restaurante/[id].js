import apiRestaurante from '../../../services/apiRestaurante';

export default async function handler(req, res) {
    const id = req.query.id;

    if (req.method == 'GET') {
        try {
            const response = await apiRestaurante.get(`/alunos/${id}`);
            res.status(200).json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch student' });
        }
    } else if (req.method == 'PUT') {
        const dados = req.body;

        try {
            await apiRestaurante.put(`/alunos/${id}`, dados);
            res.status(200).json(dados);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update student' });
        }
    } else if (req.method == 'DELETE') {
        try {
            await apiRestaurante.delete(`/alunos/${id}`);
            res.status(200).json(id);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete student' });
        }
    } else {
        res.status(404).json({ error: 'Method not allowed' });
    }
}