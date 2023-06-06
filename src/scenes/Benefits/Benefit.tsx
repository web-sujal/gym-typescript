import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");

  return (
    <motion.div
      initial={
        isAboveMediumScreen
          ? { y: "50px", opacity: 0 }
          : { x: "-50px", opacity: 0 }
      }
      whileInView={
        isAboveMediumScreen ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
      }
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.6 }}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex items-center justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>

      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.15 }}>
          Learn More
        </motion.div>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
