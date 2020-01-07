import React from "react";

import { Field, Control, Select as FormSelect } from "./bulma";

export interface ISelectProps
{
    value: string | undefined;    
    options: ISelectOption[];
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

export interface ISelectOption
{
    id: string;
    name: string;
}

export const Select: React.FunctionComponent<ISelectProps> = ({ value, options, onChange }: ISelectProps) => (
    <Field>
        <Control isExpanded>
            <FormSelect
                value={value}
                onChange={onChange}
                isFullWidth>
                {options.map(_ => <option key={_.id} value={_.id}>{_.name}</option>)}
            </FormSelect>
        </Control>
    </Field>
);