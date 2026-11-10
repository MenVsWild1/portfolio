// Decorative Three.js background. It deliberately avoids post-processing,
// shadows, high device-pixel ratios and continuous rendering on hidden tabs.
const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js";

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const compactQuery = window.matchMedia("(max-width: 760px)");
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const lowPowerDevice =
    connection?.saveData ||
    (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

if (!motionQuery.matches && !compactQuery.matches && !lowPowerDevice) {
    startAmbientScene().catch(() => {
        // CSS gradients remain as a no-WebGL / no-CDN fallback.
    });
}

async function startAmbientScene() {
    const THREE = await import(THREE_URL);

    const canvas = document.createElement("canvas");
    canvas.className = "three-scene";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
            stencil: false,
            depth: true
        });
    } catch {
        canvas.remove();
        return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.15));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        43,
        window.innerWidth / Math.max(window.innerHeight, 1),
        0.1,
        40
    );
    camera.position.set(0, 0, 8.6);

    const object = new THREE.Group();
    scene.add(object);

    const innerGlow = new THREE.Mesh(
        new THREE.SphereGeometry(1.27, 28, 20),
        new THREE.MeshBasicMaterial({
            color: 0x416b94,
            transparent: true,
            opacity: 0.055,
            depthWrite: false
        })
    );
    object.add(innerGlow);

    const crystalGeometry = new THREE.IcosahedronGeometry(1.42, 1);
    const crystal = new THREE.Mesh(
        crystalGeometry,
        new THREE.MeshBasicMaterial({
            color: 0x7da8d1,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
            depthWrite: false
        })
    );
    object.add(crystal);

    const frameGeometry = new THREE.EdgesGeometry(
        new THREE.IcosahedronGeometry(1.47, 0),
        12
    );
    const frame = new THREE.LineSegments(
        frameGeometry,
        new THREE.LineBasicMaterial({
            color: 0xa8cbed,
            transparent: true,
            opacity: 0.42,
            depthWrite: false
        })
    );
    object.add(frame);

    const rings = new THREE.Group();
    object.add(rings);

    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x86afd5,
        transparent: true,
        opacity: 0.22,
        depthWrite: false
    });
    const ringA = new THREE.Mesh(
        new THREE.TorusGeometry(1.95, 0.006, 4, 180),
        ringMaterial
    );
    ringA.rotation.set(1.05, 0.18, 0.28);
    rings.add(ringA);

    const ringB = new THREE.Mesh(
        new THREE.TorusGeometry(2.16, 0.004, 4, 180),
        new THREE.MeshBasicMaterial({
            color: 0x7599bf,
            transparent: true,
            opacity: 0.12,
            depthWrite: false
        })
    );
    ringB.rotation.set(0.48, 0.88, -0.62);
    rings.add(ringB);

    // A small, sparse set of points gives the crystal a quiet network feel.
    const nodePositions = [];
    const nodeCount = 86;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodeCount; i += 1) {
        const y = 1 - (i / (nodeCount - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const angle = goldenAngle * i;
        nodePositions.push(
            Math.cos(angle) * radius * 1.49,
            y * 1.49,
            Math.sin(angle) * radius * 1.49
        );
    }
    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(nodePositions, 3)
    );
    const nodes = new THREE.Points(
        nodesGeometry,
        new THREE.PointsMaterial({
            color: 0xc6e0f6,
            size: 0.025,
            transparent: true,
            opacity: 0.62,
            sizeAttenuation: true,
            depthWrite: false
        })
    );
    object.add(nodes);

    const satellite = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 12, 10),
        new THREE.MeshBasicMaterial({
            color: 0xd5e8fa,
            transparent: true,
            opacity: 0.8
        })
    );
    object.add(satellite);

    let targetX = 0;
    let targetY = 0;
    let frameId = 0;
    let lastRender = 0;
    let elapsed = 0;
    const frameInterval = 1000 / 28;

    function positionScene() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);

        const halfViewWidth = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5))
            * camera.position.z * camera.aspect;
        object.position.set(Math.max(0.75, halfViewWidth - 2.25), 0.38, -0.45);
        const scale = Math.min(1, Math.max(0.76, height / 900));
        object.scale.setScalar(scale);
    }

    function animate(now) {
        frameId = 0;
        if (document.hidden) return;

        if (now - lastRender >= frameInterval) {
            const delta = Math.min((now - (lastRender || now)) / 1000, 0.06);
            elapsed += delta;
            lastRender = now;

            object.rotation.x += (targetY * 0.08 - object.rotation.x) * 0.018;
            object.rotation.y += (targetX * 0.1 - object.rotation.y) * 0.018 + delta * 0.035;
            object.rotation.z += delta * 0.008;
            rings.rotation.z = Math.sin(elapsed * 0.16) * 0.055;
            satellite.position.set(
                Math.cos(elapsed * 0.34) * 2.02,
                Math.sin(elapsed * 0.34) * 0.42,
                Math.sin(elapsed * 0.34) * 1.72
            );

            renderer.render(scene, camera);
        }
        frameId = window.requestAnimationFrame(animate);
    }

    function start() {
        if (!frameId && !document.hidden && !motionQuery.matches && !compactQuery.matches) {
            frameId = window.requestAnimationFrame(animate);
        }
    }

    function stop() {
        if (frameId) window.cancelAnimationFrame(frameId);
        frameId = 0;
    }

    function onPointerMove(event) {
        targetX = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
        targetY = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    }

    function onVisibilityChange() {
        if (document.hidden) stop();
        else start();
    }

    function onPreferenceChange() {
        if (motionQuery.matches || compactQuery.matches) stop();
        else start();
    }

    positionScene();
    window.addEventListener("resize", positionScene, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionQuery.addEventListener?.("change", onPreferenceChange);
    compactQuery.addEventListener?.("change", onPreferenceChange);

    canvas.addEventListener("webglcontextlost", event => {
        event.preventDefault();
        stop();
        canvas.remove();
    }, { once: true });

    window.addEventListener("pagehide", () => {
        stop();
        window.removeEventListener("resize", positionScene);
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        renderer.dispose();
        crystalGeometry.dispose();
        frameGeometry.dispose();
        nodesGeometry.dispose();
    }, { once: true });

    start();
}
