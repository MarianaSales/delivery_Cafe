import { forwardRef, InputHTMLAttributes } from 'react';
import { Text } from '../Typography';
import { InputContainer, InputContent, InputStyle, TextStyle } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, rightText, ...props }, ref) => {
        return (
            <InputContainer className={className}>
                <InputContent hasErrors={!!error}>
                    <InputStyle {...props} ref={ref} />
                    {rightText && <TextStyle>{rightText}</TextStyle>}
                </InputContent>
                {error && <Text size="s">{error}</Text>}
            </InputContainer>
        );
    }
);
