# T3A2-B Brodey Bright

## Universal Music Hub

### Main Links

Backend repo: https://github.com/Full-Stack-App-Brodey-Bright/Part-B-Server

Frontend repo: https://github.com/Full-Stack-App-Brodey-Bright/Part-B-Front-End

Deployed site: https://universalmusichub.netlify.app

### Documentation Links

Trello Board: https://trello.com/b/8QAbbo6A/universal-music-hub

Production and Development testing spreadsheet: https://docs.google.com/spreadsheets/d/1nc8l3PZ9UFg441Vtz-baZO323kwJ6tXV2D43-hyQthA/edit?usp=sharing

## Important Notes on Using the Website

OAuth will not work unless I specifically add the email being used into the Google API settings page. This is only used for importing playlists from Youtube and is not required to use the app.
If you would like to test the Youtube import functionality you can email me at brodey880@gmail.com with the email you want to connect to the website and I will add it to the API when I can.

## Packages and frameworks used:

#### Backend

- Node.js: Framework for all API server code.
- npm: Used for package installation and management.
- MongoDB: The database. Used with Atlas. It contains 4 collections (Users, Notifications, Playlists and Queues.)
- ExpressJS: Used for API routing, handling all endpoints and logic.
- Bcrypt: Used for hashing passwords .
- Cors: Used to allow Netlify to communicate with the API.
- JsonWebToken: Used to assign and decrypt user tokens as well as tell the backend who is logged in.
- dotenv: Used to hide and save sensitive variables such as Youtube API keys 
- mongoose: Used to create schemas and data structures for the database.
- nodemon: Used to aid in development of the backend

### Frontend

- Vite/React: Used for the frontend of the application. I made a lot of use out of the useState and useEffect hooks.
- npm: Used for package installation and management.
- react-router-dom: Used to manage routing between pages. BrowserRouter Router and Route were used to set change the rendered component based on the url.
- Vitest: Used for some unit testing.
- Js-cookie: Used to store user data across the website such as JWT's and access tokens.
- React Player: Was used to play, pause, skip and mute all of the tracks in the site.
- Rc Slider: Was used to display the duration bar for the track as well as to navigate through the tracks progress when dragging the slider.

# Production and Development Testing Evidence

All production and development testing was done using this spreadsheet:

![[User Testing-1.png]]
# Project Management

Most recent Trello screenshot:

![[Screenshot 2024-12-21 201249.png]]

# Screenshots


# Changes to Part A Plan
## Purpose
Universal Music Hub was originally planned to solve the common problem of fragmented music libraries across different streaming platforms. By bridging the gap between Youtube and SoundCloud but Soundcloud has removed public access to their API so Universal Music Hub is now a Youtube music playlist hub! It enables users to:

- Access their Youtube music collection
- Create playlists using tracks from Youtube
- Maintain a consistent listening experience across tracks

## Core Functionality & Features

### 1. Account Integration
- Secure authentication with Youtube accounts
- Automatic playlist import from Youtube
### 2. Playlist Management
- Create playlists
- Import existing playlists from Youtube
- Add and remove tracks
### 3. Playback Controls
- Universal queue system
- Seamless playback switching between tracks
- Shuffle and repeat options

### 4. Search & Discovery
- Search for tracks across Youtube
- Search for public playlists
- Search for users

### 5. User Experience
- Intuitive, modern interface
- Responsive design for all devices
- Real-time updates and notifications

### 6. Social Features
- Follow other users
- Share playlists and tracks

## Target Audience

### Primary Audience
1. Music Enthusiasts
   - Active music listeners who already use Youtube but don't like the UI
   - Playlist creators and curators

2. Content Creators
   - Podcast producers
   - Social media content creators

3. Young Tech-Savvy Users
   - Age range: 16-35
   - Comfortable with technology
   - Active social media users
   - Early adopters of new music platforms

### Secondary Audience
1. Casual Music Listeners
   - Users who occasionally use Youtube for music
   - People who share music with friends

2. Music Industry Professionals
   - Artists and producers
   - Music bloggers and journalists
   - Event organizers

# User Stories

## High Priority Stories

### Authentication & Account Management

**Initial Story:**
As a music listener, I want to connect my Youtube account so that I can access my music using a more suitable UI

**Refined Stories:**
1. As a new user, I want to connect my Youtube account using OAuth so that I can quickly start accessing my Youtube library.
   - Acceptance Criteria:
     - One-click Youtube OAuth connection
     - Clear error messaging if connection fails
     - Successful connection confirmation

2. As a returning user, I want my login sessions to persist so that I don't have to reconnect my account every time.
   - Acceptance Criteria:
     - Secure token storage
     - Clear session expiration handling

### Playlist Management

**Initial Story:**
As a playlist creator, I want to make playlists that contain songs from Youtube so that I can organize my Youtube playlists easier.

**Refined Stories:**
1. As a playlist curator, I want to create a new playlist and add songs from Youtube so that I can organize my music collection.
   - Acceptance Criteria:
     - Create playlist with name and description
     - Add songs from search results

2. As a music enthusiast, I want my existing Youtube playlists to automatically import so that I don't lose my current music organization.
   - Acceptance Criteria:
     - Automatic playlist detection
     - Automatic playlist importation

### Playback Experience

**Initial Story:**
As a listener, I want to play songs seamlessly so that I don't notice the gap in playback.

**Refined Stories:**
1. As an active listener, I want smooth transitions between tracks so that my listening experience isn't interrupted.
   - Acceptance Criteria:
     - Gapless playback

## Medium Priority Stories

### Search & Discovery

**Initial Story:**
As a user, I want to search for songs across Youtube so that I can find all available versions.

**Refined Stories:**
1. As a music discoverer, I want search results from Youtube so that I can compare versions and availability.
   - Acceptance Criteria:
     - Search by track name
     - Sorted by relevance

### Social Features

**Initial Story:**
As a social user, I want to share my playlists with friends so that we can enjoy music together.

**Refined Stories:**
1. As a social music fan, I want to share my playlists so that my friends can access them.
   - Acceptance Criteria:
     - Generate shareable links
     - Privacy controls

2. As a playlist discoverer, I want to browse public playlists so that I can find new music.
   - Acceptance Criteria:
     - Search playlists
     - View playlist contents
     - Add songs from other playlists to your own

## Original Part A Plan: 
