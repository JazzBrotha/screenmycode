import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';

export class Controller {
  public all(req: Request, res: Response): void {
    ExamplesService.all().then(r => res.json(r));
  }

  public byId(req: Request, res: Response): void {
    ExamplesService.byId(req.params.id).then(r => {
      r ? res.json(r) : res.status(404).end();
    });
  }

  public create(req: Request, res: Response): void {
    ExamplesService.create(req.body.name).then(r =>
      res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r),
    );
  }
}
export default new Controller();
