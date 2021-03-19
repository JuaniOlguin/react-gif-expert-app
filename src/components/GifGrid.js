import React from 'react' //useEffect permite ejecutar codigo de manera condicional
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const { data, loading } = useFetchGifs(category);

    // useEffect( () => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, [category])//arreglo de dependencias, se ejecuta cuando el componente es renderizado por primera vez
    
    //hice que getGifs sea un helper para que este componente tenga buena cohesion
    return (
        <>
            <h3>{category}</h3>

            { loading && <p className="animate__animated animate__bounceIn">Loading...</p> }

            <div className="card-grid">
                
                {
                    data.map(  img  => (
                        <GifGridItem  
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}
