@echo off
title Proxy Toggle
cls

:: Hostel proxy
set "PROXY=192.168.16.2:3128"

echo =====================================
echo        Proxy Configuration
echo =====================================
echo 1. Enable Proxy
echo 2. Disable Proxy
echo 3. Exit
echo =====================================
choice /c 123 /n /m "Enter your choice: "

if %errorlevel%==1 (
    echo.
    echo [1/5] Enabling Windows system proxy...
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable   /t REG_DWORD /d 1    /f >nul
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer   /t REG_SZ     /d %PROXY% /f >nul
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /t REG_SZ     /d "<local>" /f >nul
    RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters ,1 ,True

    echo [2/5] Setting Git proxy to %PROXY%...
    git config --global http.proxy   http://%PROXY%
    git config --global https.proxy  http://%PROXY%

    echo [3/5] Setting npm proxy to %PROXY%...
    npm config set proxy       http://%PROXY%
    npm config set https-proxy http://%PROXY%

    echo [4/5] Persisting HTTP_PROXY & HTTPS_PROXY...
    setx HTTP_PROXY  "http://%PROXY%" >nul
    setx HTTPS_PROXY "http://%PROXY%" >nul

    echo.
    echo *** Proxy ENABLED ***
    exit /b
)

if %errorlevel%==2 (
    echo.
    echo [1/4] Disabling Windows system proxy...
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f >nul
    reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer   /f >nul 2>nul
    reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /f >nul 2>nul
    RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters ,1 ,True

    echo [2/4] Unsetting Git proxy...
    git config --global --unset http.proxy
    git config --global --unset https.proxy

    echo [3/4] Deleting npm proxy settings...
    npm config delete proxy
    npm config delete https-proxy

    echo [4/4] Clearing HTTP_PROXY & HTTPS_PROXY...
    setx HTTP_PROXY  "" >nul
    setx HTTPS_PROXY "" >nul

    echo.
    echo *** Proxy DISABLED ***
    exit /b
)

if %errorlevel%==3 (
    exit /b
)
