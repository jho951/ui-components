import React, { forwardRef } from "react";

import {cn} from '../../lib';
import { CardComponent, CardProps, createCardSection} from "./index";
import styles from "./Card.module.css";

const CardRoot = forwardRef<HTMLElement, CardProps>(
    ({ children, className, ...rest }, ref) => {
        return (
            <section className={cn(styles.card, className)} {...rest} ref={ref}>
                {children}
            </section>
        );
    }
);

const Card = CardRoot as CardComponent;
Card.Header = createCardSection('Header');
Card.Body = createCardSection('Body');
Card.Footer = createCardSection('Footer');

CardRoot.displayName = 'Card';
export { Card };