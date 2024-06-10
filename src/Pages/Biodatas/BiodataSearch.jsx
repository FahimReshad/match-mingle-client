/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const BiodataSearch = ({ setSearchResults}) => {
    const axiosPublic = useAxiosPublic();
    const [age, setAge] = useState('');
    const [bioDataType, setBioDataType] = useState('');
    const [permanentDivision, setPermanentDivision] = useState('');


    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
        setBioDataType(event.target.value);
    };

    const handleDivisionChange = (event) => {
        setPermanentDivision(event.target.value);
    };

    const handleSearch = () => {
        axiosPublic.get('/biodata', {
            params: {
                age,
                bioDataType,
                permanentDivision
            }
        }).then((response) => {
            setSearchResults(response.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    };



    return (
        <div>
        <Box sx={{ minWidth: 200, marginBottom: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="age-label">Age</InputLabel>
                <Select
                    labelId="age-label"
                    id="age"
                    value={age}
                    label="Age"
                    onChange={handleAgeChange}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="10-20">10-20</MenuItem>
                    <MenuItem value="21-30">21-30</MenuItem>
                    <MenuItem value="31-40">31-40</MenuItem>
                    {/* Add more age ranges as needed */}
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, marginBottom: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="bioDataType-label">Gender</InputLabel>
                <Select
                    labelId="bioDataType-label"
                    id="bioDataType"
                    value={bioDataType}
                    label="Gender"
                    onChange={handleGenderChange}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, marginBottom: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="permanentDivision-label">Division</InputLabel>
                <Select
                    labelId="permanentDivision-label"
                    id="permanentDivision"
                    value={permanentDivision}
                    label="Division"
                    onChange={handleDivisionChange}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Dhaka">Dhaka</MenuItem>
                    <MenuItem value="Chattagram">Chattagram</MenuItem>
                    <MenuItem value="Rangpur">Rangpur</MenuItem>
                    <MenuItem value="Barisal">Barisal</MenuItem>
                    <MenuItem value="Khulna">Khulna</MenuItem>
                    <MenuItem value="Maymansign">Maymansign</MenuItem>
                    <MenuItem value="Sylhet">Sylhet</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <button
            onClick={handleSearch}
            className="group relative flex w-36 items-center rounded-r-lg border-2 border-l-0 border-red-800 p-3 text-black"
        >
            <span>Search</span>
            <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-red-700 duration-300 group-hover:w-5/6">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                        <path
                            d="M4 12H20M20 12L14 6M20 12L14 18"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </g>
                </svg>
            </span>
        </button>
        {/* <div>
            {searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{JSON.stringify(result)}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div> */}
    </div>
    );
};

export default BiodataSearch;