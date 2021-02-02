import React,{useState} from 'react';

function TvShowContainer({ searchShow }) {
    const [show, setShow] = useState ("")

    return (
        <section>
            <h3>Search for your favorite show:</h3>
            <form onSubmit={(e)=> {
                e.preventDefault()
                console.log(show)
                searchShow(show)
            }}>
                <input 
                onChange={(e) =>{
                    console.log(e.target.value)
                    setShow(e.target.value)
                }}
                value={show}
                type="text" />
                <button value="submit">Search 📺</button>
            </form>
        </section>
    );
}

export default TvShowContainer;