import { Model, DataTypes } from 'sequelize';

class Participacao extends Model {
    static init(sequelize) {
        super.init({
            personagem: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Personagem da participação deve ser preenchida!" }
                }
            }
        }, { sequelize, modelName: 'participacao', tableName: 'participacoes' })
    }

    static associate(models) {
        this.belongsTo(models.filme, { as: 'filme', foreignKey: { name: 'filmeId', allowNull: false, validate: { notNull: { msg: 'Filme da participação deve ser preenchido!' } } } });
        this.belongsTo(models.artista, { as: 'artista', foreignKey: { name: 'artistaId', allowNull: false, validate: { notNull: { msg: 'Artista da participação deve ser preenchido!' } } } });
    }
}

export { Participacao };