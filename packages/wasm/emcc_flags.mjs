export const EMCC_FLAGS = [
  "-O3",
  "-std=c++17",

  // Web向け
  "-s", "WASM=1",
  "-s", "ENVIRONMENT=web,worker",
  "-s", "MODULARIZE=1",
  "-s", "EXPORT_ES6=1",
  "-s", "ALLOW_MEMORY_GROWTH=1",

  // 触る関数を明示（最小）
  "-s", "EXPORTED_FUNCTIONS=[\"_img_optimize\",\"_img_free\",\"_malloc\",\"_free\"]",
  "-s", "EXPORTED_RUNTIME_METHODS=[\"getValue\",\"setValue\"]"
];
