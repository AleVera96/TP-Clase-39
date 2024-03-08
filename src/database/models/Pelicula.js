module.exports = (sequelize, DataTypes) => {
    const Pelicula = sequelize.define("Pelicula", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'movies', 
        timestamps: false 
    });

    Pelicula.associate = function(modelos){
        Pelicula.belongsTo(modelos.Genero, {
                        as: "generos",
                foreignKey: "genre_id" });

   
    Pelicula.belongsToMany(modelos.Actor, {
        as: 'actores',
        through: 'actor_movie', 
        foreignKey: 'movie_id',
        otherKey: 'actor_id', 
        timestamps: true
     })
    }
     
     
    return Pelicula;
};