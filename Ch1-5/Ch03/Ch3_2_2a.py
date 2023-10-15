import requests
from bs4 import BeautifulSoup

r = requests.get("http://www.pythonscraping.com/pages/page1.html")
r.encoding = "utf-8"
soup = BeautifulSoup(r.text, "lxml")

fp = open("./Ch03/test2.txt", "w", encoding="utf8")
fp.write(soup.prettify())
print("寫入檔案test2.txt...")
fp.close()



