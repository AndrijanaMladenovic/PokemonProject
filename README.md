# PokemonProject
This project is a web application built using React.js that allows users to browse and search information about Pokémon.
 It utilizes the PokeAPI to fetch data and provides a user-friendly interface for exploring Pokémon details.

# Features 
Landing Page: Displays a grid of Pokémon cards with pagination functionality.
Each page contains 24 Pokémon cards.
Pagination always displays three buttons and buttons Next and Previous, with the active button centered except on the first and last pages.
Pokémon Info Page: Shows detailed information about a specific Pokémon.
Information includes the Pokémon's name, abilities, types,image and stats.
Search Functionality:
Users can search for Pokémon by name using a search bar.
Three filter options are available: A-Z, Z-A, and default preset.
A-Z: Sorts Pokémon by name in ascending order.
Z-A: Sorts Pokémon by name in descending order.
Default: Resets the search to the default order.
Favorite Pokémon:
Users have the ability to mark their favorite Pokémon by clicking a like button, and they can also remove the like if desired.
The information about favorite Pokémon is stored persistently using Local Storage, ensuring that the favorites remain saved even after the page is refreshed.

# Technologies Used
React.js: Primary JavaScript framework for building the application.
Axios: Used for making HTTP requests to the PokeAPI.
React Router: Handles routing between pages.
Local Storage: Implements persistent data storage for storing favorite Pokémon.
React Icons: React Icons library was used to incorporate a wide range of icons, adding visual enhancements and improving the user experience.
Styling Framework: Utilized Tailwind CSS for enhanced styling and layout consistency.

# Deployment
The project is deployed on Netlify and can be accessed at https://phenomenal-axolotl-8e875c.netlify.app.

# Development Setup
1.Clone the repository from GitHub:
git clone https://github.com/AndrijanaMladenovic/PokemonProject.git

2.Install the dependencies: 
cd PokemonProject
npm install

3.Start the development server:
npm run dev

4.Open tou browser and visit http://127.0.0.1:5175/ to see the application.

# Credits 
Pokémon data and images are sourced from the PokeAPI.
Pokémon images are hosted on the Pokémon Official Website.