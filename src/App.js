import React from 'react';
// import { ReactComponent as Logo } from './static/images/ava.svg';
import './App.sass';
import Header from './components/header/header'

function App() {
	return (
		<div className="App">
			<Header />
			<main className="App-main">
				<div className="container">

					<img src={'./static/images/ava.svg'} className="App-logo" alt="ava" />
					<h1>tishinskiy.ru</h1>
					<p>Сайт про меня, для меня, для демонстрации того что я хотел, и что получилось, или не получилсь.<br/>
					Задуман как блог, совмещённый с портфолио и резюме.</p>
					<article>
						<h2>Хотелки по проекту (начало)</h2>
						<ul className="list list__centered">
							<li>Запилить проект на react.js. Стартую используя <a href="https://create-react-app.dev/" target="_blank" rel="noopener noreferrer">Create&nbsp;React&nbsp;App</a></li>
							<li>Пилить проект используя <b>typescript</b> с целью его познания путем применения.</li>
							<li>Реализовать серверный рендеринг (SSR).</li>
							<li>Познакомиться с PWA.</li>
							<li>Реализовати и прикрутить API.</li>
							<li>Поиграться с сервером (Nginx).</li>
							<li>Плотнее познакомиться с SEO.</li>
						</ul>
					</article>
				</div>
			</main>
			<footer>
				<div className="container">
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
						>
						Learn React
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
