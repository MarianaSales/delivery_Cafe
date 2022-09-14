import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContent } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
// & {
//     error?: string;
//     textStyle?: string;
// };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <InputContent {...props} ref={ref} />;
});
