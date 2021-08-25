import React from 'react'
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

export default function ProductList() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Card className="pd-card">
        <Card.Header className="pd-header">Filter</Card.Header>
        <div className="pd-accordian">
          <span>CATEGORIES</span>
        <Accordion className="accordian-main">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typogaphy" ><b>BRAND</b></Typography>
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
          <Typography ><b>CUSTOMER RATINGS</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><b>SORT BY </b></Typography>
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
          <Typography ><b>DISCOUNT</b></Typography>
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
          <Typography><b>COLOR</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>OFFERS</b></Typography>
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
          <Typography><b>AVAILABILITY</b></Typography>
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
            products.map((product, index) => {
              return <Product key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </>
  )
}
