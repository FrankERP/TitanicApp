import pickle
import numpy as np
import pandas as pd

iris = pd.read_csv("Iris.csv")
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier


X = np.array(iris.drop(['Species', 'Id'], 1))
y = np.array(iris['Species'])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

algorithm = LogisticRegression()
algorithm.fit(X_train, y_train)

pickle.dump(algorithm, open('model.pkl', 'wb'))
model = pickle.load(open('model.pkl', 'rb'))