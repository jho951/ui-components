import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, HTMLAttributes, ButtonHTMLAttributes, ForwardRefExoticComponent, RefAttributes, FC, SVGAttributes, LabelHTMLAttributes, TextareaHTMLAttributes } from 'react';
export { SVG_ASSETS } from '../assert/index.js';

type ArrowDirection = 'up' | 'down' | 'left' | 'right';
interface ArrowProps {
    size?: number;
    direction?: ArrowDirection;
    className?: string;
}

declare const Arrow: ({ size, direction, className }: ArrowProps) => react_jsx_runtime.JSX.Element;

declare const DIRECTION_MAP: Record<ArrowDirection, string>;

type InputSize = "s" | "m" | "l";
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    helperText?: string;
    error?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    size?: InputSize;
}

declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

type SelectSize = "s" | "m" | "l";
interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    helperText?: string;
    error?: string;
    options?: SelectOption[];
    placeholder?: string;
    fullWidth?: boolean;
    size?: SelectSize;
    children?: ReactNode;
}

declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLSelectElement>>;

type DropdownSize = "s" | "m" | "l";
type DropdownAlign = "start" | "end";
interface DropdownItem {
    label: ReactNode;
    value: string;
    disabled?: boolean;
}
interface DropdownProps {
    label?: string;
    items: DropdownItem[];
    value?: string;
    placeholder?: string;
    size?: DropdownSize;
    align?: DropdownAlign;
    disabled?: boolean;
    onSelect?: (value: string) => void;
}

declare const Dropdown: ({ label, items, value, placeholder, size, align, disabled, onSelect, }: DropdownProps) => react_jsx_runtime.JSX.Element;

type TooltipPosition = "top" | "right" | "bottom" | "left";
interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    position?: TooltipPosition;
}

declare const Tooltip: ({ content, children, position }: TooltipProps) => react_jsx_runtime.JSX.Element;

type ToastVariant = "info" | "success" | "warning" | "error";
interface ToastProps {
    open: boolean;
    title?: string;
    message?: ReactNode;
    variant?: ToastVariant;
    duration?: number;
    onClose?: () => void;
}

declare const Toast: ({ open, title, message, variant, duration, onClose, }: ToastProps) => react_jsx_runtime.JSX.Element | null;

interface TabItem {
    value: string;
    label: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
interface TabsProps {
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

declare const Tabs: ({ items, value, defaultValue, onChange }: TabsProps) => react_jsx_runtime.JSX.Element;

interface AccordionItem {
    id: string;
    title: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultOpenIds?: string[];
}

declare const Accordion: ({ items, allowMultiple, defaultOpenIds }: AccordionProps) => react_jsx_runtime.JSX.Element;

type TableAlign = "left" | "center" | "right";
interface TableColumn<T> {
    key: keyof T & string;
    header: ReactNode;
    align?: TableAlign;
    width?: string;
}
interface TableProps<T extends Record<string, any>> {
    columns: TableColumn<T>[];
    data: T[];
    caption?: string;
    striped?: boolean;
    compact?: boolean;
}

declare const Table: <T extends Record<string, any>>({ columns, data, caption, striped, compact }: TableProps<T>) => react_jsx_runtime.JSX.Element;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

declare const Pagination: ({ currentPage, totalPages, onPageChange, siblingCount }: PaginationProps) => react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    onClick?: () => void;
    current?: boolean;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

declare const Breadcrumb: ({ items }: BreadcrumbProps) => react_jsx_runtime.JSX.Element;

type AvatarSize = "s" | "m" | "l" | number;
type AvatarShape = "circle" | "square";
interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
}

declare const Avatar: ({ src, alt, name, size, shape, className, ...rest }: AvatarProps) => react_jsx_runtime.JSX.Element;

type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";
type BadgeSize = "s" | "m";
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
}

declare const Badge: ({ children, variant, size, className, ...rest }: BadgeProps) => react_jsx_runtime.JSX.Element;

type AlertVariant = "info" | "success" | "warning" | "error";
interface AlertProps {
    title?: ReactNode;
    children: ReactNode;
    variant?: AlertVariant;
    onClose?: () => void;
}

declare const Alert: ({ title, children, variant, onClose }: AlertProps) => react_jsx_runtime.JSX.Element;

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
    circle?: boolean;
}

declare const Skeleton: ({ width, height, circle, className, style, ...rest }: SkeletonProps) => react_jsx_runtime.JSX.Element;

interface BackDropProps {
    /** 백드롭 표시 여부 */
    visible?: boolean;
    /** 클릭 시 실행될 핸들러 (보통 닫기 기능) */
    onClick?: (event: React__default.MouseEvent<HTMLDivElement>) => void;
    /** 커스텀 클래스 */
    className?: string;
    /** 투명도 조절 여부 (선택 사항) */
    variant?: 'dark' | 'transparent' | 'blur';
}

declare const BackDrop: ({ visible, onClick, className, variant }: BackDropProps) => react_jsx_runtime.JSX.Element | null;

/** 버튼 타입 정의 */
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
/** 버튼 크기 정의 */
type ButtonSize = 's' | 'm' | 'l';
/**
 * 공통 버튼 속성 정의 (버튼/링크 모두 공유)
 * 실제 button 엘리먼트에 필요한 props까지 확장
 */
interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** 버튼의 텍스트 또는 요소 */
    children: ReactNode;
    /** 버튼의 시각적 스타일 지정 */
    variant?: ButtonVariant;
    /** 버튼의 크기 선택 */
    size?: ButtonSize;
    /** 커스텀 클래스 이름을 추가하여 스타일을 확장합니다. */
    className?: string;
    /** 버튼 활성화 여부 */
    disabled?: boolean;
}
interface ButtonProps extends BaseButtonProps {
    isLoading?: boolean;
    loadingText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

/**
 * Button (실제 사용될 인터페이스 컴포넌트)
 * 비즈니스 로직(로딩 시 Spinner 렌더링)을 캡슐화합니다.
 */
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const BUTTON_SIZES: ButtonSize[];
declare const BUTTON_VARIANTS: ButtonVariant[];

/**
 * 카드 섹션을 생성하는 팩토리 함수입니다. (캡슐화)
 * @param name 섹션의 이름 (Header, Body, Footer 등)
 */
declare const createCardSection: (name: CardSectionType) => React__default.FC<SectionProps>;

declare const Card: CardComponent;

type CardSectionType = 'Header' | 'Body' | 'Footer';
type SectionProps = HTMLAttributes<HTMLElement> & {
    className?: string;
    children?: ReactNode;
};
interface CardProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
}
interface CardComponent extends ForwardRefExoticComponent<CardProps & RefAttributes<HTMLElement>> {
    Header: FC<SectionProps>;
    Body: FC<SectionProps>;
    Footer: FC<SectionProps>;
}
interface FormCardProps extends CardProps {
    onSubmit?: (e: React.FormEvent) => void;
}

declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    indeterminate?: boolean;
}

declare const Divider: () => react_jsx_runtime.JSX.Element;

declare const Form: ({ children, onSubmit, className, ...rest }: FormProps) => react_jsx_runtime.JSX.Element;

interface FormProps extends React__default.FormHTMLAttributes<HTMLFormElement> {
    children: React__default.ReactNode;
    onSubmit: (e: React__default.FormEvent<HTMLFormElement>) => void;
    className?: string;
}

type IconSource = "registry" | "url" | "auto";
type IconName = string;
type SvgTag = "path" | "rect" | "circle" | "ellipse" | "line" | "polyline" | "polygon";
type IconElement = {
    el: SvgTag;
} & SVGAttributes<SVGElement>;
interface IconData {
    vb: string;
    g?: IconElement[];
    raw?: string;
    src?: string;
}
type IconRegistry = Record<string, IconData>;
type IconProps = {
    name: IconName;
    size?: number;
    title?: string;
    color?: string;
    /** registry/url/auto */
    source?: IconSource;
    /** url 모드에서 직접 경로 지정 */
    src?: string;
    /** 기본: "/assert/icons" (프로젝트가 assert에 svg 넣는 컨벤션) */
    basePath?: string;
    ext?: string;
    /** (옵션) 레지스트리 주입 */
    icons?: IconRegistry;
} & Omit<SVGAttributes<SVGSVGElement>, "children">;

declare const Icon: ({ name, size, title, color, source, src, basePath, ext, icons, className, style, ...rest }: IconProps) => react_jsx_runtime.JSX.Element;

declare function getRegistryIcon(name: string, registry?: IconRegistry | null): IconData | undefined;
declare function isExternalSvgPath(p: string): boolean;
declare function resolveIconSrc(name: string, src?: string, basePath?: string, ext?: string): string;
declare function getAriaProps(title?: string): {
    readonly role: "img";
    readonly "aria-label": string;
    readonly "aria-hidden"?: undefined;
} | {
    readonly "aria-hidden": true;
    readonly role?: undefined;
    readonly "aria-label"?: undefined;
};
declare function useInlineSvg(src?: string): string | null;
declare function extractSvgInner(svgText: string): string;
declare function extractViewBox(svgText: string, fallback?: string): string;

declare const Label: ({ className, children, htmlFor, required, variant, ...rest }: LabelProps) => react_jsx_runtime.JSX.Element;

type LabelVariant = 'default' | 'inline' | 'capsule' | 'error' | 'floating' | 'filled' | 'outlined';
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    variant?: LabelVariant;
}

interface ModalProps {
    isOpen: boolean;
    content: string;
    onClose: () => void;
    title?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
}

declare const Modal: ({ isOpen, content, onClose, title, size }: ModalProps) => React$1.ReactPortal | null;

/**
 * `Spinner` 컴포넌트는 시스템의 로딩 상태를 시각적으로 나타냅니다.
 * - `Icon` 컴포넌트의 'spinner' 아이콘을 기반으로 작동합니다.
 * - CSS 애니메이션을 통해 무한 회전하며, 접근성을 고려하여 `role="status"`를 포함합니다.
 *
 * ### 사용 예시
 * ```tsx
 * <Spinner size={32} label="데이터 불러오는 중" />
 * ```
 */
declare const Spinner: ({ size, className, label }: SpinnerProps) => react_jsx_runtime.JSX.Element;

interface SpinnerProps {
    /** 아이콘 크기(px) */
    size?: number;
    /** 추가 클래스명 */
    className?: string;
    /** 스크린리더용 라벨 (기본: "Loading") */
    label?: string;
}

declare const Tag: ({ active, color, children }: TagProps) => react_jsx_runtime.JSX.Element;

type TagColor = 'default' | 'primary' | 'secondary' | 'danger';
interface TagProps {
    children: React__default.ReactNode;
    active?: boolean;
    color?: TagColor;
}

declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    autoResize?: boolean;
}

export { Accordion, type AccordionItem, type AccordionProps, Alert, type AlertProps, type AlertVariant, Arrow, type ArrowDirection, type ArrowProps, Avatar, type AvatarProps, type AvatarShape, type AvatarSize, BUTTON_SIZES, BUTTON_VARIANTS, BackDrop, type BackDropProps, Badge, type BadgeProps, type BadgeSize, type BadgeVariant, type BaseButtonProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardComponent, type CardProps, type CardSectionType, Checkbox, type CheckboxProps, DIRECTION_MAP, Divider, Dropdown, type DropdownAlign, type DropdownItem, type DropdownProps, type DropdownSize, Form, type FormCardProps, type FormProps, Icon, type IconData, type IconElement, type IconName, type IconProps, type IconRegistry, type IconSource, Input, type InputProps, type InputSize, Label, type LabelProps, type LabelVariant, Modal, type ModalProps, Pagination, type PaginationProps, type SectionProps, Select, type SelectOption, type SelectProps, type SelectSize, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, type SvgTag, type TabItem, Table, type TableAlign, type TableColumn, type TableProps, Tabs, type TabsProps, Tag, type TagColor, type TagProps, Textarea, type TextareaProps, Toast, type ToastProps, type ToastVariant, Tooltip, type TooltipPosition, type TooltipProps, createCardSection, extractSvgInner, extractViewBox, getAriaProps, getRegistryIcon, isExternalSvgPath, resolveIconSrc, useInlineSvg };
