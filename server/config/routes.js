const authController = require('../controller/authorController');

module.exports = app => {
  app
    .get('/authors', authController.getAll)
    .get('/authors/:id', authController.getOne)
    .post('/authors', authController.createAuthor)
    .put('/authors/:id', authController.editAuthor)
    .put('/books/:id', authController.addBook)
    .delete('/authors/:id', authController.delete)
}