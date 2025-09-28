# Full-Stack Movie Application

A modern full-stack web application for browsing movies, watching trailers, and managing reviews. Built with Spring Boot (Java) backend and React frontend, featuring MongoDB for data persistence.

## 🎬 Features

- **Movie Catalog**: Browse a collection of movies with detailed information
- **Movie Details**: View individual movie information including posters, genres, and release dates
- **Trailer Integration**: Watch movie trailers using React Player
- **Review System**: Add and view movie reviews
- **Responsive Design**: Modern UI built with Material-UI and Bootstrap
- **RESTful API**: Clean API endpoints for movie and review management

## 🏗️ Architecture

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.5.5
- **Database**: MongoDB with Spring Data MongoDB
- **Language**: Java 21
- **Build Tool**: Maven
- **Key Dependencies**:
  - Spring Boot Starter Web
  - Spring Boot Starter Data MongoDB
  - Lombok for boilerplate reduction
  - Spring Dotenv for environment configuration

### Frontend (React)
- **Framework**: React 19.1.1
- **UI Libraries**: Material-UI, React Bootstrap
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Video Player**: React Player
- **Build Tool**: Create React App

## 📁 Project Structure

```
full-API/
├── movies/                          # Spring Boot Backend
│   ├── src/main/java/dev/adam/movies/
│   │   ├── MoviesApplication.java   # Main application class
│   │   ├── MovieController.java     # Movie REST endpoints
│   │   ├── ReviewController.java    # Review REST endpoints
│   │   ├── MovieService.java        # Movie business logic
│   │   ├── ReviewService.java       # Review business logic
│   │   ├── MovieRepository.java     # Movie data access
│   │   ├── ReviewRepository.java    # Review data access
│   │   ├── movie.java              # Movie entity
│   │   └── review.java             # Review entity
│   └── src/main/resources/
│       └── application.properties   # Database configuration
└── MovieClient/movie-client-v1/     # React Frontend
    ├── src/
    │   ├── Components/
    │   │   ├── header/             # Navigation header
    │   │   ├── hero/               # Hero section
    │   │   ├── home/               # Movie grid display
    │   │   ├── trailer/            # Video player component
    │   │   ├── reviews/            # Review display
    │   │   └── reviewForm/         # Review submission form
    │   ├── api/
    │   │   └── AxiosConfig.js      # API configuration
    │   └── App.js                  # Main application component
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Java 21** or higher
- **Node.js** 16+ and npm
- **MongoDB** (local or MongoDB Atlas)
- **Maven** 3.6+

### Environment Setup

1. **Backend Environment Variables**
   Create a `.env` file in the `movies/` directory:
   ```env
   MONGO_DATABASE=your_database_name
   MONGO_USER=your_mongodb_username
   MONGO_PASSWORD=your_mongodb_password
   MONGO_CLUSTER=your_mongodb_cluster_url
   ```

2. **Database Setup**
   - Set up a MongoDB database (local or Atlas)
   - Create collections: `movies` and `reviews`
   - Populate with sample movie data

### Installation & Running

#### Backend (Spring Boot)

```bash
# Navigate to the movies directory
cd movies/

# Install dependencies
mvn clean install

# Run the application
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

#### Frontend (React)

```bash
# Navigate to the React app directory
cd MovieClient/movie-client-v1/

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will start on `http://localhost:3000`

## 🔌 API Endpoints

### Movies
- `GET /api/v1/movies` - Get all movies
- `GET /api/v1/movies/{imdbId}` - Get single movie by IMDB ID

### Reviews
- `POST /api/v1/reviews` - Create a new review
  ```json
  {
    "reviewBody": "Great movie!",
    "imdbId": "tt1234567"
  }
  ```

## 🎨 Frontend Components

- **Header**: Navigation and branding
- **Home**: Movie grid with search and filtering
- **Trailer**: Video player for movie trailers
- **Reviews**: Display and submission of movie reviews
- **ReviewForm**: Form for adding new reviews

## 🛠️ Technologies Used

### Backend
- Spring Boot 3.5.5
- Spring Data MongoDB
- Java 21
- Maven
- Lombok
- MongoDB

### Frontend
- React 19.1.1
- Material-UI 7.3.2
- React Bootstrap 2.10.10
- Axios 1.12.2
- React Router DOM 7.9.1
- React Player 3.3.3

## 📝 Data Models

### Movie Entity
```java
{
  "id": "ObjectId",
  "imdbId": "String",
  "title": "String",
  "releaseDate": "String",
  "trailerLink": "String",
  "poster": "String",
  "genre": ["String"],
  "backdrops": ["String"],
  "reviewIds": ["ObjectId"]
}
```

### Review Entity
```java
{
  "id": "ObjectId",
  "body": "String"
}
```

## 🔧 Development

### Adding New Features
1. Backend: Add new controllers, services, and repositories as needed
2. Frontend: Create new React components in the `Components/` directory
3. Update API configuration in `AxiosConfig.js` if needed

### Database Management
- Use MongoDB Compass or Atlas for database management
- Ensure proper indexing on frequently queried fields
- Consider data validation and constraints

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with the project, please open an issue in the GitHub repository.

---

**Happy Coding! 🎬✨**
