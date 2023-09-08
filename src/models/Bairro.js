import { Model, DataTypes } from "sequelize";

class Bairro extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Nome do Bairro deve ser preenchido!" },
                    len: { args: [2, 50], msg: 'Nome do Bairro deve conter entre 2 a 50 caracteres!' }
                }
            }
        }, { sequelize, modelName: 'bairro', tableName: 'bairros' })
    }

    static associate(models) {
        this.belongsTo(models.cidade, { as: 'cidade', foreignkey: 'cidadeId', allowNull: false, validade: { notNull: { msg: 'Cidade do Bairro deve ser preenchida!' } } })
    }
}

export { Bairro };