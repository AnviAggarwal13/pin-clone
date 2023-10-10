import React, {useState, useEffect} from 'react';
import Card from './Card';
import StackGrid from 'react-stack-grid';
import { BsStackOverflow } from 'react-icons/bs';
const Boards = () => {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState('');
    var api_key = '39687448-6e43821786a5cb2b030eb43f0';
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${api_key}&q=${term}&image_type=photo`)
        .then(res=>res.json())
        .then(data=>{
            setImage(data.hits);
            setLoading(false);
        })
        .catch(err=>console.log(err));
    },[]);
    return (
        // <div className="p-5 md:p-10">
        //     <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(first-child)]:mt-5">
        //         <div className="bg-red-600 h-48 w-48 rounded-3xl"></div>
        //         <div className="bg-red-600 h-60 w-48 rounded-3xl"></div>
        //         <div className="bg-red-600 h-96 w-48 rounded-3xl"></div>
        //         <div className="bg-red-600 h-48 w-48 rounded-3xl"></div>
        //         <div className="bg-red-600 h-60 w-48 rounded-3xl"></div>
        //         <div className="bg-red-600 h-96 w-48 rounded-3xl"></div> 
        //         <img src='/a.jpg' alt="" className="rounded-xl"></img>
        //         <img src='/b.jpg' alt="" className="rounded-xl"></img>   
        //         <img src='/c.jpg' alt="" className="rounded-xl"></img>   
        //         <img src='/d.jpg' alt="" className="rounded-xl"></img>
        //         <img src='/e.jpg' alt="" className="rounded-xl"></img>   
        //         <img src='/f.jpg' alt="" className="rounded-xl"></img>
        //         <img src='/a.jpg' alt="" className="rounded-xl"></img>
        //         <img src='/b.jpg' alt="" className="rounded-xl"></img>   
        //         <img src='/c.jpg' alt="" className="rounded-xl"></img>   
        //         <img src='/d.jpg' alt="" className="rounded-xl"></img>
        //         <img src='/e.jpg' alt="" className="rounded-xl"></img>   
        //         <img src='/f.jpg' alt="" className="rounded-xl"></img>
        //     </div>
        // </div>
        <div className="mx-auto container">
           
            {/* {loading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-4 gap-4 pt-2.5">
                {image.map(img=>(
                    <Card key={img.id} image={img}/>
                ))}
            </div>} */}

            {loading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <StackGrid columnWidth={300}>
                {image.map(img=>(
                    <Card key={img.id} image={img}/>
                ))}
            </StackGrid>}
        </div>
    )
}

export default Boards