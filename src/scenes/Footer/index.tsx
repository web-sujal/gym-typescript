import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <section id="footer" className="bg-primary-100 py-16">
      <div className="mx-auto flex w-5/6 flex-col items-start justify-center gap-10 md:flex-row">
        {/* LOGO, DESCRIPTION AND COPYRIGHT */}
        <div className="flex basis-1/2 flex-col gap-6">
          <img src={Logo} alt="logo" className="h-6 w-28" />
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, distinctio nulla pariatur perferendis corporis at quo
            debitis nobis. Molestias temporibus officia error veritatis non
            numquam, corrupti porro at illo dolores.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        {/* LINKS */}
        <div className="flex basis-1/4 flex-col gap-4">
          <h6 className="text-lg font-bold">Links</h6>
          <p>Massa orci senectus</p>
          <p>Et gravida id et etiam</p>
          <p>Uilamcorper vivamus</p>
        </div>

        {/* CONTACT US */}
        <div className="flex basis-1/4 flex-col gap-4">
          <h6 className="text-lg font-bold">Contact Us</h6>
          <p>Tempus metus mattis risus volutpat egestas.</p>
          <p>{`(+91) 9457420786`}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
