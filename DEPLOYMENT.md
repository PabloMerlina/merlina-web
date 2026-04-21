# Guía de Deployment: GitHub → Vercel → Supabase

## 1️⃣ GitHub - Crear Repositorio Remoto

```bash
# Si aún no tienes un repositorio en GitHub, crea uno:
# 1. Ve a https://github.com/new
# 2. Nombre: merlina-web
# 3. Descripción: "Inteligencia artificial para decisiones empresariales"
# 4. Public/Private: Tu preferencia
# 5. Click "Create repository"

# Luego conecta el repositorio local al remoto:
git remote add origin https://github.com/TU_USUARIO/merlina-web.git
git branch -M main
git push -u origin main
```

## 2️⃣ Vercel - Deploy Automático

### Opción A: Deploy via CLI
```bash
npm install -g vercel
vercel login  # Inicia sesión con tu cuenta Vercel
vercel        # Sigue las instrucciones
```

### Opción B: Deploy via Web (Recomendado)
1. Ve a https://vercel.com
2. Login con GitHub
3. Click "New Project"
4. Selecciona tu repositorio `merlina-web`
5. Framework: Next.js (auto-detectado)
6. Click "Deploy"

**Resultado:** Tu sitio estará en vivo en `merlina-web.vercel.app`

### Variables de Entorno en Vercel
En el panel de Vercel:
- Settings → Environment Variables
- Agrega:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3️⃣ Supabase - Base de Datos

### 1. Crear Proyecto en Supabase
1. Ve a https://supabase.com
2. Click "Start your project"
3. Sign up con GitHub (usa tu cuenta)
4. Click "New Project"
5. Nombre: `merlina`
6. Región: Selecciona la más cercana (Latin America si está disponible)
7. Click "Create new project"

### 2. Obtener Credenciales
Una vez creado el proyecto:
- Settings → API
- Copia:
  - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
  - `anon key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Crear Tablas Necesarias

```sql
-- En el Editor SQL de Supabase, ejecuta:

-- Tabla: leads (para formularios de contacto)
CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: casos_uso (para casos de éxito)
CREATE TABLE casos_uso (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  vertical TEXT NOT NULL,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  resultado TEXT,
  cliente TEXT,
  impacto TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: email_subscribers (para newsletter)
CREATE TABLE email_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Habilitar RLS (Row Level Security)

```sql
-- Permitir lectura pública
ALTER TABLE casos_uso ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Casos uso readable by anyone"
  ON casos_uso
  FOR SELECT
  USING (TRUE);

-- Permitir insert en leads sin autenticación
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  WITH CHECK (TRUE);
```

## 4️⃣ Crear Archivo .env.local

En tu máquina local, crea `.merlina-web/.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

## 5️⃣ Instalar Cliente Supabase (Opcional)

Si quieres usar Supabase desde tu app:

```bash
npm install @supabase/supabase-js
```

Luego crea `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

## 6️⃣ Flujo de Deploy Automático

Una vez configurado:

```
1. Haces cambios locales
2. git add . && git commit -m "mensaje"
3. git push origin main
4. ↓
5. Vercel detecta push automáticamente
6. Compila tu proyecto
7. Deploy en vivo en 1-2 minutos
8. ✅ Tu sitio actualizado
```

## 📋 Checklist

- [ ] Crear repositorio en GitHub
- [ ] Conectar repo local a GitHub
- [ ] Login en Vercel
- [ ] Deploy proyecto en Vercel
- [ ] Crear proyecto en Supabase
- [ ] Agregar variables de entorno a Vercel
- [ ] Crear tablas SQL en Supabase
- [ ] Habilitar RLS policies
- [ ] Crear `.env.local` local
- [ ] Push cambios y verificar deploy

---

**URL del Sitio:** https://merlina-web.vercel.app

¡Tu Merlina estará lista para el mundo! 🚀
