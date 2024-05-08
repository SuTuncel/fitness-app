import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon

} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from '@/shared/types';
import { motion } from "framer-motion";
import HText from '@/shared/HText';
import Benefit from './Benefit';
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Sugar plum macaroon biscuit marzipan gummies pie dragée. Jelly soufflé bonbon lollipop toffee gummies. Cake shortbread oat cake tootsie roll apple pie wafer."
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Sugar plum gingerbread pudding candy canes tart candy canes biscuit. Topping cheesecake sweet roll I love sesame snaps danish cupcake gingerbread."
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Pastry croissant oat cake lemon drops gingerbread I love muffin lollipop. Tart cookie liquorice brownie fruitcake I love ice cream jelly-o."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSeletedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSeletedPage }: Props) => {
    return <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div 
            onViewportEnter={() => setSeletedPage(SelectedPage.Benefits)}>
                <motion.div className='md:my-5 md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}> 
                   <HText> MORE THAN JUST GYM. </HText>
                   <p className='my-5 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora aliquid non id numquam fuga fugiat suscipit quae excepturi, maxime aliquam a facilis quod voluptate ut, 
                    accusantium quo qui error ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   </p>
                </motion.div>
                <motion.div className='md:flex items-center justify-between gap-8 mt-5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSeletedPage={setSeletedPage}
                        />
                    ))}
                </motion.div>

                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/>
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                      hidden: { opacity: 0, x: -50 },
                                      visible: { opacity: 1, x: 0 },
                                    }}>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING {"  "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        <div>
                           <p className="my-5">
                                Dragée oat cake tart tart chocolate bar sweet roll. Sesame snaps carrot cake jelly beans tart cupcake tiramisu 
                                lollipop. Brownie pudding sugar plum donut caramels. Dragée fruitcake halvah liquorice I love tart donut. Cotton 
                                candy chocolate bar candy canes cheesecake bonbon muffin jelly beans. Jelly-o oat cake shortbread tart biscuit. 
                                Chocolate bar bonbon cotton candy jelly-o shortbread candy canes caramels. Dessert cotton candy dragée pudding I 
                                love bear claw.
                            </p> 
                           <p className="mb-5">
                                Cupcake ipsum dolor sit amet. Toffee gummi bears topping bear claw jelly-o lemon drops pie. I love I love sweet 
                                sweet roll icing I love toffee cotton candy I love. Tiramisu gummi bears ice cream candy canes marshmallow oat 
                                cake donut candy jelly beans. Shortbread powder chupa chups gingerbread muffin I love ice cream jelly-o. Pastry 
                                brownie chocolate cake lollipop ice cream I love.
                            </p> 
                        </div>
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
                                <ActionButton setSelectedPage={setSeletedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>

        </motion.div>
    </section>
}

export default Benefits