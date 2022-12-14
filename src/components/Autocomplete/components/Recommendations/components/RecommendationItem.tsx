import React, {FC} from 'react';
import {
    OrganizationInfoStyled, OrganizationLinkStyled,
    OrganizationLogoStyled,
    OrganizationNameStyled,
    RecommendationItemStyled
} from './RecommendationItem.styles';
import {IRecommendationItem} from './types';
import {IMAGE_INLINE_STYLE} from './constants';

export const RecommendationItem:FC<IRecommendationItem> = ({
    name,
    domain,
    logo,
}) => {
    return <RecommendationItemStyled>
        <OrganizationLogoStyled>
            <img src={logo} alt={name} style={IMAGE_INLINE_STYLE} />
        </OrganizationLogoStyled>
        <OrganizationInfoStyled>
            <OrganizationNameStyled>{name}</OrganizationNameStyled>
            <OrganizationLinkStyled>{domain}</OrganizationLinkStyled>
        </OrganizationInfoStyled>
    </RecommendationItemStyled>
}