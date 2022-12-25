import { ChangeEventHandler, MouseEventHandler } from 'react';

import {
  Fade,
  Tooltip,
  TextField,
  InputProps,
  FilledInputProps,
  OutlinedInputProps,
} from '@mui/material';

interface Props {
  id?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  value?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean | undefined;
  helperText?: string | false | undefined;
  InputProps?: Partial<InputProps> | Partial<FilledInputProps> | Partial<OutlinedInputProps>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;
  margin?: 'normal' | 'none' | 'dense' | undefined;
}

export default function TextFieldInput(props: Props) {
  const {
    id = '',
    name = '',
    type = 'text',
    autoComplete = undefined,
    value = undefined,
    label = undefined,
    required = false,
    fullWidth = true,
    autoFocus = false,
    disabled = false,
    error,
    helperText,
    InputProps,
    onClick,
    onChange,
    color = undefined,
    margin = 'normal',
  } = props;

  return (
    <Tooltip title={helperText} placement="right" TransitionComponent={Fade}>
      <TextField
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        label={label}
        helperText={helperText}
        required={required}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        disabled={disabled}
        error={error}
        InputProps={InputProps}
        onClick={onClick}
        onChange={onChange}
        color={color}
        margin={margin}
      />
    </Tooltip>
  );
}
