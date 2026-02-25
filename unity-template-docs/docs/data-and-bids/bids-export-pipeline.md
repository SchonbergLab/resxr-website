---
title: "BIDS export pipeline"
---
# BIDS export pipeline

ResXR does not generate full BIDS Motion outputs at runtime.
Instead:
- Unity records CSV + session_metadata.json
- A Python analysis pipeline converts those outputs into Motion-BIDS-compliant structure.

Motivation:
- Subject/session IDs may not be known at runtime
- BIDS formatting is easier and safer offline

The metadata includes key fields needed for conversion:
- tracking_origin_type
- reference_frames descriptions
- device model + OS version strings
- schema + units conventions (rotation degrees, etc.)

(Scans TSV and channels JSON are produced later by the pipeline, not by Unity.)
