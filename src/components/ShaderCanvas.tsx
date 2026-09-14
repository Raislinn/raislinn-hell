"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uReduce;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.07;
    a *= 0.5;
  }
  return v;
}

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes.xy) / uRes.y;
  vec2 m = (uMouse - 0.5) * 0.25;
  p -= m * 0.35;

  float t = uTime * (0.22 + 0.55 * (1.0 - uReduce));

  // fog
  vec2 fp = p * 1.6 + vec2(0.0, t * 0.12);
  float fog = fbm(fp);
  fog = pow(fog, 1.35);

  vec3 col = vec3(0.02, 0.03, 0.02);
  col += vec3(0.02, 0.07, 0.035) * fog;
  col += vec3(0.08, 0.01, 0.01) * pow(1.0 - uv.y, 2.4) * 0.45;

  // neon vertical streaks
  float streaks = 0.0;
  float bloodStreaks = 0.0;
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float x = -0.95 + fi * 0.31 + 0.06 * sin(t * 0.7 + fi * 1.7);
    float d = abs(p.x - x);
    float n = noise(vec2(p.y * 14.0 + t * 1.4, fi));
    float w = 0.0018 + 0.007 * n;
    float s = smoothstep(w, 0.0, d) * (0.25 + 0.75 * n);
    s *= 0.35 + 0.65 * smoothstep(-0.9, 0.2, p.y);
    if (mod(fi, 2.0) < 0.5) bloodStreaks += s;
    else streaks += s;
  }
  col += vec3(0.12, 0.95, 0.32) * streaks * 0.55;
  col += vec3(0.72, 0.08, 0.08) * bloodStreaks * 0.5;

  // wireframe sphere
  vec2 sp = p - vec2(0.02, 0.04);
  float rad = 0.42;
  float r = length(sp);
  if (r < rad) {
    float z = sqrt(max(rad * rad - r * r, 0.0));
    vec3 nrm = vec3(sp, z) / rad;
    float ang = t * 0.55;
    nrm.xz = rot(ang) * nrm.xz;
    nrm.xy = rot(0.35) * nrm.xy;
    float lat = acos(clamp(nrm.y, -1.0, 1.0));
    float lon = atan(nrm.x, nrm.z);
    float lineA = abs(sin(lat * 10.0));
    float lineB = abs(sin(lon * 10.0));
    float lines = 1.0 - smoothstep(0.0, 0.08, min(lineA, lineB));
    float rim = pow(1.0 - abs(nrm.z), 2.2);
    vec3 sph = mix(vec3(0.05, 0.18, 0.08), vec3(0.22, 1.0, 0.45), lines);
    sph += vec3(0.7, 0.08, 0.08) * rim * 0.55;
    float alpha = smoothstep(rad, rad - 0.01, r);
    col = mix(col, col + sph * 0.85, alpha * 0.72);
    col += vec3(0.15, 0.6, 0.28) * rim * 0.25;
  } else {
    float halo = smoothstep(0.62, rad, r);
    col += vec3(0.05, 0.18, 0.08) * halo * 0.25;
  }

  // chromatic fringe at edges
  float edge = pow(length((uv - 0.5) * 1.4), 2.2);
  col.r += edge * 0.05;
  col.g += fog * 0.02;
  col.b += edge * 0.02;

  // grain
  float g = hash(gl_FragCoord.xy + fract(uTime) * 17.0) * 0.07;
  col += g;

  // vignette
  col *= 1.0 - edge * 0.55;

  col = clamp(col, 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export default function ShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.bindAttribLocation(prog, 0, "aPos");
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uReduce = gl.getUniformLocation(prog, "uReduce");

    const mouse = { x: 0.5, y: 0.5 };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let running = true;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
      const scale = isMobile ? 0.55 : 0.85;
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const draw = (now: number) => {
      if (!running) return;
      resize();
      const t = (now - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uReduce, reduce ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (reduce) return;
      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    resize();
    raf = requestAnimationFrame(draw);
    if (reduce) {
      // single frame already scheduled
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <div className="shader-wrap" aria-hidden>
      <div className="shader-fallback" />
      <canvas ref={canvasRef} className="relative z-[1] h-full w-full" />
    </div>
  );
}
