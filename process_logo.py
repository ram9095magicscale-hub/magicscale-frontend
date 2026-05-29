from PIL import Image

img_path = '/Users/macbook/Desktop/magicscale-frontend/src/assets/partners/mr.sandwich.png'
img = Image.open(img_path)
width, height = img.size
bbox = img.getbbox()

# Let's count how many non-transparent pixels are at the very top of the bounding box (y = bbox[1])
# and at the very bottom of the bounding box (y = bbox[3] - 1)
y_top = bbox[1]
y_bottom = bbox[3] - 1

non_trans_top = sum(1 for x in range(bbox[0], bbox[2]) if img.getpixel((x, y_top))[3] > 0)
non_trans_bottom = sum(1 for x in range(bbox[0], bbox[2]) if img.getpixel((x, y_bottom))[3] > 0)

print(f"Bounding box width: {bbox[2] - bbox[0]}")
print(f"Non-transparent pixels at top bounding row (y={y_top}): {non_trans_top}")
print(f"Non-transparent pixels at bottom bounding row (y={y_bottom}): {non_trans_bottom}")
