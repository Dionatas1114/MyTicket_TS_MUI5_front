import { TextField, Tooltip, Fade } from '@mui/material';

export default function TextFieldInput(props: any) {
  const {
    id = '',
    name = '',
    margin = 'normal',
    color = undefined,
    type = 'text',
    required = false,
    fullWidth = true,
    autoFocus = false,
    autoComplete = undefined,
    value = undefined,
    label = undefined,
    helperText = null,
    disabled = false,
    onClick = undefined,
    onChange = undefined,
    error = null,
    InputProps = null,
  } = props;

  return (
    <Tooltip title={helperText} placement="right" TransitionComponent={Fade}>
      <TextField
        id={id}
        name={name}
        margin={margin}
        color={color}
        type={type}
        required={required}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        value={value}
        onClick={onClick}
        onChange={onChange}
        label={label}
        disabled={disabled}
        helperText={helperText}
        error={error}
        InputProps={InputProps}
      />
    </Tooltip>
  );
}
