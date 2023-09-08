import { Fita } from '../models/Fita.js'

class FitaService {
    static async findAll() {
        const objs = await Fita.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Fita.findByPk(id, { include: { all: true, nested: true } });
        return obj
    }

    static async findByFilme(req) {
        const { id } = req.params;
        const objs = await Fita.findAll({ where: { filmeId: id }, include: { all: true, nested: true } });
        return objs
    }

    static async findDanificadaAndDisponivel(req) {
        const { danificada, disponivel } = req.params;
        const objs = await Fita.findAll({ where: { id: id, disponivel: disponivel } });
    }

    static async findByIdAndDisponivel(id, disponivel) {
        const objs = await Fita.findAll({ where: { id: id, disponivel: disponivel } });
        return objs;
    }

    static async create(req) {
        const { danificada, disponivel, filme } = req.body;
        if (filme == null) throw "O filme da fita deve ser preenchido!";
        const obj = await Fita.create({ danificada, disponivel, filmeId: filme.id });
        return await Fita.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { danificada, disponivel, filme } = req.body;
        if (filme == null) throw "O filme da fita deve ser preenchida!"
        const obj = await Fita.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw "Fita não encontrada!"
        Object.assign(obj, { danificada, disponivel, filmeId: filme.id });
        await obj.save();
        return await Fita.findByPk(obj.id, { include: { all: true, nested: true } });

    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Fita.findByPk(id);
        if (obj == null) throw "Fita não encontrada!";
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Nao é possivel remover uma Fita associada a empréstimos ou reservas!"
        }
    }
}

export { FitaService };