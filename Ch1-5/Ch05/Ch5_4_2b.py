import json

jsonfile = "./Ch05/Example.json"
with open(jsonfile, 'r') as fp:
    data = json.load(fp)
json_str = json.dumps(data)    
print(json_str)  
