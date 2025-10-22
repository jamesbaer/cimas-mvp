// src/lib/polyline.ts
const CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function dch(c: string){ const i = CH.indexOf(c); if (i === -1) throw new Error("Invalid char:"+c); return i; }
function toSigned(v: number){ return (v & 1) ? (~v >> 1) : (v >> 1); }

export function decodeFlexPolyline(encoded: string): [number, number][] {
  let pos = 0;
  function next(){ let r=0,s=0,v; do { v=dch(encoded[pos++]); r|=(v&0x1f)<<s; s+=5; } while (v&0x20); return r; }
  const ver = next(); if (ver !== 1) throw new Error("Unsupported version:"+ver);
  const header = next(); const prec = header & 15; const third = (header>>4)&7; const tprec = (header>>8)&15;
  const f2d = Math.pow(10, prec); const f3d = Math.pow(10, tprec);
  let lat=0,lng=0,z=0; const out: [number,number][] = [];
  while (pos < encoded.length){
    lat += toSigned(next()); lng += toSigned(next());
    const p: [number,number] = [lat/f2d, lng/f2d];
    if (third){ z += toSigned(next()); /* ignore z */ }
    out.push(p);
  }
  return out;
}
