import React, { useState, useContext } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import './styles/linearStepperStyle.css'
import { Context } from './../contexts/cartContext'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const products = [
  {
    "id": 3,
    "title": "Vans",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    "price": 500,
    "img": "https://cdn.shopify.com/s/files/1/0236/3431/3280/files/a02_370x230@2x.jpg?v=1603564161",
    "quantity": 1
  },
  {
    "id": 4,
    "title": "White",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    "price": 55,
    "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380353/01/sv01/fnd/IND/fmt/png",
    "quantity": 3
  }
]

function getSteps() {
  return [
    "Basic information",
    "Shipping Address",
    "Payment",
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="standard"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="standard"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="standard"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const AddressForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="addressLine1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="standard"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="postalCode"
        render={({ field }) => (
          <TextField
            id="postalCode"
            label="postal Code"
            variant="standard"
            placeholder="Enter Your Postal code"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <TextField
            id="city"
            label="city"
            variant="standard"
            placeholder="Enter Your city Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="state"
        render={({ field }) => (
          <TextField
            id="state"
            label="state"
            variant="standard"
            placeholder="Enter Your state Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="standard"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="standard"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cvv"
        render={({ field }) => (
          <TextField
            id="cvv"
            label="Cvv"
            variant="standard"
            placeholder="Enter Your Cvv"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="expMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Expiry Month"
            variant="standard"
            placeholder="Enter Your Expiry Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="expYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Expiry Year"
            variant="standard"
            placeholder="Enter Your Expiry Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      address1: "",
      postalCode: "",
      city: "",
      state: "",
      country: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: ''
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [total, setTotal] = useState(0)
  const { cart } = useContext(Context)

  const handleNext = (data) => {
    let total1 = 0;
    console.log(cart, ' cartData')
    cart.map((item, ind) => {
      total1 += item.price
    })
    setTotal(total1)
    console.log(total1, ' total')
    const body = {
      products: products,
      total: total1,
      ...data
    }
    const headers = {
      "Content-Type": "application/json"
    }
    if (activeStep == steps.length - 1) {
      return fetch(`http://localhost:8000/stripe-payment`, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      }).then(response => {
        setActiveStep(activeStep + 1);
        console.log(response, ' Response');
      })
        .catch((err) => console.log(err))
    }
    else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="container linearMain">
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)} className="basicForm">
                {getStepContent(activeStep)}
                <div className="mt-2">
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    back
                  </Button>

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </>
        )}
    </div>
  );
};

export default LinaerStepper;
