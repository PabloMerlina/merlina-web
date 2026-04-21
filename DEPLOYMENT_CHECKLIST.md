# ✅ Deployment Checklist

Usa esto para asegurar que todo esté configurado correctamente.

---

## 🔧 Local Setup

- [ ] Node.js instalado (`node --version`)
- [ ] Repositorio clonado
- [ ] `npm install` ejecutado
- [ ] `.env.local` creado con credenciales Supabase
- [ ] `npm run dev` funciona sin errores
- [ ] http://localhost:3000 carga correctamente

---

## 🌍 Supabase Setup

- [ ] Proyecto Supabase creado
- [ ] Nombre del proyecto: "merlina"
- [ ] URL copiada en `.env.local`
- [ ] Anon key copiada en `.env.local`
- [ ] Tabla `leads` creada
- [ ] Tabla `email_subscribers` creada
- [ ] RLS policies habilitadas en ambas tablas

**Verificar en Supabase:**
```bash
# Cada tabla debe permitir INSERT sin autenticación
SELECT * FROM leads LIMIT 1;  # Si vacío, está bien
SELECT * FROM email_subscribers LIMIT 1;  # Si vacío, está bien
```

---

## 🚀 Vercel Setup

- [ ] Proyecto importado en Vercel
- [ ] Framework detectado como Next.js
- [ ] Primera compilación exitosa
- [ ] Variables de entorno agregadas:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Re-deployment ejecutado
- [ ] URL pública accesible: `https://merlina-web.vercel.app`

---

## 🧪 Testing (Local)

Ejecuta en http://localhost:3000:

### Home Page
- [ ] Hero section carga con animaciones
- [ ] Todas las secciones visibles (Hero, Problem, Features, etc.)
- [ ] Navbar está sticky
- [ ] Footer visible con newsletter signup
- [ ] Formulario de contacto "CTAFinal" visible al final

### Forms
- [ ] Llenar formulario de contacto (nombre, email, empresa, cargo)
- [ ] Mensaje de éxito aparece después de enviar
- [ ] Verificar en Supabase → Table Editor → `leads` que aparece el registro

### Newsletter
- [ ] En footer, completar email
- [ ] Click "Suscribir"
- [ ] Mensaje de éxito aparece
- [ ] Verificar en Supabase → `email_subscribers` que aparece el email

### Demo Page
- [ ] Visitar http://localhost:3000/demo
- [ ] Página carga sin navbar (limpia)
- [ ] Formulario funciona igual que en home

---

## 🧪 Testing (Vercel)

Ejecuta en https://merlina-web.vercel.app:

- [ ] Home page carga sin errores
- [ ] Formularios funcionan igual que en local
- [ ] Datos se guardan en Supabase
- [ ] Demo page accesible
- [ ] Animations/Framer Motion funciona
- [ ] No hay console errors (F12 → Console)

---

## 📱 Responsive Testing

Verifica en todos los tamaños:

- [ ] Mobile (375px) - Todo legible
- [ ] Tablet (768px) - Layout se adapta
- [ ] Desktop (1920px) - Espacio blanco bien balanceado
- [ ] Formularios se ven bien en todos los tamaños

---

## 🔐 Security Checklist

- [ ] `.env.local` está en `.gitignore`
- [ ] Las keys de Supabase son públicas (OK, son anon keys)
- [ ] No hay secrets hardcodeados en el código
- [ ] RLS policies están habilitadas (previene acceso directo a datos)
- [ ] CORS está configurado en Supabase si es necesario

---

## 📊 Monitoring

Después del deploy:

- [ ] Vercel Deployments tab muestra último deploy exitoso
- [ ] No hay deploy errors en Vercel logs
- [ ] Supabase Dashboard muestra actividad (queries exitosas)
- [ ] Ningún error en Vercel Analytics (si está habilitado)

---

## 🎉 Final Status

- [ ] Todas las secciones anteriores completadas
- [ ] Sitio vivo en: `https://merlina-web.vercel.app`
- [ ] Formularios funcionales
- [ ] Datos guardándose en Supabase
- [ ] Auto-deploy configurado (git push → Vercel deploy automático)

---

## 📞 Next Steps (Post-Launch)

- [ ] Crear página /admin para ver leads
- [ ] Configurar email transaccional (SendGrid, Resend, etc.)
- [ ] Agregar Google Analytics
- [ ] Crear landing pages por vertical (Comercial, Ops, Supply, Finanzas)
- [ ] Agregar blog SEO en /blog

---

**Total time**: ~30 minutos

**Questions?** Check VERCEL_SUPABASE_SETUP.md for detailed walkthrough.
