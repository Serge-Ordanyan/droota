from PIL import Image
import os

# Input: all images in this folder
input_folder = "./public/images/galleries"

# Output: resized images go here
output_folder = "./public/images/resized"
os.makedirs(output_folder, exist_ok=True)

# Target dimensions
TARGET_WIDTH = 1000
TARGET_HEIGHT = 636
TARGET_WIDTH_MOBILE = 786

# WebP quality
WEBP_QUALITY = 85

print(f"\n📂 Processing images in: {input_folder}")

for filename in os.listdir(input_folder):
    if filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
        input_path = os.path.join(input_folder, filename)
        name_without_ext = os.path.splitext(filename)[0]

        # Output filenames
        output_path = os.path.join(output_folder, f"{name_without_ext}.webp")
        output_path_mobile = os.path.join(output_folder, f"{name_without_ext}-mobile.webp")

        try:
            img = Image.open(input_path).convert("RGB")

            # Resize for desktop
            resized = img.resize((TARGET_WIDTH, TARGET_HEIGHT), Image.LANCZOS)
            resized.save(output_path, "WEBP", quality=WEBP_QUALITY)

            # Resize for mobile (proportional height)
            mobile_ratio = TARGET_WIDTH_MOBILE / img.width
            mobile_height = int(img.height * mobile_ratio)
            resized_mobile = img.resize((TARGET_WIDTH_MOBILE, mobile_height), Image.LANCZOS)
            resized_mobile.save(output_path_mobile, "WEBP", quality=WEBP_QUALITY)

            print(f"✅ {filename} → {name_without_ext}.webp & -mobile.webp")

        except Exception as e:
            print(f"❌ Error processing {filename}: {e}")

print("\n🎉 Done! All resized images saved in 'public/images/resized'")
