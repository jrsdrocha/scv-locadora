import { FuncionarioService } from "../services/FUncionarioService.js";

class FuncionarioController {
    static async findAll(req, res, next) {
        FuncionarioService.findAll()
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        FuncionarioService.findByPy(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        FuncionarioService.create(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req, res, next) {
        FuncionarioService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        FuncionarioService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { FuncionarioController };