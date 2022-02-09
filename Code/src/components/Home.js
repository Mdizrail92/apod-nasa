import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';


const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;
    return (
        <>
        <NavBar/>
        <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
    <div className="snow"></div>
        <div className='nasa-photo'>
            {photoData.media_type === 'image' ? (
            <img src={photoData.url} alt={photoData.title} className="photo" /> 
            ): (
                <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"            
                />
                
                )}
                
            <div>
                <h1>{photoData.title}</h1>
                <p className='date'>{photoData.date}</p>
                <hr className='title-hr' />
                <p className='explanation'>{photoData.explanation}</p>
            </div>

        </div>
 <div className="spacer" style={{height: "45px"}}></div>
        <footer className="social-icons">
<div className="container text-center"  >

 <ul>
   
   <li> <a href="https://github.com/Mdizrail92 "><i style={{color: "rgb(163, 163, 163"}}className="fab fa-github"></i></a> </li>
   <li> <a href="https://www.facebook.com/profile.php?id=100007950183884 "><i style={{color: "rgb(15, 112, 177)"}}  className="fab fa-facebook"></i></a></li>
   <li> <a href="https://www.instagram.com/israil_92/ "> <i style={{color: "#ff8744bd"}} className="fab fa-instagram"></i></a></li>
   
   <li> <a href="https://www.snapchat.com/add/israil_alam?share_id=hHgUKpkcti8&locale=en-US"> <i style={{color: "rgb(211, 159, 15)"}} className="fab fa-snapchat-ghost"></i></a></li>
   <li> <a href="https://twitter.com/Izrail03620970 "> <i style={{color: "rgb(59, 146, 228)"}} className="fab fa-twitter"></i></a></li>
   
 </ul>
 <hr/>
 <div className="spacer" style={{height: "5px"}}></div>
 
<p style={{color: "#bbb"}} >&copy; Israil 2021. All rights reserved.</p>
</div>
</footer>
        </>
    );

}
