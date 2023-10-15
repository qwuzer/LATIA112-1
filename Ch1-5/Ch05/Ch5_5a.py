import urllib.request

url = "https://www.w3schools.com/images/w3lynx_200.png"
response = urllib.request.urlopen(url)
fp = open("./Ch05/fchart06.png", "wb")
size = 0
while True:
    info = response.read(10000)
    if len(info) < 1:
        break
    size = size + len(info)
    fp.write(info)    
print(size, "個字元下載...")
fp.close()
response.close()

