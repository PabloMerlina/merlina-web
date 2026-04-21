# 🚀 QUICK START - Próximos Pasos

Tu MERLINA web está **98% lista**. Solo falta conectar Supabase y Vercel. Sigue esto:

---

## 📋 TODO (15 minutos)

### 1. Crear cuenta Supabase
- [ ] Ve a https://supabase.com
- [ ] Sign up con GitHub
- [ ] Crea proyecto: Nombre "merlina"
- [ ] Espera 3 minutos a que se inicialice

### 2. Copiar credenciales
- [ ] Settings → API
- [ ] Copia `Project URL` → `.env.local`
- [ ] Copia `anon key` → `.env.local`

### 3. Crear tablas SQL
En Supabase → SQL Editor → Ejecuta esto:

```sql
CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE email_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (TRUE);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert subscribers" ON email_subscribers FOR INSERT WITH CHECK (TRUE);
```

### 4. Crear `.env.local` en raíz del proyecto
```env
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

### 5. Deploy en Vercel
- [ ] Ve a https://vercel.com
- [ ] Login con GitHub
- [ ] "Add New" → "Project"
- [ ] Selecciona `merlina-web`
- [ ] Click "Deploy"
- [ ] Mientras se compila, agrega las 2 variables de entorno (Settings → Environment Variables)

---

## 🧪 Probar Localmente

```bash
npm run dev
```

Visita http://localhost:3000 y:
- [ ] Llena el formulario de "Quiero hablar con Merlina"
- [ ] Verifica que aparece mensaje de éxito
- [ ] Ve a Supabase → Table Editor → leads (debe aparecer tu registro)

---

## ✅ Done!

Una vez que todo funciona:
- Tu sitio estará en: `https://merlina-web.vercel.app`
- Formularios envían data a Supabase
- Cualquier push a main redeploya automáticamente

---

## 📚 Recursos Completos

- [VERCEL_SUPABASE_SETUP.md](./VERCEL_SUPABASE_SETUP.md) — Guía detallada (15 min)
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Referencia técnica
- [GitHub Repo](https://github.com/PabloMerlina/merlina-web) — Código fuente

---

**¿Necesitas ayuda?** Lee VERCEL_SUPABASE_SETUP.md primero.
