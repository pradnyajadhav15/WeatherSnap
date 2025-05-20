import { useState } from "react";
import SearchBox from './Searchbox';
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
            margin: "3rem auto",
            padding: "2.5rem 2rem",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3d1ec 100%)",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            transition: "all 0.3s ease-in-out"
        }}>
            <h2 style={{
                marginBottom: "1.5rem",
                color: "#1e3a8a",
                fontSize: "2.2rem",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.05)"
            }}>
                Weather Snap
            </h2>
            <div style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                borderRadius: "12px",
                background: "#ffffffdd",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}>
                <SearchBox updateInfo={updateInfo} />
            </div>
            <div style={{
                padding: "1.2rem",
                borderRadius: "12px",
                background: "#ffffffee",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)"
            }}>
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );
}
