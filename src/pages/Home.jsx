import Layout from '../Layout';
import navio4 from "../assets/images/navio4.png";

export default function Home(){
    return(
        <Layout children= {<div className="gfg">
        <img id="imgBanner" src={navio4}></img>
        <h3 className="first-txt">Aplicativos para o seu negócio navegar com toda tranquilidade</h3>
        </div>} />
    )
}