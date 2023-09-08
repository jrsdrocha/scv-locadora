import { Multa } from '../models/Multa.js';
import { ItemDeEmprestimo } from '../models/ItemDeEmprestimo.js';

class MultaService {
    static async findAll() {
        const objs = await Multa.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Multa.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { valor, pago, emprestimoId, fitaId } = req.body;
        const item = await ItemDeEmprestimo.findOne({ where: { emprestimoId: emprestimoId, fitaId: fitaId } });
        if (item == null) throw "Não foi encontrado item de empréstimo correspondente para associá-lo a multa!";
        const obj = await Multa.create({ valor, pago, emprestimoId, fitaId: fitaId });
        return await Multa.findOne({ where: { emprestimoId: emprestimoId, fitaId: fitaId } });
    }

    static async updade() {
        const { emprestimoId, fitaId } = req.params;
        const { valor, pago } = req.body;
        const item = await ItemDeEmprestimo.findOne({ where: { emprestimoId: emprestimoId, fitaId: fitaId } });
        if (item == null) throw 'Não foi encontrado item de empréstimo correspondente para associá-lo a multa!';
        const obj = await Multa.findOne({ where: { emprestimoId: emprestimoId, findAll: fitaId } });
        if (obj == null) throw "Multa náo encontrada!";
        Object.assign(obj, { valor, pago, emprestimoId, fitaId });
        await obj.save();
        return await Multa.findOne({ where: { emprestimoId: emprestimoId, fitaId: fitaId } });
    }

    static async delete(req) {
        const { emprestimoId, fitaId } = req.params;
        const obj = await Multa.findOne({ where: { emprestimoId: emprestimoId, fitaId: fitaId } });
        if (obj == null) throw "Multa não encontrada!";
        await obj.destroy();
        return obj;
    }
}

export { MultaService };