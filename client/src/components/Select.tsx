import * as React from "react";

import { Field, Control, Select as BloomerSelect } from "./bulma";

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

const Select = (props: ISelectProps) => (
    <Field>
        <Control isExpanded>
            <BloomerSelect
                value={props.value}
                onChange={props.onChange}
                isFullWidth>
                {props.options.map(_ => <option key={_.id} value={_.id}>{_.name}</option>)}
            </BloomerSelect>
        </Control>
    </Field>
);

export default Select;