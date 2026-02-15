export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onFilesSelected?: (files: File[]) => void;
  helperText?: string;
}
