import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

interface inputAttrs{
  id: string
  label: string
  autoFocus: boolean
  type: string
  handleShowPassword?(): any
  register(id: string): any
}

const Input = ({ id, label, autoFocus, type, handleShowPassword, register }: inputAttrs) => {

  return (
    <Grid item xs={12} sm={12}>
      <TextField 
        id={id}
        {...register(id)}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={id === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                { type === 'password' ? <Visibility /> : <VisibilityOff /> }
              </IconButton> 
            </InputAdornment>
          )
        }: undefined}
      />
    </Grid>
  )
}

export default Input
