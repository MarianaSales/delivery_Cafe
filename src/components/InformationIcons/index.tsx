import { ReactNode } from 'react';
import { IconContainer, InformationIconsContainer } from './styles';

interface InformationIconsProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconColor: string;
}
export function InformationIcons({ icon, text, iconColor }: InformationIconsProps) {
    return (
        <InformationIconsContainer>
            <IconContainer iconColor={iconColor}>{icon}</IconContainer>
            {typeof text === 'string' ? <p>{text}</p> : text}
        </InformationIconsContainer>
    );
}
