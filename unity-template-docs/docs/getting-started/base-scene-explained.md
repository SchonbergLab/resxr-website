---
title: "Base Scene Explained"
---
# Base Scene Explained

## What is the Base Scene?
The Base Scene loads first and persists for the whole runtime. It contains core systems that must stay alive across experiment scenes:
- ResXRPlayer (tracking + input)
- ResXRSceneManager (additive scene loading)
- ResXRDataManager_V2 (data export)

## ProjectInitializer
Coordinates:
1. Room calibration (optional)
2. Scene manager initialization
3. First experiment scene load

## Base scene variants
- `Base Scene.unity` (standard)
- `Base Scene With Meta Interactions.unity` (includes Meta Interactions SDK)

Both load your experiment scene additively using `ResXRSceneManager`.
