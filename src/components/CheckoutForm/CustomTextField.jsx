import React from 'react';
import { useFormContext, Controller, useForm } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

//reference: https://stackoverflow.com/questions/66957809/typeerror-props-render-is-not-a-function-react-hook-form#answer-67092889

const CustomTextField = ({ name, label, required }) => {
    const { control } = useFormContext();
    const isError = false;
    return (
        <Grid item xs={12} sm={6}>
          <Controller
            as={TextField}
            name={name}
            control={control}
            // label={label}
            // fullWidth
            // required={required}
            // error={isError}
            render={({field})=>(
                <TextField
                        fullWidth
                        label={label}
                        required={required}
                        error={isError}
                />
            )}
          />
        </Grid>
      )
}

export default CustomTextField;
