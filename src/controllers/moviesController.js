const db = require("../database/models/index")
const {validationResult} = require("express-validator")
module.exports= {
    list: function(req,res){
        db.Pelicula.findAll()
        .then(function(peliculas){
                res.render("moviesList",{peliculas:peliculas})                  
})  .catch(function(error) {
    console.error("Error al obtener la lista de películas:", error);
    res.status(500).send("Error al obtener la lista de películas");
});
},
    detail: function(req,res){
        db.Pelicula.findByPk(req.params.id)
        .then(function(pelicula){
            res.render("moviesDetail",{pelicula:pelicula})                  
})  .catch(function(error) {
    console.error("Error al obtener la lista de películas:", error);
    res.status(500).send("Error al obtener la lista de películas");
});
    },
    new: function(req,res){
        db.Pelicula.findAll({
            order:[["title","ASC"]]
        }).then(function(peliculas){
            res.render("newestMovies",{peliculas:peliculas})
        }).catch(function(error) {
            console.error("Error al obtener la lista de películas:", error);
            res.status(500).send("Error al obtener la lista de películas"); 
        });
},
    recomended:
    function(req,res){
        db.Pelicula.findAll({
            order: [["release_date","DESC"]],
            limit: 5
        }).then(function(movies){
            res.render("recommendedMovies",{movies:movies})
        }).catch(function(error) {
            console.error("Error al obtener la lista de películas:", error);
            res.status(500).send("Error al obtener la lista de películas"); 
        });
},
    createform: function(req,res){
        res.render("moviesCreateForm")
}, 
    create: function(req,res){
         const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
         res.render('moviesCreateForm', { errors: errors.mapped() });
    } else {
    db.Pelicula.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id
    })
    .then(function(movie) {
        res.redirect('/movies');
    })
    .catch(function(error) {
        console.error("Error al crear la película:", error);
        res.status(500).send("Error al crear la película");
    });
    }
},

    edit: function(req,res){
        db.Pelicula.findByPk(req.params.id)
        .then(function(pelicula){
        res.render("movieEdit",{pelicula:pelicula})})
    },

    save: function(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors)
             res.render('movieEdit', { errors: errors.mapped(),pelicula:req.body});
        }else{
        db.Pelicula.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id},{
            where: {id : req.params.id}
    }).then(function(pelicula){
        res.redirect("/movies")
    }) .catch(function(error) {
        console.error("Error al crear la película:", error);
        res.status(500).send("Error al crear la película");
    })}

},

    destroy:function(req,res){
        db.Pelicula.destroy({
            where:{id: req.params.id}
        }).then(function(pelicula){
            res.redirect("/movies")
        }) .catch(function(error) {
            console.error("Error al crear la película:", error);
            res.status(500).send("Error al crear la película");
        });
    }
    }
    
