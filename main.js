import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const loader = new THREE.TextureLoader();
const bgTexture = loader.load('background.webp');

scene.background = bgTexture;
bgTexture.wrapS = THREE.MirroredRepeatWrapping;
bgTexture.wrapT = THREE.MirroredRepeatWrapping;

const map = new THREE.TextureLoader().load('cowboy.png');
const material = new THREE.SpriteMaterial({ map: map });
const sprite = new THREE.Sprite(material);

sprite.scale.set(1,3,1);
sprite.position.set(0,-1,0);
scene.add(sprite);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  function keyPressListener(event) {
    console.log(event.key)
    switch(event.key) {
      case 'w':
        sprite.position.y += 1;
        break;
      case 's':
        sprite.position.y -= 1;
        break;
      case 'a':
        sprite.position.x -= 1;
        break
      case 'd':
        sprite.position.x += 1;
      default:
        break;
    }
  }
  
  window.addEventListener('keypress', keyPressListener, false);
  renderer.render(scene, camera);
}

animate();

