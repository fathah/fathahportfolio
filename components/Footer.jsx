import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from 'react-icons/ai';


const Footer = () => {
    const commonClass ="text-white text-3xl mx-1";
    return (<footer className="absolute bottom-0 w-full flex justify-center mb-10">
<a href="https://github.com/fathah"><AiFillGithub className={commonClass} /></a>
<a href="https://www.linkedin.com/in/fathahcr/"><AiFillLinkedin className={commonClass}/></a>
<a href="https://twitter.com/fathah_cr"><AiFillTwitterCircle className={commonClass}/></a>
<a href="mailto:fathah@ziqx.in"><AiFillMail className={commonClass}/></a>



    </footer>);
}
 
export default Footer;