import mapbox

def get_place_name(latitude, longitude):
    mapbox.access_token = 'pypi-AgEIcHlwaS5vcmcCJDdmMDhiN2RiLTZlZTItNDQ4ZC04YWQyLWU3ZDc5ZmI5YmM4YwACKlszLCI1MGU1NGVlYi05OTJkLTQ3NDYtYTAxMC02OTNmN2NjYWEzNDAiXQAABiDIS4Uu-A6gDh8TORCYIu9_N-jfLr0R6UZ3jiu-NMZB1Q'  # Replace with your API key
    geocoder = mapbox.Geocoder()
    response = geocoder.reverse_geocode(coordinates=(longitude, latitude))
    if response.status_code == 200:
        features = response.json()['features']
        if features:
            place_name = features[0]['place_name']
            return place_name
        else:
            return "Location not found"
    else:
        return "API request failed"

# Example usage:
latitude = 40.7128
longitude = -74.0060
place_name = get_place_name(latitude, longitude)
print(place_name)