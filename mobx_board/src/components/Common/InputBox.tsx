import TextField from '@mui/material/TextField';

export const enum InputType {
  TEXT = 'text',
  NUMBER = 'number'
}

type Props = {
  name:string,
  text: string,
  type: InputType, 
  value?: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function BasicTextFields({text, type,value, onChange, name}: Props) {
  return (
    <TextField id="outlined-basic" label={text} variant="outlined" type={type} onChange={onChange} value={value} name={name}/>
  );
}