import {Dispatch, SetStateAction} from 'react';
import {ICompanies} from '../../../../services/companies/types';

export interface IRecommendations {
    recommendation: ICompanies[];
    handleClick: Dispatch<SetStateAction<string>>
}