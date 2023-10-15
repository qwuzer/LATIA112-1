import requests 
from bs4 import BeautifulSoup

r = requests.get("http://www.pythonscraping.com/pages/page1.html")
r.encoding = "utf8"
soup = BeautifulSoup(r.text, "lxml")
print(soup)



