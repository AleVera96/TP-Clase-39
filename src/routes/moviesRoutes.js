const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const movieCreateValidation = require("../validations/movieCreateValidation")
const movieUpdateValidation = require("../validations/movieUpdateValidation")
router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get("/movies/add",moviesController.createform)
router.post("/movies/create",movieCreateValidation,moviesController.create)
router.get("/movies/edit/:id",moviesController.edit)
router.put("/movies/update/:id",movieUpdateValidation,moviesController.save)
router.delete("/movies/delete/:id",moviesController.destroy)
module.exports = router;