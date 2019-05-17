import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import './CardComponent.scss'
import CardsContent from "../../context/CardsContent"
 const CardComponent = (props)=>{
    const dataContext = useContext(CardsContent)

    return(
        <React.Fragment>
            {dataContext.bigcards.map(bigcard=>(
                <div key={bigcard.key} className="card-component"> 
                    <img src={bigcard.src} alt={bigcard.alt}/>    
                    <p className="card-component__title">{bigcard.content}</p>
                    <Link className="btn btn__card" to="/">{bigcard.btn}</Link>
                </div>
            ))}
        </React.Fragment>
    )
}
export default CardComponent;