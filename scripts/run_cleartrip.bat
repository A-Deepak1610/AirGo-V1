@echo off
REM AirGo - Cleartrip Scraper Runner (Windows Batch)
REM Usage:
REM   scripts\run_cleartrip.bat
REM   scripts\run_cleartrip.bat BOM-DEL 1,7 --visible

setlocal enabledelayedexpansion

set ROUTE=%~1
if "%ROUTE%"=="" set ROUTE=BOM-DEL

set HORIZONS=%~2
if "%HORIZONS%"=="" set HORIZONS=1,7,15,30,45

set EXTRA_ARGS=%~3 %~4 %~5

echo ==========================================================
echo    AirGo - Cleartrip Live Airfare Scraper Runner
echo ==========================================================
echo Route: %ROUTE%
echo Horizons: %HORIZONS%
echo Engine: Google Chrome (Never Edge)
echo ==========================================================

REM Check virtualenv
if exist "%~dp0..\.venv\Scripts\python.exe" (
    set PYTHON_CMD="%~dp0..\.venv\Scripts\python.exe"
) else (
    set PYTHON_CMD=python
)

%PYTHON_CMD% "%~dp0scrape_cleartrip.py" --route %ROUTE% --horizons %HORIZONS% %EXTRA_ARGS%

pause
