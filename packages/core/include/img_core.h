#pragma once
#include <cstdint>

extern "C" {

// MVP: いったん入力bytesをそのまま返す（後で本物に差し替え）
// out_len に出力サイズを書き込む
uint8_t* img_optimize(
  const uint8_t* data, int len,
  int target_kb,
  int max_w, int max_h,
  int out_format,
  int q_min, int q_max,
  int fix_orientation,
  int* out_len
);

void img_free(void* p);

} // extern "C"
