import apiRestaurante from '../../../services/apiRestaurante';

export default async function handler(req, res) {
    const id = req.query.id;

    if (req.method == 'GET') {
        try {
            const response = await apiRestaurante.get(`/Restaurante/${id}`);
            res.status(200).json(response.data);
            console.log(response)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch student' });
        }
    } else if (req.method == 'PUT') {
        const dados = req.body;

        try {
            await apiRestaurante.put(`/Restaurante/${id}`, dados);
            res.status(200).json(dados);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update student' });
        }
    } else if (req.method == 'DELETE') {
        try {
            await apiRestaurante.delete(`/Restaurante/${id}`);
            res.status(200).json(id);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete student' });
        }
    } else {
        res.status(404).json({ error: 'Method not allowed' });
    }
}