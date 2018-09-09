import Promise from 'bluebird';
import L from '../../common/logger';

let id = 0;
interface Example {
  id: number;
  name: string;
}

const examples: Example[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
];

export class ExamplesService {
  public all(): Promise<Example[]> {
    L.info(examples, 'fetch all examples');
    return Promise.resolve(examples);
  }

  public byId(exampleId: number): Promise<Example> {
    L.info(`fetch example with exampleId ${exampleId}`);
    return this.all().then(r => r[exampleId]);
  }

  public create(exampleName: string): Promise<Example> {
    L.info(`create example with exampleName ${exampleName}`);
    const example: Example = {
      id: id++,
      name: exampleName,
    };
    examples.push(example);
    return Promise.resolve(example);
  }
}

export default new ExamplesService();
