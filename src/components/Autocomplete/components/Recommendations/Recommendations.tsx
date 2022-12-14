import React, {FC} from 'react';
import {RecommendationsContainer} from './Recommendations.styles';
import {RecommendationItem} from './components/RecommendationItem';
import {RESPONSE_EXAMPLE} from './constants';

export const Recommendations:FC = () => {
    return <RecommendationsContainer>
        {
            RESPONSE_EXAMPLE.map(({name, domain, logo}, index) => <RecommendationItem
                key={`${name}_${index}`}
                name={name}
                domain={domain}
                logo={logo}
            />)
        }
    </RecommendationsContainer>
}