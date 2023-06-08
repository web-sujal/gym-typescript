import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
        </motion.div>
        <p className="my-5 text-justify md:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex nam ut,
          eius minus dignissimos at quos itaque non hic. Modi reiciendis sit
          consectetur saepe asperiores ipsam cumque quaerat veritatis qui?
        </p>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <form
            target="_blank"
            onSubmit={handleSubmit}
            action="https://formsubmit.co/577ea77606bc77b1b11e066cf9a63fe2"
            method="POST"
          >
            <input
              type="text"
              className={inputStyles}
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 50 characters."}
              </p>
            )}

            <input
              type="text"
              className={inputStyles}
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" &&
                  "Please enter a valid email address."}
              </p>
            )}

            <textarea
              className={inputStyles}
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-150 hover:bg-primary-500 hover:text-white"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="before:-z[-1] w-full before:absolute before:-bottom-20 before:-right-10 md:before:content-evolvetext">
            <img
              src={ContactUsPageGraphic}
              alt="contact-us-page-graphic"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
