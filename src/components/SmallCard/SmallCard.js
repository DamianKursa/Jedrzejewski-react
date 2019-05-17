import React,{useContext} from 'react';
import './SmallCard.scss'
import CardsContent from "../../context/CardsContent"
const SmallCard = () => {
    const dataContext = useContext(CardsContent)
    return (
        <React.Fragment>
            {dataContext.smallcards
                .map(smallcard=>(
                    <div key={smallcard.key} className="small-card"> 
                        <img src={smallcard.src} alt={smallcard.alt}/>
                        <span className="small-card__content">
                            <p className="small-card__content--title">{smallcard.title}</p>
                            <p className="small-card__content--para">{smallcard.content}</p>
                        </span>    

                    </div>
                ))
            }
        </React.Fragment>
    );
};

export default SmallCard;