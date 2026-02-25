---
title: "Flow Management"
---
# Flow Management

## Purpose
A structured experiment flow system:
Session → Task → Trial

## Clear-box rule (important)
The Flow Management scripts in `Assets/ResXR/Flow Management/` are intentionally simple **template stubs you edit directly**.
You own them. Implement your logic inside their placeholder methods.
Flow is primarily built using UniTask async methods, ensuring that experiment logic runs asynchronously and never blocks Unity's main player loop.

If you ship multiple experiments in one project, you may duplicate/rename scripts for convenience (demo experiments do this via prefixes like `Maze_SessionManager`).

## Files
- `Assets/ResXR/Flow Management/SessionManager.cs`
- `Assets/ResXR/Flow Management/TaskManager.cs`
- `Assets/ResXR/Flow Management/TrialManager.cs`
- `Assets/ResXR/Flow Management/Task.cs`
- `Assets/ResXR/Flow Management/Trial.cs`

## What to implement
SessionManager:
- StartSession()
- EndSession()
- BetweenTasksFlow()

TaskManager:
- StartTask()
- EndTask()
- BetweenTrialsFlow()

TrialManager:
- StartTrial()
- EndTrial()

## Extend Task/Trial data
You can extend `Task` and `Trial` with your own serializable fields and configure them in the Inspector.
