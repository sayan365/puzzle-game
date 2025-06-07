// Updated JavaScript with redesigned layout and conditional visibility logic
const puzzleContainer = document.getElementById('puzzleContainer');
const startBtn = document.getElementById('startBtn');
const moveCountSpan = document.getElementById('moveCount');
const timerSpan = document.getElementById('timer');
const difficultySelect = document.getElementById('difficulty');
const imageUpload = document.getElementById('imageUpload');
const successMessage = document.getElementById('successMessage');
const restartBtn = document.getElementById('restartBtn');
const gameSection = document.getElementById('gameSection');
const sampleImages = document.querySelectorAll('.sample-img');
const controlsSection = document.querySelector('.controls-section');
const samplesSection = document.querySelector('.samples-section');
const hintimage = document.getElementById('hint-image');
let gridSize = 3;
let tiles = [];
let moveCount = 0;
let timer = 0;
let timerInterval;
let imageSrc = '';
let gameActive = false;

let firstSelectedIndex = null;
let firstSelectedElem = null;

function resetToMenu() {
  clearInterval(timerInterval);
  gameActive = false;
  successMessage.classList.add('hidden');
  controlsSection.classList.remove('hidden');
  samplesSection.classList.remove('hidden');
  gameSection.classList.add('hidden');
}

function initGame() {
  clearInterval(timerInterval);
  timer = 0;
  moveCount = 0;
  tiles = [];
  gameActive = true;
  hideSuccessMessage();
  firstSelectedIndex = null;
  firstSelectedElem = null;

  timerSpan.textContent = '🕒 Time: 0s';
  moveCountSpan.textContent = '🧮 Moves: 0';

  gridSize = parseInt(difficultySelect.value);
  puzzleContainer.innerHTML = '';
  puzzleContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  puzzleContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  generateTiles();
  shuffleTiles();
  renderTiles(true);
  gameSection.classList.remove('hidden');
  controlsSection.classList.add('hidden');
  samplesSection.classList.add('hidden');

  timerInterval = setInterval(() => {
    timer++;
    timerSpan.textContent = `⏱️ Time: ${timer}s`;
  }, 1000);

  renderGameButtons();

  // Reset hint image visibility
  const hintImage = document.getElementById('hintImage');
  if (hintImage) {
    hintImage.classList.remove('show');
  }
}

function generateTiles() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    tiles.push(i);
  }
}

function shuffleTiles() {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  if (isSolved()) shuffleTiles();
}

function renderTiles(enableDrag = false) {
  puzzleContainer.innerHTML = '';
  tiles.forEach((tileIndex, currentIndex) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.draggable = enableDrag;
    tile.dataset.index = currentIndex;
    tile.dataset.tile = tileIndex;

    const row = Math.floor(tileIndex / gridSize);
    const col = tileIndex % gridSize;

    tile.style.backgroundImage = `url(${imageSrc})`;
    tile.style.backgroundPosition = `${(col / (gridSize - 1)) * 100}% ${(row / (gridSize - 1)) * 100}%`;
    tile.style.backgroundSize = `${gridSize * 100}% ${gridSize * 100}%`;

    tile.addEventListener('click', handleTileClick);
    if (enableDrag) {
      tile.addEventListener('dragstart', handleDragStart);
      tile.addEventListener('dragover', handleDragOver);
      tile.addEventListener('drop', handleDrop);
      tile.addEventListener('dragleave', handleDragLeave);
      tile.addEventListener('dragend', handleDragEnd);
    }

    puzzleContainer.appendChild(tile);
  });
}

function handleTileClick(e) {
  if (!gameActive) return;
  const clickedIndex = +this.dataset.index;
  const clickedElem = this;

  if (firstSelectedIndex === null) {
    firstSelectedIndex = clickedIndex;
    firstSelectedElem = clickedElem;
    clickedElem.classList.add('selected');
    return;
  }

  if (firstSelectedIndex === clickedIndex) {
    clickedElem.classList.remove('selected');
    firstSelectedIndex = null;
    firstSelectedElem = null;
    return;
  }

  const secondIndex = clickedIndex;
  [tiles[firstSelectedIndex], tiles[secondIndex]] = [tiles[secondIndex], tiles[firstSelectedIndex]];

  moveCount++;
  moveCountSpan.textContent = `🧮 Moves: ${moveCount}`;

  firstSelectedElem.classList.remove('selected');
  firstSelectedIndex = null;
  firstSelectedElem = null;

  renderTiles(true);

  if (isSolved()) {
    clearInterval(timerInterval);
    gameActive = false;
    showSuccessMessage();
  }
}

function handleDragStart(e) {
  draggedIndex = +this.dataset.index;
  this.classList.add('dragging');
  e.dataTransfer.setData('text/plain', draggedIndex);
}

function handleDragOver(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  const targetIndex = +this.dataset.index;
  if (draggedIndex === targetIndex) return;

  [tiles[draggedIndex], tiles[targetIndex]] = [tiles[targetIndex], tiles[draggedIndex]];
  moveCount++;
  moveCountSpan.textContent = `🧮 Moves: ${moveCount}`;

  renderTiles(true);
  if (isSolved()) {
    clearInterval(timerInterval);
    gameActive = false;
    showSuccessMessage();
  }
}

function handleDragLeave() {
  this.classList.remove('drag-over');
}

function handleDragEnd() {
  document.querySelectorAll('.tile').forEach(t => t.classList.remove('dragging', 'drag-over'));
}

function isSolved() {
  return tiles.every((val, idx) => val === idx);
}

function showSuccessMessage() {
  document.getElementById('finalMoves').textContent = moveCount;
  document.getElementById('finalTime').textContent = timer;
  successMessage.classList.remove('hidden');
  document.getElementById('completedImage').src = imageSrc;
  document.getElementById('successSound')?.play();
}

function hideSuccessMessage() {
  successMessage.classList.add('hidden');
}

function renderGameButtons() {
  const container = document.getElementById('gameButtonsContainer');
  container.innerHTML = ''; // Clear old buttons

  const restartButton = document.createElement('button');
  restartButton.textContent = '🔁 Shuffle';
  restartButton.onclick = initGame;

  const backButton = document.createElement('button');
  backButton.textContent = '⬅️ Back to Menu';
  backButton.onclick = resetToMenu;

  // Create hint button dynamically (optional, since it's in HTML)
  const hintButton = document.createElement('button');
  hintButton.id = 'hintBtn';
  hintButton.className = 'button';
  hintButton.textContent = 'ℹ️ Hint';

  const hintImage = document.getElementById('hintImage');
  hintImage.src = imageSrc; // Set the hint image to the puzzle image

  // Add event listener to hint button
  hintButton.addEventListener('click', () => {
    hintImage.classList.toggle('show');
  });

  // Append buttons to container
  container.appendChild(restartButton);
  container.appendChild(hintButton);
  container.appendChild(backButton);
}
startBtn.addEventListener('click', () => {
  if (!imageSrc) return;
  initGame();
});

restartBtn.addEventListener('click', resetToMenu);

imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    imageSrc = event.target.result;
    initGame();
    
    imageUpload.value = '';
  };
  reader.readAsDataURL(file);
});


sampleImages.forEach(img => {
  img.addEventListener('click', () => {
    imageSrc = img.src;
    initGame();
  });
});

window.addEventListener('load', () => {
  gameSection.classList.add('hidden');
});

document.addEventListener('click', (e) => {
  const hintImage = document.getElementById('hintImage');
  if (hintImage && !e.target.closest('#hintBtn') && !e.target.closest('#hintImage')) {
    hintImage.classList.remove('show');
  }
});