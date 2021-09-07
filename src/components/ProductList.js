import React, { useEffect } from 'react'
import products from '../products.json';
import Product from './Product';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from 'react-bootstrap/Form'
import {Checkbox, FormControlLabel} from '@material-ui/core';
import axios from 'axios';

export default function ProductList() {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState('');
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
   
  useEffect(()=>{
    const url = `http://localhost:8000/get-products`
    axios.get(url)
    .then((res) => {
        setData(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  },[])

  console.log(data.data)
  return (
    <>
      <Card className="container pd-card">
        <Card.Header className="pd-header">Filters</Card.Header>
        <div className="container pd-accordian">
          <span>CATEGORIES</span>
        <Accordion className="accordian-main">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typogaphy" >BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="New Balance" className="now-wrap"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Skechers"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="ADIDAS"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Xtep"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="SPARX"
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="now-wrap">CUSTOMER RATINGS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="4★ & above" className="now-wrap"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="3★ & above" className="now-wrap"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="2★ & above" className="now-wrap"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="1★ & above" className="now-wrap"
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >SORT BY </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Popularity" className="now-wrap"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Price -- Low to High" className="now-wrap"
            />
             <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Price -- High to Low" className="now-wrap"
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >DISCOUNT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="10% or more" className="now-wrap"
              />
               <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="20% or more" className="now-wrap"
              />
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="30% or more" className="now-wrap"
              />
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="40% or more" className="now-wrap"
              />
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="50% or more" className="now-wrap"
              />
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="60% or more" className="now-wrap"
              />
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                label="70% or more" className="now-wrap"
              />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>COLOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="now-wrap">
              <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                  className="now-wrap mr-2"
              /> 
              <div class="_3879cV">
                <div>
                  <div class="_27Q4lz" style={{background: "rgb(245, 245, 220)", marginLeft:'1px'}}></div>
                  <div class="_33QaMY _3879cV">Beige</div>
                </div>
              </div>
            </div>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                className="now-wrap mr-2"
            />
            <div class="_3879cV">
              <div>
                <div class="_27Q4lz" style={{background: "rgb(41, 36, 33)", marginLeft:'1px'}}></div>
                <div class="_33QaMY _3879cV">Black</div>
              </div>
            </div>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                className="now-wrap mr-2"
            />
             <div class="_3879cV">
              <div>
                <div class="_27Q4lz" style={{background: "rgb(51, 161, 222)", marginLeft:'1px'}}></div>
                <div class="_33QaMY _3879cV">Blue</div>
              </div>
            </div>
            <div className="now-wrap">
              <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                  className="now-wrap mr-2"
              />
              <div class="_3879cV">
                <div>
                  <div class="_27Q4lz" style={{background: "rgb(140, 120, 83)", marginLeft:'1px'}}></div>
                  <div class="_33QaMY _3879cV">Bronze</div>
                </div>
              </div>
            </div>
              <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
               className="now-wrap mr-2"
            />  
             <div class="_3879cV">
              <div>
                <div class="_27Q4lz" style={{background: "rgb(92, 51, 23)", marginLeft:'1px'}}></div>
                <div class="_33QaMY _3879cV">Brown</div>
              </div>
            </div> 
            <div className="now-wrap">
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                className="now-wrap mr-2"
              />  
              <div class="_3879cV">
                <div>
                  <div class="_27Q4lz" style={{background: "rgb(144, 0, 32)", marginLeft:'1px'}}></div>
                  <div class="_33QaMY _3879cV">Burgundy</div>
                </div>
              </div> 
            </div>   
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>OFFERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Buy More, Save More" className="now-wrap"
            />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="No Cost EMI" className="now-wrap"
            />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
              label="Special Price" className="now-wrap"
            /> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>AVAILABILITY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      </Card>

      <div className="container pd-container">
        <h3 className="center">Products</h3>
        <div className="box">
          {
            data?.data?.map((product, index) => {
              return <Product key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </>
  )
}
