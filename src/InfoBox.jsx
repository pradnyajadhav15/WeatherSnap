import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const HOT_URL = "https://wallpapercave.com/wp/2khKQyP.jpg";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const weatherImage = info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;
    const weatherIcon = info.humidity > 80 ? <ThunderstormIcon fontSize="large" sx={{ color: "#1976d2" }} /> 
                     : info.temp > 15 ? <WbSunnyIcon fontSize="large" sx={{ color: "#ff9800" }} /> 
                     : <AcUnitIcon fontSize="large" sx={{ color: "#00bcd4" }} />;

    return (
        <div className="InfoBox" style={{ marginTop: "2rem" }}>
            <Card sx={{ 
                maxWidth: 345,
                margin: "0 auto",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-4px)" }
            }}>
                <CardMedia
                    sx={{ 
                        height: 160,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    image={weatherImage}
                    title="Weather Image"
                />
                <CardContent sx={{ 
                    padding: "1.5rem",
                    background: "linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%)"
                }}>
                    <div style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        marginBottom: "1rem"
                    }}>
                        {weatherIcon}
                    </div>
                    
                    <Typography gutterBottom variant="h5" component="div" sx={{ 
                        fontWeight: 600,
                        color: "#2c3e50",
                        textAlign: "center",
                        marginBottom: "1rem"
                    }}>
                        {info.city}
                    </Typography>

                    <div style={{ 
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.5rem 1rem",
                        marginBottom: "1rem"
                    }}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            🌡️ Temp: <strong>{info.temp}°C</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            💧 Humidity: <strong>{info.humidity}%</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            ❄️ Min: <strong>{info.tempMin}°C</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            🔥 Max: <strong>{info.tempMax}°C</strong>
                        </Typography>
                    </div>

                    <Typography variant="body2" sx={{ 
                        color: '#555',
                        fontStyle: "italic",
                        textAlign: "center",
                        paddingTop: "0.5rem",
                        borderTop: "1px dashed #eee"
                    }}>
                        Feels like {info.feelsLike}°C | {info.weather}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}