import React from 'react'
import { Link } from 'react-router-dom';

export const MovieItem = (props) => {
    const { id,title, rating, imgurl,height,width } = props;
    return (
        <>

            <Link to={`/singlemovie/${id}`} style={{ textDecoration: 'None',color:'black' }}>
                <div className="card " style={{ width: width , marginLeft:"5px"  }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${imgurl}`} style={{height:height}} className="card-img-top" alt="..." />
                    <div className="card-body text-center" >
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-text"> {rating}</h5>

                    </div>
                </div>
            </Link>

        </>
    )
}
