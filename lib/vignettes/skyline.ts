import * as THREE from "three";
import { SKYLINE_BASE64, SKYLINE_BINS } from "./generated/skyline";

// The real horizon from the pier (see scripts/build-skyline.mjs), unpacked
// into a one-row texture the sky shaders read by bearing: elevation angle in
// radians, distance in meters, a building id (0–1) and the kind of thing.

export function skylineTexture(): THREE.DataTexture {
  const bytes = Uint8Array.from(atob(SKYLINE_BASE64), (c) => c.charCodeAt(0));
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const data = new Float32Array(SKYLINE_BINS * 4);
  for (let i = 0; i < SKYLINE_BINS; i++) {
    const o = i * 7;
    const kind = view.getUint8(o + 6);
    const deg = view.getUint16(o, true) * 0.0005;
    // Nothing there: hold the edge a little below the horizon.
    data[i * 4] = kind === 0 ? -0.02 : (deg * Math.PI) / 180;
    data[i * 4 + 1] = view.getUint16(o + 2, true) * 2;
    data[i * 4 + 2] = view.getUint16(o + 4, true) / 65535;
    data[i * 4 + 3] = kind;
  }
  const tex = new THREE.DataTexture(data, SKYLINE_BINS, 1, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.wrapS = THREE.RepeatWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
