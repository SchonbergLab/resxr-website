---
title: "Performance notes"
---
# Performance notes

## Eye raycasts
- Combined gaze ray is always computed for gameplay when both eyes are confident.
- Per-eye raycasts are optional and controlled by RecordingOptions.includeSeparateEyesGaze.

Raycast counts:
- Separate eyes OFF: 1 raycast (combined)
- Separate eyes ON: up to 3 raycasts (left, right, combined)

In heavy scenes (many colliders), turning off per-eye raycasts can reduce CPU cost.

## Logging frequency
Continuous logging runs at FixedUpdate rate.
Higher rates increase file size and CPU usage.

## Strings in CSV
Some enum/flag fields are written as strings for readability. This increases file size but simplifies inspection and debugging.
A later pipeline can compress/encode as needed.
