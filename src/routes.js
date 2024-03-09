const {
    tambahBuku,
    getAllBook,
    getBookId,
    editBookId,
    deleteBookId,
  } = require('./handler');
  
  const routes = [
{
      method: 'POST',
      path: '/books',
      handler: tambahBuku,
    },
{
      method: 'GET',
      path: '/books',
      handler: getAllBook,
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: getBookId,
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: editBookId,
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: deleteBookId,
    },
  ]
  
  module.exports = routes;