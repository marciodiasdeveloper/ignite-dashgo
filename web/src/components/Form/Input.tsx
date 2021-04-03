import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps  } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
    = ({ name, label, error, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraInput 
                id={name}
                name={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                ref={ref}
                {...rest}
            />
        </FormControl>
    );
}

export const Input = forwardRef(InputBase);