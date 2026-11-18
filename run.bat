@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================
echo   ROR2 Save Editor - Local Launcher
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found on your PATH.
    echo Install Node.js from https://nodejs.org/ and try again.
    echo.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo [SETUP] Installing dependencies for the first time...
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed.
        pause
        exit /b 1
    )
    echo.
)

echo [START] Launching development server...
echo Open the URL printed below in your browser.
echo Press Ctrl+C in this window to stop the server.
echo.

call npm run dev

echo.
echo Server stopped.
pause
