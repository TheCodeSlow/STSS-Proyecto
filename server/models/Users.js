module.exports	= (sequelize, DataTypes) => {
    

    const Users = sequelize.define("Users", {
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    Users.associate = (models)  => {
        Users.hasMany(models.Horas, {
            onDelete:"cascade",
        });
    };
    
    return Users
}