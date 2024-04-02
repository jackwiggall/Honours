/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PagesCreateFormInputValues = {
    gameID?: string;
    localID?: number;
    title?: string;
    text?: string;
    linkText?: string;
    linkID?: number;
};
export declare type PagesCreateFormValidationValues = {
    gameID?: ValidationFunction<string>;
    localID?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    linkText?: ValidationFunction<string>;
    linkID?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagesCreateFormOverridesProps = {
    PagesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameID?: PrimitiveOverrideProps<TextFieldProps>;
    localID?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    linkText?: PrimitiveOverrideProps<TextFieldProps>;
    linkID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagesCreateFormProps = React.PropsWithChildren<{
    overrides?: PagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PagesCreateFormInputValues) => PagesCreateFormInputValues;
    onSuccess?: (fields: PagesCreateFormInputValues) => void;
    onError?: (fields: PagesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PagesCreateFormInputValues) => PagesCreateFormInputValues;
    onValidate?: PagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function PagesCreateForm(props: PagesCreateFormProps): React.ReactElement;
