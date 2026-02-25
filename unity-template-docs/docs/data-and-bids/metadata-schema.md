---
title: "Metadata schema"
---
# Metadata schema

ResXR writes one JSON per session:
- `session_metadata.json`

This file is designed to support later Motion-BIDS export.
ResXR does NOT write runtime BIDS files (like *_scans.tsv or *_channels.json).
A Python pipeline generates BIDS outputs later.

## Contains (high-level)
- session_id, utc_start_iso8601
- device_utc_offset (DST-aware at session start)
- unity_version, platform
- rotation_euler_order = ZXY (Unity default Transform.eulerAngles order)
- enabled feature flags (eyes, face, hands, controllers)
- schema rev + provenance
- manufacturers_model_name_raw (SystemInfo.deviceModel)
- software_versions_raw (SystemInfo.operatingSystem)
- device_serial_number (empty) + note explaining why
- tracking_origin_type (Meta: EyeLevel / FloorLevel / Stage)
- reference_frames:
  - UnityWorld and HandLocal (RotationRule, RotationOrder, SpatialAxes)
- build_info_available
  - if true: build_id, git_commit, utc_build_iso8601 are set from build_info.json
  - if false: those fields are empty (no placeholders)
