import React, { useEffect, useState } from 'react'
import { MovieItem } from './MovieItem'
import axios from 'axios'
import { Spinner } from './Spinner'



export const Movie = (props) => {
    const [moviedata, setmoviedata] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalpage, settotalpage] = useState(0)

    useEffect(() => {
        getdata();


    }, [props.query])
    const getdata = async () => {
        setloading(true);

        await axios.get(`https://api.themoviedb.org/3${props.surl}/movie${props.cname}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${props.query}&page=${page}`, {

        })
            .then(function (response) {
                // console.log(response);
                setmoviedata(response.data.results);
                settotalpage(response.data.total_pages);
                setloading(false);

            })
            .catch(function (error) {
                alert(error);
            })
    }

    useEffect(() => {

        getdata();


    }, [page])
    const handleprev = () => {
        setpage(page - 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    }

    const handlenext = () => {
        setpage(page + 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
        // moviedata.length === 0 ? <div className='col-lg-12 my-3 d-flex justify-content-center'> <h2 className='text-muted'>No Data Found</h2></div> :
    }
    return (
        <>
            <div className="container ">
                <h1 className='text-center my-3'>{props.title} Movies</h1>
                {loading && <Spinner />}
                <div className="row">
                    {!loading &&  moviedata.map((item, index) => (<div key={index} className="col-lg-4 col-md-6 my-3 d-flex justify-content-center"><MovieItem id={item.id} title={item.original_title} rating={`Rating: ${item.vote_average}`} imgurl={item.poster_path} height={"25rem"} width={"22rem"} /></div>))}

                    <div className='container  d-flex justify-content-between my-3'>
                        <button disabled={page === 1} onClick={handleprev} className='btn btn-primary'>Previous</button>
                        <h4>Page no: {page}</h4>
                        <button disabled={page>=totalpage} onClick={handlenext} className='btn btn-primary'>Next</button>
                    </div>

                </div>
            </div>

        </>
    )
}
