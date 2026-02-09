export interface ModalProps {
    isOpen: boolean;
    content: string;
    onClose: () => void;
    title?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
}