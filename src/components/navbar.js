import {
	IconButton,Flex,Container,Link,
	Menu,MenuButton,MenuList,MenuItem,
} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
import {Link as RouteLink} from 'react-router-dom';
import Logo from './logo.js';
import ThemeButton from './themeButton.js';
import {HamburgerIcon} from '@chakra-ui/icons';

function SmallNavbar(){
	return (
		<Flex
		justifyContent="space-between"
		alignItems="center"
		>
		<Logo/>
		<Flex display="flex" alignItems="center" gap="10px">
		<ThemeButton/>
		<Menu>
		<MenuButton 
		as={IconButton} icon={<HamburgerIcon/>}
		border="1px" borderColor="gray"
		/>
		<MenuList>
		<MenuItem><Link as={RouteLink} to="/">About</Link></MenuItem>
		<MenuItem><Link as={RouteLink} to="/posts">Posts</Link></MenuItem>
		<MenuItem><Link as={RouteLink} to="/contact">Contact</Link></MenuItem>
		</MenuList>
		</Menu>
		</Flex>
		</Flex>
	);
}
function BigNavbar(){
	return (
		<Flex
		justifyContent="space-between"
		alignItems="center"
		>
		<Logo/>
		<ThemeButton/>
		</Flex>
	);
}

function Navbar(){
	const [width,setWidth] = useState(window.innerWidth);
	useEffect(function(){
		function handleWindowResize(){
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize',handleWindowResize);
		return(function(){
			window.removeEventListener('resize',handleWindowResize);
		});
	});
	return (
		<Container maxW="1000px">
		{width >= 1000 ? <BigNavbar/> : <SmallNavbar/>}
		</Container>
	);
}

export default Navbar;
