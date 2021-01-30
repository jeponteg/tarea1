import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./dishesCard.styles.scss";

const DishesCard = ({data,key}) => {
console.log({data})
    return(
        
        <Card className="box" variant="outlined">
            <CardContent className="card">

          
                <h5 key={key}>{data} </h5>
                
           

            </CardContent>
             <CardActions>
                 <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )
}

export default DishesCard

