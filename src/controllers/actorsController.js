const db = require("../database/models/index")
module.exports= {
    list: function(req,res){
        db.Actor.findAll()
        .then(function(actors){
                res.render("actorsList",{actors:actors})                  
})  .catch(function(error) {
    console.error("Error al obtener la lista de actores:", error);
    res.status(500).send("Error al obtener la lista de actores");
});
},
    detail:function(req,res){
        db.Actor.findByPk(req.params.id)
        .then(function(actor){
            res.render("actorsDetail",{actor:actor})                  
})  .catch(function(error) {
console.error("Error al obtener el detalle del actor", error);
res.status(500).send("Error al obtenerel detalle del actor");
});
    }
}