import { InputHTMLAttributes } from 'react';
import { InputField, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
    return (
        <div>
            {label && <Label>{label}</Label>}
            <InputField placeholder={placeholder} {...rest} />
        </div>
    );
};

export default Input;
