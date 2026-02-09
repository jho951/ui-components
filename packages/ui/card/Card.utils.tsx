import React from "react";

import {cn} from '@lib/index.ts';
import type { CardSectionType, SectionProps } from "./index.ts";
import styles from "./Card.module.css";

/**
 * 카드 섹션을 생성하는 팩토리 함수입니다. (캡슐화)
 * @param name 섹션의 이름 (Header, Body, Footer 등)
 */
const createCardSection= (name: CardSectionType): React.FC<SectionProps> =>{
    const Section: React.FC<SectionProps> = ({ className, children, ...rest }) => {
        return (
            <div className={cn(styles[name.toLowerCase() as keyof typeof styles], className)} {...rest}>
                {children}
            </div>
        );
    };
    Section.displayName = `Card.${name}`;
    return Section;
}

export { createCardSection };