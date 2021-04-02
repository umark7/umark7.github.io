from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
#from send_mail import send_mail

app = Flask(__name__)

ENV = 'dev'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://your_password_here@localhost/finalProject'
else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Feedback(db.Model):
    __tablename__ = 'feedback'
    id = db.Column(db.Integer, primary_key=True)
    customer = db.Column(db.String(200), unique=True)
    student = db.Column(db.String(200))
    rating = db.Column(db.Integer)
    comments = db.Column(db.Text())

    def __init__(self, customer, student, rating, comments): #constructor in Python
        self.customer = customer
        self.student = student
        self.rating = rating
        self.comments = comments


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        customer = request.form['customer']
        student = request.form['student']
        rating = request.form['rating']
        comments = request.form['comments']
        print(customer, student, rating, comments)
        return render_template('success.html')
        if db.session.query(Feedback).filter(Feedback.customer == customer).count() == 0:
            data = Feedback(customer, student, rating, comments)
            db.session.add(data)
            db.session.commit()
            send_mail(customer, student, rating, comments)
        return render_template('index.html', message='You have already submitted feedback')


if __name__ == '__main__':
    app.run()