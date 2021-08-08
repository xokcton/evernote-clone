import React from 'react'
import { Grid } from '@material-ui/core'
import MUIRichTextEditor from 'mui-rte'
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'


const defaultTheme = createTheme()

Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
          root: {
            marginTop: 20,
            width: "90%"
          },
          editor: {
            borderBottom: "1px solid gray",
            color: "white",
            overflow: "auto"
          },
          toolbar: {
            color: "#ebebeb",
            backgroundColor: "#ebebeb"
          }
        }
    }
})

const RTE = () => {
  const handleSave = (data: string) => {
    console.log(data)
  }

  return (
    <Grid container item justifyContent="center" >
      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor 
          label="Type something here..."
          onSave={handleSave}
        />
      </MuiThemeProvider>
    </Grid>
  )
}

export default RTE
