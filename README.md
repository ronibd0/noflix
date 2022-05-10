<h2 align="center"> noflix </h2>

<h3 align="center"> noflix is made for streaming your media collection within the home network </h3>
<h4 align="center"> Features: 🎥 Movies, 📺 TV Shows, 🎵 Music, 📚 Books, 📒 Comics, 🎙️ Podcasts </h4>

  * [🎥 Movies](#-movies)
  * [📺 TV Shows](#-tv-shows)
  * [🎵 Music](#-music)
  * [⚙️ Setup](#%EF%B8%8F-setup)
    + [Naming conventions](#naming-conventions)
    + [Database](#database)
    + [Run](#run)
    + [Routes](#routes)
      - [Server-side](#server-side)
      - [Client-side](#client-side)
  * [Development](#development)
  * [Powered by](#powered-by)
  * [License](#license)
  * [Disclaimer](#disclaimer)
    + [General Copyright Statement](#general-copyright-statement)

## 🎥 Movies
### Home
![movies_1](media/movies_1.png)
### Search
![movies_2](media/movies_2.png)
## 📺 TV Shows
### Home
![tv](media/tv_1.png)
## 🎵 Music
### Home
![music](media/music_1.png)
### Search
![music](media/music_2.png)
### Album
![music](media/music_3.png)

## ⚙️ Setup

Run `npm install` from the `client/` directory and from the `server/` directory  
Create a `.env` file in the `client/` directory, if it does not exist  
In `.env`, set the base url of the homehost server  
###### **`client/.env`**
```env
REACT_APP_HOMEHOST_BASE = "http://localhost:5000"
REACT_APP_IMAGE_BASE = "https://image.tmdb.org/t/p/"
REACT_APP_TMDB_BASE = "https://www.imdb.com/title/"
```  
Create a `.env` file in the `server/` directory, if it does not exist  
In `.env`, set a working API key for TMDb API and Spotify Web API, set the media paths, and set tha base url of the homehost client  
###### **`server/.env`**
```env
TMDB_KEY = '<api_key>'
SPOTIFY_CLIENT_ID = '<client_id>'
SPOTIFY_CLIENT_SECRET = '<client_secret>'

MOVIES_PATH = '/path/to/movies/directory'
TV_PATH = '/path/to/tv/directory'
MUSIC_PATH = '/path/to/music/directory'

DATABASE_URL = 'file:./data/media.db'
CLIENT_BASE_URL = 'http://localhost:3000'
```
If you dont have keys, you can request API authorization from Spotify at https://developer.spotify.com/documentation/web-api/, and TMDb at https://developers.themoviedb.org/3/getting-started/introduction  

### Naming conventions

Your media must appear in the locations set by `.env`. Each media must be in a unique location and cannot share the same directory path(s)  
🎥 **Movies**  
```
<movies_path>  
- (subdirectory)?  
  - (movie_file_name <TMDb-movie-ID>) (.mp4|.mkv)  
```
📺 **TV**  
```
<tv_path>  
- (tv_show_directory_name <TMDb-tv-show-ID>)  
  - (S<season_number>E<episode_number> episode_file_name) (.mp4|.mkv)  
```
🎵 **Music**  
```
<music_path>  
- (album_directory_name <Spotify-album-ID>)  
  - ((<disc_number>-)?<track_number> track_file_name) (.mp3|.flac)  
```
Tracks not found on Spotify can be put in a directory titled `Unknown Album` sans disc/ track number  
```
<music_path>  
- Unknown Album  
  - (track_file_name) (.mp3|.flac)  
```

### Database

From `server/`, run `npx prisma migrate dev` to create the database and necessary migrations  
Run `npm run start-dev` to start the application in dev mode  
*homehost* scans the media paths and adds the files to the database  
Wait for the async job to finish generating metadata and save  
To explore all media data, run `prisma studio` to go to `http://localhost:5555`  
To reset the database and clear all data, run `npx prisma migrate reset`  

### Run

Run `npm run start-dev` from the `server/` directory to start the application in dev mode  
By default, the server port is `5000`, client port is `3000`  
Run `npm start` from the `server/` directory to start the application as prod  
By default, client and server will run on `5000`  
While running, *homehost* continuously saves and retrieves metadata for any media files that were added, moved or removed  

### Routes

#### Server-side

**POST**  
`/api?generate=movies,tv,music`  
**GET**  
`/api/about`  
`/api/movies`  
`/api/movies/most_popular`  
`/api/movies/highest_rated`  
`/api/movies/recently_added`  
`/api/movies/genres`  
`/api/movies/genre/:name`  
`/api/movies/random`  
`/api/movies/:id`  
`/api/tv`  
`/api/tv/most_popular`  
`/api/tv/highest_rated`  
`/api/tv/recently_added`  
`/api/tv/genres`  
`/api/tv/genre/:name`  
`/api/tv/random`  
`/api/tv/:id`  
`/api/music/albums/recently_added`  
`/api/music/albums/latest`  
`/api/music/artists`  
`/api/music/artists/most_popular`  
`/api/music/albums`  
`/api/music/albums/:id`  
`/api/music/songs`  
`/api/music/songs/recently_added`  
`/movies/:id`  
`/tv/:tv_show_id/:season_number/:episode_number`  
`/music/:album_id/:disc_number/:track_number`  
`/api/watch/search`  
`/api/listen/search`  
`/api/watch/billboard`  

#### Client-side

`/movies`, `/tv`, `/music`  
TODO `/books`, `/comics`, `/podcasts`  

## Development

Works best in <img src="client/src/assets/logos/Chrome.svg" width="16" height="16" title="Google Chrome"> Chrome. Coming to Desktop, iOS, Android.

## Powered by

<p><img src="client/src/assets/logos/Spotify_Green.svg" width="200" height="150" title="Spotify Web API">&emsp;<img src="client/src/assets/logos/TMDB_Green.svg" width="150" height="150" title="TMDb API"></p>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Disclaimer

All pictures copyright to their respective owner(s). This project does not claim ownership of any of the pictures displayed on this site unless stated otherwise. This project does not knowingly intend or attempt to offend or violate any copyright or intellectual property rights of any entity. Some images used on this project are taken from the web and believed to be in the public domain. In addition, to the best of this project's knowledge, all content, images, photos, etc., if any, are being used in compliance with the Fair Use Doctrine (Copyright Act of 1976, 17 U.S.C. § 107.) The pictures are provided for comment/criticism/news reporting/educational purposes only.

Where every care has been taken to ensure the accuracy of the contents of this project, we do not warrant its completeness, quality and accuracy, nor can we guarantee that it is up-to-date. We will not be liable for any consequences arising from the use of, or reliance on, the contents of this project. The respective owners are exclusively responsible for external websites. This project accepts no liability of the content of external links.

Our project follows the safe harbor provisions of 17 U.S.C. §512, otherwise known as Digital Millennium Copyright Act (“DMCA”).

If any images posted here are in violation of copyright law, please contact us and we will gladly remove the offending images immediately upon receipt of valid proof of copyright infringement.

### General Copyright Statement

Most of the sourced material is posted according to the “fair use” doctrine of copyright law for non-commercial news reporting, education and discussion purposes. We comply with all takedown requests.

You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).
