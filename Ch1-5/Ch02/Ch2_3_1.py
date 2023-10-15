import requests

r = requests.get("http://www.pythonscraping.com/pages/page1.html")

print(r.text)
print(r.encoding)

r = requests.get("http://www.pythonscraping.com/pages/page1.html")
r.encoding = 'utf-8'

print(r.text)
print(r.encoding)