import styled from 'styled-components'
import { Sizes } from '../../../../styles/GlobalStyles'

// Types
interface HomeProps {
  background?: string
}

// Styles
export const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  @media ${Sizes.medium} {
    grid-template-columns: 1fr;
  }
  @media ${Sizes.small} {
    grid-template-columns: 1fr;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-family: 'Baloo 2', cursive;
    font-size: 3.5rem;
    line-height: 4rem;
    color: ${(props) => props.theme.grey_900};
    @media ${Sizes.small} {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
  p {
    font-size: 1rem;
    margin-top: 1.5rem;
    color: ${(props) => props.theme.grey_700};
  }
`

export const RightContainer = styled.div`
  transition: filter 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  img {
    @media ${Sizes.medium} {
      display: none;
    }
    @media ${Sizes.small} {
      display: none;
    }
  }
  &:hover {
    filter: brightness(1.2);
  }
`
export const Descriptions = styled.div`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: 1fr 1fr;
  @media ${Sizes.medium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${Sizes.small} {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div<HomeProps>`
  line-height: 3rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.grey_600};
  svg {
    background-color: ${(props) => props.background};
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 9999px;
    font-size: 1rem;
  }
`
