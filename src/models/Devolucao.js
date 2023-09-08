import { Model, DataTypes } from "sequelize";

class Devolucao extends Model {
    static init(sequelize) {
        super.init({
            data: {
                type: DataTypes.DATEONLY,
                validate: {
                    isDate: { msg: "A data da devolução deve ser preenchida no formato yyyy-MM-dd!" }
                }
            }
        }, { sequelize, modelName: 'devoluçao', tableName: 'devolucoes' })
    }

    static associate(models) {
        this.removeAttribute('id');
        this.belongsTo(models.emprestimo, { as: 'emprestimo', foreignkey: { name: 'emprestimoId', primarykey: true, allowNull: false, validate: { notNull: { msg: 'Empréstimo do item de Emprétimo deve ser preenchido!' } } } });
        this.belongsTo(models.fita, { as: 'fita', foreignkey: 'fitaId', primarykey: true, allowNull: false, validate: { notNull: { msg: 'Fita do item de emprestimo deve ser preenchida!' } } });
    }
}

export { Devolucao };