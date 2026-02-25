---
title: "ResXRPlayer"
---
# ResXRPlayer

**Location**: `Assets/ResXR/Base Scene/ResXRPlayer/`  
**Purpose**: central player singleton exposing tracking + input systems.

## Key properties
- PlayerHead, LeftHand, RightHand
- HandLeft / HandRight (ResXRHand)
- EyeTracker (ResXREyeTracker)
- FocusedObject (combined gaze)
- EyeGazeHitPosition (combined gaze hit in world space)
- LeftEye / RightEye transforms
- OVRFace (OVRFaceExpressions component is on the prefab and assigned in Inspector)
- IsEyeTrackingEnabled / IsFaceTrackingEnabled
- ControllersInputManager
- PinchingInputManager

## Common usage
- Check gaze:
  - `ResXRPlayer.Instance.FocusedObject`
  - `ResXRPlayer.Instance.EyeGazeHitPosition`
- Access eye tracker:
  - `ResXRPlayer.Instance.EyeTracker`
- Toggle passthrough (via headset services / helper APIs)
