import React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';


type Props = {
  text?: string,
  text1?: string,
  text2?: string,
  goLink?: (e: React.MouseEvent<HTMLElement>) => void,
  cName: string,
  type?: 'submit' | 'reset' | 'button';
  goBack?: (e:React.MouseEvent<HTMLElement>) => void,
  goLinkTo?: (e:React.MouseEvent<HTMLElement>) => void
}



const color = {
  500: '#ffd200',
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${color[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



function CustomButton(props: ButtonUnstyledProps) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function UnstyledButtonsSimple({text, text1, text2, type, goLink, goBack,goLinkTo, cName}: Props) {

  
  const mainPage = window.location.href === 'http://localhost:3000/'
  
  if(mainPage) {
    return (    
      <>
      <Stack spacing={2} direction="row" onClick={goLink} className={cName}>      
        <CustomButton type={type}>{text}</CustomButton>
      </Stack>      
      </>      
    )
  } else {
    return (
      <>
      <Stack spacing={2} direction="row" className={cName}>      
        <CustomButton type={type} onClick={goBack}>{text1}</CustomButton>
        <CustomButton type={type} onClick={goLinkTo}>{text2}</CustomButton>
      </Stack>
    </>      
    )    
  }

  
}