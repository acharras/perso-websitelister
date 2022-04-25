
import { withCookies } from 'react-cookie';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/home/home';
import './App.css';
import { useCookies } from "react-cookie";
import { useState, useEffect, useRef } from "react" 
import Background from './Background.mp4'

export const ip = window.location.hostname;
 


function Menu(data: any) {
  
	return (
    <>
    
			<Route exact path={"/"} component={Home} />
		</>
	)
}

function App() {
  
	const [cookies, setCookies] = useCookies(["langage"]);
	const [mounted, setMounted] = useState<boolean>(true);

  const vid = document.getElementById("video") as HTMLVideoElement | null;
    if (vid)
      vid.playbackRate = 0.9;

	useEffect(() => {
        let mounted = true;
        if (mounted) {
          if (cookies.langage)
            setCookies("langage", cookies.langage, { path : "/" });
          else
            setCookies("langage", "EN", { path : "/" });
        }
        const interval = setInterval(() => {
            let mounted = true;
      
            if (mounted) { }
      
            return () => { mounted = false }
          }, 5000);
          return () => {
            clearInterval(interval);
            setMounted(false);
          };
        // eslint-disable-next-line
      }, [mounted]);
	

	return (
    <>
    <div className="wrap-video-bg">
      <video autoPlay loop muted  id='video'>
        <source src={Background} type='video/mp4' />
      </video>
    </div>
		<Router>
			<Switch>
				<Menu />
			</Switch>
		</Router>
    </>
	);
}

export default withCookies(App);
