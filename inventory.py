'''
Functionality for inventory management
- Adding inventory items
- removing inventory items
- updating inventory items
'''

class BaseInventoryItem:


    def __init__(self, name):
        self.id = self.create_id()
        self.name = name

    def create_id(self):
        # create the id with some sort of salt?
        pass

    def add_item(self):
        # check to see if item is already there
        # handle item already exists
        pass

    def remove_item(self):
        # check to see if item exists
        # handle item does not exist
        pass

    def update_item_values(self):
        # use self.id to find the object in db if exist
        # if exists -> update
        pass

    def update_data_columns(self):
        # update the db to hold more data for this inventory item
        pass

    def item_exists_in_db(self) -> bool:
        # if exitst:
            # return True
        
        return False

