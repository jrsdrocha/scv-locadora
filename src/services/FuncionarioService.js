import { Funcionario } from '../models/Funcionario.js';

class FuncionarioService {
    static async findAll() {
        const objs = await Funcionario.findAll({ include: { all: true, nested: true } });
        return objs
    }

    static async findByPy(req) {
        const { id } = req.params;
        const obj = await Funcionario.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { nome, cpf, rua, numero, login, senha, bairro } = req.body;
        if (bairro == null) throw "O bairro do funcionário deve ser preenchido!";
        const obj = await Funcionario.create({ nome, cpf, rua, numero, login, senha, bairroId: bairro.id });
        return await Funcionario.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { nome, cpf, rua, numero, login, senha, bairro } = req.body;
        if (bairro == null) throw "O bairro do Funcionário deve ser preenchido!";
        const obj = await Funcionario.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw "Funcionário não encontrado!"
        Object.assign(obj, { nome, cpf, rua, numero, login, senha, bairroId: bairro.id });
        obj.save();
        return await Funcionario.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Funcionario.findByPk(id);
        if (obj == null) throw "Funcioonário não encontrado!";
        await obj.destroy();
        return obj;
    }
}

export { FuncionarioService };