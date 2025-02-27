import { CSS3DObject} from '/libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  const mindArThreejs = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "/assets/targets/businesscard.mind"
  });
  const {cssRenderer, renderer,cssScene, scene, camera } = mindArThreejs;
  
  const div = new CSS3DObject(document.querySelector("#ar-example"));
  const anchor = mindArThreejs.addCSSAnchor(0);
  anchor.group.add(div);

  const video = document.querySelector("#vid");
  const play = document.querySelector("#play");
  const pause = document.querySelector("#pause");
  const stop = document.querySelector("#stop");

  play.addEventListener("click",()=> {
    video.play();
  });
  pause.addEventListener("click", ()=>{
    video.pause();
  });
  stop.addEventListener("click", ()=>{
    video.currentTime = 0;
    video.pause();
  });
  
  mindArThreejs.start();
  renderer.setAnimationLoop(render);
  function render() {
    cssRenderer.render(cssScene, camera);
  }

});