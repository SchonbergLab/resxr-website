---
title: "Multi-experiment setup"
---
# Multi-experiment setup

Recommended default:
- Edit Flow Management scripts directly for your experiment.

If you ship multiple experiments in one project:
- Duplicate and rename Flow Management scripts per experiment (like the demo experiments do):
  - Maze_SessionManager, BinaryChoice_SessionManager, etc.

Scene management:
- Base Scene persists
- Experiment scenes load additively via ResXRSceneManager
