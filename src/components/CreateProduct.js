import React, {useState} from 'react';
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { ErrorMessage } from "@hookform/error-message";
import axios from 'axios';
import './styles/linearStepperStyle.css';

function CreateProduct(props) {
    const [productInfo, setProductInfo] = useState({
        title: "",
        description: "",
        price: "",
        quantity: "",
      })
    const [image, setImage] = useState()
 //   let formData = new FormData();
      const uploadImage = async(e) =>{
        // formData.append('image', e.target.files[0]);
         const file = e.target?.files[0];
         const base64 = await convertBase(file);
         setImage(base64)
      }
     
      const convertBase = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);

          fileReader.onload = ()=>{
            resolve(fileReader.result);
          };

          fileReader.onerror = (error)=>{
            reject(error);
          }
        })
      }
      const handleChange = (event) => {
        event.preventDefault();
        const {name,value}=event.target
      
          setProductInfo(prevData=>{
            return ({...prevData,[name]:value})
          })
        
       } 
       const handleSubmit = async() => {
        const url = `/create-product` 
    
        const payload = JSON.stringify({
            ...productInfo,
            image
        })
        
        try{
          const res = await axios.post(url, payload, {
              headers: {
                  'content-type': 'application/json',
              },
          })
          console.log('res',res)
      } catch (error) {
              console.log(error)
        }
      }
    return (
      <div className="container createProduct">
        <form onSubmit={handleSubmit} className="basicForm detailsForm">
          <h6 className="createh6">ADD PRODUCT DETAILS </h6>
            <TextField
              id="title"
              name="title"
              label="Title"
              variant="standard"
              placeholder="Enter Your title"
              fullWidth
              margin="normal"
              onChange = {(e)=>handleChange(e,'title')}
            />

        {/* <ErrorMessage className="text-danger" errors={errors} name="firstName" as="p" /> */}
  
            <TextField
              id="description"
              name="description"
              label="Description"
              variant="standard"
              placeholder="Enter description"
              fullWidth
              margin="normal"
              onChange = {(e)=>handleChange(e,'description')}
            />
          
        {/* <ErrorMessage className="text-danger" errors={errors} name="lastName" as="p" /> */}
       
            <TextField
              id="price"
              name="price"
              label="Price"
              variant="standard"
              placeholder="Enter Price"
              fullWidth
              margin="normal"
              onChange = {(e)=>handleChange(e,'price')}
        />
        {/* <ErrorMessage className="text-danger" errors={errors} name="email" as="p" /> */}
            <TextField
              id="quantity"
              name="quantity"
              label="Quantity"
              variant="standard"
              placeholder="Enter Quantity"
              fullWidth
              margin="normal"
              onChange = {(e)=>handleChange(e,'quantity')}
        />
            <TextField
              type="file"
              accept="image/png"
              id="image"
              label="Image"
              name="image"
              variant="standard"
              placeholder="Enter image link"
              fullWidth
              margin="normal"
              onChange = {(e)=> {uploadImage(e)}}
        />
        <img src={image} height="100px"/>
         <button type="button" onClick={handleSubmit} class="btn btn-primary checkout-btn">Submit</button>
        </form>
      </div>
    );
}


export default CreateProduct;