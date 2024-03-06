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
export declare type AccountsUpdateFormInputValues = {
    username?: string;
};
export declare type AccountsUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountsUpdateFormOverridesProps = {
    AccountsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accounts?: any;
    onSubmit?: (fields: AccountsUpdateFormInputValues) => AccountsUpdateFormInputValues;
    onSuccess?: (fields: AccountsUpdateFormInputValues) => void;
    onError?: (fields: AccountsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountsUpdateFormInputValues) => AccountsUpdateFormInputValues;
    onValidate?: AccountsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountsUpdateForm(props: AccountsUpdateFormProps): React.ReactElement;
