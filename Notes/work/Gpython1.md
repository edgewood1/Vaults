# Gpython1

# Gpython1

poogle topics

Dance gumbo


PRPL pattern
Lazy loading images
BDD 101
Continous delivery vs continous integration
Deployment pipelines in software engineering
Test automation university
Truth tables

Mysterious deep space object sending signals to earth
Tracy twyman

Phaedra’s dialogues
Spinoza a materialist
Substance theory
Nominalista
Properties (STANDFORd)
ABSTRACT vs concrete
Abstract objects standford
Essence and existence
Aristotles metaphysics
Aristolean categories
Substance and essence
Botany of teh dead
Noumenon
Scott Elliot hicks
Form v matter
Don Carlin historian
Steiner trauma esthetic
Heidegger a monist
Gaia hypothesis
Human self-reflexivity
Semiotics
Signs symbols and animal communication
What is a number rethinking derruidas concept of infinity
Witches werewolves and fairies - book

Origins of prokaryotes
Plasma


Careers terradota

1625 progression
Skillet lickers
Groove

Jobs at well

Wings of desire - movie
# ip3 install flask

create server.py: 

from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route(‘/‘)
def home(): 
	return render_template(‘index.html’, author = “mel”)

@app.route(‘/api‘, methods=[‘GET’, ‘POST’])
def home(): 
	if (request.method === ‘POST’)
	some_json = request.get_json()
	return jsonify({“about”:  some_json}), 201
	else: 
	return jsonify({“hi”: d})

@app.route(‘/multi/<int:num>”, methods=[‘GET’])
def get.multiply10(num): 
	return jsonify(‘result’: num*10)


if __name__ == ‘__main__’: 	
	app.run()

create index.html

<div> I am {{ author}} </div>

create virtual server

python -m venv  v-env-name

source venv/bin/activate
√

python3 server.py
