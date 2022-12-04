import { TextField, Tooltip, Fade } from '@mui/material';

export default function TextFieldInput(props: any) {
  const {
    id = '',
    name = '',
    margin = 'normal',
    type = 'text',
    required = false,
    fullWidth = true,
    autoFocus = false,
    autoComplete = undefined,
    onClick = undefined,
    onChange = undefined,
    label = undefined,
    helperText = null,
    error = null,
    InputProps = null,
  } = props;

  return (
    <Tooltip title={helperText} placement="right" TransitionComponent={Fade}>
      <TextField
        id={id}
        name={name}
        margin={margin}
        type={type}
        required={required}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        onClick={onClick}
        onChange={onChange}
        label={label}
        helperText={helperText}
        error={error}
        // onMouseOver={}
        InputProps={InputProps}
      />
    </Tooltip>
  );
}
