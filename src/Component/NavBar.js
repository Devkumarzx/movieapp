import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NavBar = (props) => {
   const navigate= useNavigate();
    const [getquery, setgetquery] = useState('')
    const handleonclick = () => {
        props.setsearch(getquery);
        navigate('/search');
        
        
    }
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-md border">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/"><h3>Movies App</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
                            <li className="nav-item">
                                <Link className="nav-link  active" to="/">Popular</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/toprated">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/upcoming">Upcoming</Link>
                            </li>


                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" onChange={(event) => { setgetquery(event.target.value) }} type="search" placeholder="Movie name" aria-label="Search" />
                            <button disabled={getquery.length===0?true:false}  onClick={handleonclick} className="btn btn-outline-primary">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
