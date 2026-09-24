# AirGo - Cleartrip Scraper Runner (PowerShell)
# Usage:
#   .\scripts\run_cleartrip.ps1
#   .\scripts\run_cleartrip.ps1 -Route "DEL-BLR" -Horizons "1,7" -Visible
#   .\scripts\run_cleartrip.ps1 -Route "BOM-DEL" -Horizons "7" -Visible -Pause 20

param (
    [string]$Route = "BOM-DEL",
    [string]$Horizons = "1,7,15,30,45",
    [switch]$OneDay = $false,
    [switch]$Visible = $false,
    [int]$Pause = 15
)

if ($OneDay) {
    $Horizons = "1"
}

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   AirGo - Cleartrip Live Airfare Scraper Runner" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Project Root : $ProjectRoot"
Write-Host "Target Route : $Route"
Write-Host "Horizons     : $Horizons (T+ days)"
Write-Host "Visible Mode : $(if ($Visible) { 'YES (Interactive Chrome)' } else { 'NO (Headless)' })"
Write-Host "Pause Time   : $Pause s"
Write-Host "Engine       : Google Chrome (Never Edge)"
Write-Host "==========================================================" -ForegroundColor Cyan

# Check for virtualenv
$VenvPython = Join-Path $ProjectRoot ".venv\Scripts\python.exe"
if (Test-Path $VenvPython) {
    $PythonCmd = $VenvPython
    Write-Host "[Env] Using Python virtualenv: $VenvPython" -ForegroundColor Green
} else {
    $PythonCmd = "python"
    Write-Host "[Env] Using system Python" -ForegroundColor Gray
}

# Construct command arguments
$RunnerScript = Join-Path $ProjectRoot "scripts\scrape_cleartrip.py"
$ArgsList = @(
    $RunnerScript,
    "--route", $Route,
    "--horizons", $Horizons,
    "--pause", $Pause
)

if ($Visible) {
    $ArgsList += "--visible"
}

Write-Host "`n[Execute] Launching Cleartrip Scraper..." -ForegroundColor Green
& $PythonCmd $ArgsList

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[Success] Cleartrip scraper run completed successfully!" -ForegroundColor Green
    Write-Host "[Evidence] Check the timestamped run folder under 'runs/' for DOM snapshots, high-res screenshots, and run_summary.json." -ForegroundColor Cyan
} else {
    Write-Host "`n[Warning] Scraper exited with exit code $LASTEXITCODE. Inspect terminal logs above for details." -ForegroundColor Red
}
