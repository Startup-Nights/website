# Media

Most of the media is stored on digitalocean spaces since this is configured as
the external media provider for the cms.

- when editing via tina, this is automatically taken care of - you can select
  media from digitalocean spaces. Uploads also work and the media is placed in 
  the folder you are currently in
- when editing the markdown files directly, you have to choose / select the 
  media manually - this means:
  - logging into digitalocen
  - head over to the spacebucket
  - search / copy the url or upload the media and copy the url
  - insert the url in the markdown file

For most users, editing via tina will be the easier method.

## Picture gallery

For galleries, it is a bit different. A plugin is used which handles getting 
an optimized image (calculating the size based on the viewport). Since 
digitalocean spaces doesn't provide such a feature, cloudinary is used.

## Videos

Most videos on the website are used for hero backgrounds. Usually, there is a 
video for youtube which can be optimized a bit and then uploaded to digitalocen
spaces. [OpenShot](https://www.openshot.org/) settings:

- target: webp (vp9 va)
- video profile: HD 720p 30 fps (1280x720)
- quality: medium or low
