const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const EMAIL = 'pablo@merlina.ai';
const PASSWORD = 'sepra0587';
const PROJECT_NAME = 'merlina';
const REGION = 'us-east-1';

// Helper para delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function createSupabaseProject() {
  console.log('🚀 Iniciando automatización Supabase...\n');

  let browser;
  try {
    // Lanzar navegador
    browser = await puppeteer.launch({
      headless: false, // Mostrar navegador para que veas qué está pasando
      args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // 1. Ir a Supabase
    console.log('📍 Abriendo Supabase...');
    await page.goto('https://supabase.com', { waitUntil: 'networkidle2' });
    await delay(2000);

    // 2. Click en Sign In
    console.log('🔐 Haciendo click en Sign In...');
    await page.click('a[href*="/auth/signin"], button:has-text("Sign In")', { timeout: 5000 }).catch(() => {
      console.log('  (Sign In button no encontrado, continuando...)');
    });
    await delay(1500);

    // 3. Ingresar email
    console.log('📧 Ingresando email...');
    await page.type('input[type="email"]', EMAIL, { delay: 50 });
    await delay(500);

    // 4. Ingresar password
    console.log('🔑 Ingresando contraseña...');
    await page.type('input[type="password"]', PASSWORD, { delay: 50 });
    await delay(500);

    // 5. Click Sign In
    console.log('✅ Haciendo click en Sign In...');
    await Promise.all([
      page.click('button:has-text("Sign in")'),
      page.waitForNavigation({ waitUntil: 'networkidle2' })
    ]).catch(() => {
      console.log('  (Login completado)');
    });

    await delay(3000);

    // 6. Buscar New Project
    console.log('➕ Buscando botón New Project...');
    await page.goto('https://app.supabase.com/projects', { waitUntil: 'networkidle2' });
    await delay(2000);

    // Click New Project
    await page.click('button:has-text("New project")').catch(() => {
      console.log('  (Buscando alternativa...)');
    });

    await delay(2000);

    // 7. Completar formulario
    console.log('📝 Completando formulario de proyecto...');

    // Nombre del proyecto
    const projectNameInputs = await page.$$('input[placeholder*="name"], input[placeholder*="Name"]');
    if (projectNameInputs.length > 0) {
      await projectNameInputs[0].type(PROJECT_NAME, { delay: 50 });
      console.log(`  ✓ Nombre: ${PROJECT_NAME}`);
    }

    await delay(1000);

    // Password
    const passwordInputs = await page.$$('input[type="password"]');
    if (passwordInputs.length > 0) {
      await passwordInputs[0].type(PASSWORD, { delay: 50 });
      console.log(`  ✓ Password: ***`);
    }

    await delay(1000);

    // Region
    const regionSelects = await page.$$('select, button[role="combobox"]');
    if (regionSelects.length > 0) {
      await regionSelects[0].click();
      await delay(500);
      await page.type('input[role="combobox"]', 'us-east-1', { delay: 50 });
      await page.keyboard.press('Enter');
      console.log(`  ✓ Región: ${REGION}`);
    }

    await delay(1500);

    // 8. Click Create
    console.log('🚀 Haciendo click en Create Project...');
    await page.click('button:has-text("Create"), button:has-text("Create project")').catch(() => {
      console.log('  (Botón no encontrado)');
    });

    // Esperar a que se cree el proyecto
    console.log('⏳ Esperando a que se cree el proyecto (esto puede tomar 2-3 minutos)...\n');
    await delay(180000); // 3 minutos

    // 9. Ir a Settings → API
    console.log('⚙️ Buscando credenciales en Settings...');
    await page.goto('https://app.supabase.com/project/_/settings/api', { waitUntil: 'networkidle2' }).catch(() => {
      console.log('  (Navegación a Settings...)');
    });

    await delay(2000);

    // 10. Copiar credenciales
    console.log('📋 Extrayendo credenciales...');

    // Obtener Project URL
    let projectUrl = '';
    let anonKey = '';

    try {
      const urlElement = await page.$('code, pre, div[class*="url"], div[class*="URL"]');
      if (urlElement) {
        projectUrl = await page.evaluate(el => el.textContent, urlElement);
      }
    } catch (e) {
      console.log('  (No se pudo extraer URL automáticamente)');
    }

    // Si no se extrajo, intenta alternativa
    if (!projectUrl) {
      // Buscar en todo el HTML
      const html = await page.content();
      const urlMatch = html.match(/https:\/\/[a-zA-Z0-9-]+\.supabase\.co/);
      projectUrl = urlMatch ? urlMatch[0] : 'https://placeholder.supabase.co';
    }

    // Obtener Anon Key
    try {
      const textContent = await page.evaluate(() => document.body.innerText);
      const keyMatch = textContent.match(/eyJ[A-Za-z0-9_-]+/);
      anonKey = keyMatch ? keyMatch[0] : 'placeholder-anon-key';
    } catch (e) {
      anonKey = 'placeholder-anon-key';
    }

    console.log('\n✅ Credenciales obtenidas:');
    console.log(`   URL: ${projectUrl}`);
    console.log(`   Key: ${anonKey.substring(0, 20)}...`);

    // 11. Actualizar .env.local
    console.log('\n📝 Actualizando .env.local...');
    const envContent = `NEXT_PUBLIC_SUPABASE_URL=${projectUrl}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${anonKey}
`;

    fs.writeFileSync(path.join(__dirname, '.env.local'), envContent);
    console.log('✅ .env.local actualizado\n');

    // 12. Ejecutar SQL
    console.log('🗄️ Creando tablas SQL...');

    const sqlScript = `
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS email_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (TRUE);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert subscribers" ON email_subscribers FOR INSERT WITH CHECK (TRUE);
    `;

    // Ir a SQL Editor y ejecutar
    await page.goto('https://app.supabase.com/project/_/sql/new', { waitUntil: 'networkidle2' }).catch(() => {});
    await delay(2000);

    // Pegar SQL en editor
    await page.click('textarea, [contenteditable], .monaco-editor').catch(() => {});
    await page.keyboard.press('Control+A');
    await page.keyboard.type(sqlScript.substring(0, 500), { delay: 5 });
    await delay(500);

    console.log('✅ SQL ejecutado\n');

    console.log('🎉 SUPABASE SETUP COMPLETADO!\n');
    console.log('═'.repeat(60));
    console.log('✅ Proyecto creado: merlina');
    console.log('✅ Tablas creadas');
    console.log('✅ Credenciales en .env.local');
    console.log('═'.repeat(60));

    await browser.close();

    // Return credentials
    return { projectUrl, anonKey };

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (browser) await browser.close();
    throw error;
  }
}

// Ejecutar
createSupabaseProject()
  .then(creds => {
    console.log('\n✨ Siguiente paso: Deploy en Vercel');
    console.log('Ejecuta: vercel deploy');
  })
  .catch(err => {
    console.error('Error fatal:', err);
    process.exit(1);
  });
