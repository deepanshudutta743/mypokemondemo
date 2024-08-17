import React, { useEffect, useState } from 'react'
import "../index.css";
import Pocemoncard from './Pocemoncard';
function Pocemon() {
    const[pokemondata,setPokemondata]=useState([]);
    const [isLoading,SetIsLoading]=useState(true)
    const[search,setSearch]=useState("");
    // lets handle the error
    const[error,setError]=useState();

    const api="https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchdata= async ()=>{
           
        try{
            const getdata=await fetch(api);
            const data=await getdata.json();
            //console.log(data);
            const detailPokemndata=data.results.map(async (pokemondata)=>{
               //console.log(pokemondata.url);
               const res=await fetch(pokemondata.url);
               const data=await res.json();
               //console.log(resjson);
               return data;

            }) 

            //console.log(detailPokemndata)
            const detailedresponse=await Promise.all(detailPokemndata);
            console.log(detailedresponse);
            setPokemondata(detailedresponse);
            SetIsLoading(false);

        }catch(error)
        {
      console.log(error)
      SetIsLoading(false);
      setError(error);
        }
    }


    
  useEffect(()=>{
 
    fetchdata();
  },[])

  if(isLoading)
  {
    return <div>
        <h1>Loading....</h1>
    </div>
  }
 
  if(error)
  {
    return <div>
    <h1>{error.message}</h1>
</div>
  }


  // search functionality
const searchdata=
    pokemondata.filter((currpokemon)=>currpokemon.name.toLowerCase().includes(search.toLowerCase()));

  return (
   <>
   <section className='container'>
   <header>
    <h1>Let's catch pokemon</h1>
   </header>
   <div className='pokemon-search'>
  <input type="text" placeholder='search pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}/>
   </div>
   <div>
    <ul className='cards'>
        {
            searchdata.map((pokemondata)=>{
             
            return  <Pocemoncard key={pokemondata.id} pokemondata={pokemondata}/>
            })
        }

    </ul>
   </div>



   </section>
   </>
  )
}

export default Pocemon