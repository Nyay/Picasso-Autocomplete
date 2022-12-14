import React, {FC} from 'react';
import {IAutocomplete} from './types';
import {AutocompleteContainerStyled, InputTitleStyled, InputStyled} from './Autocomplete.styles';
import {Recommendations} from './components/Recommendations/Recommendations';

export const Autocomplete:FC<IAutocomplete> = ({header}) => {
    return (
        <AutocompleteContainerStyled>
            <InputTitleStyled>{header}</InputTitleStyled>
            <InputStyled extended={true} value={'BM'}/>
            <Recommendations />
        </AutocompleteContainerStyled>
    )
}