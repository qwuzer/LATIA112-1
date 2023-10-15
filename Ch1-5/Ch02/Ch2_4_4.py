import requests 

url = "https://api.github.com/user"

r = requests.get(url, auth=('chihshanliao', 'xxxxxxxx'))
if r.status_code == requests.codes.ok:
    print(r.headers['Content-Type'])
    print(r.json())
else:
    print("HTTP請求錯誤...")