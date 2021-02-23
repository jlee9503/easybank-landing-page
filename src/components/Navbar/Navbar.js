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
} from "./Navbar.element";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<>
			<IconContext.Provider value={{ size: 26 }}>
				<NavContainer>
					<Overlay />
					<Link to="/">
						<NavLogo />
					</Link>

					<MobileToggle onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MobileToggle>

					<NavMenu onClick={handleClick}>
						<NavItem>
							<NavLinks to="/">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/">Home</NavLinks>
						</NavItem>
					</NavMenu>
				</NavContainer>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
