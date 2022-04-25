import "./pannel.css"
import { useCookies } from "react-cookie";
import $ from "jquery"

export function Pannel() {
    
    const [cookies, setCookies] = useCookies();
    
    function handleCookies(langage: any) {
        setCookies("langage", langage, { path: "/" });
    }

    function handleAbout() {
        if (document.getElementById("IntroAboutContent") !== null)
            document.getElementById("IntroAboutContent")?.scrollIntoView({ behavior: "smooth" });
    }

    function handleProject() {
        if (document.getElementById("IntroProjectContent") !== null)
            document.getElementById("IntroProjectContent")?.scrollIntoView({ behavior: "smooth" });
    }

    function handleContact() {
        if (document.getElementById("IntroContactContent") !== null)
            document.getElementById("IntroContactContent")?.scrollIntoView({ behavior: "smooth" });
    }

    $(document).ready(function() {
        $(".About").on("click", function() {
            $(".About").css({ "text-decoration":"underline", "text-underline-offset":"5px", "text-decoration-color":"purple"});
            $(".Project").removeAttr('style');
            $(".Contact").removeAttr('style');
        })
        $(".Project").on("click", function() {
            $(".Project").css({"text-decoration":"underline", "text-underline-offset":"5px"});
            $(".About").removeAttr('style');
            $(".Contact").removeAttr('style');
        })
        $(".Contact").on("click", function() {
            $(".Contact").css({"text-decoration":"underline", "text-underline-offset":"5px"});
            $(".Project").removeAttr('style');
            $(".About").removeAttr('style');
        })
    });

    return (
      <div className="PannelMain">
            <div>
                <div>
                    <br />
                    <button className="BtnStyle" /><button className="BtnStyle" /><button className="BtnStyle" />
                    <br />
                    <br />
                </div>
                <div className="ChooseLanguage">
                    <button className="NewLangage" onClick={() => { handleCookies("FR")}}>FR</button>
                     | 
                    <button className="NewLangage" onClick={() => { handleCookies("EN")}}>EN</button>
                </div>
            </div>
            <div className="ButtonPannel">
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div><button className="About" onClick={handleAbout}>ABOUT</button></div>
                <div>
                    <br />
                    <button className="BtnStyle" /><button className="BtnStyle" /><button className="BtnStyle" />
                    <br />
                    <br />
                </div>
                <div><button className="Project" onClick={handleProject}>PROJECT</button></div>
                <div>
                    <br />
                    <button className="BtnStyle" /><button className="BtnStyle" /><button className="BtnStyle" />
                    <br />
                    <br />
                </div>
                <div><button className="Contact" onClick={handleContact}>CONTACT</button></div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <div>
                <div>
                Follow me
                </div>
                <div>
                <button className="BtnStyle" /><button className="BtnStyle" /><button className="BtnStyle" />
                </div>
                <p><strong>© 2022, Antoine Charras</strong> · ALL RIGHTS RESERVED
                <br />
                <br />
                Website made by Antoine Charras.
                </p>
            </div>
      </div>
    );
  }
