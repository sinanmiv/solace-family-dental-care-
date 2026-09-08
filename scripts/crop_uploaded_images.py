import os
from PIL import Image

src_img_path = r'C:\Users\USER\.gemini\antigravity\brain\1f643677-7a31-4efe-b913-7c516d786875\.user_uploaded\media_1788709840892.jpg'
out_dir = r'C:\Users\USER\.gemini\antigravity\scratch\solace-dental\public\images\services'

os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_img_path)
width, height = img.size # 480, 1024

# Mapping grid position (row 0-4, col 0-1) to service filename
# Row 0: Checkups (left), Cleaning (right)
# Row 1: Fillings (left), Root-Canal (right)
# Row 2: Restorative (left), Implants (right)
# Row 3: Orthodontics (left), Aligners (right)
# Row 4: Veneers (left), Smile-Correction (right)

grid_mapping = [
    [("checkups.jpg", "Preventive / Checkups"), ("cleaning.jpg", "Cleaning & Scaling")],
    [("fillings.jpg", "Fillings"), ("root-canal.jpg", "Root Canal Treatment")],
    [("restorative.jpg", "Restorative"), ("implants.jpg", "Dental Implants")],
    [("orthodontics.jpg", "Orthodontics"), ("aligners.jpg", "Clear Aligners")],
    [("veneers.jpg", "Veneers"), ("smile-correction.jpg", "Smile Correction")]
]

cell_w = width / 2.0 # 240
cell_h = height / 5.0 # 204.8

# Black bar at bottom of each cell is ~28px height, plus outer margins/borders
# Let's crop photo area cleanly inside each cell box

for row in range(5):
    for col in range(2):
        filename, name = grid_mapping[row][col]
        
        # Calculate cell bounding box with padding to exclude outer border and black label text bar
        box_left = int(col * cell_w + 3)
        box_right = int((col + 1) * cell_w - 3)
        box_top = int(row * cell_h + 3)
        box_bottom = int((row + 1) * cell_h - 32) # Exclude black label bar

        cropped = img.crop((box_left, box_top, box_right, box_bottom))
        
        out_path = os.path.join(out_dir, filename)
        cropped.save(out_path, quality=95)
        print(f"Saved {filename} -> {out_path} ({cropped.size})")

print("All 10 service images cropped successfully!")
