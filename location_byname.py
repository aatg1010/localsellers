import requests

def get_nearby_places_by_location(location_name, radius=3000):
    api_key = 'AIzaSyDD-Dzdh9lTO2n3NG2Thj2RlY8jLKOpPk4'  # Replace with your API key
    url = f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={location_name}&radius={radius}&type=hospital&key={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['status'] == 'OK':
            places = data['results']
            return places
        else:
            return "Places API request failed"
    else:
        return "API request failed"

# Example usage:
location_name = "Medavakam, Chennai"
nearby_restaurants = get_nearby_places_by_location(location_name)
for restaurant in nearby_restaurants:
    print(f"Name: {restaurant['name']}, Type: {restaurant['types']}")