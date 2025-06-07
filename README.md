# 🧩 Dynamic Image Puzzle Game 🎮

Welcome to the **Image Puzzle Game**! This engaging, browser-based sliding puzzle lets you piece together custom or sample images with a drag-and-drop or tap-to-swap interface. Whether you're on desktop or mobile, choose your difficulty, upload an image, and challenge yourself to solve the puzzle with the fewest moves and fastest time! 🚀

**[Play Now!](https://sayan365.github.io/puzzle-game)** 🎉

## ✨ Features That Shine

- 📸 **Custom Image Uploads**: Use your own images or pick from vibrant sample images.
- 🎚️ **Adjustable Difficulty**: Easy (3×3), Medium (4×4), or Hard (5×5) grid sizes.
- 🖱️ **Intuitive Controls**: Drag tiles on desktop or tap to swap on mobile.
- 💡 **Hint Toggle**: Peek at the full image for a quick nudge during gameplay.
- ⏱️ **Track Your Progress**: Monitor moves and time to beat your personal best.
- 📱 **Responsive Design**: Looks great on any device, from phones to big screens.
- 🎉 **Victory Celebration**: A sleek modal displays your moves and time when you win!

## 🗂️ Project Structure

- `index.html`: The game's skeleton, with puzzle grid, controls, and success modal.
- `style.css`: Stylish CSS for a polished, responsive look with smooth animations.
- `script.js`: The brain of the game, handling logic, tile shuffling, and interactions.

## 🎮 How to Play

1. **Pick Your Image** 🌄:
   - Upload a photo via the file input.
   - Or click a sample image to jump right in.
2. **Set Difficulty** ⚙️:
   - Choose Easy (3×3), Medium (4×4), or Hard (5×5) from the dropdown.
3. **Start Puzzling** ▶️:
   - Hit "Start Puzzle" to kick things off.
4. **Solve It** 🧠:
   - **Desktop**: Drag tiles or click two tiles to swap them.
   - **Mobile**: Tap two tiles to swap.
   - Need help? Click "Hint" to toggle the reference image.
5. **Win Big** 🏆:
   - Reassemble the image to complete the puzzle.
   - A victory modal shows your moves and time.
6. **Play Again** 🔄:
   - "Shuffle" for another round with the same setup.
   - "Back to Menu" to change images or difficulty.

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.).
- No external dependencies—just pure HTML, CSS, and JavaScript! 🙌

### Installation
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/image-puzzle-game.git
   ```
2. Ensure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in your browser to start playing.
4. (Optional) Host the files on a web server (e.g., GitHub Pages, Netlify) for online access.

### Live Demo
Try the game instantly at: [https://sayan365.github.io/puzzle-game](https://sayan365.github.io/puzzle-game/) 🌐

### Sample Images
- Replace the sample image URLs in `index.html` with your own or ensure the provided images are in the project directory.
- Example:
  ```html
  <img src="path/to/your-image.jpg" alt="Sample Image" class="sample-img">
  ```

## 🛠️ Development Notes

- **Image Handling**: Uses the `FileReader` API for local image uploads, compatible with modern browsers.
- **Solvability**: The shuffle algorithm ensures the puzzle is solvable by reshuffling if the initial state is already solved.
- **Audio Feedback**: The `successSound` MP3 is optional. Add it to the directory or remove the `<audio>` tag in `index.html`.
- **Responsive Design**: CSS media queries optimize the layout for screens from 380px to 4K.

## ⚠️ Known Limitations

- No high-score saving or game-state persistence (yet!).
- Large images may slow down performance on low-end devices.
- Requires an image to start—no fallback if none is selected.
- Audio feedback depends on a local MP3 file.

## 🌟 Future Enhancements

- 🏅 Save high scores using `localStorage`.
- 🕳️ Add a blank tile for classic sliding puzzle mechanics.
- 🌐 Support online image URLs or more file formats.
- 🎥 Animate tile swaps for a slicker experience.
- 📊 Add a leaderboard for competitive play.

## 🤝 Contributing

We’d love your input! To contribute:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/awesome-idea`).
3. Commit your changes (`git commit -m "Add awesome idea"`).
4. Push to the branch (`git push origin feature/awesome-idea`).
5. Open a Pull Request.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and report issues via [GitHub Issues](https://github.com/sayan365/puzzle-game/issues).

## 📜 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and share! 🖤

## 🙌 Acknowledgments

- Inspired by classic sliding puzzles and modern web games.
- Thanks to the open-source community for endless inspiration! 🌍
- Built with ☕ and a passion for fun, interactive experiences.

---

**Ready to puzzle?** Open `index.html` and start sliding! If you enjoy the game, give it a ⭐ on GitHub or share it with friends! 😄
