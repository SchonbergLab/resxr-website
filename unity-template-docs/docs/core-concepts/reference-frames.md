---
title: "Reference Frames"
---
# Reference Frames

## Key idea
ResXR data is mostly reported in Unity world coordinates, but some streams originate in Meta tracking space.

### Coordinate space conversion
OVRPlugin APIs return tracking space (right-handed) data relative to the VR play-area origin.
ResXR converts most spatial data into Unity world space (left-handed) using a tracking-space converter:

Conversion notes:
1. Z-axis flip (right-handed → left-handed)
2. Rotate by OVRCameraRig rotation
3. Add OVRCameraRig position offset

Velocities are rotated but not offset.

### Special case: hands
Hand bones are recorded in hand-local space (relative to the hand root), not Unity world.

## Tracking origin type
For BIDS pipeline needs and consistent interpretation, ResXR records the tracking origin type (Meta):
- EyeLevel / FloorLevel / Stage
(From OVRManager / OVRPlugin tracking origin API)

## Why this matters
Your analysis pipeline (and later Motion-BIDS conversion) needs to know:
- Which reference space is being used
- What "forward/up/right" means for each stream
- Whether a stream is Unity world or hand-local
