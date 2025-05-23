import requests

def fetch_weather(lat, lon, lang, api_key):
    url = f"https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&lang={lang}&appid={api_key}"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

# Example usage:
if __name__ == "__main__":
    # Replace with your actual API key and desired parameters
    API_KEY = "d08dd0e5192a7d5fe1888038bac048c7"
    LATITUDE = 40.7128
    LONGITUDE = -74.0060
    LANGUAGE = "en"

    weather_data = fetch_weather(LATITUDE, LONGITUDE, LANGUAGE, API_KEY)
    print(weather_data)