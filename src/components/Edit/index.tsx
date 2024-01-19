import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss'

interface IEl{
    id:Number
    name:String
    gmail:String
    img:String
}
const Edit = () => {
    let ID = JSON.parse(localStorage.getItem('id') as string) || {}
    const [name ,setName] = useState(ID.name)
    const [gmail ,setGmail] = useState(ID.gmail)
    const [file ,setFile] = useState(ID.img)


    function Img(e:any) {
        const file = e.target.files[0];
        if (file) {
          setFile(URL.createObjectURL(file));
        }
    }

    function Edit(id:Number){
        let data = JSON.parse(localStorage.getItem('data') as string) || []
        data.map((el:IEl) => {
            if(el.id === id){
                return {...el, name:el.name = name , img:el.img = file , gmail:el.gmail = gmail}
            }
            return el
        })
        localStorage.setItem('data' , JSON.stringify(data))
    }
    return (
        <div id="edit">
            <div className="container">
                <div className="edit">
                    <div className="block">
                        <img src={file} alt="" />
                        <input onChange={Img} className='file' type="file" />
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name'/>
                        <input value={gmail} onChange={(e) => setGmail(e.target.value)} type="text" placeholder='gmail'/>
                        {/* <input placeholder='name' type="text" /> */}
                        {/* <input placeholder='game' type="text" /> */}
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />   
                        <NavLink to='/'> <button onClick={() => Edit(ID.id)}>ADD NEW STUDENT</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;