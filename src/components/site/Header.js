import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className='header'>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/Dhowell714/ClickNCook-Client'>
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;