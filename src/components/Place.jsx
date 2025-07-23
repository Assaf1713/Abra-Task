import Button from "./Button"



export default function Place({place, handlePlaceClick}){




    return (
        <li className="place-item">
            <article>
                <div className="place-item-details">
                    <h2>{ place.name} </h2>
                    <p> {place.type }</p>
                    <p> {place.adress} </p>
                    <div className="place-item-actions" > 
                        <Button
                        className='btn'
                        onClick = {()=> handlePlaceClick(place)}
                        >
                            Explore
                        </Button>
                    </div>
                </div>
            </article>

        </li>
    )

}