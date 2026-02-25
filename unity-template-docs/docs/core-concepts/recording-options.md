---
title: "Recording Options"
---
# Recording Options

Recording options live on `ResXR_DataManager_V2` (Inspector). They control schema columns + collector behavior.

## Gaze-related options
### Include Gaze
Adds combined (cyclopean) gaze columns to ContinuousData:
- `FocusedObject` (string: name or "")
- `EyeGazeHitPosition_X/Y/Z` (world space)

### Include Separate Eyes Gaze
Adds per-eye gaze columns to ContinuousData:
- `LeftEyeGazeHitPosition_X/Y/Z`
- `RightEyeGazeHitPosition_X/Y/Z`
- `LeftFocusedObject` (string: name or "")
- `RightFocusedObject` (string: name or "")
- `HasLeftEyeHit` (0/1)
- `HasRightEyeHit` (0/1)

Performance behavior:
- Combined ray is used for gameplay and always computed when both eyes are confident.
- Per-eye raycasts are optional and only run when `Include Separate Eyes Gaze` is enabled.
  - OFF: 1 raycast (combined only)
  - ON: up to 3 raycasts (left, right, combined)

## Other options
(Head/hands/body/face/controllers etc are controlled by the other include flags in RecordingOptions and determine which collectors + columns are present.)
