import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { Table } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { Remove } from '../Redux/Actions/action';
import { Add, individualRemove } from "../Redux/Actions/action";


function Header(){
  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(Remove(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((data, key) => {
      price = data.price * data.qnty + price;
    });
    setPrice(price);
  };

  const dlt_one = (id) => {
    dispatch(individualRemove(id));
  };

  const send = (e) => {
    dispatch(Add(e));
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar
        variant="dark"
        style={{ height: "60px", backgroundColor: "#2f466b" }}
      >
        <Container>
          <NavLink
            to="/"
            className=" text-light me-3"
            style={{ textDecoration: "none", fontSize: "30px" }}
          >
            Book Store
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="text-light"
              style={{ textDecoration: "none", fontSize: "20px" }}
            >
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa fa-solid fa-cart-plus text-light"
              style={{ cursor: "pointer", fontSize: "30px" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Book Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((data) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${data.id}`}>
                              <img
                                src={data.imgdata}
                                alt="cart img"
                                style={{ width: "5rem", height: "5rem" }}
                                onClick={handleClose}
                              />
                            </NavLink>
                          </td>

                          <td>
                            <p>{data.rname}</p>
                            <p>Price: ₹{data.price}</p>
                            <p>Quantity: {data.qnty}</p>
                            <div
                              className="mt-5 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  data.qnty <= 1
                                    ? () => dlt(data)
                                    : () => dlt_one(data)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>{data.qnty}</span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => send(data)}
                              >
                                +
                              </span>
                            </div>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(data.id)}
                            >
                              <i className="fa fa-solid fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i
                              className="fa fa-solid fa-trash largetrash"
                              onClick={() => dlt(data.id)}
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">
                    <strong>Total:</strong> ₹{price}
                  </p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              {/* <i class="fa fa-solid fa-xmark" style={{color:"black"}}></i> */}
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: "23px",
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ margin: "20px 0", fontSize: 22 }}>
                Your cart is empty
              </p>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/empty-cart-2685174-2232751.png?f=avif&w=256"
                alt="empty cart"
                style={{ width: 60, padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
}
export default Header;