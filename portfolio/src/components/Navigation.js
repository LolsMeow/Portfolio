import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from "../resume/Jiaming_Zheng_Resume.pdf";
class Navigation extends React.Component {
    render() {
        return (
        <Container fluid>
            <Navbar
            expand="lg"
            variant="dark"
            fixed="top"
            style={{ backgroundColor: "#111111" }}
            >
            <Navbar.Brand href="https://github.com/LolsMeow" target="_blank">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                viewBox="0 0 16 16"
                style={{ marginLeft: "20px" }}
                >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: "10px" }}/>
            <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
                style={{ marginRight: "20px", marginLeft: "10px" }}
            >
                <Nav.Link className = "link" href="#home">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    data-supported-dps="24x24" 
                    fill="white" 
                    width="24" 
                    height="24" 
                    focusable="false">
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z">
                    </path>
                    </svg>
                    <span className = "text">  Home</span> 
                </Nav.Link>
                <Nav.Link className = "link" href="#projects">
                    <svg 
                    fill="white" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 16 16" 
                    version="1.1" 
                    data-view-component="true" 
                    >
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
                    </path>
                    </svg>
                    <span className = "text">  Projects</span> 
                </Nav.Link>
                <Nav.Link className = "link"  href="https://www.linkedin.com/in/jiaming-zheng-0bb609165/">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    data-supported-dps="24x24" 
                    fill="white" 
                    width="24" height="24" 
                    focusable="false"
                >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                    </path>
                </svg>
                <span className = "text">  LinkedIn</span> 
                </Nav.Link>
                <Nav.Link className = "link" href={resume}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    focusable="false" role="img" 
                    fill="white" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    >
                    <path fill-rule="evenodd" d="M14.286 2H4.57a.558.558 0 00-.57.556v18.888c0 .312.251.556.571.556H19.43c.32 0 .571-.244.571-.556V7.556L14.286 2zM7 11.75c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25h-9.5a.25.25 0 00-.25.25v1.5zM7.25 17a.25.25 0 01-.25-.25v-1.5a.25.25 0 01.25-.25h7.5a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25h-7.5z" clip-rule="evenodd">
                    </path>
                    </svg>
                    <span className = "text">  Resume</span> 
                </Nav.Link>
            </Navbar.Collapse>
            </Navbar>
        </Container>
        );
  }
}
export default Navigation;