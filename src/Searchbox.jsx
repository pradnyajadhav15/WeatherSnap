import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0dc464f2da7987e331565d9e0a914514";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                setError(true);
                return null;
            }

            setError(false);
            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(true);
            return null;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity("");
    };

    return (
        <div className='SearchBox' style={{ margin: "2rem 0" }}>
            <form onSubmit={handleSubmit} style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                gap: "1rem"
            }}>
                <TextField 
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#3f51b5" },
                            "&:hover fieldset": { borderColor: "#303f9f" }
                        }
                    }}
                />
                <Button 
                    variant="contained" 
                    type="submit"
                    sx={{
                        backgroundColor: "#3f51b5",
                        padding: "0.5rem 2rem",
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#303f9f" }
                    }}
                >
                    Search
                </Button>
                {error && (
                    <p style={{ 
                        color: "#d32f2f", 
                        marginTop: "0.5rem",
                        fontWeight: "500"
                    }}>
                        No such place exists!
                    </p>
                )}
            </form>
        </div>
    );
}