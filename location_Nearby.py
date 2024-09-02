import requests

def get_nearby_stores(latitude, longitude, radius=3000):  # radius in meters (10 km)
    api_key = 'AIzaSyDD-Dzdh9lTO2n3NG2Thj2RlY8jLKOpPk4'  # Replace with your API key
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={latitude},{longitude}&radius={radius}&key={api_key}"
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
latitude = 12.7664128  # Example latitude 
longitude = 80.0423936  # Example longitude
nearby_stores = get_nearby_stores(latitude, longitude)
for store in nearby_stores:
    print(f"Name: {store['name']}, Type: {store['types']}")