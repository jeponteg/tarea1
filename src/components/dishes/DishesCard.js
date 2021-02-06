import React from 'react';
import "./dishesCard.styles.scss";
import { baseUri } from '../../rawData';

const DishesCard = ({selected}) => {

    return(
        <div className="contenedor" >
            {selected.map((item)=> {
                const {
                    id,
                    image
                }= item;
            
                return(
                    image ?
                        <img
                            key={id}
                            alt="img"
                            className="img" 
                            src ={`${baseUri}${image}`}
                        /> 
                    : null
                )
            })}

        </div>         
    )

}

export default DishesCard
