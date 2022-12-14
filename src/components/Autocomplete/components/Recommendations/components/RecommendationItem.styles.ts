import styled from '@emotion/styled';

export const RecommendationItemStyled = styled('div')`
  box-sizing: border-box;
  display: flex;
  gap: 14px;
  width: auto;

  padding: 9px 16px;

  transition: background-color 0.75s ease;

  &:hover {
    background-color: rgba(169, 169, 169, 0.1);
  }
`

export const OrganizationInfoStyled = styled('div')`
  width: auto;
  height: auto;
  align-self: center;
`

export const OrganizationLogoStyled = styled('div')`
  width: 54px;
  height: 54px;
`

export const OrganizationNameStyled = styled('p')`
  font-size: 14px;
  line-height: 16px;
  margin: 0;

  color: #000000;
`

export const OrganizationLinkStyled = styled('p')`
  font-size: 12px;
  line-height: 14px;
  margin: 4px 0 0 0;

  color: #9F9F9F;
`