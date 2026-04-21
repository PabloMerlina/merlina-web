# ⚡ SETUP AUTOMATIZADO - Sigue esto exactamente

## Paso 1: Crear Proyecto Supabase (Abre navegador)

1. Ve a https://supabase.com y haz **logout** si estás logueado
2. Click **"Start your project"**
3. Sign up con GitHub (usa: `PabloMerlina` / `sepra0587`)
4. Una vez dentro: Click **"New Project"**
5. Llena:
   - **Name:** `merlina`
   - **Database Password:** `sepra0587`
   - **Region:** `us-east-1`
6. Click **"Create new project"** y espera 3 minutos

---

## Paso 2: Obtener Credenciales (En el navegador, Supabase)

1. Una vez creado, ve a **Settings** (ícono de engranaje abajo a la izquierda)
2. Click **"API"**
3. **Copia esto:**
   ```
   Project URL: [COPIA ESTE VALOR]
   ```
4. **Copia también:**
   ```
   anon (public) key: [COPIA ESTE VALOR]
   ```
5. Guarda estos dos valores en un lugar temporal (Notepad, etc.)

---

## Paso 3: Ejecutar Script SQL (En el navegador, Supabase)

1. En Supabase, click **"SQL Editor"** (en el menú lateral)
2. Click **"New query"**
3. Pega esto y click "Run":

```sql
-- Crear tabla leads
CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla email_subscribers
CREATE TABLE email_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Habilitar RLS en leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  WITH CHECK (TRUE);

-- Habilitar RLS en email_subscribers  
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert subscribers"
  ON email_subscribers
  FOR INSERT
  WITH CHECK (TRUE);
```

Si ves checkmarks verdes = ✅ Supabase está listo

---

## Paso 4: Ejecutar Script Automatizado Local

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
cd /Users/pablosepulveda/merlina-web

# Pegando el URL de Supabase (del Paso 2)
export SUPABASE_URL="https://abc123.supabase.co"

# Pegando la anon key (del Paso 2)  
export SUPABASE_ANON_KEY="eyJhbGc..."

# Ejecutar setup script
node -e "
const fs = require('fs');
const envContent = \`NEXT_PUBLIC_SUPABASE_URL=\${process.env.SUPABASE_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY=\${process.env.SUPABASE_ANON_KEY}\`;
fs.writeFileSync('.env.local', envContent);
console.log('✅ .env.local creado!');
console.log('Contenido:', envContent);
"
```

---

## Paso 5: Deploy en Vercel (Abre navegador)

1. Ve a https://vercel.com y haz logout
2. Click **"Sign up"** → Sign up con GitHub (`PabloMerlina` / `sepra0587`)
3. Click **"Create Team"** o continúa
4. Click **"Add New"** → **"Project"**
5. Busca y selecciona **`merlina-web`**
6. Click **"Deploy"** y espera a que termine (2-3 min)

---

## Paso 6: Agregar Variables de Entorno en Vercel

Mientras Vercel compila:

1. En Vercel, ve al proyecto **`merlina-web`**
2. Click **"Settings"** (arriba)
3. Click **"Environment Variables"** (en el menú lateral)
4. Agrega dos variables:

**Variable 1:**
- Name: `NEXT_PUBLIC_SUPABASE_URL`
- Value: `https://abc123.supabase.co` (la del Paso 2)
- Environments: Selecciona todas (Development, Preview, Production)
- Click **"Save"**

**Variable 2:**
- Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: `eyJhbGc...` (la del Paso 2)
- Environments: Selecciona todas
- Click **"Save"**

---

## Paso 7: Re-deploy en Vercel

1. En Vercel, ve a **"Deployments"**
2. Click el ⋮ (menú) del deployment más reciente
3. Click **"Redeploy"**
4. Espera a que termine

---

## ✅ Verificación Final

En terminal:
```bash
cd /Users/pablosepulveda/merlina-web
npm run dev
```

Visita http://localhost:3000:
- [ ] La página carga
- [ ] Llena el formulario (nombre, email, empresa, cargo)
- [ ] Click "Quiero hablar con Merlina"
- [ ] Verifica que ve mensaje de éxito
- [ ] Ve a Supabase → Table Editor → `leads` (debe aparecer tu registro)

---

## 🎉 Done!

Tu MERLINA estará en vivo en: **https://merlina-web.vercel.app**

Todo funciona:
- ✅ Home page con todas las secciones
- ✅ Formularios guardando en Supabase
- ✅ Demo page optimizada
- ✅ Auto-deploy en cada push a GitHub

---

**Tiempo total: ~30 minutos**

Síguelo paso a paso en orden. ¿Necesitas ayuda en alguno?
