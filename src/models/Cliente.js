import { Model, DataTypes } from "sequelize";

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "O nome do Cliente deve ser preenchido!" },
                    len: { args: [2, 50], msg: "O nome do Cliente deve conter entre 2 a 50 caracteres!" }
                }
            },
            cpf: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "CPF do Cliente deve ser preenchido!" },
                    is: { args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: 'O CPF do Cliente deve seguir o formato de NNN.NNN.NNN-NN!' }
                }
            },
            rua: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: ' A Rua do Cliente deve ser preenchida!' }
                }
            },
            numero: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: { msg: "O numero do Cliente deve ser preenchido no formato inteiro!" }
                }
            },
            debito: {
                type: DataTypes.DOUBLE,
                validata: {
                    isFloat: { msg: 'O valor do Débito do cliente deve ser preenchido com valor decimal!' }
                }
            },
            nascimento: {
                type: DataTypes.DATEONLY,
                validate: {
                    isDate: { msg: 'A data de Nascimento do CLiente deve ser preenchida!' },
                    is: { args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: 'Nascimento do cliente deve ser preenchido no formato YYYY-MM-DD!' }
                }
            }
        }, { sequelize, modelName: 'cliente', tableName: 'clientes' })
    }

    static associate(models) {
        this.belongsTo(models.bairro, { as: 'bairro', foreignkey: { name: 'bairroId', allowNull: false, validate: { notNull: { msg: 'Bairro do cliente deve ser preenchido!' } } } });
        this.hasMany(models.telefone, { as: 'telefones', onDelete: "CASCADE", onUpdate: 'CASCADE' });
    }
}

export { Cliente };