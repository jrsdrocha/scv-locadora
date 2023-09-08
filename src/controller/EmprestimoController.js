import { EmprestimoService } from '../services/EmprestimoService.js';

class EmprestimoController {
    static async findAll(req, res, next) {
        EmprestimoService.findAll()
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        EmprestimoService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        EmprestimoService.create(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req) {
        EmprestimoService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req) {
        EmprestimoService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByCliente(req, res, next) {
        EmprestimoService.findByCliente(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req, res, next) {
        EmprestimoService.findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findByClienteAndPeriodo(req, res, next) {
        EmprestimoService.findByClienteAndPeriodo(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findQuantidadesEmprestimosOfBairrosByPeriodo(req, res, next) {
        EmprestimoService.findQuantidadesEmprestimosOfBairrosByPeriodo(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findQuantidadesEmprestimosOfFilmesByPeriodo(req, res, next) {
        EmprestimoService.findQuantidadesEmprestimosOfFilmesByPeriodo(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findTotaisAnoMes(req, res, next) {
        EmprestimoService.findTotaisAnoMes()
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { EmprestimoController };