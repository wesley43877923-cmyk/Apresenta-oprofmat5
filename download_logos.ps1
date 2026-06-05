# Script PowerShell para download dos logotipos acadêmicos oficiais

$assetsDir = Join-Path $PSScriptRoot "assets"
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir | Out-Null
}

Write-Host "Baixando logotipos oficiais..." -ForegroundColor Green

# 1. Download do logo da UERJ do Wikimedia Commons
$uerjUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_UERJ.svg"
$uerjPath = Join-Path $assetsDir "logo_uerj.svg"
try {
    Write-Host "Baixando logo da UERJ..."
    Invoke-WebRequest -Uri $uerjUrl -OutFile $uerjPath -TimeoutSec 15 -ErrorAction Stop
    Write-Host "Logo da UERJ baixado com sucesso!" -ForegroundColor Cyan
} catch {
    Write-Warning "Falha ao baixar logo UERJ de Wikimedia. Tentando rota alternativa..."
    try {
        # Tenta URL alternativa
        Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/4/4e/Marca_UERJ.svg" -OutFile $uerjPath -TimeoutSec 15 -ErrorAction Stop
        Write-Host "Logo da UERJ (alternativo) baixado com sucesso!" -ForegroundColor Cyan
    } catch {
        Write-Error "Não foi possível baixar o logo da UERJ."
    }
}

# 2. Download do logo da CAPES (Buscando o link da página do Commons de forma dinâmica)
$capesPath = Join-Path $assetsDir "logo_capes.svg"
try {
    Write-Host "Baixando logo da CAPES dinamicamente..."
    $commonsUrl = "https://commons.wikimedia.org/wiki/File:Identidade_Visual_CAPES.svg"
    $response = Invoke-WebRequest -Uri $commonsUrl -UseBasicParsing -TimeoutSec 15
    # Regex para capturar a URL direta do arquivo SVG
    if ($response.Content -match 'href="(https://upload\.wikimedia\.org/wikipedia/commons/[^"]+?/Identidade_Visual_CAPES\.svg)"') {
        $directUrl = $Matches[1]
        Write-Host "URL direta encontrada: $directUrl"
        Invoke-WebRequest -Uri $directUrl -OutFile $capesPath -TimeoutSec 15 -ErrorAction Stop
        Write-Host "Logo da CAPES baixado com sucesso!" -ForegroundColor Cyan
    } else {
        # Fallback para o hash provável (e/e5/Identidade_Visual_CAPES.svg ou similar)
        # Vamos tentar o link provável:
        $fallbackUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Identidade_Visual_CAPES.svg"
        Write-Host "Tentando URL padrão: $fallbackUrl"
        Invoke-WebRequest -Uri $fallbackUrl -OutFile $capesPath -TimeoutSec 15 -ErrorAction Stop
        Write-Host "Logo da CAPES (fallback) baixado com sucesso!" -ForegroundColor Cyan
    }
} catch {
    Write-Warning "Falha ao baixar logo CAPES de Wikimedia. Tentando outra URL padrão..."
    try {
        Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/b/bc/Identidade_Visual_CAPES.svg" -OutFile $capesPath -TimeoutSec 15 -ErrorAction Stop
        Write-Host "Logo da CAPES (alternativo) baixado com sucesso!" -ForegroundColor Cyan
    } catch {
        Write-Error "Não foi possível baixar o logo da CAPES."
    }
}

# 3. Download do logo do PROFMAT
$profmatUrl = "https://sbm.org.br/profmat/wp-content/uploads/sites/4/sites/4/2021/10/cropped-logo-profmat.png"
$profmatPath = Join-Path $assetsDir "logo_profmat.png"
try {
    Write-Host "Baixando logo do PROFMAT..."
    Invoke-WebRequest -Uri $profmatUrl -OutFile $profmatPath -TimeoutSec 15 -ErrorAction Stop
    Write-Host "Logo do PROFMAT baixado com sucesso!" -ForegroundColor Cyan
} catch {
    Write-Warning "Falha ao baixar logo do PROFMAT da SBM. Usando fallback..."
    # Tenta um logo do PROFMAT alternativo (ex. da UFG ou Univasf)
    try {
        Invoke-WebRequest -Uri "https://www.univasf.edu.br/profmat/imagens/cropped-logo-profmat.png" -OutFile $profmatPath -TimeoutSec 15 -ErrorAction Stop
        Write-Host "Logo do PROFMAT (alternativo) baixado com sucesso!" -ForegroundColor Cyan
    } catch {
        Write-Error "Não foi possível baixar o logo do PROFMAT."
    }
}

Write-Host "Processo concluído." -ForegroundColor Green
