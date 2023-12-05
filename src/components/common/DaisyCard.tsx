import { ReactNode } from "react"
import placeholder from '../../assets/placeholder.jpg'
import happycat from '../../assets/happycat.gif'

export const DaisyCard = ({ children, showContent }: { children: ReactNode | ReactNode[], showContent?: boolean }) => {
  return (
    <div className="card card-compact w-48 bg-[#fff] shadow-xl text-start">
      <figure className='h-32'>
        {
          showContent
            ?
            <img src={happycat} />
            :
            <div className='bg-[#000] p-6'>
              <img src={placeholder} />
            </div>
        }
      </figure>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

const Heading = ({ label }: { label: string }) => {
  return (
  <div className={`tooltip tooltip-top`} data-tip={label}>
    <h2 className="card-title block text-start truncate">{label}</h2>
  </div>
  )
}
const Subheading = ({ label }: { label: string }) => <p className="truncate">{label}</p>
const Price = ({ label }: { label: string }) => <p className="text-right text-green-500">${label}</p>

DaisyCard.Heading = Heading
DaisyCard.Subheading = Subheading
DaisyCard.Price = Price