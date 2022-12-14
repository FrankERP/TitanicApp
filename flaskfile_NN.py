import numpy as np
import pickle
import pandas as pd

from flask import Flask, render_template, request

app = Flask(__name__)
ageCat = pickle.load(open('ageCat.pkl', 'rb'))
fareCat = pickle.load(open('fareCat.pkl', 'rb'))
knn = pickle.load(open('knn.pkl', 'rb'))
nn = pickle.load(open('NN.pkl', 'rb'))

idx = np.argsort(ageCat.cluster_centers_.sum(axis=1))
lut = np.zeros_like(idx)
lut[idx] = np.arange(5)
def sortAge(X):
  tempX = X.copy()
  for r, i in zip(lut,range(5)):
    tempX[X == i] = r
  return tempX

idx = np.argsort(fareCat.cluster_centers_.sum(axis=1))
lut2 = np.zeros_like(idx)
lut2[idx] = np.arange(5)

def sortFare(X):
  tempX = X.copy()
  for r, i in zip(lut2,range(5)):
    tempX[X == i] = r
  return tempX

@app.route('/')
def home():
    return 'HOME'

@app.route('/predict',methods=['POST'])
def predict():
    resp = request.get_json().values()
    str_features = [str(x) for x in resp]
    Sex = int(str_features[0])
    Age = pd.DataFrame(np.array([[float(str_features[2])]],dtype='float')).to_numpy(dtype=np.float32).reshape(-1,1)
    Age = int(sortFare(ageCat.predict(Age))[0])
    Pclass = int(knn.predict([[Age,float(str_features[3])]])[0])
    Fare = pd.DataFrame(np.array([[float(str_features[3])]],dtype='float')).to_numpy(dtype=np.float32).reshape(-1,1)
    Fare = int(sortFare(fareCat.predict(Fare))[0])
    Title = int(str_features[1])
    Relatives = int(str_features[4])
    final_features = np.array([Pclass,Sex,Relatives,Title]).reshape(1,-1)
    prediction = nn.predict(final_features)
    return 'Survived' if str(prediction[0]) =='1' else 'Dead'

if __name__ == "__main__":
    app.run('192.168.0.21')
