@echo off
REM AirGo - Run Cleartrip in Visible Chrome Mode (One Day T+1)
echo ==========================================================
echo    AirGo - Cleartrip Live Chrome Scraper (Visible Mode)
echo ==========================================================

if exist "%~dp0..\.venv\Scripts\python.exe" (
    set PYTHON_CMD="%~dp0..\.venv\Scripts\python.exe"
) else (
    set PYTHON_CMD=python
)

%PYTHON_CMD% "%~dp0run_cleartrip_harvest.py" %*

pause
