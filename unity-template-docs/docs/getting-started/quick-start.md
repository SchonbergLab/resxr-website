---
title: "Quick Start"
---
# Quick Start

## 1) Choose a Base Scene
Pick one:
- `Base Scene.unity`
- `Base Scene With Meta Interactions.unity`

* `Base Scene With Meta Interactions.unity` is made to utilize the Meta Interactions components available straight from the Meta SDK.

## 2) Create your experiment scene
1. Duplicate:
   `Assets/Project Folder/New ResXRScene [Duplicate].unity`
2. Rename it (example): `MyExperiment.unity`
3. Add it to Build Settings (after the Base Scene)

## 3) Edit SceneReferencer directly
The template scene includes an empty `SceneReferencer`. You **edit it directly** and add your experiment references:
- stimulus objects
- UI panels
- configuration values

## 4) Edit Flow Management scripts directly
Open and edit these template stubs directly:
- `Assets/ResXR/Flow Management/SessionManager.cs`
- `Assets/ResXR/Flow Management/TaskManager.cs`
- `Assets/ResXR/Flow Management/TrialManager.cs`

Implement placeholders like:
- Start/End session
- Between tasks
- Between trials
- Start/End trial

(If you ship multiple experiments in one project, you may duplicate/rename these scripts for convenience, like the demo experiments do.)

## 5) Run
- `ProjectInitializer` automatically initializes systems and loads the first scene via `ResXRSceneManager`.
