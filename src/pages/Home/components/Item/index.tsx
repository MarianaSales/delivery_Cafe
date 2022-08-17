import {
  CurrencyCircleDollar,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
} from 'phosphor-react'
import { useState } from 'react'
import { ItemsType } from '../../../../@types/items'
import {
  Badges,
  ButtonDecrease,
  ButtonIncrease,
  CartButton,
  Description,
  InputNumber,
  ItemActions,
  ItemContainer,
  Title,
} from './styles'

interface ItemProps extends ItemsType {
  items: ItemsType
}
export function Item({ items }: ItemProps) {
  const [item, setItem] = useState(1)

  function handleIncreaseItems() {
    setItem((state) => state + 1)
  }

  function handleDecreaseItems() {
    if (item !== 1) {
      setItem((state) => state - 1)
    }
  }

  function handleAddItemToCark() {}

  return (
    <ItemContainer>
      <img src={`../../types/items/${items.image}`} alt={items.title} />

      <Badges>
        <span>{items.label}</span>
      </Badges>
      <Title>{items.title}</Title>
      <Description>{items.description}</Description>
      <ItemActions>
        <span>
          <CurrencyCircleDollar />
          <strong>{items.price.toFixed(2)}</strong>
        </span>

        <InputNumber>
          <ButtonDecrease type="button" onClick={handleDecreaseItems}>
            <MinusCircle />
          </ButtonDecrease>

          <input type="number" min="1" max="100" step="1" value={item} />
          <ButtonIncrease type="button" onClick={handleIncreaseItems}>
            <PlusCircle />
          </ButtonIncrease>
        </InputNumber>
        <CartButton type="button" onClick={handleDecreaseItems}>
          <ShoppingCart weight="fill" />
        </CartButton>
      </ItemActions>
    </ItemContainer>
  )
}
