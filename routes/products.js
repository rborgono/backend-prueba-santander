// Ruta: /api/productos

const { Router } = require('express');

const {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;