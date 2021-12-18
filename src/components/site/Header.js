// import {
//     MDBNavbar,
//     Nav,
//     NavItem,
//     NavLink
// } from 'reactstrap';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink
} from 'mdb-react-ui-kit';

const Header = () => {
    return(
        <header>
            <MDBNavbar className='header'>
                <MDBNavbarNav className='ml-auto' navbar>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='https://github.com/Dhowell714/ClickNCook-Client'>
                            Github
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBNavbar>
        </header>
    );
};

export default Header;