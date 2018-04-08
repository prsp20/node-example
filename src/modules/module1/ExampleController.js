export default class ApplicationController {
    service;

    constructor(service) {
      this.service = service;
    }

    create = (req, res, next) => {
      return this.service.createExample(req.body)
        .then(id => res.status(201).json({id}))
        .catch(next);
    };

    getById = (req, res, next) => {
      return this.service.getExampleById(req.params.id)
        .then(example => res.status(200).json(example))
        .catch(next);
    };
}
