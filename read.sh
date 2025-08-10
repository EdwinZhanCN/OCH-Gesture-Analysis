# 整图灰度均值 → CSV（文件名, 灰度0-255）
for f in test/*.jpg;       do magick "$f" -colorspace Gray -format "%f,%[fx:mean*255]\n" info:; done > normal_test_brightness.csv
for f in train/*.jpg; do magick "$f" -colorspace Gray -format "%f,%[fx:mean*255]\n" info:; done > normal_train_brightness.csv
for f in valid/*.jpg;     do magick "$f" -colorspace Gray -format "%f,%[fx:mean*255]\n" info:; done > normal_valid_brightness.csv
