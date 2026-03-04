@echo off
cd /d "g:\ECOM OFFERS ZIPS\pest gaurd"
git add .
git commit -m "update %date% %time%"
git push
echo.
echo Deploy complete! Files uploading to hosting...
pause
