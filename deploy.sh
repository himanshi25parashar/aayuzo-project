#!/bin/bash

echo "🚀 AAYUZO DEPLOY STARTED"

# FRONTEND
echo "📦 Building React frontend..."
cd frontend
npm run build

echo "🚚 Deploying frontend to public_html..."
rm -rf ../public_html/*
cp -r build/* ../public_html/

echo "✅ FRONTEND DEPLOYED"

# BACKEND (later use)
if [ -d "../backend" ]; then
  echo "🚚 Deploying backend..."
  rsync -av --exclude='.env' ../backend/ ../public_html/
fi

echo "🎉 DEPLOY COMPLETE"
