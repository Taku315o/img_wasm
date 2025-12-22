#include "img_core.h"
#include <cstdlib>
#include <cstring>

extern "C" {

uint8_t* img_optimize(
  const uint8_t* data, int len,
  int /*target_kb*/,
  int /*max_w*/, int /*max_h*/,
  int /*out_format*/,
  int /*q_min*/, int /*q_max*/,
  int /*fix_orientation*/,
  int* out_len
) {
  if (!data || len <= 0 || !out_len) return nullptr;

  // MVP: 入力をそのままコピーして返すだけ
  uint8_t* out = (uint8_t*)std::malloc((size_t)len);
  if (!out) return nullptr;

  std::memcpy(out, data, (size_t)len);
  *out_len = len;
  return out;
}

void img_free(void* p) {
  std::free(p);
}

} // extern "C"
