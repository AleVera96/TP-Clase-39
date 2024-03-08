const {body} = require("express-validator")

module.exports=[
    body('title').notEmpty().withMessage('El título es obligatorio').bail(),
    body('rating').notEmpty().isDecimal({ min: 0, max: 10 }).withMessage('El rating debe ser un decimal entre 0 y 10').bail(),
    body('awards').notEmpty().isInt({ min: 0 }).withMessage('Los premios deben ser un número entero no negativo').bail(),
    body('release_date').notEmpty().isISO8601().withMessage('Formato de fecha inválido').bail(),
    body('length').notEmpty().isInt({ min: 1 }).withMessage('La duración debe ser un número entero positivo').bail(),
    body('genre_id').notEmpty().withMessage('El género es obligatorio').bail()
]