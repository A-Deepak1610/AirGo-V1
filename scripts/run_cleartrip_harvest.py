"""
AirGo - Cleartrip Live Visible Scraper Harvest Runner.
Launches live Google Chrome in visible mode on screen to scrape flight prices and breakdowns.

Usage:
    python scripts/run_cleartrip_harvest.py
    python scripts/run_cleartrip_harvest.py --route BOM-DEL --horizons 1
    python scripts/run_cleartrip_harvest.py --route DEL-BLR --horizons 1,7 --pause 20
"""

import sys
import argparse
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from airgo.scrapers.cleartrip.scraper import run_cleartrip_scrape


def main():
    parser = argparse.ArgumentParser(description="AirGo Cleartrip Visible Chrome Live Scraper")
    parser.add_argument("--route", type=str, default="BOM-DEL", help="Flight route code e.g. BOM-DEL (default: BOM-DEL)")
    parser.add_argument("--horizons", type=str, default="1", help="Advance purchase days e.g. 1 or 1,7 (default: 1 for tomorrow)")
    parser.add_argument("--pause", type=int, default=15, help="Seconds to keep Chrome open on screen after scrape (default: 15)")
    parser.add_argument("--headless", action="store_true", help="Run without opening window (default is FALSE, visible Chrome)")
    args = parser.parse_args()

    horizon_list = [int(x.strip()) for x in args.horizons.split(",") if x.strip().isdigit()]
    if not horizon_list:
        horizon_list = [1]

    print("=" * 70)
    print("   AirGo - Cleartrip Live Scraper (Visible Chrome Mode)")
    print("=" * 70)
    print(f" Route    : {args.route}")
    print(f" Horizons : {[f'T+{h}' for h in horizon_list]}")
    print(f" Visible  : {not args.headless} (Live Chrome window will appear on screen)")
    print(f" Pause    : {args.pause}s after scrape")
    print("=" * 70)

    run_cleartrip_scrape(
        route=args.route,
        horizons=horizon_list,
        headless=args.headless,
        pause_at_end=args.pause
    )


if __name__ == "__main__":
    main()
