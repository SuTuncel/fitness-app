import { SelectedPage, ClassType } from '@/shared/types';
import { motion } from "framer-motion";
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium accusamus doloribus ut magnam asperiores! Perferendis vero saepe, illo quasi quod non ratione magni a molestiae deserunt quam est autem cum.',
        image: img1
    },
    {
        name: "Yoga Classes",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium accusamus doloribus ut magnam asperiores! Perferendis vero saepe, illo quasi quod non ratione magni a molestiae deserunt quam est autem cum.',
        image: img2
    },
    {
        name: "Ab Core Classes",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium accusamus doloribus ut magnam asperiores! Perferendis vero saepe, illo quasi quod non ratione magni a molestiae deserunt quam est autem cum.',
        image: img3
    },
    {
        name: "Adventure Classes",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium accusamus doloribus ut magnam asperiores! Perferendis vero saepe, illo quasi quod non ratione magni a molestiae deserunt quam est autem cum.',
        image: img4
    },
    {
        name: "Fitness Classes",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium accusamus doloribus ut magnam asperiores! Perferendis vero saepe, illo quasi quod non ratione magni a molestiae deserunt quam est autem cum.',
        image: img5
    },
    {
        name: "Training Classes",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium accusamus doloribus ut magnam asperiores! Perferendis vero saepe, illo quasi quod non ratione magni a molestiae deserunt quam est autem cum.',
        image: img6
    }
];

type Props = {
    setSeletedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSeletedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={()=> setSeletedPage(SelectedPage.OurClasses)}>
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}>
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum? Tempore numquam, quo soluta eos perspiciatis, 
                            ducimus autem exercitationem ut voluptate velit neque modi odio. Molestias, et non. Ab, velit.
                        </p>
                    </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item:ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`} 
                            name={item.name}
                            description={item.description}
                            image={item.image}/>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;
