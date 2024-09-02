from flask import Flask, render_template, request, jsonify
from flask import redirect, url_for, send_from_directory
#from flask_cors import CORS, cross_origin  # Import CORS. Not working in PROD
import os

HOSTNAME = os.getenv('HOSTNAME', 'http://127.0.0.1:5000')
#HOSTNAME = os.getenv('HOSTNAME', 'https://www.localsellers.in')

# Function to validate the phone number
def validate_phone(phone_number):
    if len(phone_number) == 10 and phone_number.isdigit():
        return True
    else:
        return False
        
app = Flask(__name__)
#CORS(app)  # Enable CORS for all routes
app.config['STATIC_FOLDER'] = 'static'


# Endpoint for phone number validation & login
@app.route('/phone', methods=['POST'])  # Change to POST
def validate_phone_login():
    data = request.get_json()  # Get JSON data from the request
    phone_number = data.get('phone')
    print(phone_number)  # For debugging
    file_path = os.path.join('phone_numbers', f'{phone_number}.txt')
    os.makedirs('phone_numbers', exist_ok=True)  # Create the directory if it doesn't exist
    if validate_phone(phone_number): 
        print("Inside")
        # Check if the file exists
        if os.path.exists(file_path):
            print("In Inside")
            #if "Referer" in request.headers:
            #    return redirect(url_for('home'))  # Redirect to home.html
            #else:
            return jsonify({'message': 'E_user'}), 200  # 200 OK
        else:
            # Create the file for new users
            with open(file_path, 'w') as f:
                pass  # Create an empty file 

            #if "Referer" in request.headers:
            #    return redirect(url_for('users'))  # Redirect to users.html       
            #else:
            return jsonify({'message': 'N_user'}), 200  # 200 OK 
    else:
        return jsonify({'message': 'Invalid phone number'}), 400  # 400 Bad Request

# Endpoint for signup
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    phone_number = data.get('phone')
    signup_data = data.get('data')
    print(phone_number)
    print(signup_data)

    file_path = os.path.join('phone_numbers', f'{phone_number}.txt')
    if os.path.exists(file_path):
        with open(file_path, 'a') as f:
            f.write(f'\n{signup_data}')  # Append signup data to the file
        return jsonify({'message': 'Signup successful'}), 200 
    else:
        return jsonify({'message': 'Phone number not found'}), 400

@app.route('/')  # New route for index.html
def index():
    return render_template('index.html', HOSTNAME=HOSTNAME)

@app.route('/home')
def home():
    return render_template('home.html', HOSTNAME=HOSTNAME)  # Replace with your actual home.html

@app.route('/users')
def users():
    print("Antony Users redirect")
    return render_template('users.html', HOSTNAME=HOSTNAME)  # Replace with your actual users.html

@app.route('/api/location', methods=['POST'])
def handle_location_data():
    # Get the location data from the request body
    location_data = request.get_json()
    latitude = location_data['latitude']
    longitude = location_data['longitude']

    # Do something with the location data (e.g., store it in a database)
    print("Received location data:", latitude, longitude)

    # Send a success response
    return jsonify({'message': 'Location data received successfully'}), 200

@app.route('/phone_numbers/<path:filename>')
def serve_phone_numbers(filename):
    return send_from_directory('phone_numbers', filename + '.txt')

if __name__ == '__main__':
    app.run(debug=True)
