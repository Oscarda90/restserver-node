const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
  const query = req.query;

  res.json({
    msg: 'get API - Controlador',
    query
  });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;

  res.status(201).json({
    msg: 'post API -Controlador',
    body,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: 'put API - Controlador',
    id,
  });
};

const usuariosDelete = (req, rres = response) => {
  res.json({
    msg: 'delete API - Controlador',
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
