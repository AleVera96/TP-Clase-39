const db = require("../database/models/index")
module.exports= {
    list: function(req,res){
        db.Genero.findAll()
        .then(function(genres){
                res.render("genresList",{genres:genres})                  
})  .catch(function(error) {
    console.error("Error al obtener la lista de generos:", error);
    res.status(500).send("Error al obtener la lista de generos");
});
},
    detail:function(req,res){
        db.Genero.findByPk(req.params.id)
        .then(function(genre){
            res.render("genresDetail",{genre:genre})                  
})  .catch(function(error) {
console.error("Error al obtener el detalle del genero", error);
res.status(500).send("Error al obtenerel detalle del genero");
});
    }
}