import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from 'react-icons/ai';


const Social = ({className, iconSize}) => {
    const commonClass ="text-white mx-1 "+iconSize;
    return (<section className={className}
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-duration="700"
    >
<a href="https://github.com/fathah"><AiFillGithub className={commonClass} /></a>
<a href="https://www.linkedin.com/in/fathahcr/"><AiFillLinkedin className={commonClass}/></a>
<a href="https://twitter.com/fathah_cr"><AiFillTwitterCircle className={commonClass}/></a>
<a href="mailto:fathah@ziqx.in"><AiFillMail className={commonClass}/></a>



    </section>);
}
 
export default Social;