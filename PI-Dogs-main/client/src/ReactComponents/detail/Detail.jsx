import React, { useState } from "react";
import DetailDog from "./DetailDog";
import Nav from "../nav/Nav";
import { useEffect,  } from "react";
import { useParams } from "react-router-dom";



function Detail () {
    const { detailId } = useParams();
    const [detail, setDetail] = useState([]);
 

    useEffect(() =>{
        fetch(`http://localhost:3001/dogs/${detailId}`)
        .then((res) => res.json())
        .then((details) =>{
            const dogDetail = details.map(d =>{
                return {
                  id: d.id,
                  image: d.image,
                  name: d.name,
                  weight_min: d.weight_min,
                  weight_max: d.weight_max,
                  height_min: d.height_min,
                  height_max: d.height_max,
                  life_span_min: d.life_span_min,
                  life_span_max: d.life_span_max,
                  temperament: d.temperament,
                }
              })
              setDetail(dogDetail)
        })
        .catch((error)=>{
            window.alert('That dog doesn`t exists')
        });
    }, [detailId]);
    console.log(detail)
    return(
        <div>
            <Nav/>
            <DetailDog detail={detail[0]}/>
        </div>
    )
};

export default Detail;