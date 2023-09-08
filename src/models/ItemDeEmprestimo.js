import { Model, DataTypes } from "sequelize";

class ItemDeEmprestimo extends Model {
    static init(sequelize) {
        super.init({
            valor: {
                type: DataTypes.DOUBLE,
                Validate: {
                    isFloat: { msg: "Valor do item de Empréstimo deve ser preenchido" }
                }
            },
            entrega: {
                type: DataTypes.DATEONLY,
                validate: {
                    isDate: { msg: "Data de entrega do item de Empréstimo deve ser preenchida com valor decimal!" },
                    is: { args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Data de entrega do item de Empréstimo deve seguir o padrão de yyyy-MM-dd!" }
                }
            }
        }, { sequelize, modelName: 'itemDeEmprestimo', tableName: 'Itens_de_emprestimo' })
    }

    static associate(models) {
        this.removeAttribute('id');
        this.belongsTo(models.emprestimo, { as: 'emprestimo', foreignKey: { name: 'emprestimoId', primarykey: true, allouNull: false, validade: { notNull: { msg: "Empréstimo do item de Empréstimo deve ser preenchido!" } } } });
        this.belongsTo(models.fita, { as: 'fita', foreignKey: { name: 'fitaId', primarykey: true, allowNull: false, validate: { notNull: { msg: "Fita do item de Empréstimo deve ser preenchida!" } } } })
    }
}

export { ItemDeEmprestimo };