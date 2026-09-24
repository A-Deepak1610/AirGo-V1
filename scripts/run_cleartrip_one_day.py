"""
AirGo - Cleartrip Single Day Airfare Scraper Runner.
Runs live Cleartrip scrape for one day (T+1 default or custom advance purchase horizon).

Usage:
    python scripts/run_cleartrip_one_day.py
    python scripts/run_cleartrip_one_day.py --route DEL-BLR
    python scripts/run_cleartrip_one_day.py --route BOM-DEL --day 1 --headless
"""

import sys
import argparse
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from airgo.scrapers.cleartrip.scraper import run_cleartrip_scrape


def main():
    parser = argparse.ArgumentParser(description="AirGo Cleartrip Single Day Scraper")
    parser.add_argument("--route", type=str, default="BOM-DEL", help="Target route e.g. BOM-DEL (default: BOM-DEL)")
    parser.add_argument("--day", type=int, default=1, help="Advance purchase day (default: 1 for tomorrow / T+1)")
    parser.add_argument("--headless", action="store_true", help="Run headless Chrome (default: visible interactive window)")
    parser.add_argument("--pause", type=int, default=15, help="Seconds to keep browser open after scrape in visible mode (default: 15)")
    args = parser.parse_args()

    print(f"\n[AirGo] Starting Cleartrip single-day scrape for route {args.route} (Day T+{args.day})...")
    run_cleartrip_scrape(
        route=args.route,
        horizons=[args.day],
        headless=args.headless,
        pause_at_end=args.pause
    )


if __name__ == "__main__":
    main()
