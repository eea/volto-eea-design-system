function clamp(v, max) {
  return Math.min(Math.max(v, 0), max);
}

export function toHex(v) {
  return `#${v
    .map((c) => {
      c = clamp(Math.round(c), 255);
      return (c < 16 ? '0' : '') + c.toString(16);
    })
    .join('')}`;
}

export function toRGB(hex) {
  if (!hex) return null;
  let _hex = hex;
  if (hex.length === 4) {
    _hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

export function toHSL(rgb, alpha) {
  // console.log('HERE', rgb);
  // return { h: 100, s: 1, l: 0.7 };
  if (!rgb) {
    return null;
  }
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const a = alpha;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;
  const d = max - min;

  if (max === min) {
    h = s = 0;
  } else {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s, l, a };
}

export function toCSS(json) {
  return (
    Object.entries(json)
      .map(([k, v]) => `${k}: ${v}`)
      .join(';\n') + ';\n'
  );
}
