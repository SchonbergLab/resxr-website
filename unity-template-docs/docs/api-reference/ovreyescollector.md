---
title: "OVREyesCollector"
---
# OVREyesCollector

**Location**: `Assets/ResXR/Base Scene/ResXRDataManager_V2/Collectors/OVREyesCollector.cs`  
**Purpose**: records eye tracking streams into ContinuousData.csv

Records:
- Dedicated eye gaze orientation (L/R quaternions), valid flags, confidence, Eyes_Time
- Combined gaze hit:
  - FocusedObject (string name or "")
  - EyeGazeHitPosition_X/Y/Z (world space)
- Optional per-eye hit points and focused objects when Include Separate Eyes Gaze is enabled:
  - Left/RightEyeGazeHitPosition_X/Y/Z
  - Left/RightFocusedObject
  - HasLeftEyeHit / HasRightEyeHit
