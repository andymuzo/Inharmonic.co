class Droplet {
  
  float x;
  float y;
  float ySpeed;
  float size;
  color c;
  
  Droplet(int x, int y) {
    this.x = float(x);
    this.y = float(y);
    ySpeed = 0.0;
    size = random(1.0, 7.0);
    c = color(random(1.0, 255.0), random(1.0, 255.0), random(1.0, 255.0), 150);
  }
  
  void move(float gravity) {
    y += ySpeed;
    
    ySpeed += gravity;
    
    if (y > height) {
      // bounce
      ySpeed = -ySpeed + (gravity * 2.0);
      y -= (y - height);
      y += ySpeed;
    }
  }
  
  void drawIt() {
    blendMode(ADD);
    stroke(c);
    fill(c);
    ellipse(x, y, size, size);
  }
}