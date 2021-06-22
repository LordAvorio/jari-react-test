const { asyncQuery, generateQueryBody } = require("../helpers/queryHelp");

module.exports = {
  getCustomer: async (req, res) => {
    try {
      let sql = `SELECT * FROM customer WHERE is_deleted = 0`;
      let rows = await asyncQuery(sql);

      res.status(200).send(rows);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  searchCustomerById: async (req, res) => {
    let id_customer = parseInt(req.params.id);

    try {
      let sql = `SELECT * FROM customer WHERE id_customer = ${id_customer}`;
      let rows = await asyncQuery(sql);

      res.status(200).send(rows[0]);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  deleteCustomer: async (req, res) => {
    let id_customer = parseInt(req.params.id);

    try {
      let sql = `UPDATE customer set is_deleted = 1 WHERE id_customer = ${id_customer}`;
      let rows = await asyncQuery(sql);

      res.status(200).send(rows);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  addCustomer: async (req, res) => {
    const {
      code_customer,
      name_customer,
      email_customer,
      alamat_customer,
      phone_customer,
    } = req.body;

    try {
      let sql = `INSERT INTO customer (code_customer,name_customer,email_customer,alamat_customer,phone_customer) VALUES ('${code_customer}','${name_customer}','${email_customer}','${alamat_customer}','${phone_customer}')`;
      let rows = await asyncQuery(sql)

        res.status(200).send('Tampah Customer Berhasil')

    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  uploadGambarCustomer: async(req,res) => {
    const id = parseInt(req.params.id)

    let imageUpload = `images/${req.file.filename}`

    try{
        let sql = `UPDATE customer SET image_customer = '${imageUpload}' WHERE id_customer = ${id}`
        let rows = await asyncQuery(sql)

        res.status(200).send('Upload Gambar Berhasil')

    }   
    catch(err){
        console.log(err)
        res.status(400).send(err)
    }
  },
  getMaksimalId: async(req,res) => {
    try{
        let sql = `SELECT MAX(id_customer) AS id_max FROM customer`
        let rows = await asyncQuery(sql)

        res.status(200).send(rows[0])

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
  },
};
