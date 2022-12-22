import React, { useState} from 'react'
import { storage, db } from '../config/config'
import Navbar from "./Nav"
import "./AddProduct.css"

const AddProducts = ({user}) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productGItag, setProductGItag] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    
    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductGItag: Number(productGItag),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0);
                        setProductGItag(0);
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (
      <div>
<Navbar user={user} />      
 <div className='container'>
             
            <br />
            <h2 className="addpro">ADD PRODUCTS</h2>
            
            <hr className="line"/>
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                {/* <label classname="productname">Product Name</label> */}
                <div className="product-name">Product Name</div>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <div className="product-pri">Product Price</div>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />
                <div className="product-pri">Does the product have a GI Tag ? (If yes, enter the certificate no.)</div>
                <input type="number" className='form-control'  
                    onChange={(e) => setProductGItag(e.target.value)} value={productGItag} />
                <br />
                <div className="product-image">Product Image</div>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                <br />
                <button type="submit" className='addbtn' >ADD</button>
                <a className='showbtn' href="/products">SHOW</a>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        
        </div>
        </div>
    
    )
}

export default AddProducts;