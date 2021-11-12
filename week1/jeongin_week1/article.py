# import os, re
# import urllib.request as ur
# from bs4 import BeautifulSoup as bs
# os.chdir(r'/Users/jeongin/Desktop/chrome extension') 

# url='https://media.daum.net/'
# # 마법의 명령어
# soup=bs(ur.urlopen(url).read(),'html.parser')

# # 특정 클래스 속성을 출력하기
# print(soup.find_all('div', {"class" : "item_issue"}))

# # a 태그 5개만 출력해보기
# print(soup.find_all('a')[:5])

# # a 태그의 링크 5개만 출력해보기
# for i in soup.find_all('a')[:5]:
# 	print(i.get('href'))

# # 특정기사 본문 저장하기 
# article1 ='https://news.v.daum.net/v/20200427090630709'

# # soup2 객체로 열기 
# soup2 = bs(ur.urlopen(article1).read(),'html.parser')

# # 특정기사 본문 출력하기 
# for i in soup2.find_all('p'):
#     print(i.text)