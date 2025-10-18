# Permite enviar cookies via requisições cross-origin
CORS_ALLOW_CREDENTIALS = True

# Configuração de cookies para cross-site
SESSION_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SECURE = True    # HTTPS obrigatório

CSRF_COOKIE_SAMESITE = 'None'
CSRF_COOKIE_SECURE = True

# Domínios autorizados a acessar o backend
CORS_ALLOWED_ORIGINS = [
    'https://localhost:3000',
    'https://localhost:3001',
    'https://my-website-react-three.vercel.app',
    'https://maxdias21.pythonanywhere.com',
]

CSRF_TRUSTED_ORIGINS = [
    'https://localhost:3000',
    'https://localhost:3001',
    'https://my-website-react-three.vercel.app',
    'https://maxdias21.pythonanywhere.com',
]
