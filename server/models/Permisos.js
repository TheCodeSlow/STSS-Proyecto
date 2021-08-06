module.exports	= (sequelize, DataTypes) => {
    const Permisos = sequelize.define("Permisos", {
        tipoPermiso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Permisos
}