import { Model, DataTypes } from 'sequelize';

class Multa extends Model {
    static init(sequelize) {
        super.init({
            valor: DataTypes.DOUBLE,
            pago: DataTypes.BOOLEAN
        }, { sequelize, modelName: 'multa', tableName: 'multas' })
    }
    static associate(models) {
        this.removeAttribute('id');
        this.belongsTo(models.emprestimo, { as: 'emprestimo', foreignKey: { name: 'emprestimoId', primaryKey: true, allowNull: false, validade: { notNull: { msg: 'Emprétimo do Item de Empréstimo deve ser preenchido!' } } } })
        this.belongsTo(models.fita, { as: 'fita', foreignKey: { name: 'fitaId', preimarykey: true, allowNull: false, validate: { notNull: { msg: 'Fita do item de empréstimo deve ser preenchida!' } } } });
    }
}

export { Multa };