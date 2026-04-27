import iconInstagram from "../../assets/images/icon-instagram.png"
import iconFacebook from "../../assets/images/icon-facebook.png"
import iconTiktok from "../../assets/images/icon-tiktok.png";
import iconWhatsapp from "../../assets/images/icon-whatsapp.png";


const socialLinks = [
    { href: "#", icon: iconInstagram, name: "Instagram" },
    { href: "#", icon: iconFacebook, name: "Facebook" },
    { href: "#", icon: iconTiktok, name: "Tiktok" },
    { href: "#", icon: iconWhatsapp, name: "WhatsApp" },
];


export const Footer = () => {
    return (
        <footer className="bg-footer-bg py-10"> {/* Adicionei py-10 para dar altura */}
            <div className="container mx-auto">
                <div className="flex flex-col gap-8">
                    <form className="flex flex-col">
                        <label htmlFor="newletter" className="text-white">
                            Inscreva-se em nosso e-mail
                        </label>
                        <input 
                            type="email" 
                            id="newletter" 
                            placeholder="email@email.com"
                            className="rounded-[30px] bg-white py-3 px-5 text-black" 
                        />
                    </form>

                    <div>
                       <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>
                            <ul className="flex gap-5">
                              {socialLinks.map(({ href, icon, name }) => (
                                <li key={name}>
                                    <a href={href} aria-label={name}>
                                        <img src={icon} alt={name} className="w-6 h-6" />
                                    </a>
                                </li>
                               ))}       
                           </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};