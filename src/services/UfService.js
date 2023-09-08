import { Uf } from '../models/Uf.js'

class UfService {
    static async findAll() {
        const objs = await Uf.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Uf.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { silga, nome } = req.body;
        const obj = await Uf.create({ silga, nome });
        return await Uf.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { sigla, nome } = req.body;
        const obj = await Uf.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw "A Uf não encontrada!";
        Object.assign(obj, { sigla, nome });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Uf.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw "Uf não encontrada!"
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            "Nõ é possível deletar Uf que possui cidades!"
        }
    }
}

export { UfService };