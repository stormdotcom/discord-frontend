import React from 'react';
import { styled } from '@mui/system';
const Label = styled('p')({
    color: '#b9bbbe',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    textTransform : 'uppercase',
    fontWeight: '600',
    fontSize : '16px',
})

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width : '100%'
})
const Input = styled('input')({
    flexGrow : 1,
    height: '40px',
    border : '1px solid black',
    borderRadius : '5px',
    color: '#dcddde',
    background : '#35393f',
    margin: 0,
    fontSize : '16px',
    padding : '0 5px'
})

function InputLabel(props) {

    const {value, setValue, label, type, placeholder} =props
    const handleInput = (e)=> setValue(e.target.value)
                                
  return (
    <Wrapper>
        <Label > {label}</Label>
        <Input value={value} onChange={handleInput} type={type}  placeholder={placeholder}/>
    </Wrapper>
  )
}

export default InputLabel