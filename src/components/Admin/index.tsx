import { useState } from 'react';
import './index.scss'
import { NavLink } from 'react-router-dom';

interface IEl{
    id:Number
    name:String
    gmail:String
    img:String
}

const Admin = () => {
    const [name ,setName] = useState('')
    const [gmail ,setGmail] = useState('')
    const [file ,setFile] = useState<any>(null)

    function Img(e:any): any {
        const file = e.target.files[0];
        if (file) {
          setFile(URL.createObjectURL(file));
        }
    }
    function addData(){
        let obj:IEl = {
            id:Date.now(),
            name:name,
            gmail:gmail,
            img:file,
        }
        let data = JSON.parse(localStorage.getItem('data') as string) || []
        data.push(obj)
        localStorage.setItem('data', JSON.stringify(data))
    }
    
    return (
        <div id="admin">
            <div className="container">
                <div className="admin">
                    <div className="block">
                        <img src={file} alt="" />
                        <input onChange={Img} className='file' type="file" />
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name'/>
                        <input value={gmail} onChange={(e) => setGmail(e.target.value)} type="text" placeholder='gmail'/>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />   
                        <NavLink to='/'> <button onClick={addData}>SAVE STUDENT</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;