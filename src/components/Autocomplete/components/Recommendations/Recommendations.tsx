import React, {FC} from 'react';
import {RecommendationsContainer} from './Recommendations.styles';
import {RecommendationItem} from './components/RecommendationItem';
import {IRecommendations} from './types';

export const Recommendations:FC<IRecommendations> = ({recommendation, handleClick}) => {

    return <RecommendationsContainer>
        {
            recommendation?.map(({name, domain, logo}, index) => <RecommendationItem
                key={`${name}_${index}`}
                name={name}
                domain={domain}
                logo={logo}
                onClick={handleClick}/>
            )
        }
    </RecommendationsContainer>
}