import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../globalStyle";
import {
	FooterContainer,
	FooterContent,
	SocialIcons,
	Logo,
	Icon,
	LinkStyle,
	ColumnLeft,
	ColumnRight,
	Others,
	Copyright,
	Attribution,
} from "./Footer.elements";

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterContent>
					<Link to="/">
						<Logo
							src={`${process.env.PUBLIC_URL + "images/logo-footer.svg"}`}
						/>
					</Link>

					<SocialIcons>
						<Link to="/">
							<Icon
								src={`${process.env.PUBLIC_URL + "images/icon-facebook.svg"}`}
							/>
						</Link>
						<Link to="/">
							<Icon
								src={`${process.env.PUBLIC_URL + "images/icon-youtube.svg"}`}
							/>
						</Link>
						<Link to="/">
							<Icon
								src={`${process.env.PUBLIC_URL + "images/icon-twitter.svg"}`}
							/>
						</Link>
						<Link to="/">
							<Icon
								src={`${process.env.PUBLIC_URL + "images/icon-instagram.svg"}`}
							/>
						</Link>
						<Link to="/">
							<Icon
								src={`${process.env.PUBLIC_URL + "images/icon-pinterest.svg"}`}
							/>
						</Link>
					</SocialIcons>

					<ColumnLeft>
						<LinkStyle to="/">About Us</LinkStyle>
						<LinkStyle to="/">Contact</LinkStyle>
						<LinkStyle to="/">Blog</LinkStyle>
					</ColumnLeft>
					<ColumnRight>
						<LinkStyle to="/">Careers</LinkStyle>
						<LinkStyle to="/">Support</LinkStyle>
						<LinkStyle to="/">Privacy Policy</LinkStyle>
					</ColumnRight>

					<Others>
						<Button style={{ marginTop: "30px" }}>Request Invite</Button>
						<Copyright>© Easybank. All Rights Reserved</Copyright>
						<Attribution>
							Challenge by Frontend Mentor. Coded by Jungsu Lee.
						</Attribution>
					</Others>
				</FooterContent>
			</FooterContainer>
		</>
	);
};

export default Footer;
