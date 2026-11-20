import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { createContext } from "preact";
import '@fontsource-variable/cairo';
import Home from './pages/Home/index.js';
import NotFound from './pages/_404.js';
import Heder from './components/heder.js';
import './style.css';
import { useState } from 'preact/hooks';
export const Theame: any = createContext('')
export function App() {
	const [bg, setBg] = useState(true)

	return (
		<Theame.Provider value={{ bg, setBg }}>
			<LocationProvider>
				<section className={`${bg ? 'bg-white text-black' : "bg-black text-white"} min-h-screen`}>
					<Router>
						<Route path="/" component={Home} />
						<Route path='/log' component={Log} />
						<Route default component={NotFound} />
					</Router>
				</section>
			</LocationProvider>
		</Theame.Provider>
	);
}
function Log() {
	return <><Heder/><a href='/'>home</a><br /><h2>welcom log</h2></>
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.body);
}

export async function prerender(data: any) {
	return await ssr(<App {...data} />);
}
