#!/bin/bash

# תיקיית המקור של הרפוזיטורי הפנימי
INNER_REPO="all-dentals-hub"

# תיקיית היעד
TARGET_DIR="frontend"

# עדכון הרפוזיטורי הפנימי
echo "Updating inner repository..."
cd $INNER_REPO || { echo "Inner repository not found"; exit 1; }
git pull origin main || { echo "Failed to update inner repository"; exit 1; }
cd ..

# מחיקת הקבצים הקיימים בתיקיית היעד (למניעת שאריות)
echo "Cleaning target directory..."
rm -rf $TARGET_DIR

# העתקת התוכן לתיקיית היעד
echo "Copying files to $TARGET_DIR..."
rsync -av --exclude='.git' $INNER_REPO/ $TARGET_DIR/

echo "Sync completed successfully!"
