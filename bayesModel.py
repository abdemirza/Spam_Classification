import joblib
import sys

model=joblib.load('spam_classifier.pkl')
email=sys.argv[1]
prediction=model.predict([email])[0]

if prediction==1:
    print('1')
else:
    print('0')