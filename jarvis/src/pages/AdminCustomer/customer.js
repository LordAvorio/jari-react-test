import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";

import {
  getCustomer,
  getCustomerById,
  deleteCustomer,
  addCustomer,
} from "../../action/CustomerAction";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Table,
  Modal,
  Form,
} from "react-bootstrap";

import "./customerPage.scss";

export default function Customer() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [textError, setTextError] = useState(false);
  
  const [idCustomer,setIdCustomer] = useState(0)
  const [code, setCode] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [handphone, setHandphone] = useState("");
  const [imageCustomer, setImageCustomer] = useState("");

  const { customerData, customerDataById } = useSelector((state) => {
    return {
      customerData: state.customerReducer.dataCustomer,
      customerDataById: state.customerReducer.dataCustomerById,
      errCustomerData: state.customerReducer.errCustomer,
    };
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCustomer());
  }, []);

  const handleCloseModalAdd = () => {
    setOpenModalAdd(false);
    setOpenModalEdit(false)
    setAlamat("");
    setCode("");
    setEmail("");
    setHandphone("");
    setImageCustomer("");
    setNama("");
  };

  const handleOpenModalConfirmation = (id) => {
    setIdCustomer(id)
    setOpenModalConfirmation(true)
  }

  const handleOpenModalEdit = (id) => {
    dispatch(getCustomerById(id))
    setOpenModalEdit(true)
    setAlamat(customerDataById.alamat_customer);
    setCode(customerDataById.code_customer);
    setEmail(customerDataById.email_customer);
    setHandphone(customerDataById.phone_customer);
    setImageCustomer(customerDataById.image_customer);
    setNama(customerDataById.name_customer);
    setIdCustomer(id)
    setOpenModalAdd(true)
  }

  const handleCloseModalConfirmation = () => {
    setOpenModalConfirmation(false)
  }

  const handleDeleteData = () => {
    swal("Success!", "Data berhasil dihapus !", "success");
    dispatch(deleteCustomer(idCustomer));
    setOpenModalConfirmation(false)
  };

  const handleAddData = () => {
    console.log(code, nama, email, alamat, handphone, imageCustomer);

    if (!code || !nama || !email || !alamat || !handphone || !imageCustomer)
      return swal("Opps!", "Inputan tidak boleh kosong !", "error");

    let data = new FormData();
    data.append("IMG", imageCustomer);

    let code_customer = code;
    let name_customer = nama;
    let email_customer = email;
    let alamat_customer = alamat;
    let phone_customer = handphone;

    const dataCustomer = {
      code_customer,
      name_customer,
      email_customer,
      alamat_customer,
      phone_customer,
    };

    dispatch(addCustomer(dataCustomer, data));

    setAlamat("");
    setCode("");
    setEmail("");
    setHandphone("");
    setImageCustomer("");
    setNama("");
    setOpenModalAdd(false);
  };

  let handleChoose = (e) => {
    setImageCustomer(e.target.files[0]);
  };

  return (
    <div>
      <div>
        <Container fluid>
          <Row className="containerPageCustomer">
            <Col md={12}>
              <p>Customer</p>
            </Col>
            <Col md={2}>
              <Button variant="primary" onClick={() => setOpenModalAdd(true)}>
                Add
              </Button>
            </Col>
            <Col md={2}>
              <Button variant="success">Upload</Button>
            </Col>
            <Col md={8} className="container-search">
              <input className="search-field" placeholder="Search Customer" />
            </Col>
            <Col md={12}>
              <Card className="cardCustomer">
                <Card.Body>
                  <Row>
                    <Col md={9}></Col>
                    <Col md={3}>
                      <Button variant="warning" className="button-template">
                        Download Template
                      </Button>
                    </Col>
                    <Col md={12}>
                      <Table striped bordered hover className="tableCustomer">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>No Handphone</th>
                            <th>Alamat</th>
                            <th>Status</th>
                            <th>Image</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customerData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.code_customer}</td>
                                <td>{item.name_customer}</td>
                                <td>{item.email_customer}</td>
                                <td>{item.phone_customer}</td>
                                <td>{item.alamat_customer}</td>
                                <td>{item.status_customer}</td>
                                <td>{item.image_customer}</td>
                                <td>
                                  <Row>
                                    <Col md={6}>
                                      <Button
                                        variant="primary"
                                        className="button2"
                                        onClick={() => handleOpenModalEdit(item.id_customer)}
                                      >
                                        Edit
                                      </Button>
                                    </Col>
                                    <Col md={6}>
                                      <Button
                                        variant="danger"
                                        className="button2"
                                        onClick={() =>
                                          handleOpenModalConfirmation(item.id_customer)
                                        }
                                      >
                                        Delete
                                      </Button>
                                    </Col>
                                  </Row>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal show={openModalAdd} onHide={() => setOpenModalAdd(false)}>
          <Modal.Header>
            <Modal.Title>{openModalEdit ? "Add Data" : "Edit Data"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicCode">
                    <Form.Label>Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan Code"
                      onChange={(e) => setCode(e.target.value)}
                      value={code || ""}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan Nama"
                      onChange={(e) => setNama(e.target.value)}
                      value={nama || ""}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Masukkan Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email || ""}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicHandphone">
                    <Form.Label>Handphone</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Masukkan Nomor Handphone"
                      onChange={(e) => setHandphone(e.target.value)}
                      value={handphone || ""}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicAlamat">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      onChange={(e) => setAlamat(e.target.value)}
                      value={alamat || ""}
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </Col>
              </Form>
              <Col md={12}>
                <form encType="multipart/form-data">
                  <input
                    type="file"
                    accept="image/*"
                    name="IMG"
                    onChange={(e) => handleChoose(e)}
                  />
                </form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleCloseModalAdd()}>
              Close
            </Button>
            {
              openModalEdit ? 
              <>
              <Button variant="primary" onClick={() => console.log(test)}>
                Update Data
              </Button>
              </>
              :
            <Button variant="primary" onClick={() => handleAddData()}>
              Save Changes
            </Button>
            }
          </Modal.Footer>
        </Modal>

        <Modal show={openModalConfirmation} onHide={() => setOpenModalConfirmation(false)}>
          <Modal.Header>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah anda yakin ingin menghapus data ini ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleCloseModalConfirmation()}>
              Tidak
            </Button>
            <Button variant="primary" onClick={() => handleDeleteData()}>
              Ya
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </div>
  );
}
