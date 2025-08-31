#!/bin/bash

# Deployment setup script for Vercel
echo "Setting up deployment..."

# Move Images folder to public directory if it exists in root
if [ -d "Images" ]; then
    echo "Moving Images folder to public directory..."
    mv Images public/
    echo "Images folder moved successfully!"
else
    echo "Images folder not found in root directory."
fi

# Check if Images folder exists in public directory
if [ -d "public/Images" ]; then
    echo "Images folder is correctly placed in public directory."
else
    echo "Warning: Images folder not found in public directory!"
fi

echo "Deployment setup complete!"
