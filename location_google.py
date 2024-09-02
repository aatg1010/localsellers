import requests

def get_place_name(latitude, longitude):
    api_key = 'AIzaSyDD-Dzdh9lTO2n3NG2Thj2RlY8jLKOpPk4'  # Replace with your API key
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={latitude},{longitude}&key={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['status'] == 'OK':
            place_name = data['results'][0]['formatted_address']
            return place_name
        else:
            return "Geocoding failed"
    else:
        return "API request failed"

# Example usage:
latitude = 12.7664128
longitude = 80.0423936
place_name = get_place_name(latitude, longitude)
print(place_name)