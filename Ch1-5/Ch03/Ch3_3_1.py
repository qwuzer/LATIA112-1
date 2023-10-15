from bs4 import BeautifulSoup 

with open("./Ch03/Example.html", "r", encoding="utf8") as fp:
    soup = BeautifulSoup(fp, "lxml")

print(soup)



