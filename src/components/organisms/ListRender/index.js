import { ListCard } from 'components/molecules/ListCard'
import { RenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista está vazia, clique no botão "Adicionar" para incluir novos
        items.
      </h3>
    )
  }

  return (
    <RenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </RenderContainer>
  )
}
