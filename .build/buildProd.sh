#!/bin/bash

# Define paths
BUILD_DESTINATION="/etc/www/claytoningalls.com"
OLD_BUILD="/Users/claytoningalls/Documents/Code/testCode/viteTest/oldBuild"
DIST_DIR="/Users/claytoningalls/Documents/Code/testCode/viteTest/dist"

# Remove and recreate oldBuild directory
rm -rf "$OLD_BUILD"
mkdir -p "$OLD_BUILD"

# delete the contents of viteDestination
rm -rf "$BUILD_DESTINATION"/*

# Copy from viteDestination to oldBuild only if viteDestination exists and is not empty
if [ -d "$BUILD_DESTINATION" ] && [ "$(ls -A $BUILD_DESTINATION 2>/dev/null)" ]; then
    cp -r "$BUILD_DESTINATION"/* "$OLD_BUILD"
fi

# Run build
vite build

# Ensure viteDestination exists and copy dist contents to it
mkdir -p "$BUILD_DESTINATION"
cp -r "$DIST_DIR"/* "$VITE_DESTINATION"