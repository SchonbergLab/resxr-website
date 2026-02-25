---
title: "ContinuousData schema"
---
# ContinuousData schema

This page is the human-readable "column ← source" map.

## Timing
- `timeSinceStartup` (double): Unity Time.realTimeSinceStartup

## Coordinate space conversion
Most OVRPlugin spatial values originate in tracking space and are converted to Unity world space.
Hand bones remain hand-local space.

## Gaze (combined / cyclopean)
- FocusedObject ← ResXRPlayer.Instance.FocusedObject (string name or "")
- EyeGazeHitPosition_X/Y/Z ← ResXRPlayer.Instance.EyeGazeHitPosition (world space)

Combined ray rules:
- Runs only when BOTH eyes confidence >= threshold
- Otherwise outputs are cleared (no raycast)

## Gaze (per-eye, optional)
Only when RecordingOptions.includeSeparateEyesGaze is true:
- LeftEyeGazeHitPosition_X/Y/Z
- RightEyeGazeHitPosition_X/Y/Z
- LeftFocusedObject / RightFocusedObject (name or "")
- HasLeftEyeHit / HasRightEyeHit (0/1)

Performance:
- OFF: 1 raycast (combined only)
- ON: up to 3 raycasts (left, right, combined)
Combined ray is always computed for gameplay when both eyes are confident.

## Dedicated eye gaze API (orientation + confidence)
- RightEye_qx/qy/qz/qw
- LeftEye_qx/qy/qz/qw
- LeftEye_IsValid, RightEye_IsValid (0/1)
- LeftEye_Confidence, RightEye_Confidence
- Eyes_Time (double)

## Nodes / Hands / Body / Custom transforms
(Use the `data_sources_README.txt` mapping as the ground-truth reference for these fields.)
