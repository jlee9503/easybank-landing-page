import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import {
	NavContainer,
	NavLogo,
	MobileToggle,
	NavMenu,
	NavItem,
	NavLinks,
	Overlay,
	NavButtonDesktop,
	NavButtonMobile,
} from "./Navbar.element";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const showButton = () => {
		if (window.innerWidth < 930) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener("resize", showButton);

	return (
		<>
			<IconContext.Provider value={{ size: 20 }}>
				<NavContainer>
					<Overlay onClick={handleClick} click={click} />
					<Link style={{ height: "20px" }} to="/">
						<NavLogo />
					</Link>

					<MobileToggle onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MobileToggle>

					<NavMenu onClick={handleClick} click={click}>
						<NavItem>
							<NavLinks to="/">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/contact">Contact</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/blog">Blog</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/careers">Careers</NavLinks>
						</NavItem>
						{button ? null : (
							<NavItem>
								<NavButtonMobile>Sign in</NavButtonMobile>
							</NavItem>
						)}
					</NavMenu>
					{button ? <NavButtonDesktop>Sign in</NavButtonDesktop> : null}
				</NavContainer>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
