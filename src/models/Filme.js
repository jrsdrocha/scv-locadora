import { Model, DataTypes } from "sequelize";

class Filme extends Model {
    static init(sequelize) {
        super.init({
            titulo: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: 'Título do Filme deve ser preenchido!' },
                    len: { args: [2, 50], msg: " Título do filve deve conter entre 2 a 50 caracteres!" },
                }
            },
            genero: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: 'Título do Filme deve ser preenchido!' }
                }
            },
            duracao: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Duração do FIlme deve ser preenchida!" },
                    is: { args: ["[0-9]{2}\:[0-9]{2}"], msg: "Duração do Filme deve ser preenchida!" }
                }
            },
            imagem: {
                type: DataTypes.BLOB('long'), //Armazenando String na base64
                get() {
                    return Buffer.from(this.getDataValue('imagem')).toString(); //Retornando no formato STRING
                },
                validate: {
                    notEmpty: { msg: "Imagem do Filme deve ser preenchida!" }
                }
            }
        }, { sequelize, modelName: 'filme', tableName: 'filmes' })
    }

    static associate(models) {
        this.belongsTo(models.tipoDeFilme, {as: 'tipoDeFilme', foreignKey: {name: 'tipoDeFilmeId', allowNull: false, validate: {notNull: {msg: 'Tipo de Filme do Filme deve ser preenchido!'}}}});
        this.belongsToMany(models.diretor, {as: 'diretores', through: 'filme_diretor', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
        this.hasMany(models.participacao, {as: {singular:'participacao' , plural: 'participacoes'}, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
      }

};

export { Filme };