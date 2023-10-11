from flask import Flask, render_template
import secrets

app = Flask(__name__)
# Generate a random secret key
secret_key = secrets.token_hex(16)

# Set the secret key for the Flask app
app.secret_key = secret_key


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
