ArrayList<Droplet> droplets;

float gravity;

void setup() {
  gravity = 0.4;
  droplets = new ArrayList<Droplet>();
  size(800, 600);
  noStroke();
}

void draw() {

  background(0);
  if (mousePressed) {
    droplets.add(new Droplet(mouseX, mouseY));
  }
  
  for (Droplet droplet : droplets) {
    droplet.move(gravity);
    droplet.drawIt();
  }
  
  // clearing and other functions
  if (keyPressed) {
    if (key == ' ') {
      droplets.clear();
    }
  }
}