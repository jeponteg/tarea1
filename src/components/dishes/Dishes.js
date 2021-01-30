import React, {useState} from 'react';
import "./home.styles.scss";
import { dishTitles } from '../../rawData';
import Tab from '@material-ui/core/Tab';
import DishesCard from './DishesCard';
import { dishData } from '../../rawData';
import Grid from '@material-ui/core/Grid';

const Dishes = () => {

    const [dishes , setDishes] = useState(dishData);
    const [selected, setSelected] = useState([''])

    const handleChange = (item) => {
       const filteredDishes = dishes.filter((dish) => dish.cuisine === item);
       setSelected(filteredDishes)
    }


    return (
        
    
        <div className ="contenedor">
           
            { dishTitles.map( item => (
                <Tab
                    label= {item.name} 
                    key={item.name} 
                    onClick={() => handleChange(item.name)}
                />
                
            )) }
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                { selected.map( item => (
                    
                        <DishesCard key={item.title} data={item.title} />
                
                )) }
            </Grid>
        </div>   
    )
}

export default Dishes

