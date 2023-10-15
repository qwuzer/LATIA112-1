import requests

r = requests.get("http://www.pythonscraping.com/pages/page1.html")
r.encoding = 'utf-8'
print(r.text)
print("----------------------")

r = requests.get("http://www.pythonscraping.com/pages/page1.html")
r.encoding = 'utf-8'
print(r.content)
print("----------------------")

r = requests.get("http://www.pythonscraping.com/pages/page1.html", stream=True)
r.encoding = 'utf-8'
print(r.raw)
print(r.raw.read(15))

