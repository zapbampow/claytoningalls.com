#!/bin/bash

# Define paths
BUILD_DESTINATION="/var/www/claytoningalls.com"
OLD_BUILD="/home/clayton/claytoningalls.com/.build/oldBuild"
DIST_DIR="/home/clayton/claytoningalls.com/dist"

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
astro check && astro build

# Ensure viteDestination exists and copy dist contents to it
mkdir -p "$BUILD_DESTINATION"
cp -r "$DIST_DIR"/* "$BUILD_DESTINATION"