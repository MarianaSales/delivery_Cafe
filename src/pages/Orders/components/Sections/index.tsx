import { ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../../../../components/Typography';
import { SectionsContainer } from './styles';

interface SectionsProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
}
export function Sections({ title, subtitle, icon }: SectionsProps) {
    const theme = useTheme();
    return (
        <SectionsContainer>
            {icon}
            <div>
                <Text color="grey_800">{title}</Text>
                <Text size="s">{subtitle}</Text>
            </div>
        </SectionsContainer>
    );
}
