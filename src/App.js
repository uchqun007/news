import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, Main, NotFound } from './component';
import { About, Blog, Contact, Popular } from './page';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/popular' element={<Popular />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
