import React from "react";

const card = ({id, name, email}) =>{
    return(
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default card