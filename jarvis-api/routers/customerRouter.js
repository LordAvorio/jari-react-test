const router = require('express').Router()
const {customerController} = require('../controllers')
const {upload} = require('../helpers/multer')
const uploader = upload()

router.get('/',customerController.getCustomer)
router.get('/findcustomer/:id',customerController.searchCustomerById)
router.delete('/:id',customerController.deleteCustomer)
router.post('/',customerController.addCustomer)
router.get('/getmaxid', customerController.getMaksimalId)
router.post('/gambar/:id',uploader, customerController.uploadGambarCustomer)

module.exports = router