import { Model, DataTypes } from "sequelize";

class Cidade extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Nome da Cidade deve ser preenchido!" },
                    len: { args: [2, 50], msg: 'Nome da Cidade deve conter entre 2 a 50 caracteres!' }
                }
            }
        }, { sequelize, modelName: 'cidade', tableName: 'cidades' })
    }

    static associate(models) {
        this.belongsTo(models.uf, {as: 'uf', foreignkey: {name: 'ufId', allowNull: false, validate: { notNull: { msg: 'Uf da Cidade deve ser preenchida!' } } } })
    }
}

export { Cidade };