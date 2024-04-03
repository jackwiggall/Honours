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
export declare type PagesUpdateFormInputValues = {
    gameID?: string;
    localID?: number;
    title?: string;
    text?: string;
    linkText?: string;
    linkID?: number;
};
export declare type PagesUpdateFormValidationValues = {
    gameID?: ValidationFunction<string>;
    localID?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    linkText?: ValidationFunction<string>;
    linkID?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagesUpdateFormOverridesProps = {
    PagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameID?: PrimitiveOverrideProps<TextFieldProps>;
    localID?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    linkText?: PrimitiveOverrideProps<TextFieldProps>;
    linkID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: PagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pages?: any;
    onSubmit?: (fields: PagesUpdateFormInputValues) => PagesUpdateFormInputValues;
    onSuccess?: (fields: PagesUpdateFormInputValues) => void;
    onError?: (fields: PagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PagesUpdateFormInputValues) => PagesUpdateFormInputValues;
    onValidate?: PagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PagesUpdateForm(props: PagesUpdateFormProps): React.ReactElement;
