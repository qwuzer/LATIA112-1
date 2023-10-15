import json

data = {
   "name": "Joe Chen", 
   "score": 95, 
   "tel": "0933123456"        
}

jsonfile = "./Ch05/Example.json"
with open(jsonfile, 'w') as fp:
    json.dump(data, fp)    

