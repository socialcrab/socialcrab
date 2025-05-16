import * as React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const CustomTextField = styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    },
    '& input': {
      color: 'white'
    },
    '& .MuiSvgIcon-root': {
      color: 'white'
    }
  }
})

export default function QueryInputInstagramProfile() {
  const [inputText, setInputText] = useState('')
  const router = useRouter()

  const handleInputChange = event => {
    setInputText(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    router.push(`/instagram-profile/${inputText}`)
  }

  return (
    <Box height='100%' px={10} display='flex' justifyContent='center' flexDirection='column'>
      <Typography mb={3} sx={{ fontSize: '24px' }}>
        Enter Instagram Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          placeholder='Enter Instagram Profile'
          id='custom-css-outlined-input'
          InputProps={{
            startAdornment: <InputAdornment position='start'>#</InputAdornment>,
            endAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
          value={inputText}
          onChange={handleInputChange}
          variant='outlined'
        />
      </form>
    </Box>
  )
}
