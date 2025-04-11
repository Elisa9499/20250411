function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布為全視窗
  noLoop(); // 只繪製一次，避免重複繪製
  frameRate(10); // 將畫布更新頻率設為每秒 10 幀
}

function draw() {
  background('#bde0fe'); // 設置背景顏色為 fefae0

  for (let i = 0; i < 40; i++) {
    let x = random(width); // 隨機 X 座標
    let y = random(height); // 隨機 Y 座標

    // 圓的大小根據滑鼠的 X 座標變化，範圍在 10 到 120
    let size = map(mouseX, 0, width, 10, 120);

    // 設置隨機鮮豔顏色
    fill(random(100, 255), random(100, 255), random(100, 255));
    noStroke(); // 移除圓的邊框

    ellipse(x, y, size, size); // 繪製圓
  }
}

function mouseMoved() {
  redraw(); // 當滑鼠移動時重新繪製畫布
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  redraw(); // 重新繪製畫布
}
