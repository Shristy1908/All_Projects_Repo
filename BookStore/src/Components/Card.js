import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./Cardsdata";
import "./style.css";
import { useDispatch } from "react-redux";
import {Add} from "../Redux/Actions/action";
import { NavLink } from "react-router-dom";

function Cards() {

  const [data,setData]=useState(Cardsdata);

  const dispatch=useDispatch();

  const send=(e)=>{
      dispatch(Add(e));
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((data,id)=>{
          
             return (
               <>
                 <Card
                   style={{ width: "25rem", height: "35rem", border: "none" }}
                   className="mx-2 mt-4 card_style"
                   key={data.id}
                 >
                   <NavLink to={`/cardDetail/${data.id}`}>
                     <Card.Img
                       variant="top"
                       src={data.imgdata}
                       style={{ height: "16rem" }}
                       className="mt-3"
                     />
                   </NavLink>

                   <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     <Card.Text>{data.subtitle}</Card.Text>
                     <Card.Text>
                       <strong>Price:</strong> ₹{data.price}
                     </Card.Text>
                     <div className="button_div d-flex justify-content-center">
                       <Button
                         variant="primary"
                         onClick={() => send(data)}
                         className="col-lg-12"
                         style={{ backgroundColor: "#2f466b" }}
                       >
                         Add to Cart
                       </Button>
                       <br />
                     </div>
                   </Card.Body>
                 </Card>
               </>
             );
          })
        }
       
      </div>
    </div>
  );
}

export default Cards;
