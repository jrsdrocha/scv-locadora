import { Model, DataTypes } from "sequelize";

class Fita extends Model {
    static init(sequelize) {
        super.init({
            danificada: {
                type: DataTypes.BOOLEAN,
                validate: {
                    notEmpty: { msg: "Informação sobre danificação da fita deve ser preenchida!" },
                }
            },
            disponivel: {
                type: DataTypes.BOOLEAN,
                validate: {
                    notEmpty: { msg: "Informação sobre a disponibilidade da fita deve ser preenchida!" }
                }
            }
        }, { sequelize, modelName: 'fita', tableName: 'fitas' })
    }

    static associate(models) {
        this.belongsTo(models.filme, { as: 'filme', foreignKey: { name: 'filmeId', allowNull: false, validate: { notNull: { msg: " Filme da fita deve ser preenchido!" } } } });
    }
}

export { Fita };