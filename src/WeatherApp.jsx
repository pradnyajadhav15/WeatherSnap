import { useState } from "react";
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 auto",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <h2 style={{
                marginBottom: "1.5rem",
                color: "#2c3e50",
                fontSize: "2rem",
                fontWeight: "600",
                letterSpacing: "-0.5px"
            }}>Weather Snap</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}