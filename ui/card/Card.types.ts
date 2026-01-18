import { ReactNode, HTMLAttributes, ForwardRefExoticComponent, RefAttributes, FC } from 'react';

export type CardSectionType = 'Header' | 'Body' | 'Footer';

export type SectionProps = HTMLAttributes<HTMLElement> & {
    className?: string;
    children?: ReactNode;
};

export interface CardProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
}

export interface CardComponent extends ForwardRefExoticComponent<CardProps & RefAttributes<HTMLElement>> {
    Header: FC<SectionProps>;
    Body: FC<SectionProps>;
    Footer: FC<SectionProps>;
}

export interface FormCardProps extends CardProps {
    onSubmit?: (e: React.FormEvent) => void;
}