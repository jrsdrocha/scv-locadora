import { FilmeService } from "../services/FilmeService.js";

class FilmeController {
    static async findAll(req, res, next) {
        FilmeService.findAll()
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        FilmeService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next)
    }

    static async create(req, res, next) {
        FilmeService.create()
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req, res, next) {
        FilmeService.updade(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        FilmeService.delete(req)
            .then(obj => res.json(obj))
            .catch(next)
    }

    static async findByTipoDeFilme(req, res, next) {
        FilmeService.findByTipoDeFIlme(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { FilmeController };