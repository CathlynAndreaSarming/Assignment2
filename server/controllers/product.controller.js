import product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'
const create = async (req, res) => {
    const product = new Product (req.body)
    try {
        await product.save()
        return res.status(200).json({
            message: "Sucessfully created a new product!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const list = async (req, res) => {
    try {
        let products = await Product.find().select('name description price quantity category')
        res.json(products)
    } catch (err) {
        return res.status(400).json ({
            error:errorHandler.getErrorMessage(err)
        })
    }
}
const productByID = async (req, res) => {
    try {
        let product = await Product.findById(id)
        if (!product)
        return res.status('400') .json ({
            error: "Product not found"
        })
    } catch (err) {
        return res.status('400') .json ({
            error: "Could not retrieve user"
        })
    }
}
const read = (req, res) => {
    return res.json(req.profile)
}
const update = async (req, res) => {
    try {
        let product = req. profile
        product = extend(product, req.body)
        await product.save()
        res.json(product)
    } catch (err) {
        return res.status(400) .json ({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const remove = async (req, res) => {
    try {
        let product = req.profile
        let deletedProduct = await product.remove()
        res.json(deletedProduct)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
export default { create, productByID, read, list, remove, update}