// Los controladores son los encargados de toda la logica de la aplicación 

const {tracksModel} = require('../models')
/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({}); //constante que va a buscar todo dentro del modelo tracks
    res.send({data});
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Insetar un registro a la DB
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const {body} = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})
};

/**
 * Actualiza un registro dentro de la DB
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Elimina un registro de la DB
 * @param {*} req 
 * @param {*} res 
 */
const deteleItem = (req, res) => {};

module.exports = {getItem, getItems, createItem, updateItem, deteleItem};
