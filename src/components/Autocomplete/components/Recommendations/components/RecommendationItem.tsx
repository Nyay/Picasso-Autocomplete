import React, {FC, useState} from 'react';
import {
    OrganizationInfoStyled, OrganizationLinkStyled,
    OrganizationLogoStyled,
    OrganizationNameStyled,
    RecommendationItemStyled
} from './RecommendationItem.styles';
import {IRecommendationItem} from './types';
import {IMAGE_INLINE_STYLE} from './constants';
import {ReactComponent as NoPhoto} from '../../../../../static/no-image.svg'

export const RecommendationItem:FC<IRecommendationItem> = ({
    name,
    domain,
    logo,
    onClick
}) => {

    const [imgError, setImgError] = useState(false)

    return <RecommendationItemStyled onClick={() => onClick(name)}>
        <OrganizationLogoStyled>
            {
                imgError ? <NoPhoto /> : <img src={logo} alt='' style={IMAGE_INLINE_STYLE} onError={() => setImgError(true)} />
            }
        </OrganizationLogoStyled>
        <OrganizationInfoStyled>
            <OrganizationNameStyled>{name}</OrganizationNameStyled>
            <OrganizationLinkStyled>{domain}</OrganizationLinkStyled>
        </OrganizationInfoStyled>
    </RecommendationItemStyled>
}