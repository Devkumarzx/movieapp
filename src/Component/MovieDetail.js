import React, { useState, useEffect } from 'react'
import { MovieItem } from './MovieItem'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Spinner } from './Spinner'

export const MovieDetail = () => {
    const { id } = useParams();
    const [loading, setloading] = useState(false)
    const [details, setdetails] = useState([])
    const [genres, setgenres] = useState([])
    const [cast, setcast] = useState([])
    // const id=35813;
    console.log("id" + id);

    const getdetails = async () => {
        setloading(true);
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, {


        })
            .then(function (response) {
                console.log(response.data);
                setdetails(response.data);
                setloading(false);
                setgenres(response.data.genres);
            })
            .catch(function (error) {
                alert(error);
            })
    }
    const getcast = async () => {
        setloading(true);
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, {


        })
            .then(function (response) {
                console.log(response.data.cast);
                setcast(response.data.cast);
                setloading(false);
                // setgenres(response.data.genres);
            })
            .catch(function (error) {
                alert(error);
            })
    }
    useEffect(() => {
        getdetails();
        getcast();

    }, [])
    return (
        <>
        {loading && <Spinner/>}
           { !loading &&<div>
                <div className="container mt-3  ">
                    <div className='row shadow-lg rounded-lg'>
                        <div className='col-lg-6 my-2'>
                            <div className=' h-50 d-flex '>
                                <div className='w-25'>
                                    <img style={{ width: "100%", height: "100%" }} src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="..." />
                                </div>
                                <div className='w-75' style={{ paddingLeft: '10px' }}>
                                    <h3>{details.original_title}</h3>
                                    <h5>{`Rating: ${details.vote_average}`}</h5>
                                    <div className='d-flex '>
                                        <p>{`${details.runtime} min `}</p>
                                        {genres.map((item, index) => (<p key={index} style={{ marginLeft: "10px" }}>{item.name}</p>))}
                                    </div>
                                    <p>Release date: {details.release_date}</p>
                                </div>
                            </div>
                            <div className=' h-50 ' style={{ overflow: "auto" }}>
                                <h4>overview</h4>
                                <p>{details.overview}</p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-end '>
                            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} className=" w-100" alt="" />
                        </div>
                    </div>

                </div>

                <div className='container-fluid d-flex' style={{ overflowX: "auto", margin: "0 auto" }}>
                    {cast.map((item, index) => (

                        <MovieItem key={index} id={item.cast_id} title={item.character} imgurl={item.profile_path} height={"15rem"} width={"15rem"} />

                    ))}


                </div>
            </div>}

        </>
    )
}
