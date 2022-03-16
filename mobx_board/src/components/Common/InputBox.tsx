import TextField from '@mui/material/TextField';

export const enum InputType {
  TEXT = 'text',
  NUMBER = 'number'
}

type Props = {
  name:string,
  text: string,
  type: InputType,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string | number
}

export default function BasicTextFields({text, type,value, handleChange}: Props) {
  return (
    <TextField id="outlined-basic" label={text} variant="outlined" type={type} onChange={handleChange} value={value}/>
  );
}