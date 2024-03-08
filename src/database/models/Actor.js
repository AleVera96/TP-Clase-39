module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define("Actor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true 
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: true 
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unsigned: true 
        }
    }, {
        tableName: 'actors', 
        timestamps: true
    });

    Actor.associate = function (models){
    Actor.belongsToMany(models.Pelicula,{
        as: 'peliculas', // Alias para acceder a la relación
        through: 'actor_movie', // Tabla intermedia que contiene las relaciones
        foreignKey: 'actor_id', // Clave foránea que hace referencia a la tabla de actores
        otherKey: 'movie_id', // Clave foránea que hace referencia a la tabla de películas
        timestamps: false // Si no necesitas marcas de tiempo en la tabla intermedia
})
    }
    return Actor;
};