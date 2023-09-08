import { Gerente } from '../models/Gerente.js';

class GerenteService {
    static async findAll() {
        const objs = await Gerente.findAll({ inludes: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Gerente.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { nome, cpf, rua, numero, login, senha, bairro } = req.body;
        if (bairro == null) throw "O Bairro do Gerente deve ser preenchido!";
        const obj = await Gerente.create({ nome, cpf, rua, numero, login, senha, bairroId: bairro.id });
        return await Gerente.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { nome, cpf, rua, numero, login, senha, bairro } = req.body;
        if (bairro == null) throw "O Bairro do Gerente precisa ser preenchido!"
        const obj = await Gerente.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw "Gerente não encontrado!";
        Object.assign(obj, { nome, cpf, rua, numero, login, senha, bairroId: bairro.id });
        obj.save();
        return await Gerente.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Gerente.findByPk(id);
        if (obj == null) throw "Gerente nao encontrado!";
        await obj.destroy();
        return obj;

    }
}

export { GerenteService };