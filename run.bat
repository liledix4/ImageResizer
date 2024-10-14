SET srcfolder="source-images"
SET destfolder="offline"
RD /S /Q %destfolder%
node main.mjs --s %srcfolder% --d %destfolder% --fd png
node main.mjs --s %srcfolder% --d %destfolder% --q 38 --cs "4:2:0" --h 400 --w 400 --x "_thumb"