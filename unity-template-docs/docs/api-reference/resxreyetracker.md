---
title: "ResXREyeTracker"
---
# ResXREyeTracker

**Location**: `Assets/ResXR/Base Scene/ResXRPlayer/ResXR Eye Tracker/ResXREyeTracker.cs`  
**Purpose**: gaze raycasts + hit points + focused object.

## Outputs (combined gaze)
- FocusedObject (Transform)
- EyeGazeHitPosition (Vector3)
- EyePosition (midpoint of eyes)

Combined ray behavior:
- Runs when both eyes confidence ≥ threshold.
- Origin: midpoint between left and right eye positions
- Direction: normalized sum of left/right eye forward vectors

## Outputs (per-eye gaze)
(Valid only when separate-eye raycasts are enabled)
- LeftEyeGazeHitPosition / RightEyeGazeHitPosition
- LeftFocusedObject / RightFocusedObject
- HasLeftEyeHit / HasRightEyeHit

## Performance gating
- Combined ray is always computed (for gameplay).
- Per-eye raycasts are optional and used when "Include Separate Eyes Gaze" is enabled in DataManager recording options.

Raycast count:
- OFF: 1 raycast (combined)
- ON: up to 3 raycasts (left, right, combined)
