import React, { useState } from 'react'
import logo from '../assets/logo.jpg';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Container, styled, Box } from "@mui/material";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.length > 0){
            alert(searchTerm);
        }
        else {
            setErrorMessage("Invalid search term");
            alert(errorMessage);
        }
    }
    const StyledImg = styled('img')({});
    return (

        <Container 
            maxWidth="md" sx={{ mt: 10 }}
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                <StyledImg
                    src={logo}
                    alt='logo'
                    sx={{
                        width: 600,
                    }}
                justifyContent="center"
                />
            </Box>

            <TextField
                id='search'
                className='search'
                onInput={(e) => {
                    setSearchTerm(e.target.value);
                }}
                sx={{ width: 600 }}
                label="Search Jobs, Courses, Certificates... "
                variant="outlined"
                placeholder="Search Jobs, Courses, Certificates... "
                value={searchTerm}
                helperText={errorMessage}
            >
            </TextField>
            <IconButton type="button" aria-label="search" onClick={handleSearch}>
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </Container>


    )
}

export default SearchBar;
