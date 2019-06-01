from flask import Flask, render_template, request
from pusher import Pusher

app = Flask(__name__)

    # configure pusher object
pusher = Pusher(
    app_id='793465',
    key='0361d036ce45f4e6365b',
    secret='5c580a31d0fa02c6a662',
    cluster='ap2',
    ssl=True)

@app.route('/')
def index():
        return render_template('index.html')

@app.route('/dashboard')
def dashboard():
        return render_template('dashboard.html')

@app.route('/disbursement', methods=['POST'])
def disbursement():
        data = request.form
        pusher.trigger(u'disbursement', u'country', {
            u'amount': data['amount']
        })
        return "amount logged"

@app.route('/description', methods=['POST'])
def description():
        data = request.form
        pusher.trigger(u'description', u'add', {
            u'projecttitle': data['projecttitle'],
            u'description': data['description']
        })
        return "description logged"

@app.route('/projects', methods=['POST'])
def projects():
        data = request.form
        pusher.trigger(u'', u'add', {
            u'projectref': data['projectref'],
            u'country': data['country'],
            u'implementingoffice': data['implementingoffice'],
            u'duration': data['duration'],
            u'grantamount': data['grantamount'],
        })
        return "project added"

if __name__ == '__main__':
        app.run(debug=True)