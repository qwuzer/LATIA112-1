import sys
import subprocess
# implement pip as a subprocess:
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'lxml'])

from bs4 import BeautifulSoup 

html_str = "<p>Hello World!</p>"
#soup = BeautifulSoup(html_str, "html.parser")
soup = BeautifulSoup(html_str, "lxml")
print(soup)