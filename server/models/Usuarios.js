module.exports	= (sequelize, DataTypes) => {
    

    const Usuarios = sequelize.define("Usuarios", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        segundoNombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        identidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigoEmpleado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sede: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
    
    return Usuarios
}