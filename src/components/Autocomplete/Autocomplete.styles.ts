import styled from '@emotion/styled';

interface IInput {
    extended: boolean
}

export const AutocompleteContainerStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InputTitleStyled = styled('p')`
  font-size: 12px;
  line-height: 14px;

  color: #484848;

  margin: 0 0 0.5rem 0;
`

export const InputStyled = styled('input')<IInput>`
  box-sizing: border-box;
  
  padding: 0 0 0 14px;

  width: 332px;
  height: 33px;

  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: ${props => (props.extended ? '4px 4px 0 0' : '4px')};
  outline: none;
`