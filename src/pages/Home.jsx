import Layout from '../Layout';
import navio6 from "../assets/images/navio6.png";

export default function Home(){
    return(
        <Layout children= {
        <div className="gfg">
            <img id="imgBanner" src={navio6}></img>
            <div className="first-txt-box">
                <h3 className="first-txt">Aplicativos para o seu negócio navegar com toda tranquilidade</h3>
            </div>
        </div>} />
    )
}