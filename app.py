from flask import Flask, jsonify

app = Flask(__name__)

app.config["DEBUG"] = True


# base route
@app.route('/', methods=['GET'])
def inventory_home():
    return jsonify('home')



# Dashboard items

"""
Inventory
"""

# Add item
@app.route('/add_item', methods=['POST'])
def add_item():
    item = None # replace with function to create item
    return item


# delete item
@app.route('/delete_time', methods=['POST'])
def delete_item():
    item = None # replace with function to delete item
    return item

# update item

"""
People
"""

# create owner


# delete owner


# update owner information


"""
Projects
"""
# create project


# delete project


# update project information