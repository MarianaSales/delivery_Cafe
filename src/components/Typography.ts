import styled from 'styled-components';

interface TitleProps {
    color?: 'grey_700' | 'grey_800' | 'grey_900';
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    weight?: string | number;
}

interface TextProps {
    color?: 'grey_600' | 'grey_700' | 'grey_800';
    size?: 'l' | 'm' | 's';
    weight?: string | number;
}

export const Title = styled.h1<TitleProps>`
    color: ${({ color, theme }) => theme[`${color ?? 'grey_700'}`]};
    font-size: ${({ size, theme }) => theme[`${size ?? 'm'}`]};
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    font-weight: ${({ weight }) => weight ?? 800};
`;

export const Text = styled.p<TextProps>`
    color: ${({ color, theme }) => theme[`${color ?? 'grey_700'}`]};
    font-size: ${({ size, theme }) => theme[`${size ?? 'm'}`]};
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-weight: ${({ weight }) => weight ?? 400};
`;
