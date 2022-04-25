import "./introduction.css"
import {send, init} from "emailjs-com"
import { useCookies } from "react-cookie"
import $ from "jquery"

function TextFR() {
    return (
        <p className="TextZone">
            <div id="IntroAboutContent" className="IntroAbout">
                <strong>· Infos diverses ·</strong>
                <br/>
                <br/>
                Jeune entrepreneur lyonnais spécialisé dans le web, je travaille essentiellement en React (framework javascript) pour le coté frontend, en ce qui concerne du backend je code en Go (Golang).
                <br/>
                Ici, vous pourrez retrouver une grande partie de mes projets personnels pour vous faire une idée de ce que je peux faire et voir même être inspiré par l'un de ceux-ci. 
                <br/>
                Mais aussi, prendre rendez-vous si vous avez un projet à réaliser.
                <br/>
                Après la réception de votre mail, j'étudie votre demande et je vous fais un retour pour que l'on se mette d'accord sur la composition de votre projet.
                <br/>
            </div>
            <div id="IntroProjectContent" className="IntroProject">
                <br/>
                <strong>· Prendre RDV (mail type) ·</strong>
                <br/>
                <br/>
                · objet : projet - "type de site voulu" (exemple : projet - site vitrine)
                <br/>
                · description global de votre projet (si certains sites vous ont inspiré merci de me fournir des images/lien de ceux-ci, le cas échéant on en discutera ensemble et je vous ferai des croquis)
                <br/>
                · email: <a className="MailText" href="mailto:antoine.charras.pro@gmail.com">antoine.charras.pro@gmail.com</a>
                <br/>
                <br/>
                · Je réponds au plus vite, merci de faire preuve de patience et la politesse n'est pas de refus. Ne me relancez pas si je ne vous ai pas encore répondu, je vous réponds même en cas de refus de votre projet. Au plaisir de réaliser vos projets.
                <br/>
                <br/>
                NB : Je ne suis pas graphiste si vous souhaitez un logo ou des designs spécifiques sur votre site je vous conseille de passer voir une personne qui sera apte à faire ça en amont.
            </div>
            <div id="IntroContactContent" className="IntroContact">
                <br/>
                <strong>· Prendre RDV (mail type) ·</strong>
                <br/>
                <br/>
                · objet : projet - "type de site voulu" (exemple : projet - site vitrine)
                <br/>
                · description global de votre projet (si certains sites vous ont inspiré merci de me fournir des images/lien de ceux-ci, le cas échéant on en discutera ensemble et je vous ferai des croquis)
                <br/>
                · email: <a className="MailText" href="mailto:antoine.charras.pro@gmail.com">antoine.charras.pro@gmail.com</a>
                <br/>
                <br/>
                · Je réponds au plus vite, merci de faire preuve de patience et la politesse n'est pas de refus. Ne me relancez pas si je ne vous ai pas encore répondu, je vous réponds même en cas de refus de votre projet. Au plaisir de réaliser vos projets.
                <br/>
                <br/>
                NB : Je ne suis pas graphiste si vous souhaitez un logo ou des designs spécifiques sur votre site je vous conseille de passer voir une personne qui sera apte à faire ça en amont.
            </div>
        </p>
    )
}

function TextEN() {
    return (
        <p className="TextZone">
            <div id="IntroAboutContent" className="IntroAbout">
                <strong>· Infax ·</strong>
                <br/>
                <br/>
                Jeune entrepreneur lyonnais spécialisé dans le web, je travaille essentiellement en React (framework javascript) pour le coté frontend, en ce qui concerne du backend je code en Go (Golang).
                <br/>
                Ici, vous pourrez retrouver une grande partie de mes projets personnels pour vous faire une idée de ce que je peux faire et voir même être inspiré par l'un de ceux-ci. 
                <br/>
                Mais aussi, prendre rendez-vous si vous avez un projet à réaliser.
                <br/>
                Après la réception de votre mail, j'étudie votre demande et je vous fais un retour pour que l'on se mette d'accord sur la composition de votre projet.
                <br/>
            </div>
            <div id="IntroProjectContent" className="IntroProject">
                <br/>
                <strong>· Prendre RDV (mail type) ·</strong>
                <br/>
                <br/>
                · objet : projet - "type de site voulu" (exemple : projet - site vitrine)
                <br/>
                · description global de votre projet (si certains sites vous ont inspiré merci de me fournir des images/lien de ceux-ci, le cas échéant on en discutera ensemble et je vous ferai des croquis)
                <br/>
                · email: <a className="MailText" href="mailto:antoine.charras.pro@gmail.com">antoine.charras.pro@gmail.com</a>
                <br/>
                <br/>
                · Je réponds au plus vite, merci de faire preuve de patience et la politesse n'est pas de refus. Ne me relancez pas si je ne vous ai pas encore répondu, je vous réponds même en cas de refus de votre projet. Au plaisir de réaliser vos projets.
                <br/>
                <br/>
                NB : Je ne suis pas graphiste si vous souhaitez un logo ou des designs spécifiques sur votre site je vous conseille de passer voir une personne qui sera apte à faire ça en amont.
            </div>
            <div id="IntroContactContent" className="IntroContact">
                <br/>
                <strong>· Prendre RDV (mail type) ·</strong>
                <br/>
                <br/>
                · objet : projet - "type de site voulu" (exemple : projet - site vitrine)
                <br/>
                · description global de votre projet (si certains sites vous ont inspiré merci de me fournir des images/lien de ceux-ci, le cas échéant on en discutera ensemble et je vous ferai des croquis)
                <br/>
                · email: <a className="MailText" href="mailto:antoine.charras.pro@gmail.com">antoine.charras.pro@gmail.com</a>
                <br/>
                <br/>
                · Je réponds au plus vite, merci de faire preuve de patience et la politesse n'est pas de refus. Ne me relancez pas si je ne vous ai pas encore répondu, je vous réponds même en cas de refus de votre projet. Au plaisir de réaliser vos projets.
                <br/>
                <br/>
                NB : Je ne suis pas graphiste si vous souhaitez un logo ou des designs spécifiques sur votre site je vous conseille de passer voir une personne qui sera apte à faire ça en amont.
            </div>
        </p>
    )
}

export function Introduction() {
    const [cookies] = useCookies();

    $(document).ready(function() {
        $(".IntroAbout").on("mouseover", function() {
            $(".BtnAbout").css({"text-decoration":"underline", "text-underline-offset":"5px"});
            $(".BtnProject").removeAttr('style');
            $(".BtnContact").removeAttr('style');
        })
        $(".IntroProject").on("mouseover", function() {
            $(".BtnProject").css({"text-decoration":"underline", "text-underline-offset":"5px"});
            $(".BtnAbout").removeAttr('style');
            $(".BtnContact").removeAttr('style');
        })
        $(".IntroContact").on("mouseover", function() {
            $(".BtnContact").css({"text-decoration":"underline", "text-underline-offset":"5px"});
            $(".BtnProject").removeAttr('style');
            $(".BtnAbout").removeAttr('style');
        })
    });
    
    


    return (
        <div className="IntroPage">
            <div className="IntroText">
                {cookies.langage === "FR" ?
                    <TextFR />
                : 
                    <TextEN />
                }

            </div>
        </div>
    );
  }

