import {Dispatch, SetStateAction} from 'react';

export interface IRecommendationItem {
    name: string;
    domain: string;
    logo: string;
    onClick: Dispatch<SetStateAction<string>>
}