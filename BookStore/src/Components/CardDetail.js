import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Remove } from "../Redux/Actions/action";
import Button from "react-bootstrap/Button";

function CardDetail(){

  const [data,setData]=useState([]);
  //console.log(data);

  const {id}=useParams();
  //console.log(id);

  const dispatch=useDispatch();

  const navigate=useNavigate()

  const getdata = useSelector((state) => state.cartreducer.carts);
    //console.log(getdata);

  const compare=()=>{
      let comparedata=getdata.filter((e)=>{
        return e.id == id;
      });
      console.log(comparedata);
      setData(comparedata);
  }

  useEffect(()=>{
    compare();
  },[id])


  // const dlt=(id)=>{
  //    dispatch(Remove(id));
  //    navigate("/");
  // }

  return (
      <div className="container mt-5">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-5">
          <div className="iteamsdetails" style={{backgroundColor:"white"}}>

          {
            data.map((data)=>{
              return (
                <>
                  <div className="items_img">
                    <img
                      src={data.imgdata}
                      alt="food"
                      style={{ width: "20rem", height: "16rem" }}
                    />
                  </div>

                  <div className="details" style={{ margin: "30px 20px" }}>
                    <p>
                      <strong>{data.title}</strong> | {data.subtitle}
                    </p>

                    <p>
                      <strong>Oder Review : </strong>
                      <span>{data.somedata}</span>
                    </p>

                    <p>
                      <strong>Rating :</strong>{" "}
                      <span
                        style={{
                          background: "green",
                          color: "white",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {data.rating}★
                      </span>
                    </p>

                    <h3 style={{ color: "red" }}>
                      <strong>₹{data.price}</strong>
                    </h3>
                    <span>
                      <Button
                        onClick={() => {
                          window.open(data.url, "_blank");
                        }}
                        className="col-lg-5"
                        style={{
                          backgroundColor: "#2f466b",
                          color: "white",
                          margin: "25px 0px",
                        }}
                      >
                        More Detail
                      </Button>
                    </span>
                  </div>
                </>
              );
            })
          }
           
          </div>
        </section>
      </div>
    );
}
export default CardDetail;