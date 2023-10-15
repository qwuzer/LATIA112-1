import requests

r = requests.get("http://www.pythonscraping.com/pages/page1.html")
r.encoding = "utf-8"

fp = open("test.txt", "a+", encoding="utf8")
fp.write(r.text)
print(r.text)
print("寫入檔案test.txt...")
fp.close()

