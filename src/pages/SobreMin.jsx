import Layout from '../Layout'
import '../App.css'
import aboutMe from '../assets/images/about_me.png'

export default function SobreMin(){
    return(
        <Layout children={
            <div className="gfg"> 
                <img id="imgBanner" src={aboutMe}></img>
                <div className='conteudoPaginas'>
                    <p>O meu nome é Kleber, mas utilizo o nome <span className='fox_apps_text'>Fox Apps</span> no meu trabalho <span className='freelancer_text'>freelancer.</span></p>
                    <p>Sou formado em Engenharia de Software e estou cursando pós-graduação em Desenvolvimento Fullstack. Tenho experiência em 
                            desenvolvimento de aplicativos web e mobile, utilizando as bibliotecas/frameworks React e Flutter.</p>
                </div>

            </div>
    } />
    )
}