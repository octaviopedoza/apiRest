// Los controladores son los encargados de toda la logica de la aplicación 

const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({}); //constante que va a buscar todo dentro del modelo tracks
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
    const {body, file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
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
