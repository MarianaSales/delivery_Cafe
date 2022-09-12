import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer, InputContent, InputStyle, TextStyle } from './styles';
import { Text } from '../Typography';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
// & {
//     error?: string;
//     textStyle?: string;
// };

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//     ({ error, textStyle, className, ...props }, ref) => {
//         return (
//             <InputContainer className={className}>
//                 <InputContent hasErrors={!error}>
//                     <InputStyle ref={ref} {...props} />
//                     {textStyle && <TextStyle>{textStyle}</TextStyle>}
//                 </InputContent>
//                 {error && <Text>{error}</Text>}
//             </InputContainer>
//         );
//     }
// );

export function Input({ ...props }) {
    return <InputContent {...props} />;
}
