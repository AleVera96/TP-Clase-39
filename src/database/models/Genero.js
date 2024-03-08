module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define("Genero", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'genres', 
        timestamps: false 
    });

        Genero.associate = function (models){
            Genero.hasMany(models.Pelicula,{
                as: "peliculas",
                foreignKey: "genre_id"
            })
        }

    return Genero;
};
