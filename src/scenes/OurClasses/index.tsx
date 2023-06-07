import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo perspiciatis placeat aperiam est iusto reprehenderit doloribus, mollitia cum repellendus pariatur, vel, quo ab. Officiis tempore, deserunt eligendi officia reiciendis obcaecati?",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo perspiciatis placeat aperiam est iusto reprehenderit doloribus, mollitia cum repellendus pariatur, vel, quo ab. Officiis tempore, deserunt eligendi officia reiciendis obcaecati?",
    image: image2,
  },
  {
    name: "Abs Core Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo perspiciatis placeat aperiam est iusto reprehenderit doloribus, mollitia cum repellendus pariatur, vel, quo ab. Officiis tempore, deserunt eligendi officia reiciendis obcaecati?",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate nulla eius tenetur earum et",
    image: image4,
  },
  {
    name: "Endurance Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate nulla eius tenetur earum et",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate nulla eius tenetur earum et",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quasi excepturi deserunt, accusantium sequi quia totam asperiores
              fugit placeat, cupiditate corporis, repellendus quod! Fuga,
              nesciunt?
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2000px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
