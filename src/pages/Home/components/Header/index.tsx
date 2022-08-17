import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ThemeType } from '../../../../styles/themes/default'
import {
  Descriptions,
  HomeContainer,
  Item,
  LeftContainer,
  RightContainer,
} from './styles'
import coffe from '../../../../assets/cofe.svg'

export function Header() {
  const theme = useTheme() as ThemeType

  return (
    <HomeContainer>
      <LeftContainer>
        <label>Encontre seu café preferido qualquer hora do dia</label>
        <p>
          Com o Delivery Café você recebe seu café onde estiver, a qualquer hora
        </p>

        <Descriptions>
          <Item background={theme.yellow_700}>
            <ShoppingCartSimple weight="fill" />
            <span>Compra simples e segura</span>
          </Item>
          <Item background={theme.grey_700}>
            <Package weight="fill" />
            <span>Embalagem matém o café intacto</span>
          </Item>
          <Item background={theme.yellow_500}>
            <Timer weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item background={theme.purple_700}>
            <Coffee weight="fill" />
            <span>O café chega fresquinho até você</span>
          </Item>
        </Descriptions>
      </LeftContainer>
      <RightContainer>
        <img src={coffe} alt="Copo de café" />
      </RightContainer>
    </HomeContainer>
  )
}
