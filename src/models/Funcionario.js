import { Model, DataTypes } from "sequelize";

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Nome do funcionário deve ser preenchido!" },
                    len: { args: [2, 50], msg: "Nome do funcionário deve conter entre 2 a 50 caracteres!" }
                }
            },
            cpf: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "CPF do funcionário deve ser preenchido!" },
                    is: { args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{2}"], msg: "CPF do funcionário deve seguir o padrao NNN.NNN.NNN.NN!" },
                }
            },
            rua: {
                type: DataTypes.STRING,
                validade: {
                    notEmpty: { msg: "Rua do Funcionário deve ser preenchida!" }
                }
            },
            numero: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: { msg: "Numero da casa do Funcionário deve ser preenchido com valor inteiro!" }
                }
            },
            login: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Login do funcionário deve ser preenchido!" },
                    len: { args: [2, 20], msg: "Login do Funcionário deve conter entre 2 a 20 caracteres!" },
                }
            },
            senha: {
                type: DataTypes.STRING,
                Validete: {
                    notEmpty: { msg: "Senha do Funcionário deve ser pressnchida!" },
                    len: { args: [6, 10], msg: "Senha do Funcionário deve ter entre 6 a 10 caracteres!" }
                }
            }
        }, { sequelize, modelName: 'funcionario', tableName: 'funcionarios' })
    }

    static associate(models) {
        this.belongsTo(models.bairro, { as: 'bairro', foreignKey: { name: 'bairroId', allowNull: false, validate: {notNull: { msg: 'Bairro do Funcionário deve ser preenchido!' } } } });
    }
}

export { Funcionario };