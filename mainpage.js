const COLORS = [
"#ff4fbf", // pink
"#ff0000", // red
"#ff7a00", // orange
"#ffd400", // yellow
"#00c853", // green
"#1e5bff", // blue
"#8a2be2", // purple
"#000000", // black
"#ffffff"  // white
];




const COLOR_IMAGES = {
  0: [
    {
      file: "chanel2026hcss/pink1.jpg",
      slug: "pink1",
      title: "Pink Look 01"
    },
    {
      file: "jac2020ss/pink1.jpg",
      slug: "pink2",
      title: "Pink Look 02"
    },
    {
      file: "ac22ss/pink1.jpg",
      slug: "pink3",
      title: "Pink Look 03"
    },
    {
      file: "dior15couture/pink4.jpg",
      slug: "pink4",
      title: "Pink Look 04"
    },
    {
      file: "prada19ssmens/pink1.jpg",
      slug: "pink5",
      title: "Pink Look 05"
    },
    {
      file: "prada21fwmens/pink2.jpg",
      slug: "pink6",
      title: "Pink Look 06"
    }
  ],
  1: [
    {
      file: "diesel23fw/redd1.jpg",
      slug: "red1",
      title: "Red Look 01"
    },
    {
      file: "loewe23ss/red1.jpg",
      slug: "red2",
      title: "Red Look 02"
    },
    {
      file: "lv17cruise/red1.jpg",
      slug: "red3",
      title: "Red Look 03"
    },
    {
      file: "ferragamo25fw/red1.jpg",
      slug: "red4",
      title: "Red Look 04"
    },
    {
      file: "prada22ssmens/red1.jpg",
      slug: "red5",
      title: "Red Look 05"
    },
    {
      file: "miumiu26fw/red1.jpg",
      slug: "red6",
      title: "Red Look 06"
    },

  ],
  
  2: [
    {
      file:"prada23fw/orange1.jpg",
      slug:"orange1",
      title:"Orange Look 01",
    },
    {
      file:"blumarine23fw/orange1.jpg",
      slug:"orange2",
      title:"Orange Look 02",
    },
    {
      file:"louisvitton24ss/orange1.jpg",
      slug:"orange3",
      title:"Orange Look 03",
    },
    {
      file:"marni26fw/orange1.jpg",
      slug:"orange4",
      title:"Orange Look 04",
    },
    {
      file:"bottega25ss/orange1.jpg",
      slug:"orange5",
      title:"Orange Look 05",
    },
    {
      file:"bottega24fw/orange1.jpg",
      slug:"orange6",
      title:"Orange Look 06",
    },
    
    
  ],
  3: [
    {
      file:"loewe26fw/yell1.jpg",
      slug:"yellow1",
      title:"Yellow Look 01",
    },
    {
      file:"gucci23fw/yell1.jpg",
      slug:"yellow2",
      title:"Yellow Look 02",
    },
    {
      file:"miu25fw/yell1.jpg",
      slug:"yellow3",
      title:"Yellow Look 03",
    },
    {
      file:"louisvitton23ssmens/yell1.jpg",
      slug:"yellow4",
      title:"Yellow Look 04",
    },
    {
      file:"dior24fw/yell1.jpg",
      slug:"yellow5",
      title:"Yellow Look 05",
    },
    {
      file:"lv26fwmens/yell1.jpg",
      slug:"yellow6",
      title:"Yellow Look 06",
    },

  ],
  4: [
    {
      file:"lv26fw/green1.jpg",
      slug:"green1",
      title:"Green Look 01",
    },
    {
      file:"gucci25fw/green1.jpg",
      slug:"green2",
      title:"Green Look 02",
    },
    {
      file:"loewe24fw/green1.jpg",
      slug:"green3",
      title:"Green Look 03",
    },
    {
      file:"dior17fwcouture/green1.jpg",
      slug:"green4",
      title:"Green Look 04",
    },
    {
      file:"prada24fwmenswear/green1.jpg",
      slug:"green5",
      title:"Green Look 05",
    },
    {
      file:"bottega23fw/green1.jpg",
      slug:"green6",
      title:"Green Look 06",
    },
    
  ],
  5: [
    {
      file:"blc20ss/blue1.jpg",
      slug:"blue1",
      title:"Blue Look 01",
    },
    {
      file:"lv20fwmemns/blue1.jpg",
      slug:"blue2",
      title:"Blue Look 02",
    },
    {
      file:"louisvuitton25fw/blue1.jpg",
      slug:"blue3",
      title:"Blue Look 03",
    },
    {
      file:"prada25fw/blue1.jpg",
      slug:"blue4",
      title:"Blue Look 04",
    },
    {
      file:"louisvitton22fwmens/blue1.jpg",
      slug:"blue5",
      title:"Blue Look 05",
    },
    {
      file:"hermes26fw/blue1.jpg",
      slug:"blue6",
      title:"Blue Look 06",
    },
  ],
  6: [
    {
      file:"dior23fw/purple1.jpg",
      slug:"purple1",
      title:"Purple Look 01",
    },
    {
      file:"prada22fwmens/purple1.jpg",
      slug:"purple2",
      title:"Purple Look 02",
    },
    {
      file:"fendi23fw/purple1.jpg",
      slug:"purple3",
      title:"Purple Look 03",
    },
    {
      file:"chanel26ss/purple1.jpg",
      slug:"purple4",
      title:"Purple Look 04",
    },
    {
      file:"chanel26fw/purple1.jpg",
      slug:"purple5",
      title:"Purple Look 05",
    },
    {
      file:"fendi26ss/purple1.jpg",
      slug:"purple6",
      title:"Purple Look 06",
    },
  ],
  7: [
    {
      file:"blc20fw/black1.jpg",
      slug:"black1",
      title:"Black Look 01",
    },
    {
      file:"ferragamo23fw/black1.jpg",
      slug:"black2",
      title:"Black Look 02",
    },
    {
      file:"balen25fw/black1.jpg",
      slug:"black3",
      title:"Black Look 03",
    },
    {
      file:"acne24fw/black1.jpg",
      slug:"black4",
      title:"Black Look 04",
    },
    {
      file:"simonerocha24ss/black1.jpg",
      slug:"black5",
      title:"Black Look 05",
    },
    {
      file:"saintlaurent24ssmens/black1.jpg",
      slug:"black6",
      title:"Black Look 06",
    },
    {
      file:"balen23ss/black1.jpg",
      slug:"black7",
      title:"Black Look 07",
    },
    

  ],
  8: [
    {
      file:"dior18fwcouture/white1.jpg",
      slug:"white1",
      title:"White Look 01",
    },
    {
      file:"dior24ssmenswear/white1.jpg",
      slug:"white2",
      title:"White Look 02",
    },
    {
      file:"prada24ssmens/white1.jpg",
      slug:"white3",
      title:"White Look 03",
    },
    {
      file:"loewe23ssplant/white1.jpg",
      slug:"white4",
      title:"White Look 04",
    },
    {
      file:"rickowens23fw/white1.jpg",
      slug:"white5",
      title:"White Look 05",
    },
    {
      file:"balen22fw/white1.jpg",
      slug:"white6",
      title:"White Look 06",
    },

  ],


};

function lerp(a,b,t){
return a+(b-a)*t;
}

function hexToRgb(hex){
const h = hex.replace("#","");
const n = parseInt(h,16);
return {
r:(n>>16)&255,
g:(n>>8)&255,
b:n&255
};
}

function mixHex(c1,c2,t){
const A = hexToRgb(c1);
const B = hexToRgb(c2);

const r = Math.round(lerp(A.r,B.r,t));
const g = Math.round(lerp(A.g,B.g,t));
const b = Math.round(lerp(A.b,B.b,t));

return `rgb(${r},${g},${b})`;
}

function gradientAt(pct){
const n = COLORS.length;
const x = pct*(n-1);
const i = Math.floor(x);
const t = x-i;

const c1 = COLORS[i];
const c2 = COLORS[i+1] || COLORS[i];

return mixHex(c1,c2,t);
}

const track = document.querySelector(".track");
const thumb = document.querySelector(".circle");
const dot = document.querySelector(".center-dot");
const cluster = document.querySelector(".photo-cluster");
const connectionLayer = document.querySelector(".connection-layer");

let dragging = false;
let currentColorIndex = -1;

const PHOTO_LAYOUTS = {};
const IMAGE_META = {};

function getNearestColorIndex(pct){
return Math.round(pct * (COLORS.length - 1));
}

function randomBetween(min, max){
return Math.random() * (max - min) + min;
}

function distanceBetween(x1, y1, x2, y2){
const dx = x2 - x1;
const dy = y2 - y1;
return Math.sqrt(dx * dx + dy * dy);
}

function rectsOverlap(a, b){
const gap = 26;

return !(
a.right + gap < b.left ||
a.left - gap > b.right ||
a.bottom + gap < b.top ||
a.top - gap > b.bottom
);
}

function clamp(value, min, max){
return Math.max(min, Math.min(max, value));
}

function loadImageMeta(src){
return new Promise((resolve) => {
const img = new Image();

img.onload = () => {
resolve({
src,
naturalWidth: img.naturalWidth,
naturalHeight: img.naturalHeight
});
};

img.onerror = () => {
resolve({
src,
naturalWidth: 120,
naturalHeight: 160
});
};

img.src = src;
});
}

async function preloadAllImages(){
  const files = Object.values(COLOR_IMAGES)
    .flat()
    .map(item => item.file)
    .filter(file => file && file.trim() !== "");

  const uniqueFiles = [...new Set(files)];
  const metaList = await Promise.all(uniqueFiles.map(loadImageMeta));

  metaList.forEach((meta) => {
    IMAGE_META[meta.src] = meta;
  });
}

function getRandomPhotoPlacement(existingRects, meta){
const clusterWidth = cluster.clientWidth;
const clusterHeight = cluster.clientHeight;

const centerX = clusterWidth / 2;
const centerY = clusterHeight / 2;

/* 원 주변은 비우되, 위아래 공간도 적극 사용 */
const isMobile = window.innerWidth <= 768;
const minDistanceFromCenter = isMobile ? 110 : 200;
const maxDistanceFromCenter = Math.min(
  Math.sqrt((clusterWidth * 0.5) ** 2 + (clusterHeight * 0.5) ** 2) - 40,
  760
);

const forbiddenBox = {
  left: centerX - (isMobile ? 90 : 190),
  right: centerX + (isMobile ? 90 : 190),
  top: centerY - (isMobile ? 90 : 190),
  bottom: centerY + (isMobile ? 90 : 190)
};

for(let attempt = 0; attempt < 800; attempt++){

/* 최소 40% 증가, 최대 20% 증가 */
const isMobile = window.innerWidth <= 768;
const minPhotoWidth = isMobile ? 88 : 174;
const maxPhotoWidth = isMobile ? 132 : 258;

const displayWidth = randomBetween(minPhotoWidth, maxPhotoWidth);

const aspectRatio = meta.naturalHeight / meta.naturalWidth;
const displayHeight = displayWidth * aspectRatio;

/* 위/아래도 잘 나오게 완전한 원형 분포 사용 */
const angle = randomBetween(0, Math.PI * 2);

/* 가운데보다 바깥쪽으로 조금 더 잘 퍼지게 */
const distanceBias = Math.pow(Math.random(), 0.82);
const distance = lerp(minDistanceFromCenter, maxDistanceFromCenter, distanceBias);

const photoCenterX = centerX + Math.cos(angle) * distance;
const photoCenterY = centerY + Math.sin(angle) * distance;

const left = photoCenterX - displayWidth / 2;
const top = photoCenterY - displayHeight / 2;

if(
  left < 18 ||
  top < 18 ||
  left + displayWidth > clusterWidth - 18 ||
  top + displayHeight > clusterHeight - 18
){
  continue;
}

const rect = {
left,
top,
right: left + displayWidth,
bottom: top + displayHeight
};

if(rectsOverlap(rect, forbiddenBox)){
  continue;
}

let hitExisting = false;

for(const existing of existingRects){
  if(rectsOverlap(rect, existing)){
    hitExisting = true;
    break;
  }
}

if(hitExisting) continue;

const rectCenterX = left + displayWidth / 2;
const rectCenterY = top + displayHeight / 2;

if(distanceBetween(centerX, centerY, rectCenterX, rectCenterY) < minDistanceFromCenter){
  continue;
}

return {
  left,
  top,
  width: displayWidth,
  height: displayHeight,
  rect
};
}

/// 🔥 랜덤 fallback (뭉침 방지)
for(let i = 0; i < 100; i++){

 const isMobile = window.innerWidth <= 768;
const minPhotoWidth = isMobile ? 88 : 174;
const maxPhotoWidth = isMobile ? 132 : 258;

const displayWidth = randomBetween(minPhotoWidth, maxPhotoWidth);
  const aspectRatio = meta.naturalHeight / meta.naturalWidth;
  const displayHeight = displayWidth * aspectRatio;

  const left = randomBetween(20, clusterWidth - displayWidth - 20);
  const top = randomBetween(20, clusterHeight - displayHeight - 20);

  const rect = {
    left,
    top,
    right: left + displayWidth,
    bottom: top + displayHeight
  };

  if(!rectsOverlap(rect, forbiddenBox)){
    return {
      left,
      top,
      width: displayWidth,
      height: displayHeight,
      rect
    };
  }
}

return {
  left: clusterWidth - displayWidth - 30,
  top: 30,
  width: displayWidth,
  height: displayHeight,
  rect: {
    left: clusterWidth - displayWidth - 30,
    top: 30,
    right: clusterWidth - 30,
    bottom: 30 + displayHeight
  }
};
}

function buildLayoutsOnce(){
  Object.keys(COLOR_IMAGES).forEach((key) => {
    const colorIndex = Number(key);
    const items = (COLOR_IMAGES[colorIndex] || []).filter(item => item.file && item.slug);
    const placedRects = [];

    PHOTO_LAYOUTS[colorIndex] = items.map((item) => {
      const meta = IMAGE_META[item.file] || {
        naturalWidth: 120,
        naturalHeight: 160
      };

      const placement = getRandomPhotoPlacement(placedRects, meta);
      placedRects.push(placement.rect);

      return {
  file: item.file,
  slug: item.slug,
  title: item.title,
  left: placement.left,
  top: placement.top,
  width: placement.width,
  height: placement.height,
  bendDir: Math.random() < 0.5 ? -1 : 1
};
    });
  });
}

function getPhotoAnchorPoint(item, originX, originY){
const left = item.left;
const right = item.left + item.width;
const top = item.top;
const bottom = item.top + item.height;
const centerX = item.left + item.width / 2;
const centerY = item.top + item.height / 2;

const dx = originX - centerX;
const dy = originY - centerY;

if(Math.abs(dx) > Math.abs(dy)){
if(dx < 0){
return { x: left, y: centerY };
}
return { x: right, y: centerY };
}

if(dy < 0){
return { x: centerX, y: top };
}
return { x: centerX, y: bottom };
}

function createEndCurvedStraightPath(x1, y1, x2, y2, bendDir = 1){
const dx = x2 - x1;
const dy = y2 - y1;
const length = Math.sqrt(dx * dx + dy * dy);

if(length === 0){
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

const ux = dx / length;
const uy = dy / length;
const nx = -uy;
const ny = ux;

/* 더 드라마틱하게 */
const handle = clamp(length * 0.22, 70, 180);
const bend = clamp(length * 0.28, 45, 150);

/* 시작 쪽은 더 확 꺾고 */
const c1x = x1 + ux * handle + nx * bend * bendDir;
const c1y = y1 + uy * handle + ny * bend * bendDir;

/* 끝 쪽은 반대 방향으로 확 꺾기 */
const c2x = x2 - ux * handle - nx * bend * bendDir;
const c2y = y2 - uy * handle - ny * bend * bendDir;

return `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
}



function drawConnections(layouts){
connectionLayer.innerHTML = "";

const clusterWidth = cluster.clientWidth;
const clusterHeight = cluster.clientHeight;
const centerX = clusterWidth / 2;
const centerY = clusterHeight / 2;

connectionLayer.setAttribute("viewBox", `0 0 ${clusterWidth} ${clusterHeight}`);

layouts.forEach((item) => {
const anchor = getPhotoAnchorPoint(item, centerX, centerY);

const bendDir = Math.random() < 0.5 ? -1 : 1;

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
"d",
createEndCurvedStraightPath(
centerX,
centerY,
anchor.x,
anchor.y,
bendDir
)
);
path.setAttribute("class", "connection-path");

connectionLayer.appendChild(path);
});
}

function renderImages(colorIndex){
  if(colorIndex === currentColorIndex) return;
  
  currentColorIndex = colorIndex;

  // 🔥 추가 (여기!)
  localStorage.setItem("currentColorIndex", colorIndex);

  cluster.querySelectorAll(".color-photo").forEach((img) => img.remove());

  const layouts = PHOTO_LAYOUTS[colorIndex] || [];

  drawConnections(layouts);

  layouts.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.file;
    img.alt = item.title || "";
    img.className = "color-photo";

    img.style.left = item.left + "px";
    img.style.top = item.top + "px";
    img.style.width = item.width + "px";
    img.style.height = item.height + "px";

    img.addEventListener("click", () => {
      window.location.href = `detail.html?item=${encodeURIComponent(item.slug)}`;
    });

    cluster.appendChild(img);

    requestAnimationFrame(() => {
      img.classList.add("show");
    });
  });
}

function rebuildLayouts(){
  Object.keys(PHOTO_LAYOUTS).forEach((key) => {
    delete PHOTO_LAYOUTS[key];
  });

  buildLayoutsOnce();

  if(currentColorIndex >= 0){
    renderImages(currentColorIndex);
  }
}
let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    rebuildLayouts();
  }, 180);
});

function setSliderByIndex(index){
  const pct = index / (COLORS.length - 1);
  thumb.style.left = (pct * 100) + "%";
  dot.style.background = gradientAt(pct);
}
function setByClientX(clientX){
const r = track.getBoundingClientRect();
const x = Math.min(Math.max(clientX - r.left, 0), r.width);
const pct = x / r.width;



thumb.style.left = (pct * 100) + "%";
dot.style.background = gradientAt(pct);

const nearestIndex = getNearestColorIndex(pct);
renderImages(nearestIndex);
}

function startDrag(e){
  dragging = true;
  setByClientX(e.clientX);
}

function moveDrag(e){
  if(!dragging) return;
  setByClientX(e.clientX);
}

function endDrag(){
  dragging = false;
}

thumb.addEventListener("pointerdown", startDrag);
track.addEventListener("pointerdown", startDrag);

window.addEventListener("pointermove", moveDrag);
window.addEventListener("pointerup", endDrag);
window.addEventListener("pointercancel", endDrag);

const pages = [
  ["Index","mainpage.html"],
  ["News","news.html"],
  ["About","about.html"],
  ["Contact","contact.html"]
];

const nav = document.querySelector(".nav");
const current = location.pathname.split("/").pop() || "mainpage.html";

pages.forEach(([label, file]) => {
  const btn = document.createElement("button");
  btn.className = "pill";
  btn.textContent = label;

  if(current === file) btn.classList.add("active");

  btn.onclick = () => {
    window.location.href = file;
  };

  nav.appendChild(btn);
});

async function init(){
  await preloadAllImages();
  buildLayoutsOnce();

  const saved = localStorage.getItem("currentColorIndex");
  const startIndex = saved !== null ? parseInt(saved, 10) : 0;

  setSliderByIndex(startIndex);
  renderImages(startIndex);
}

init();