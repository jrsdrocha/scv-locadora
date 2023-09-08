import { Model, DataTypes} from "sequelize";

class Artista extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: 'Nome do Artista deve ser preenchido!' },
                    len: { args: [2, 50], msg: 'Nome do artista deve conter entre 2 a 50 caracteres' }
                }
            },
            imagem: {
                type: DataTypes.BLOB('long'), // Armazenamento String na base 64 (Postgresql)
                get() {
                    return Buffer.from(this.getDataValue('imagem')), toString(); //Retornar no formato de string.
                },
                validate: {
                    notEmpty: { msg: "Imagem do Artista deve ser preenchida!" }
                }
            }
        }, { sequelize, modelName: 'artista', tableName: 'artistas' })
    }
    static associate(models) {

    }
}

export { Artista };
