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

export function toHSL(rgb, alpha = 1) {
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

export function hslToHex(color) {
  let { h, s, l } = color;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function darken(color, amount = 0) {
  return {
    h: color.h,
    s: color.s,
    l: clamp(color.l - amount / 100, 1),
    a: color.a,
  };
}

export function lighten(color, amount = 0) {
  return {
    h: color.h,
    s: color.s,
    l: clamp(color.l + amount / 100, 1),
    a: color.a,
  };
}

export function saturate(color, amount = 0) {
  return {
    h: color.h,
    s: clamp(color.s + amount / 100, 1),
    l: color.l,
    a: color.a,
  };
}

export function toCSS(json) {
  return (
    Object.entries(json)
      .map(([k, v]) => `${k}: ${v}`)
      .join(';\n') + ';\n'
  );
}

export function randomNumberGenerator(low, high, length) {
  var a = [];

  while (length > 0) {
    const value = Math.floor(Math.random() * high) + low;
    if (a.indexOf(value) === -1) {
      a.push(value);
      length--;
    }
  }

  return a;
}

export const colors = [
  '#004B7F', // primary color
  '#007B6C', // secondary color
  '#3D5265', // tertiary color
  '#B83230', // error state
  '#FF9933', // warning state
  '#007B6C', // success state
  '#004B7F', // info state
  '#005248', // green shade
  '#007B6C', // green shade
  '#00A390', // green shade
  '#00CCB4', // green shade
  '#00F5D8', // green shade
  '#85FFF1', // green shade
  '#C8FFF8', // green shade
  '#2E3E4C', // blue grey
  '#3D5265', // blue grey
  '#4C677F', // blue grey
  '#6989A5', // blue grey
  '#8EA6C2', // blue grey
  '#ACCAE5', // blue grey
  '#DAE8F4', // blue grey
  '#C35527', // yellow shade
  '#FF9933', // yellow shade
  '#FDAF20', // yellow shade
  '#FAC50D', // yellow shade
  '#FAD936', // yellow shade
  '#FBEC9B', // yellow shade
  '#FEF6CD', // yellow shade
  '#5C1918', // red shade
  '#B83230', // red shade
  '#C65B59', // red shade
  '#D78890', // red shade
  '#E7B2C0', // red shade
  '#F6DDF0', // red shade
  '#FBEEF8', // red shade
  '#003052', // blue shade
  '#004B7F', // blue shade
  '#006BB8', // blue shade
  '#0083E0', // blue shade
  '#0A99FF', // blue shade
  '#47B3FF', // blue shade
  '#A0D7FF', // blue shade
  '#000000', // grey shade
  '#323232', // grey shade
  '#747678', // grey shade
  '#BCBEC0', // grey shade
  // '#E6E7E8', // grey shade
  // '#F9F9F9', // grey shade
  // '#FFFFFF', // white
];
