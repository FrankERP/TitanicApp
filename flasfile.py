import numpy as np
import pickle
from flask import Flask, render_template, request

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/')
def home():
    return  'HOME'#//render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    
    #Option 1
    #response = request.get_json()
    # val1 = response['sepalLength']
    # val2 = response['sepalWidth']
    # val3 = response['petalLength']
    # val4 = response['petalWidth']
    # int_values = [val1,val2,val3,val4]

    #option 2
    response = request.get_json().values()
    int_values = [float(x) for x in response]
    final_features = np.array(int_values).reshape(1,-1)
    prediction = model.predict(final_features)
    print(prediction[0])
    return str(prediction[0]) #render_template('index.html', prediction_text='Predicted Category {}'.format(prediction))


if __name__ == "__main__":
    app.run('10.48.184.48')