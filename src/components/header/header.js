import React from 'react'
import './header.sass'
export default () => {
	return (
		<header>
			<div className="container">
				<img src={'./static/images/logo.svg'} className="logo" alt="logo" width="35px" />
			</div>
		</header>
	)
}