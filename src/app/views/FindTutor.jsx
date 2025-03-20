'use client'

import React from 'react'
import { MenuItem, Select, Button, TextField, Slider, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";


const tutors = [
    {
        name: "Dr. Sarah Johnson",
        subjects: "Mathematics, Physics",
        degree: "PhD Mathematics",
        location: "Sydney (Online)",
        experience: "PhD in Mathematics with 10+ years teaching experience",
        price: 45,
        rating: 4.8,
        reviews: 124,
    },
    {
        name: "James Wilson",
        subjects: "Mathematics, Statistics",
        degree: "MSc Applied Mathematics",
        location: "Melbourne (Both)",
        experience: "Specializing in high school and undergraduate mathematics",
        price: 40,
        rating: 4.9,
        reviews: 89,
    },
    {
        name: "Priya Sharma",
        subjects: "Mathematics, Engineering",
        degree: "BS Engineering",
        location: "Brisbane (Online)",
        experience: "Expert in calculus and algebra",
        price: 38,
        rating: 4.7,
        reviews: 62,
    },
    {
        name: "Michael Chang",
        subjects: "Mathematics, Computer Science",
        degree: "MS Computer Science",
        location: "Sydney (Both)",
        experience: "Expert in discrete math, algorithms, computational thinking",
        price: 50,
        rating: 5.0,
        reviews: 41,
    },
];


function FindTutor() {

    const [subject, setSubject] = useState("");
    const [location, setLocation] = useState("");

    const [priceRange, setPriceRange] = useState([20, 100]);
    const [sort, setSort] = useState("Relevance");


    return (
        <>    <div className="bg-gradient-to-b from-blue-600 to-blue-400 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">Find Your Perfect Tutor</h2>
            <p className="mt-2 text-gray-200">
                Browse through our qualified tutors and find the right match for your learning goals
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                {/* Subject Select */}
                <Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    displayEmpty
                    className="bg-white rounded-lg"
                    sx={{ minWidth: 200 }}
                >
                    <MenuItem value="" disabled>Select Subject</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Science">Science</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Programming">Programming</MenuItem>
                    <MenuItem value="Languages">Languages</MenuItem>
                </Select>

                {/* Location Input */}
                <TextField
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location or Online"
                    variant="outlined"
                    className="bg-white rounded-lg"
                    sx={{ minWidth: 250 }}
                />

                {/* Search Button */}
                <Button variant="contained" color="primary" className="rounded-lg">
                    Search
                </Button>



            </div>
        </div>

        
            {/* section two */}
            <div className="flex max-w-6xl mx-auto p-6 gap-6">
                {/* Sidebar Filters */}
                <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg">Subject</h3>
                    {["Mathematics", "Science", "English", "History", "Programming", "Languages"].map((subject) => (
                        <FormControlLabel key={subject} control={<Checkbox />} label={subject} />
                    ))}

                    <h3 className="font-bold text-lg mt-4">Price Range</h3>
                    <Slider
                        value={priceRange}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        min={10}
                        max={150}
                    />

                    <h3 className="font-bold text-lg mt-4">Availability</h3>
                    {["Weekdays", "Weekends", "Evenings", "Mornings"].map((time) => (
                        <FormControlLabel key={time} control={<Checkbox />} label={time} />
                    ))}

                    <h3 className="font-bold text-lg mt-4">Teaching Mode</h3>
                    {["In-person", "Online", "Both"].map((mode) => (
                        <FormControlLabel key={mode} control={<Checkbox />} label={mode} />
                    ))}

                    <h3 className="font-bold text-lg mt-4">Rating</h3>
                    {[5, 4, 3].map((stars) => (
                        <FormControlLabel key={stars} control={<Checkbox />} label={`${stars}.0+`} />
                    ))}

                    <button className="text-blue-500 mt-2 text-sm underline">Clear all filters</button>
                </div>

                {/* Tutor Listings */}
                <div className="w-3/4">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-600">
                            <span className="font-semibold">{tutors.length} tutors</span> found for Mathematics
                        </p>
                        <Select value={sort} onChange={(e) => setSort(e.target.value)} size="small">
                            <MenuItem value="Relevance">Relevance</MenuItem>
                            <MenuItem value="Price">Price</MenuItem>
                            <MenuItem value="Rating">Rating</MenuItem>
                        </Select>
                    </div>

                    {tutors.map((tutor) => (
                        <div key={tutor.name} className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{tutor.name}</h3>
                                <p className="text-gray-600">{tutor.subjects}</p>
                                <p className="text-gray-500">{tutor.degree} • {tutor.location}</p>
                                <p className="text-sm mt-2">{tutor.experience}</p>
                                <p className="font-semibold mt-2">${tutor.price}/hr</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-500 flex items-center gap-1">
                                    {Array(Math.floor(tutor.rating)).fill().map((_, i) => <StarIcon key={i} fontSize="small" />)}
                                    {tutor.rating % 1 !== 0 && <StarHalfIcon fontSize="small" />}
                                </span>
                                <span className="text-gray-500 ml-1 text-sm">({tutor.reviews})</span>
                            </div>
                            <Button variant="contained" color="primary">View Profile</Button>
                        </div>
                    ))}

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        {[1, 2, 3, 4, 5].map((page) => (
                            <Button key={page} className="mx-1" variant={page === 1 ? "contained" : "outlined"}>
                                {page}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

        </>

    );
}


export default FindTutor