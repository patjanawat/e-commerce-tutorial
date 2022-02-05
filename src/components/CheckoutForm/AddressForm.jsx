import React,{useEffect, useState} from 'react';
import { InputLabel, Select, MnuItem, Button, Grid, Typography, MenuItem } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField'    
import { commerce } from '../../lib/commerce'

const AddressForm = ({checkoutToken}) => {
    console.log('AddressForm checkoutToken=>',checkoutToken)
    const [shippingCountries, setshippingCountries] = useState([])    
    const [shippingCountry, setshippingCountry] = useState('')    
    const [shippingSubdivisions, setshippingSubdivisions] = useState([])    
    const [shippingSubdivision, setshippingSubdivision] = useState('')    
    const [shippingOptoins, setshippingOptions] = useState([])    
    const [shippingOption, setshippingOption] = useState('')
    const methods = useForm()

    const countries =  Object.entries(shippingCountries).map(([code,name])=>({id:code, label: name}))
        
    const fetchShippingCountries = async(checkoutTokenId)=>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)        
        setshippingCountries(countries)
        setshippingCountry(Object.keys(countries)[0])        
    }

    useEffect(()=>{
         if(checkoutToken?.id) {
             fetchShippingCountries(checkoutToken.id)
         }
    },[])
  return (
    <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstname' label='First name'/>                    
                    <FormInput required name='lastname' label='Last name'/>                    
                    <FormInput required name='address1' label='Address'/>                    
                    <FormInput required name='email' label='Email'/>                    
                    <FormInput required name='city' label='City'/>                    
                    <FormInput required name='zip' label='Zip / Postal code'/>       
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={(e)=> setshippingCountry(e.tartget.value)}>
                           {
                               countries.map((country)=>(
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>                                   
                               ))
                           }
                        </Select>
                    </Grid>             
                    {/* <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>             
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>              */}
                </Grid>
            </form>
        </FormProvider>
    </>
  )
};

export default AddressForm;
