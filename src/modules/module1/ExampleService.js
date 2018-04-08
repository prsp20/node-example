const examples = [];

export default class ExampleService {
    client;
    uuid;

    constructor(client, uuidGenerator) {
      this.client = client;
      this.uuid = uuidGenerator;
    }

    createExample = (example) => {
      console.log(`Created an example. Body: ${example}`);
      const id = this.uuid();
      examples[id] = {...example, id};
      return Promise.resolve(id);
    };

    getExampleById = (id) => {
      console.log('Got an example by ID');
      return Promise.resolve(examples[id]);
    };
};
