# Refresher
Automatically refresh any image, directly from the URL.

## How do I use it?
Simply enter in `https://sebastiandoe5.github.io/refresher?t= + the amount of seconds between refreshes + &url= + the url of the image source`. An example would be the link `http://localhost:5566/?t=0.5&url=http://62.255.244.49/0002.jpg` for an automatically refreshing traffic camera.

## What can I use this for?
You can use this for lots of different images sources which change frequently, including live feeds.

## Which types of images does Refresher support?
Refresher supports every major image type.

## How does it work?
It uses an image tag which automatically refreshes the image every amount of seconds that you set.

# Help

## It flashes white between photos. What can I do about this?
This either means that the image server is slow or your internet isn't particularly fast. This could also be because the refresh time is so short that it hasn't loaded the previous image before displaying the new one. To fix this, try making the amount of time before refreshes larger.