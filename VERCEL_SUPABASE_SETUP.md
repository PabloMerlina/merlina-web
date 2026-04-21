# 🚀 Guía Rápida: Vercel + Supabase Setup

Este documento te guía a través del setup de Vercel y Supabase en 15 minutos.

---

## Paso 1️⃣: Configurar Supabase (5 minutos)

### 1.1 Crear Proyecto Supabase

1. Ve a **https://supabase.com** y haz click en "Start your project"
2. Sign up con GitHub (usa tu cuenta)
3. Click "New Project"
4. **Nombre**: `merlina`
5. **Región**: Selecciona la más cercana (Latin America si disponible, sino us-east-1)
6. **Database password**: Genera una contraseña fuerte (guárdala, la necesitarás)
7. Click "Create new project"

*Espera 2-3 minutos a que se cree el proyecto...*

### 1.2 Obtener Credenciales

Una vez creado:
1. Ve a **Settings → API** (en el menú lateral izquierdo)
2. Bajo "Project API keys" encontrarás:
   - **Project URL** → Copia esto en `NEXT_PUBLIC_SUPABASE_URL`
   - **anon (public)** key → Copia esto en `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Ejemplo:
```
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

### 1.3 Crear Tablas SQL

1. En Supabase, ve a **SQL Editor** (en el menú lateral)
2. Click **New query**
3. Pega esto y ejecuta:

```sql
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

-- Tabla: email_subscribers (para newsletter)
CREATE TABLE email_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 1.4 Habilitar RLS (Row Level Security)

Ejecuta en SQL Editor:

```sql
-- Permitir insert en leads sin autenticación
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  WITH CHECK (TRUE);

-- Permitir insert en email_subscribers sin autenticación
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert email_subscribers"
  ON email_subscribers
  FOR INSERT
  WITH CHECK (TRUE);
```

✅ **Supabase está listo!**

---

## Paso 2️⃣: Configurar .env.local (2 minutos)

En la raíz del proyecto, crea o edita `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

Reemplaza los valores con los que copiaste de Supabase.

**⚠️ IMPORTANTE**: `.env.local` está en `.gitignore` y NO se pushea a GitHub.

---

## Paso 3️⃣: Deploy en Vercel (5 minutos)

### 3.1 Opción A: Deploy via Web (Recomendado)

1. Ve a **https://vercel.com** y login con GitHub
2. Click **"Add New..."** → **"Project"**
3. Selecciona el repositorio `merlina-web`
4. Framework será detectado como **Next.js** (automático)
5. Click **"Deploy"**

*Vercel empezará a compilar tu proyecto...*

### 3.2 Agregar Variables de Entorno

Mientras Vercel está compilando:

1. En Vercel, ve a tu proyecto → **Settings** → **Environment Variables**
2. Agrega dos variables:

| Nombre | Valor |
|--------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://abc123.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` |

3. Para cada variable, selecciona:
   - **Environments**: Development, Preview, Production (todas)
   - Click **"Save"**

### 3.3 Re-deploy

1. Ve a **Deployments** en Vercel
2. Click el **⋮ (menú)** del deployment
3. Click **"Redeploy"**

*Vercel re-compilará con las variables de entorno.*

✅ **Deploy completado!** Tu sitio estará en vivo en `https://merlina-web.vercel.app`

---

## Paso 4️⃣: Verificar que Todo Funciona (3 minutos)

### Localmente
```bash
npm run dev
```

Visita **http://localhost:3000** y verifica que:
- [ ] La página carga sin errores
- [ ] Las secciones se ven bien
- [ ] No hay errores en la consola del navegador

### En Vercel
1. Visita tu URL de Vercel: `https://merlina-web.vercel.app`
2. Verifica que:
   - [ ] La página carga sin errores
   - [ ] Las secciones animadas funcionan
   - [ ] No hay errores en la consola del navegador

---

## 🔧 Troubleshooting

### Error: "Supabase URL not found"
- **Causa**: Las variables de entorno no están en .env.local o no son correctas
- **Solución**: Verifica que `.env.local` existe y tiene los valores correctos de Supabase

### Error: "Anonymous key invalid"
- **Causa**: Copiaste mal la clave o usaste la "service_role" en lugar de "anon"
- **Solución**: Ve a Supabase → Settings → API y usa la clave "anon (public)"

### Deploy en Vercel dice "Build failed"
- **Causa**: Puede ser falta de variables o error en el código
- **Solución**: 
  1. Ve a Vercel → Deployments → Click el deployment fallido
  2. Ve a **Build logs** y lee el error
  3. Típicamente falta añadir las variables de entorno

### Supabase dice "RLS policy not found"
- **Causa**: Las policies no se ejecutaron correctamente
- **Solución**: Ve a Supabase → SQL Editor, copia el query de RLS y ejecuta manualmente

---

## ✅ Checklist Final

- [ ] Supabase proyecto creado
- [ ] Credenciales (URL + Anon Key) copiadas
- [ ] Tablas SQL creadas
- [ ] RLS policies habilitadas
- [ ] `.env.local` creado localmente
- [ ] Variables de entorno agregadas a Vercel
- [ ] Proyecto deployado en Vercel
- [ ] Verificado que funciona en localhost:3000
- [ ] Verificado que funciona en vercel.app URL

---

## 🎉 Siguientes Pasos

Una vez que todo está funcionando:

1. **Crear formularios** que envíen datos a Supabase
2. **Agregar testimonios** desde Supabase
3. **Crear admin panel** para ver leads y analytics
4. **Configurar email** para notificaciones de nuevos leads

¡Tu MERLINA está lista para el mundo! 🚀
