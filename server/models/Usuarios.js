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
            type: DataTypes.BIGINT,
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
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        sede: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    Usuarios.associate = (models)  => {
        Usuarios.hasMany(models.Permisos, {
            onDelete:"cascade",
        });
    };
    
    return Usuarios
}