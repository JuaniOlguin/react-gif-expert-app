import React, {useState} from 'react'; //rafc -> crea componente
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState([]);
    // const handleAdd = () => {
    //     setCategories([...categories, 'Dragon Ball']); //pisa el estado anterior
    //     //setCategories( cats => [...cats, 'Dragon Ball']) //puede recibir un callback con el estado anterior como parametro
    // } La agregacion se hace desde otro componente por lo que aca no hace falta

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} /> {/*envio la referencia a setCategories como prop a AddCategory*/}
            <hr />
            <ul>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )) 
                    //el key es el mismo elemento del arreglo porque react arregla todo en el background, es obligatorio para react
                }
            </ul>
        </>
    )
}

export default GifExpertApp;