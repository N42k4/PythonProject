from pytube import YouTube
import requests


def get_response(url):
    r = requests.get(url)
    while r.status_code != 200:
        r = requests.get(url)
    return r.text


link = input('Enter Youtube URL: ')
response = get_response(link)
video = YouTube(link)

stream = video.streams.get_highest_resolution()
stream.download()