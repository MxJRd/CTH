import { CardLayout } from '../../components/layout/Layout'
import { MainContentProps } from "./types"
import { DaisyCard } from '../../components/common/DaisyCard'

export const MainContent = ({ items }: MainContentProps) => {
  return (
    <CardLayout>
      {
        items
          .map(item => (
            <DaisyCard showContent={item.showBridge}>
              <DaisyCard.Heading label={item.Heading} />
              <DaisyCard.Subheading label={item.Subheading} />
              <div className='flex flex-col gap-2'>
                <hr />
                <DaisyCard.Price label={String(item.Price)} />
              </div>
            </DaisyCard>
          ))
      }
    </CardLayout>
  )
}
