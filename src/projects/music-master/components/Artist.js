import React from "react";


const Artist = ({artist}) =>{
    if(!artist) 
        return null;
    const {images,name,followers,genres} = artist;

    return(
        <div>
            <h3>Artist:{name}</h3>
            <p>Followers:{followers.total}</p>
            <p>Genres:{genres.join(',')}</p>
            <img 
            style = {{width:200,height:200,borderRadius:100,objectFit:'cover'}}
            src = {images[0] && images[0].url} alt = 'artist-profile'/>
        </div>
    )
}
export default Artist;