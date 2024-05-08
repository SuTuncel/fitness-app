import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSeletedPage: (value: SelectedPage) => void;
}

const childVarient = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

function Benefit({icon, title, description, setSeletedPage}: Props) {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center' variants={childVarient}>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 border-primary-100 p-4'>{icon}</div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSeletedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit