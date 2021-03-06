import React, { useEffect, useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProcess, Divider, Button } from '@material-ui/core';
import useStyles from '../styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details']

const Checkout = ({cart}) => {
    console.log('checkout props cart=>',cart)
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken,setCheckoutToken] = useState(null)
    const classes = useStyles()

    useEffect(()=>{
        if(cart.id){            
            const generateToken = async()=>{
                try{
                    const token = await commerce.checkout.generateToken(cart.id,{type:'cart'})
                    console.log('checkout token=>',token)
                    setCheckoutToken(token)
                }catch(error){
    
                }
            }
            generateToken()
        }
    },[cart])

    const Confirmation = ()=>(
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken}/>
        : <PaymentForm />
    return (
        <>
            <div className={classes.toobar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" aling="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
};

export default Checkout;
