import React from 'react';

export interface BackDropProps {
    /** 백드롭 표시 여부 */
    visible?: boolean;
    /** 클릭 시 실행될 핸들러 (보통 닫기 기능) */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** 커스텀 클래스 */
    className?: string;
    /** 투명도 조절 여부 (선택 사항) */
    variant?: 'dark' | 'transparent' | 'blur';
}