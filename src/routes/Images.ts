import { Request, Response, Router } from 'express';
import superagent from 'superagent';

const router = Router();

router.get('/all/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        superagent.get(`https://mapy.radiopolska.pl/api/transmitterByProgId/PL/${id}`).end((err, response) => {
        // const programArray = getFieldsFromObject(response.body.data.fm, ['obiekt', 'dlugosc', 'szerokosc', 'id_obiekt', 'wys_npm']);
        return res.send(response);
    });

    } catch (err) {
        return res.status(404).json({
            error: err.message,
        });
    }

});

export default router;