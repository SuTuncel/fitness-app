import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer
        className="bg-primary-100 py-16"
    >
        <div className="justify-content ms-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt='logo' src={Logo} />
                <p className="my-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem porro inventore quam vitae perspiciatis expedita, 
                    ea reiciendis corrupti numquam consequuntur explicabo molestiae nobis quae amet, tenetur, iure illo voluptates suscipit.
                </p>
                <p>© ElifSu All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="mt-5">Lorem ımpsum Dolor</p>
                <p className="mt-5">Lorem id et dolor</p>
                <p className="mt-5">Lorem id et vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="mt-5">Tempus metus mattis</p>
                <p>(+90) 540 456 2312</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer;