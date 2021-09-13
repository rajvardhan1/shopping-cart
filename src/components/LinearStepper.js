import React, { useState, useEffect, useContext } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import './styles/linearStepperStyle.css'
import { Context } from './../contexts/cartContext'
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Shipping Address",
    "Payment",
  ];
}
const BasicForm = () => {
  const { control, register, formState: { errors } } = useFormContext();
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
            {...register("firstName", {
              required: "First Name is required",
              pattern: {
                value: /^[a-zA-Z]{3,12}$/,
                message: 'Please enter a valid character'
              },
              minLength: {
                value: 3,
                message: " Minimum length must be 3"
              },
              maxLength: {
                value: 12,
                message: " Max length must be 12."
              }
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="firstName" as="p" />

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
            {...register("lastName", {
              required: "Last Name is required",
              pattern: {
                value: /^[a-zA-Z]{3,12}$/,
                message: 'Please enter a valid character'
              },
              minLength: {
                value: 3,
                message: " Minimum length must be 3"
              },
              maxLength: {
                value: 12,
                message: " Max length must be 12."
              }
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="lastName" as="p" />
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4})$/,
                message: 'Please enter a valid character'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="email" as="p" />
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
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^([+]\d{2})?\d{10}$/,
                message: 'Please enter a valid numbers'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="phoneNumber" as="p" />
    </>
  );
};

const AddressForm = () => {
  const { control, register, formState: { errors } } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="addressLine1"
        render={({ field }) => (
          <TextField
            id="addressLine1"
            label="Address"
            variant="standard"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...register("addressLine1", { required: "Address is required" })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="addressLine1" as="p" />

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
            {...register("postalCode", {
              required: "postalCode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: 'Please enter a valid numbers'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="postalCode" as="p" />

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
            {...register("city", { required: "city is required" })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="city" as="p" />

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
            {...register("state", { required: "State is required" })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="state" as="p" />

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
            {...register("country", { required: "country is required" })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="country" as="p" />
    </>
  );
};
const PaymentForm = () => {
  const { control, register, formState: { errors } } = useFormContext();
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
            {...register("cardNumber", {
              required: "cardNumber is required",
              pattern: {
                value: /^[0-9]{16}$/,
                message: 'Please enter a valid numbers'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="cardNumber" as="p" />

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
            {...register("cvv", {
              required: "Cvv is required",
              pattern: {
                value: /^[0-9]{3}$/,
                message: 'Please enter a valid numbers'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="cvv" as="p" />

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
            {...register("expMonth", {
              required: "Expiry Month is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])$/,
                message: 'Please enter a valid month'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="expMonth" as="p" />

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
            {...register("expYear", {
              required: "Expiry Year is required",
              pattern: {
                value: /^[0-9]{2}$/,
                message: 'Please enter a valid year'
              },
            })}
            {...field}
          />
        )}
      />
      <ErrorMessage className="text-danger" errors={errors} name="expYear" as="p" />
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
      email: "",
      phoneNumber: "",
      addressLine1: '',
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
  const [list, setList] = useState([]);
  const steps = getSteps();
  const [total, setTotal] = useState(0)
  const { cart } = useContext(Context)
  
  useEffect (()=>{
    handleCartDetails()
  },[])

  const handleCartDetails = (()=>{
    const url = `http://localhost:9000/cart`
    axios.get(url)
    .then((res) => {
      console.log('res',res);
      setList(res?.data?.data)
    })
    .catch((err) => {
        console.log(err)
    })
  })

  const handleNext = (data) => {
    let total1 = 0;
    console.log(cart, ' cartData')
    list.map((item, ind) => {
      total1 += item.price
    })
    setTotal(total1)
    
    const body = {
      products: list,
      total: total1,
      ...data
    }
    const headers = {
      "Content-Type": "application/json"
    }
    if (activeStep == steps.length - 1) {
      return fetch(`http://localhost:9000/stripe-payment`, {
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
