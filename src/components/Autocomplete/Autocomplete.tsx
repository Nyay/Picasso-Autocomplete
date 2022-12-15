import React, {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import {IAutocomplete} from './types';
import {AutocompleteContainerStyled, InputTitleStyled, InputStyled} from './Autocomplete.styles';
import {Recommendations} from './components/Recommendations/Recommendations';
import {useLazyGetCompaniesQuery} from '../../services/companies';

export const Autocomplete:FC<IAutocomplete> = ({header}) => {

    const [inputValue, setInputValue] = useState('');

    const [trigger, result] = useLazyGetCompaniesQuery();

    const onChangeEvent = useCallback( (element:ChangeEvent<HTMLInputElement>) => {
        trigger(element.target.value);
        setInputValue(element.target.value);
    }, [inputValue])

    useEffect(() => {
        trigger(inputValue);
    }, [inputValue])

    return (
        <AutocompleteContainerStyled>
            <InputTitleStyled>{header}</InputTitleStyled>
            <InputStyled
                extended={!(result.isError) && !!(result.data?.length)}
                onInput={onChangeEvent}
                value={inputValue}
            />
            {result.isSuccess && !!(result.data.length) && <Recommendations
                recommendation={result.data}
                handleClick={setInputValue}
            />}
        </AutocompleteContainerStyled>
    )
}