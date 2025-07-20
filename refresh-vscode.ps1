# Script pour forcer VS Code à rafraîchir son cache Git
Write-Host "Nettoyage du cache VS Code..." -ForegroundColor Yellow

# Arrêter tous les processus VS Code
Write-Host "Arret des processus VS Code..." -ForegroundColor Cyan
Get-Process -Name "code" -ErrorAction SilentlyContinue | Stop-Process -Force

# Nettoyer le cache Git de VS Code
Write-Host "Nettoyage du cache Git..." -ForegroundColor Cyan
if (Test-Path ".git\index.lock") {
    Remove-Item ".git\index.lock" -Force
    Write-Host "Fichier index.lock supprime" -ForegroundColor Green
}

# Forcer Git à rafraîchir son index
Write-Host "Rafraichissement de l'index Git..." -ForegroundColor Cyan
git update-index --refresh

# Afficher le statut Git réel
Write-Host "Statut Git actuel:" -ForegroundColor Green
$count = (git status --porcelain | Measure-Object -Line).Lines
Write-Host "$count fichiers non suivis" -ForegroundColor White

# Redémarrer VS Code
Write-Host "Redemarrage de VS Code..." -ForegroundColor Yellow
Start-Process "code" -ArgumentList "."

Write-Host "Nettoyage termine ! VS Code devrait maintenant afficher le bon nombre de fichiers." -ForegroundColor Green 