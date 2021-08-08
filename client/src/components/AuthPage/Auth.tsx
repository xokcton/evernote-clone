import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { SubmitHandler, useForm } from 'react-hook-form'
import useStyles from './styles';
import Input from './Input';
import PasswordsMatching from './ErrorModal/PasswordsMatching';
import { UserStoreImpl } from '../../store/UserStore';
import { observer } from 'mobx-react-lite';

interface IFormInput {
  email: String;
  password: String;
  confirmPassword: String;
}

interface AuthProps{
  userStore: UserStoreImpl
}

const Auth: React.FC<AuthProps> = observer(({ userStore }) => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isSignUp, setIsSignUp] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<IFormInput>()
  const [open, setOpen] = React.useState<boolean>(false)

  const onHandleSubmit: SubmitHandler<IFormInput> = (data: any) => {
    if(isSignUp && (data.password !== data.confirmPassword)){
      return setOpen(true)
    }

    if(isSignUp) userStore.setUser({email: data.email, password: data.password}) 
    else userStore.getUser({email: data.email, password: data.password}) 

    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  const handleShowPassword = () => setShowPassword(prevState => !prevState)

  const switchMode = () => {
    setIsSignUp(prevState => !prevState)
    setShowPassword(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
    <PasswordsMatching  isOpen={open} setHandleClose={handleClose} />
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <img src="evernote-icon.svg" alt="evernote-icon" />
        </Avatar>
        <Typography variant="h4"><b>Evernote</b></Typography>
        <Typography variant="subtitle1">Remember everything important.</Typography>
        <hr className="horizontalLine" />

        <Typography variant="h5">{ isSignUp ? 'Sing up' : 'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit(onHandleSubmit)}>
          <Grid container spacing={2}>
            <Input id="email" register={register} label="Email Address" autoFocus type="email" />
            <Input id="password" register={register}   label="Password" autoFocus type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {
              isSignUp && 
              (
                <Input id="confirmPassword" register={register}  label="Repeat password" autoFocus type="password" />
              )
            }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {
              isSignUp ? 'Sing up' : 'Sign In'
            }
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {
                  isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'
                }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  )
})

export default Auth
